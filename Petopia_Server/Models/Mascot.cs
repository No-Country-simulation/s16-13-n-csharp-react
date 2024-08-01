namespace Petopia_Server.Models;

public class Mascot : BaseEntity
{
    public int UserId { get; set; }
    public virtual User? User { get; set; }

    public string MascotName { get; set; } = string.Empty;
    public string Species { get; set; } = string.Empty;
    public string Breed { get; set; } = string.Empty;
    public string Sex { get; set; } = string.Empty;
    public DateTime DateOfBirth { get; set; }
    public string? MascotPhoto { get; set; }

    public virtual ICollection<VaccineTracking> VaccineTrackings { get; set; } = new List<VaccineTracking>();
    public virtual ICollection<MedicalRecord> MedicalRecords { get; set; } = new List<MedicalRecord>();

    // Constructor sin parámetros para EF Core
    public Mascot()
    {
    }

    // Constructor con parámetros para uso en la aplicación
    public Mascot(string mascotName, string species, string breed, string sex, DateTime dateOfBirth, string mascotPhoto)
    {
        MascotName = mascotName;
        Species = species;
        Breed = breed;
        Sex = sex;
        DateOfBirth = dateOfBirth;
        MascotPhoto = mascotPhoto;
    }
}
