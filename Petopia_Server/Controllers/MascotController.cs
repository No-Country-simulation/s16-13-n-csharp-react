using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NpgsqlTypes;
using Petopia_Server.Data;
using Petopia_Server.Models;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;

namespace Petopia_Server.Controllers;

[Authorize]
[Route("api/[controller]")]
[ApiController]
public class MascotController(ApiDbContext context) : ControllerBase
{
    private readonly ApiDbContext _context = context;

    // Endpoint para obtener todas las mascotas del usuario autenticado
    [HttpGet("GetMascotas")]
    public async Task<ActionResult<IEnumerable<MascotRetrieveDTO>>> GetMascots()
    {
        string userIdString = User.FindFirstValue("userId");

        if (string.IsNullOrEmpty(userIdString) || !int.TryParse(userIdString, out int userId))
        {
            return Unauthorized("El reclamo del ID de usuario está faltante o es inválido.");
        }

        var mascots = await _context.Mascots
            .Where(m => m.UserId == userId)
            .Select(m => new MascotRetrieveDTO
            {
                Id = m.Id,
                MascotName = m.MascotName,
                Species = m.Species,
                Breed = m.Breed,
                Sex = m.Sex,
                DateOfBirth = m.DateOfBirth,
                MascotPhoto = m.MascotPhoto
            })
            .ToListAsync();

        return Ok(mascots);
    }

    // Endpoint para obtener una mascota específica por el ID
    [HttpGet("GetSeleccionarMascotaPorID/{id}")]
    public async Task<ActionResult<MascotRetrieveDTO>> GetMascot(int id)
    {
        string userIdString = User.FindFirstValue("userId");

        if (string.IsNullOrEmpty(userIdString) || !int.TryParse(userIdString, out int userId))
        {
            return Unauthorized("El reclamo del ID de usuario está faltante o es inválido.");
        }

        var mascot = await _context.Mascots
            .Where(m => m.Id == id && m.UserId == userId)
            .Select(m => new MascotRetrieveDTO
            {
                Id = m.Id,
                MascotName = m.MascotName,
                Species = m.Species,
                Breed = m.Breed,
                Sex = m.Sex,
                DateOfBirth = m.DateOfBirth,
                MascotPhoto = m.MascotPhoto
            })
            .FirstOrDefaultAsync();

        if (mascot == null)
        {
            return NotFound();
        }

        return Ok(mascot);
    }

    // Endpoint para agregar una nueva mascota
    [HttpPost("PostNuevaMascota")]
    public async Task<IActionResult> PostMascot([FromBody] MascotCreateDTO mascotDto)
    {
        string userIdString = User.FindFirstValue("userId");

        if (string.IsNullOrEmpty(userIdString) || !int.TryParse(userIdString, out int userId))
        {
            return Unauthorized("El reclamo del ID de usuario está faltante o es inválido.");
        }

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        // Chequea si una mascota con todos los mismos atributos ya existe
        var existingMascot = await _context.Mascots
            .Where(m => m.UserId == userId
                     && m.MascotName == mascotDto.MascotName
                     && m.Species == mascotDto.Species
                     && m.Breed == mascotDto.Breed
                     && m.Sex == mascotDto.Sex)
            .FirstOrDefaultAsync();

        if (existingMascot != null)
        {
            return Conflict("Una mascota con todas las mismas características ya existe.");
        }

        var mascot = new Mascot
        {
            UserId = userId,
            MascotName = mascotDto.MascotName,
            Species = mascotDto.Species,
            Breed = mascotDto.Breed,
            Sex = mascotDto.Sex,
            DateOfBirth = mascotDto.DateOfBirth.Date,
            MascotPhoto = mascotDto.MascotPhoto
        };

        _context.Mascots.Add(mascot);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetMascot), new { id = mascot.Id }, new MascotRetrieveDTO
        {
            Id = mascot.Id,
            MascotName = mascotDto.MascotName,
            Species = mascotDto.Species,
            Breed = mascotDto.Breed,
            Sex = mascotDto.Sex,
            DateOfBirth = mascotDto.DateOfBirth,
            MascotPhoto = mascot.MascotPhoto
        });
    }

    // Endpoint para actualizar una mascota existente
    [HttpPut("EditarMascotaPorID/{id}")]
    public async Task<IActionResult> PutMascot(int id, [FromBody] MascotUpdateDTO mascotDto)
    {
        string userIdString = User.FindFirstValue("userId");

        if (string.IsNullOrEmpty(userIdString) || !int.TryParse(userIdString, out int userId))
        {
            return Unauthorized("El reclamo del ID de usuario está faltante o es inválido.");
        }

        var existingMascot = await _context.Mascots
            .FirstOrDefaultAsync(m => m.Id == id && m.UserId == userId);

        if (existingMascot == null)
        {
            return Forbid();
        }

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        // Update the mascot's properties
        existingMascot.MascotName = mascotDto.MascotName;
        existingMascot.Species = mascotDto.Species;
        existingMascot.Breed = mascotDto.Breed;
        existingMascot.Sex = mascotDto.Sex;
        existingMascot.DateOfBirth = mascotDto.DateOfBirth;
        existingMascot.MascotPhoto = mascotDto.MascotPhoto;

        await _context.SaveChangesAsync();

        return NoContent();
    }

    // Endpoint para borrar una mascota
    [HttpDelete("BorrarMascotaPorID/{id}")]
    public async Task<IActionResult> DeleteMascot(int id)
    {
        string userIdString = User.FindFirstValue("userId");

        if (string.IsNullOrEmpty(userIdString) || !int.TryParse(userIdString, out int userId))
        {
            return Unauthorized("El reclamo del ID de usuario está faltante o es inválido.");
        }

        var mascot = await _context.Mascots
            .FirstOrDefaultAsync(m => m.Id == id && m.UserId == userId);

        if (mascot == null)
        {
            return Forbid();
        }

        _context.Mascots.Remove(mascot);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
public class MascotRetrieveDTO
{
    public int Id { get; set; }

    [StringLength(50)]
    public string MascotName { get; set; } = string.Empty;

    [StringLength(50)]
    public string Species { get; set; } = string.Empty;

    [StringLength(50)]
    public string Breed { get; set; } = string.Empty;

    [StringLength(15)]
    public string Sex { get; set; } = string.Empty;

    [Required]
    public DateTime DateOfBirth { get; set; }

    [Url]
    public string? MascotPhoto { get; set; }
}

public class MascotCreateDTO
{
    [Required]
    [StringLength(50)]
    public string MascotName { get; set; } = string.Empty;

    [Required]
    [StringLength(50)]
    public string Species { get; set; } = string.Empty;

    [StringLength(50)]
    public string Breed { get; set; } = string.Empty;

    [Required]
    [StringLength(15)]
    public string Sex { get; set; } = string.Empty;

    [Required]
    public DateTime DateOfBirth { get; set; }

    [Url]
    public string? MascotPhoto { get; set; }
}

public class MascotUpdateDTO
{
    [Required]
    [StringLength(50)]
    public string MascotName { get; set; } = string.Empty;

    [Required]
    [StringLength(50)]
    public string Species { get; set; } = string.Empty;

    [StringLength(50)]
    public string Breed { get; set; } = string.Empty;

    [Required]
    [StringLength(15)]
    public string Sex { get; set; } = string.Empty;

    [Required]
    public DateTime DateOfBirth { get; set; }

    [Url]
    public string? MascotPhoto { get; set; }
}
