using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Identity;
using System.Text;
using Microsoft.OpenApi.Models;
using EarthlyTeaTalesAPI.Services;
using EarthlyTeaTalesAPI.Models;
using System.Text.Json.Serialization;
using EarthlyTeaTalesAPI.Repository;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(option =>
{
    option.SwaggerDoc("v1", new OpenApiInfo { Title = "SwaggerAPI", Version = "v1" });
    option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please enter a valid token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "Bearer"
    });
    option.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type=ReferenceType.SecurityScheme,
                    Id="Bearer"
                }
            },
            new string[]{}
        }
    });
});

builder.Services.AddProblemDetails();
builder.Services.AddApiVersioning();
builder.Services.AddRouting(options => options.LowercaseUrls = true);

// Add DB Contexts
// make another project to handle db
//builder.Services.AddDbContext<ApplicationDbContext>();

try
{ //DB initalization
    DBInitalizationService initDB = new DBInitalizationService();
    initDB.Setup();
}
catch (Exception) 
{
    Console.WriteLine("DB Set Up Failed");
}

// Register our TokenService dependency
builder.Services.AddScoped<TokenService, TokenService>();
builder.Services.AddTransient<IUserStore<ApplicationUser>, EarthlyTeaTalesUserRepository>();

// Support string to enum conversions
builder.Services.AddControllers().AddJsonOptions(opt =>
{
    opt.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
});

// Specify identity requirements
// Must be added before .AddAuthentication otherwise a 404 is thrown on authorized endpoints
builder.Services
.AddIdentity<ApplicationUser, IdentityRole>(options =>
    {
        options.SignIn.RequireConfirmedAccount = false;
        options.User.RequireUniqueEmail = true;
        options.Password.RequireDigit = false;
        options.Password.RequiredLength = 6;
        options.Password.RequireNonAlphanumeric = false;
        options.Password.RequireUppercase = false;
    })
    .AddRoleStore<EarthlyTeaTalesUserRepository>()
    .AddRoles<IdentityRole>()
    .AddUserStore<EarthlyTeaTalesUserRepository>()
    .AddUserManager<EarthlyTeaTalesUserManager>();

//.AddEntityFrameworkStores<ApplicationDbContext>();

// These will eventually be moved to a secrets file, but for alpha development appsettings is fine
string? validIssuer = builder.Configuration.GetValue<string>("JwtTokenSettings:ValidIssuer");
string? validAudience = builder.Configuration.GetValue<string>("JwtTokenSettings:ValidAudience");
string? symmetricSecurityKey = builder.Configuration.GetValue<string>("JwtTokenSettings:SymmetricSecurityKey");

if (symmetricSecurityKey is not null)
{
    builder.Services.AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
    }).AddJwtBearer(options =>
        {
            options.IncludeErrorDetails = true;
            options.TokenValidationParameters = new TokenValidationParameters()
            {
                ClockSkew = TimeSpan.Zero,
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = validIssuer,
                ValidAudience = validAudience,
                IssuerSigningKey = new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes((string)symmetricSecurityKey)
                ),
            };
        });
}
else 
{
    Console.WriteLine("No JWT tocken Symmetric Security Key");
    throw new Exception("No JWT tocken Symmetric Security Key");
}

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStatusCodePages();

app.UseAuthentication(); // allowing people to log in
app.UseAuthorization(); // giveing them access

app.MapControllers();

app.Run();