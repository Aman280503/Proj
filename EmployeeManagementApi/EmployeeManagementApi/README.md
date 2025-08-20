# Employee Management API (ASP.NET Core - .NET 6)

This is a minimal, self-contained ASP.NET Core Web API example intended for learning, ATS-friendly resumes, and small demos. 
It uses **Entity Framework Core** with **SQL Server** as the data store and demonstrates CRUD endpoints, repository pattern, and basic configuration.

## What's included
- Minimal API project files (.csproj, Program.cs, Controllers, Models, Data, Repositories)
- SQL script to create database, table, and stored procedures (create_db.sql)
- README with step-by-step development and hosting instructions (this file)

## Prerequisites (local development)
- .NET 6 SDK installed: https://dotnet.microsoft.com/download/dotnet/6.0
- SQL Server (Express) or SQL Server Developer installed locally. Alternatively use Docker: `mcr.microsoft.com/mssql/server` image.
- Git (optional)
- Visual Studio 2022 / VS Code

## Run locally (quick)
1. Open a terminal in the project root.
2. (Optional) Update `appsettings.json` connection string or set environment variable `CONNECTION_STRING`.
3. Restore packages:
   ```
   dotnet restore
   ```
4. Create EF migrations and update database (requires dotnet-ef installed):
   ```
   dotnet tool install --global dotnet-ef
   dotnet ef migrations add InitialCreate
   dotnet ef database update
   ```
   Alternatively run the `create_db.sql` script against your SQL Server instance.
5. Run the app:
   ```
   dotnet run
   ```
6. Browse to `https://localhost:5001/swagger` (or http://localhost:5000) to see Swagger UI and test endpoints.

## Endpoints
- GET /api/employees
- GET /api/employees/<built-in function id>
- POST /api/employees
- PUT /api/employees/<built-in function id>
- DELETE /api/employees/<built-in function id>

## Stored Procedures
A `create_db.sql` is included with example stored procedures `sp_GetAllEmployees` and `sp_InsertEmployee` to demonstrate T-SQL usage and stored-proc integration.

## Hosting (free options & guidance)
Free hosting options change over time. As of the latest guidance, these providers are commonly used to host .NET apps for free or with free tiers:

- **Railway** - has templates and allows deploying .NET apps; good for quick free deployments and includes free PostgreSQL and other addons. (See Railway .NET starter/template). Refer: Railway .NET templates. 
- **Fly.io** - supports containerized .NET apps; good for small free VMs with limitations. Fly has documentation for .NET deployment. 
- **Render** - offers free web services for testing (subject to limitations) and supports container deployment. 
- **Azure** - Azure App Service has free/unpaid tiers for testing and offers a free account credit period; Azure SQL can host the database (free credits/tiers vary).

I researched current hosting options and guides while preparing this README — please consult the provider docs for exact free-tier limits and updated instructions. (See citations in the accompanying message.)

## Notes & Next steps
- For production, use secure connection strings, HTTPS, secrets manager, migrate to managed DB, add authentication, and configure CI/CD.
- If you'd like, I can provide a Dockerfile and GitHub Actions pipeline for automatic deployment to Fly/Railway/Render/Azure.

Happy coding!
