using System.ComponentModel.DataAnnotations;

namespace EmployeeManagementApi.Models
{
    public class Employee
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string? Name { get; set; }

        [MaxLength(100)]
        public string? Position { get; set; }

        public decimal Salary { get; set; }
    }
}
