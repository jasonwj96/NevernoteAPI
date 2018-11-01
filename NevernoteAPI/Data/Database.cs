using Microsoft.EntityFrameworkCore;
using NevernoteAPI.Models;

namespace NevernoteAPI
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Note> Notes { get; set; }

        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // modelBuilder.Entity<Note>()
            //     .Property(note => note.Title)
            //     .IsRequired()
            //     .HasMaxLength(50);
        }
    }
}