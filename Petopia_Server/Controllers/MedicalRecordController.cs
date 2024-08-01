using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuGet.Common;
using Petopia_Server.Data;
using Petopia_Server.Models;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;

namespace Petopia_Server.Controllers;

[Authorize]
[Route("api/[controller]")]
[ApiController]
public class MedicalRecordController(ApiDbContext context) : ControllerBase
{
    private readonly ApiDbContext _context = context;

    // Endpoint para obtener los registros médicos en base al ID del usuario y al ID de la mascota
    [HttpGet("GetRegistrosMedicos")]
    public async Task<IActionResult> GetMedicalRecords([FromQuery] int mascotId)
    {
        string userIdString = User.FindFirstValue("userId");

        if (string.IsNullOrEmpty(userIdString) || !int.TryParse(userIdString, out int userId))
        {
            return Unauthorized("El reclamo del ID de usuario está faltante o es inválido.");
        }

        var mascot = await _context.Mascots
            .FirstOrDefaultAsync(m => m.Id == mascotId && m.UserId == userId);

        if (mascot == null)
        {
            return Forbid("Mascota no encontrada o no pertenece al usuario.");
        }

        var medicalRecords = await _context.MedicalRecords
            .Where(mr => mr.MascotId == mascotId)
            .Select(mr => new MedicalRecordRetrieveDTO
            {
                Id = mr.Id,
                MascotId = mr.MascotId,
                AppointmentTimeAndDate = mr.AppointmentTimeAndDate,
                TypeOfMedicalCheckup = mr.TypeOfMedicalCheckup,
                LocationOfMedicalCheckup = mr.LocationOfMedicalCheckup,
                NameMascotClinic = mr.NameMascotClinic,
                VeterinaryName = mr.VeterinaryName
            })
            .ToListAsync();

        return Ok(medicalRecords);
    }

    // Endpoint para agregar nuevos registros médicos
    [HttpPost("PostNuevoRegistroMedico")]
    public async Task<IActionResult> PostMedicalRecord([FromBody] MedicalRecordCreateDTO recordDto)
    {
        string userIdString = User.FindFirstValue("userId");

        if (string.IsNullOrEmpty(userIdString) || !int.TryParse(userIdString, out int userId))
        {
            return Unauthorized("El reclamo del ID de usuario está faltante o es inválido.");
        }

        var mascot = await _context.Mascots.FindAsync(recordDto.MascotId);
        if (mascot == null || mascot.UserId != userId)
        {
            return Forbid();
        }

        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var record = new MedicalRecord
        {
            MascotId = recordDto.MascotId,
            AppointmentTimeAndDate = recordDto.AppointmentTimeAndDate,
            TypeOfMedicalCheckup = recordDto.TypeOfMedicalCheckup,
            LocationOfMedicalCheckup = recordDto.LocationOfMedicalCheckup,
            NameMascotClinic = recordDto.NameMascotClinic,
            VeterinaryName = recordDto.VeterinaryName
        };

        _context.MedicalRecords.Add(record);
        await _context.SaveChangesAsync();

        return Ok(new { Message = "Registro médico creado correctamente." });
    }

    // Endpoint para actualizar registros médicos existentes
    [HttpPut("EditarRegistroMedicoPorID/{id}")]
    public async Task<IActionResult> PutMedicalRecord(int id, [FromBody] MedicalRecordUpdateDTO recordDto)
    {
        string userIdString = User.FindFirstValue("userId");

        if (string.IsNullOrEmpty(userIdString) || !int.TryParse(userIdString, out int userId))
        {
            return Unauthorized("El reclamo del ID de usuario está faltante o es inválido.");
        }

        var existingRecord = await _context.MedicalRecords
            .Include(mr => mr.Mascot)
            .FirstOrDefaultAsync(mr => mr.Id == id);
        if (existingRecord == null || existingRecord.Mascot.UserId != userId)
        {
            return Forbid();
        }

        existingRecord.AppointmentTimeAndDate = recordDto.AppointmentTimeAndDate;
        existingRecord.TypeOfMedicalCheckup = recordDto.TypeOfMedicalCheckup;
        existingRecord.LocationOfMedicalCheckup = recordDto.LocationOfMedicalCheckup;
        existingRecord.NameMascotClinic = recordDto.NameMascotClinic;
        existingRecord.VeterinaryName = recordDto.VeterinaryName;

        await _context.SaveChangesAsync();

        return Ok();
    }

    // Endpoint para eliminar los registros médicos
    [HttpDelete("BorrarRegistroMedicoPorID/{id}")]
    public async Task<IActionResult> DeleteMedicalRecord(int id)
    {
        string userIdString = User.FindFirstValue("userId");

        if (string.IsNullOrEmpty(userIdString) || !int.TryParse(userIdString, out int userId))
        {
            return Unauthorized("El reclamo del ID de usuario está faltante o es inválido.");
        }

        var record = await _context.MedicalRecords
            .Include(mr => mr.Mascot)
            .FirstOrDefaultAsync(mr => mr.Id == id);
        if (record == null || record.Mascot.UserId != userId)
        {
            return Forbid();
        }

        _context.MedicalRecords.Remove(record);
        await _context.SaveChangesAsync();

        return Ok();
    }
    public class MedicalRecordRetrieveDTO
    {
        public int Id { get; set; }

        [Required]
        public int MascotId { get; set; }

        [Required]
        public DateTime AppointmentTimeAndDate { get; set; }

        [Required]
        [StringLength(50)]
        public string TypeOfMedicalCheckup { get; set; } = string.Empty;

        [Required]
        [StringLength(100)]
        public string LocationOfMedicalCheckup { get; set; } = string.Empty;

        [StringLength(100)]
        public string NameMascotClinic { get; set; } = string.Empty;

        [StringLength(50)]
        public string VeterinaryName { get; set; } = string.Empty;
    }

    public class MedicalRecordCreateDTO
    {

        [Required]
        public int MascotId { get; set; }

        [Required]
        public DateTime AppointmentTimeAndDate { get; set; }

        [Required]
        [StringLength(50)]
        public string TypeOfMedicalCheckup { get; set; } = string.Empty;

        [Required]
        [StringLength(100)]
        public string LocationOfMedicalCheckup { get; set; } = string.Empty;

        [StringLength(100)]
        public string NameMascotClinic { get; set; } = string.Empty;

        [StringLength(50)]
        public string VeterinaryName { get; set; } = string.Empty;
    }

    public class MedicalRecordUpdateDTO
    {
        [Required]
        public DateTime AppointmentTimeAndDate { get; set; }

        [Required]
        [StringLength(50)]
        public string TypeOfMedicalCheckup { get; set; } = string.Empty;

        [Required]
        [StringLength(100)]
        public string LocationOfMedicalCheckup { get; set; } = string.Empty;

        [StringLength(100)]
        public string NameMascotClinic { get; set; } = string.Empty;

        [StringLength(50)]
        public string VeterinaryName { get; set; } = string.Empty;
    }
}
