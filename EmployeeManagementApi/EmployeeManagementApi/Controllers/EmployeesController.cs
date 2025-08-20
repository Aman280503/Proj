using Microsoft.AspNetCore.Mvc;
using EmployeeManagementApi.Models;
using EmployeeManagementApi.Repositories;

namespace EmployeeManagementApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase
    {
        private readonly IEmployeeRepository _repo;
        public EmployeesController(IEmployeeRepository repo) => _repo = repo;

        [HttpGet]
        public async Task<IActionResult> GetAll() => Ok(await _repo.GetAllAsync());

        [HttpGet("{id:int}")]
        public async Task<IActionResult> Get(int id)
        {
            var e = await _repo.GetByIdAsync(id);
            if (e == null) return NotFound();
            return Ok(e);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Employee employee)
        {
            var created = await _repo.CreateAsync(employee);
            return CreatedAtAction(nameof(Get), new { id = created.Id }, created);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Update(int id, Employee employee)
        {
            if (id != employee.Id) return BadRequest();
            var exists = await _repo.GetByIdAsync(id);
            if (exists == null) return NotFound();
            await _repo.UpdateAsync(employee);
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var exists = await _repo.GetByIdAsync(id);
            if (exists == null) return NotFound();
            await _repo.DeleteAsync(id);
            return NoContent();
        }
    }
}
