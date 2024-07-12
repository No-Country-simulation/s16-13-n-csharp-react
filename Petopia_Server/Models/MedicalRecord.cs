namespace Petopia_Server.Models;

public class MedicalRecord(DateOnly appointmentTime, string typeOfMedicalCheckup, string locationOfMedicalCheckup) : BaseEntity
{
    public int MascotId { get; set; }
    public virtual Mascot? Mascot { get; set; }

    public DateOnly AppointmentTime { get; set; } = appointmentTime;
    public string TypeOfMedicalCheckup { get; set; } = typeOfMedicalCheckup;
    public string LocationOfMedicalCheckup { get; set; } = locationOfMedicalCheckup;
    public string? NameMascotClinic { get; set; }
    public string? VeterinaryName { get; set; }
}
