namespace Petopia_Server.Models;

public class Mascot(string species, string mascotName, string breed, int age, string mascotPhoto) : BaseEntity
{
    public int UserId { get; set; }
    public virtual User? User { get; set; }

    public string Species { get; set; } = species;
    public string MascotName { get; set; } = mascotName;
    public string Breed { get; set; } = breed;
    public int Age { get; set; } = age;
    public string MascotPhoto { get; set; } = mascotPhoto;

    public virtual ICollection<VaccineTracking> VaccineTrackings { get; set; } = [];
    public virtual ICollection<MedicalRecord> MedicalRecords { get; set; } = [];
}
