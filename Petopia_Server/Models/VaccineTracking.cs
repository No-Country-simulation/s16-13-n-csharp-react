namespace Petopia_Server.Models;

public class VaccineTracking(string vaccineName, DateOnly lastDateOfApplication, DateOnly reminderDate) : BaseEntity
{
    public int MascotId { get; set; }
    public virtual Mascot? Mascot { get; set; }

    public string VaccineName { get; set; } = vaccineName;
    public DateOnly LastDateOfApplication { get; set; } = lastDateOfApplication;
    public DateOnly ReminderDate { get; set; } = reminderDate;
}
