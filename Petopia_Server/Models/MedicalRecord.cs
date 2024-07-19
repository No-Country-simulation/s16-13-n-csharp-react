namespace Petopia_Server.Models;

public class MedicalRecord : BaseEntity
{
    public int MascotId { get; set; }
    public virtual Mascot? Mascot { get; set; }

    public DateOnly AppointmentTime { get; set; }
    public string TypeOfMedicalCheckup { get; set; } = string.Empty;
    public string LocationOfMedicalCheckup { get; set; } = string.Empty;
    public string? NameMascotClinic { get; set; }
    public string? VeterinaryName { get; set; }

    // Constructor sin parámetros para EF Core
    public MedicalRecord()
    {
    }

    // Constructor con parámetros para uso en la aplicación
    public MedicalRecord(DateOnly appointmentTime, string typeOfMedicalCheckup, string locationOfMedicalCheckup)
    {
        AppointmentTime = appointmentTime;
        TypeOfMedicalCheckup = typeOfMedicalCheckup;
        LocationOfMedicalCheckup = locationOfMedicalCheckup;
    }
}
