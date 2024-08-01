namespace Petopia_Server.Models;

public class User : BaseEntity
{
    public string Username { get; set; } = string.Empty;
    public string FullName { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;

    public ICollection<Mascot> Mascots { get; set; } = new List<Mascot>();

    // Constructor sin parámetros para EF Core
    public User()
    {

    }

    // Constructor con parámetros para uso en la aplicación
    public User(string username, string fullName, string password, string email, string phoneNumber, string address)
    {
        Username = username;
        FullName = fullName;
        Password = password;
        Email = email;
        PhoneNumber = phoneNumber;
        Address = address;
    }
}
