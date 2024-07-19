using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Petopia_Server.Data;
using Petopia_Server.Models;
using System.ComponentModel.DataAnnotations;

namespace Petopia_Server.Controllers;

[Route("api/[controller]")]
[ApiController]

public class UserLoginController(ApiDbContext context) : ControllerBase
{
    private readonly ApiDbContext _context = context;

    // Endpoint para iniciar sesión
    [HttpPost]
    public async Task<IActionResult> PostLogin([FromBody] UserLoginRequest request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var user = await _context.Users.SingleOrDefaultAsync(u => u.Username == request.Username);
        if (user == null)
        {
            ModelState.AddModelError("Username", "Nombre de usuario no encontrado.");
            return NotFound(ModelState);
        }

        if (!BCrypt.Net.BCrypt.Verify(request.Password, user.Password))
        {
            ModelState.AddModelError("Password", "Contraseña incorrecta.");
            return Unauthorized(ModelState);
        }

        // Falta la integración del JWT
        // var token = _tokenManager.GenerateToken(user);

        // Guarda el token generado para el usuario en el DB
        // user.SessionToken = token;
        _context.SaveChanges();

        // Regresa el token y un mensaje de "Inicio de sesión exitoso"
        return Ok(new { /*Token = token, */Message = "Inicio de sesión exitoso." });
    }

    // Representa una solicitud de inicio de sesión con credenciales de usuario
    public class UserLoginRequest
    {
        [Required]
        [StringLength(16, MinimumLength = 6)]
        public string Username { get; set; } = string.Empty;

        [Required]
        [StringLength(16, MinimumLength = 8)]
        public string Password { get; set; } = string.Empty;
    }
}