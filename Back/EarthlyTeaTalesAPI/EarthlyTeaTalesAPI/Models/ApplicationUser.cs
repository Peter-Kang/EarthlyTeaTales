using EarthlyTeaTalesAPI.Enums;
using Microsoft.AspNetCore.Identity;

namespace EarthlyTeaTalesAPI.Models
{
    public class ApplicationUser : IdentityUser
    {
        public Role Role { get; set; }
    }
}