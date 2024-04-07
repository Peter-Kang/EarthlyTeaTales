using System.ComponentModel.DataAnnotations;
using EarthlyTeaTalesAPI.Enums;

namespace EarthlyTeaTalesAPI.Models.Request
{
    public class RegistrationRequest
    {
        [Required]
        public string? Email { get; set; }

        [Required]
        public string? Password { get; set; }
    }
}
