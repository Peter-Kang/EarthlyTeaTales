using EarthlyTeaTalesAPI.Models;
using System.Text;

namespace EarthlyTeaTalesAPI.Services
{
    public class UserService
    {
        private readonly ILogger<TokenService> _logger;

        public UserService(ILogger<TokenService> logger) 
        {
            _logger = logger;
        }
    }
}