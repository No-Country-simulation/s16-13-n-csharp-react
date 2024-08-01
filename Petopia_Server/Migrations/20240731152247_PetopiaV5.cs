using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Petopia_Server.Migrations
{
    /// <inheritdoc />
    public partial class PetopiaV5 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Username = table.Column<string>(type: "text", nullable: false),
                    FullName = table.Column<string>(type: "text", nullable: false),
                    Password = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    PhoneNumber = table.Column<string>(type: "text", nullable: false),
                    Address = table.Column<string>(type: "text", nullable: false),
                    DateAdded = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    DateUpdated = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Mascots",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserId = table.Column<int>(type: "integer", nullable: false),
                    MascotName = table.Column<string>(type: "text", nullable: false),
                    Species = table.Column<string>(type: "text", nullable: false),
                    Breed = table.Column<string>(type: "text", nullable: false),
                    Sex = table.Column<string>(type: "text", nullable: false),
                    DateOfBirth = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    MascotPhoto = table.Column<string>(type: "text", nullable: true),
                    DateAdded = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    DateUpdated = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Mascots", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Mascots_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "MedicalRecords",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    MascotId = table.Column<int>(type: "integer", nullable: false),
                    AppointmentTimeAndDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    TypeOfMedicalCheckup = table.Column<string>(type: "text", nullable: false),
                    LocationOfMedicalCheckup = table.Column<string>(type: "text", nullable: false),
                    NameMascotClinic = table.Column<string>(type: "text", nullable: true),
                    VeterinaryName = table.Column<string>(type: "text", nullable: true),
                    DateAdded = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    DateUpdated = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MedicalRecords", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MedicalRecords_Mascots_MascotId",
                        column: x => x.MascotId,
                        principalTable: "Mascots",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "VaccineTrackings",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    MascotId = table.Column<int>(type: "integer", nullable: false),
                    VaccineName = table.Column<string>(type: "text", nullable: false),
                    LastDateOfApplication = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    ReminderDate = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    DateAdded = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    DateUpdated = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VaccineTrackings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VaccineTrackings_Mascots_MascotId",
                        column: x => x.MascotId,
                        principalTable: "Mascots",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Address", "DateAdded", "DateUpdated", "Email", "FullName", "Password", "PhoneNumber", "Username" },
                values: new object[,]
                {
                    { -1, "", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "alexanderfrt@example.com", "Alexander Flores", "$2a$11$ZBNABosglF3FM/50xAcRwuoveNU9ZGj5o3a45YMGw2icd7cgpL6O2", "", "AlexanderFRT" },
                    { 1, "Av. Corrientes 1234, Buenos Aires, Argentina", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "darkrunnersp@gmail.com", "Pedro Rivera", "$2a$11$0u3DdoYTpOgCKScN55huPuWTs4OjsSyL6KhRC0HIXq34xnwdH.Cyu", "+541112345678", "Rivera" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Mascots_UserId",
                table: "Mascots",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_MedicalRecords_MascotId",
                table: "MedicalRecords",
                column: "MascotId");

            migrationBuilder.CreateIndex(
                name: "IX_VaccineTrackings_MascotId",
                table: "VaccineTrackings",
                column: "MascotId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MedicalRecords");

            migrationBuilder.DropTable(
                name: "VaccineTrackings");

            migrationBuilder.DropTable(
                name: "Mascots");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
