using EmployeeManagementApi.Data;
using EmployeeManagementApi.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeManagementApi.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly AppDbContext _db;
        public EmployeeRepository(AppDbContext db) => _db = db;

        public async Task<Employee> CreateAsync(Employee employee)
        {
            _db.Employees.Add(employee);
            await _db.SaveChangesAsync();
            return employee;
        }

        public async Task DeleteAsync(int id)
        {
            var e = await _db.Employees.FindAsync(id);
            if (e != null)
            {
                _db.Employees.Remove(e);
                await _db.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Employee>> GetAllAsync() => await _db.Employees.AsNoTracking().ToListAsync();

        public async Task<Employee?> GetByIdAsync(int id) => await _db.Employees.FindAsync(id);

        public async Task UpdateAsync(Employee employee)
        {
            _db.Employees.Update(employee);
            await _db.SaveChangesAsync();
        }
    }
}
