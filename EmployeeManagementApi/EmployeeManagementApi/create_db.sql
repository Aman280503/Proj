-- SQL script to create EmployeeDb and table + stored procedures (for SQL Server)
CREATE DATABASE EmployeeDb;
GO
USE EmployeeDb;
GO
CREATE TABLE Employees (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Position NVARCHAR(100) NULL,
    Salary DECIMAL(18,2) DEFAULT 0
);
GO
-- Example stored procedure: Get all employees
CREATE PROCEDURE sp_GetAllEmployees
AS
BEGIN
    SELECT * FROM Employees;
END;
GO
-- Example stored procedure: Insert employee
CREATE PROCEDURE sp_InsertEmployee
    @Name NVARCHAR(100),
    @Position NVARCHAR(100),
    @Salary DECIMAL(18,2)
AS
BEGIN
    INSERT INTO Employees (Name, Position, Salary) VALUES (@Name, @Position, @Salary);
    SELECT SCOPE_IDENTITY() AS NewId;
END;
GO
