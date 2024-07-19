using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Petopia_Server.Data;
using Petopia_Server.Models;
using System.ComponentModel.DataAnnotations;

namespace Petopia_Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UserRegistrationController(ApiDbContext context) : ControllerBase
{
    private readonly ApiDbContext _context = context;

    // Pendiente por agregar CSRF
    // Endpoint para registrar un nuevo usuario
    [HttpPost]
    public async Task<IActionResult> PostUser([FromBody] UserRegistrationRequest request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        if (await _context.Users.AnyAsync(u => u.Username == request.Username))
        {
            return Conflict(new { message = "El nombre de usuario ya está en uso." });
        }

        if (await _context.Users.AnyAsync(u => u.Email == request.Email))
        {
            return Conflict(new { message = "El correo electrónico ya está registrado." });
        }

        string hashedPassword = HashPassword(request.Password);

        var newUser = new User
        {
            Username = request.Username,
            FullName = request.FullName,
            Password = hashedPassword,
            Email = request.Email,
        };

        _context.Users.Add(newUser);
        await _context.SaveChangesAsync();

        return Ok(new { Message = "Cuenta creada correctamente." });
    }

    private static bool IsValidEmail(string email)
    {
        try
        {
            var addr = new System.Net.Mail.MailAddress(email);
            return addr.Address == email;
        }
        catch
        {
            return false;
        }
    }

    private static string HashPassword(string password)
    {
        return BCrypt.Net.BCrypt.HashPassword(password);
    }

    public class UserRegistrationRequest
    {
        [Required]
        [StringLength(16, MinimumLength = 6)]
        public string Username { get; set; } = string.Empty;

        [Required]
        [StringLength(50, MinimumLength = 3)]
        public string FullName { get; set; } = string.Empty;

        [Required]
        [StringLength(16, MinimumLength = 8)]
        public string Password { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
    }
}