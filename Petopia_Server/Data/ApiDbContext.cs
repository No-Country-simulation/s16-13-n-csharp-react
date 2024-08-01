using Microsoft.EntityFrameworkCore;
using Petopia_Server.Models;

namespace Petopia_Server.Data;

public class ApiDbContext(DbContextOptions<ApiDbContext> options) : DbContext(options)
{
    public override int SaveChanges()
    {
        // Actualiza únicamente la fecha de modificación para todos los modelados que referencian el BaseEntity luego de que son agregados por primera vez
        var entities = ChangeTracker.Entries()
            .Where(e => e.State == EntityState.Modified && e.Entity is BaseEntity)
            .Select(e => e.Entity as BaseEntity);

        foreach (var entity in entities)
        {
            if (entity != null)
            {
                entity.DateUpdated = DateTime.UtcNow;
            }
        }

        return base.SaveChanges();
    }

    private static string HashPassword(string password)
    {
        return BCrypt.Net.BCrypt.HashPassword(password);
    }

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

        // Define las relaciones entre las tablas

        builder.Entity<Mascot>()
            .HasOne(m => m.User)
            .WithMany(u => u.Mascots)
            .HasForeignKey(m => m.UserId)
            .OnDelete(DeleteBehavior.Restrict)
            .IsRequired();

        builder.Entity<VaccineTracking>()
            .HasOne(vt => vt.Mascot)
            .WithMany(m => m.VaccineTrackings)
            .HasForeignKey(vt => vt.MascotId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        builder.Entity<MedicalRecord>()
            .HasOne(mr => mr.Mascot)
            .WithMany(m => m.MedicalRecords)
            .HasForeignKey(mr => mr.MascotId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        // Añadire usuarios pre-configurados de los miembros del proyecto luego

        var demoUsers = new List<User>
        {
            new() { Id = -1, Username = "AlexanderFRT", FullName = "Alexander Flores", Password = HashPassword("12345678"), Email = "alexanderfrt@example.com"},
            new() { Id = 1, Username = "Rivera", FullName = "Pedro Rivera", Password = HashPassword("12345678"), Email = "darkrunnersp@gmail.com", PhoneNumber = "+541112345678",  Address = "Av. Corrientes 1234, Buenos Aires, Argentina"}
        };
        builder.Entity<User>().HasData(demoUsers);
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Mascot> Mascots { get; set; }
    public DbSet<VaccineTracking> VaccineTrackings { get; set; }
    public DbSet<MedicalRecord> MedicalRecords { get; set; }
}
