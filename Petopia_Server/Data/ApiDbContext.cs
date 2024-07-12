using Microsoft.EntityFrameworkCore;
using Petopia_Server.Models;

namespace Petopia_Server.Data;

public class ApiDbContext(DbContextOptions<ApiDbContext> options) : DbContext(options)
{

    // SaveChanges method needs to be added for the BaseEntity to work properly
    // BCrypt method needs to be added

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<User>()
            .ToTable("Users");

        builder.Entity<Mascot>()
            .ToTable("Mascots");

        builder.Entity<VaccineTracking>()
            .ToTable("VaccineTrackings");

        builder.Entity<MedicalRecord>()
            .ToTable("MedicalRecords");

        // Pending to define the tables relationships
        // I will add pre-set users for each member later

    }

    public DbSet<User> Users { get; set; }
    public DbSet<Mascot> Mascots { get; set; }
    public DbSet<VaccineTracking> VaccineTrackings { get; set; }
    public DbSet<MedicalRecord> MedicalRecords { get; set; }
}
