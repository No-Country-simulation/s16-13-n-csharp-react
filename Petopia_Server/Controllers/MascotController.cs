using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Petopia_Server.Data;
using Petopia_Server.Models;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;

namespace Petopia_Server.Controllers;

[Authorize]
[Route("api/[controller]")]
[ApiController]
public class MascotController(ApiDbContext context) : ControllerBase
{
    private readonly ApiDbContext _context = context;

    // Endpoint para obtener todas las mascotas del usuario autenticado
    [HttpGet]
    public async Task<ActionResult<IEnumerable<MascotRetrieveDTO>>> GetMascots()
    {
        var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
        var mascots = await _context.Mascots
            .Where(m => m.UserId == userId)
            .Select(m => new MascotRetrieveDTO
            {
                Id = m.Id,
                Species = m.Species,
                MascotName = m.MascotName,
                Breed = m.Breed,
                Age = m.Age,
                MascotPhoto = m.MascotPhoto
            })
            .ToListAsync();

        return Ok(mascots);
    }

    // Endpoint para obtener una mascota específica por el ID
    [HttpGet("{id}")]
    public async Task<ActionResult<MascotRetrieveDTO>> GetMascot(int id)
    {
        var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
        var mascot = await _context.Mascots
            .Where(m => m.Id == id && m.UserId == userId)
            .Select(m => new MascotRetrieveDTO
            {
                Id = m.Id,
                Species = m.Species,
                MascotName = m.MascotName,
                Breed = m.Breed,
                Age = m.Age,
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
    [HttpPost]
    public async Task<IActionResult> PostMascot([FromBody] MascotCreateDTO mascotDto)
    {
        var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var mascot = new Mascot
        {
            UserId = userId,
            Species = mascotDto.Species,
            MascotName = mascotDto.MascotName,
            Breed = mascotDto.Breed,
            Age = mascotDto.Age,
            MascotPhoto = mascotDto.MascotPhoto
        };

        _context.Mascots.Add(mascot);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetMascot), new { id = mascot.Id }, new MascotRetrieveDTO
        {
            Id = mascot.Id,
            Species = mascot.Species,
            MascotName = mascot.MascotName,
            Breed = mascot.Breed,
            Age = mascot.Age,
            MascotPhoto = mascot.MascotPhoto
        });
    }

    // Endpoint para actualizar una mascota existente
    [HttpPut("{id}")]
    public async Task<IActionResult> PutMascot(int id, [FromBody] MascotUpdateDTO mascotDto)
    {
        var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
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
        existingMascot.Species = mascotDto.Species;
        existingMascot.MascotName = mascotDto.MascotName;
        existingMascot.Breed = mascotDto.Breed;
        existingMascot.Age = mascotDto.Age;
        existingMascot.MascotPhoto = mascotDto.MascotPhoto;

        await _context.SaveChangesAsync();

        return NoContent();
    }

    // Endpoint para borrar una mascota
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteMascot(int id)
    {
        var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
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

    [Required]
    [StringLength(50)]
    public string Species { get; set; } = string.Empty;

    [Required]
    [StringLength(50)]
    public string MascotName { get; set; } = string.Empty;

    [StringLength(50)]
    public string Breed { get; set; } = string.Empty;

    [Range(0, 100)]
    public int Age { get; set; }

    [Url]
    public string MascotPhoto { get; set; } = string.Empty;
}

public class MascotCreateDTO
{
    [Required]
    [StringLength(50)]
    public string Species { get; set; } = string.Empty;

    [Required]
    [StringLength(50)]
    public string MascotName { get; set; } = string.Empty;

    [StringLength(50)]
    public string Breed { get; set; } = string.Empty;

    [Range(0, 100)]
    public int Age { get; set; }

    [Url]
    public string MascotPhoto { get; set; } = string.Empty;
}

public class MascotUpdateDTO
{
    [Required]
    [StringLength(50)]
    public string Species { get; set; } = string.Empty;

    [Required]
    [StringLength(50)]
    public string MascotName { get; set; } = string.Empty;

    [StringLength(50)]
    public string Breed { get; set; } = string.Empty;

    [Range(0, 100)]
    public int Age { get; set; }

    [Url]
    public string MascotPhoto { get; set; } = string.Empty;
}
