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
public class VaccineTrackingController(ApiDbContext context) : ControllerBase
{
    private readonly ApiDbContext _context = context;

    // Endpoint para obtener todas las vacunas del usuario autenticado
    [HttpGet("GetVacunas")]
    public async Task<ActionResult<IEnumerable<VaccineTrackingRetrieveDTO>>> GetVaccineTrackings()
    {
        string userIdString = User.FindFirstValue("userId");

        if (string.IsNullOrEmpty(userIdString) || !int.TryParse(userIdString, out int userId))
        {
            return Unauthorized("El reclamo del ID de usuario está faltante o es inválido.");
        }

        var vaccineTrackings = await _context.VaccineTrackings
            .Include(vt => vt.Mascot)
            .Where(vt => vt.Mascot.UserId == userId)
            .Select(vt => new VaccineTrackingRetrieveDTO
            {
                Id = vt.Id,
                MascotId = vt.MascotId,
                VaccineName = vt.VaccineName,
                LastDateOfApplication = vt.LastDateOfApplication,
                ReminderDate = vt.ReminderDate
            })
            .ToListAsync();

        return Ok(vaccineTrackings);
    }

    // Endpoint para agregar nuevas vacunas para seguimiento
    [HttpPost("PostNuevaVacuna")]
    public async Task<IActionResult> PostVaccineTracking([FromBody] VaccineTrackingCreateDTO trackingDto)
    {
        string userIdString = User.FindFirstValue("userId");

        if (string.IsNullOrEmpty(userIdString) || !int.TryParse(userIdString, out int userId))
        {
            return Unauthorized("El reclamo del ID de usuario está faltante o es inválido.");
        }

        var mascot = await _context.Mascots.FindAsync(trackingDto.MascotId);
        if (mascot == null || mascot.UserId != userId)
        {
            return Forbid();
        }

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var tracking = new VaccineTracking
        {
            MascotId = trackingDto.MascotId,
            VaccineName = trackingDto.VaccineName,
            LastDateOfApplication = trackingDto.LastDateOfApplication.Date,
            ReminderDate = trackingDto.ReminderDate.Date
        };

        _context.VaccineTrackings.Add(tracking);
        await _context.SaveChangesAsync();

        return Ok(new { Message = "Registro de vacuna creado correctamente." });
    }

    // Endpoint para actualizar el seguimiento de vacunas
    [HttpPut("EditarVacunaPorID/{id}")]
    public async Task<IActionResult> PutVaccineTracking(int id, [FromBody] VaccineTrackingUpdateDTO trackingDto)
    {
        string userIdString = User.FindFirstValue("userId");

        if (string.IsNullOrEmpty(userIdString) || !int.TryParse(userIdString, out int userId))
        {
            return Unauthorized("El reclamo del ID de usuario está faltante o es inválido.");
        }

        var existingTracking = await _context.VaccineTrackings
            .Include(vt => vt.Mascot)
            .FirstOrDefaultAsync(vt => vt.Id == id);
        if (existingTracking == null || existingTracking.Mascot.UserId != userId)
        {
            return Forbid();
        }

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        existingTracking.VaccineName = trackingDto.VaccineName;
        existingTracking.LastDateOfApplication = trackingDto.LastDateOfApplication;
        existingTracking.ReminderDate = trackingDto.ReminderDate;

        await _context.SaveChangesAsync();

        return NoContent();
    }

    // Endpoint para borrar algun seguimiento de vacuna
    [HttpDelete("BorrarVacunaPorID/{id}")]
    public async Task<IActionResult> DeleteVaccineTracking(int id)
    {
        string userIdString = User.FindFirstValue("userId");

        if (string.IsNullOrEmpty(userIdString) || !int.TryParse(userIdString, out int userId))
        {
            return Unauthorized("El reclamo del ID de usuario está faltante o es inválido.");
        }

        var tracking = await _context.VaccineTrackings
            .Include(vt => vt.Mascot)
            .FirstOrDefaultAsync(vt => vt.Id == id);
        if (tracking == null || tracking.Mascot.UserId != userId)
        {
            return Forbid();
        }

        _context.VaccineTrackings.Remove(tracking);
        await _context.SaveChangesAsync();

        return NoContent();
    }

        public class VaccineTrackingRetrieveDTO
    {
        public int Id { get; set; }

        [Required]
        public int MascotId { get; set; }

        [Required]
        [StringLength(100)]
        public string VaccineName { get; set; } = string.Empty;

        [Required]
        public DateTime LastDateOfApplication { get; set; }

        [Required]
        public DateTime ReminderDate { get; set; }
    }

    public class VaccineTrackingCreateDTO
    {
        [Required]
        public int MascotId { get; set; }

        [Required]
        [StringLength(100)]
        public string VaccineName { get; set; } = string.Empty;

        [Required]
        public DateTime LastDateOfApplication { get; set; }

        [Required]
        public DateTime ReminderDate { get; set; }
    }

    public class VaccineTrackingUpdateDTO
    {
        [Required]
        [StringLength(100)]
        public string VaccineName { get; set; } = string.Empty;

        [Required]
        public DateTime LastDateOfApplication { get; set; }

        [Required]
        public DateTime ReminderDate { get; set; }
    }
}