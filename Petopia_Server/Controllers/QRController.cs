using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Petopia_Server.Data;
using Microsoft.EntityFrameworkCore;
using Petopia_Server.Models;

namespace Petopia_Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class QRController(ApiDbContext context) : ControllerBase
{
    private readonly ApiDbContext _context = context;

    [HttpGet("RecuperarMascota/{id}")]
    public async Task<ActionResult<IEnumerable<MascotQRDTO>>> GetMascotById(int id)
    {
        var mascot = await _context.Mascots
            .Include(m => m.User)
            .Where(m => m.Id == id)
            .Select(m => new MascotQRDTO
            {
                MascotName = m.MascotName,
                Species = m.Species,
                Breed = m.Breed,
                Sex = m.Sex,
                DateOfBirth = m.DateOfBirth,
                MascotPhoto = m.MascotPhoto,
                OwnerFullName = m.User.FullName,
                OwnerPhoneNumber = m.User.PhoneNumber
            })
            .FirstOrDefaultAsync();

        if (mascot == null)
        {
            return NotFound();
        }

        return Ok(mascot);
    }

    public class MascotQRDTO
    {
        public string MascotName { get; set; } = string.Empty;
        public string Species { get; set; } = string.Empty;
        public string Breed { get; set; } = string.Empty;
        public string Sex { get; set; } = string.Empty;
        public DateTime DateOfBirth { get; set; }
        public string? MascotPhoto { get; set; }

        public string OwnerFullName { get; set; } = string.Empty;
        public string OwnerPhoneNumber { get; set; } = string.Empty;
    }
}
