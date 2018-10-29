using Microsoft.EntityFrameworkCore;
using NevernoteAPI.Models;

namespace NevernoteAPI
{
    public class Database : DbContext
    {

        public DbSet<Note> Notes { get; set; }

        public Database(DbContextOptions<Database> options) : base(options)
        {

        }
    }
}