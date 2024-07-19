namespace Petopia_Server.Models;

public class Mascot : BaseEntity
{
    public int UserId { get; set; }
    public virtual User? User { get; set; }

    public string Species { get; set; } = string.Empty;
    public string MascotName { get; set; } = string.Empty;
    public string Breed { get; set; } = string.Empty;
    public int Age { get; set; }
    public string MascotPhoto { get; set; } = string.Empty;

    public virtual ICollection<VaccineTracking> VaccineTrackings { get; set; } = new List<VaccineTracking>();
    public virtual ICollection<MedicalRecord> MedicalRecords { get; set; } = new List<MedicalRecord>();

    // Constructor sin parámetros para EF Core
    public Mascot()
    {
    }

    // Constructor con parámetros para uso en la aplicación
    public Mascot(string species, string mascotName, string breed, int age, string mascotPhoto)
    {
        Species = species;
        MascotName = mascotName;
        Breed = breed;
        Age = age;
        MascotPhoto = mascotPhoto;
    }
}
