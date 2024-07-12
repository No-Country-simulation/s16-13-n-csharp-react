namespace Petopia_Server.Models;

public class User(string username, string fullName, string password, string email) : BaseEntity
{
    public string Username { get; set; } = username;
    public string FullName { get; set; } = fullName;
    public string Password { get; set; } = password;
    public string Email { get; set; } = email;
    public int? PhoneNumber { get; set; }
    public string? Address { get; set; }

    public ICollection<Mascot> Mascots { get; set; } = [];
}
