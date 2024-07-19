namespace Petopia_Server.Models;

public class VaccineTracking : BaseEntity
{
    public int MascotId { get; set; }
    public virtual Mascot? Mascot { get; set; }

    public string VaccineName { get; set; } = string.Empty;
    public DateOnly LastDateOfApplication { get; set; }
    public DateOnly ReminderDate { get; set; }

    // Constructor sin parámetros para EF Core
    public VaccineTracking()
    {
    }

    // Constructor con parámetros para uso en la aplicación
    public VaccineTracking(string vaccineName, DateOnly lastDateOfApplication, DateOnly reminderDate)
    {
        VaccineName = vaccineName;
        LastDateOfApplication = lastDateOfApplication;
        ReminderDate = reminderDate;
    }
}
