using Microsoft.EntityFrameworkCore;
using EmployeeManagementApi.Models;

namespace EmployeeManagementApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Employee> Employees { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>().HasKey(e => e.Id);
            base.OnModelCreating(modelBuilder);
        }
    }
}
