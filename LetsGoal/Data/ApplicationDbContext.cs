using LetsGoal.Models;
using Microsoft.EntityFrameworkCore;

namespace LetsGoal.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<UserProfile> UserProfile { get; set; }
        public DbSet<Goal> Goal { get; set; }
        public DbSet<Models.Action> Action { get; set; }
        public DbSet<GoalType> GoalType { get; set; }
        public DbSet<Difficulty> Difficulty { get; set; }

    }
}
