using EarthlyTeaTalesAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace EarthlyTeaTalesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : Controller
    {
        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> RegisterAsync()
        {
            return View();
        }


        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<AuthResponse>> Authenticate() 
        {
        }



    }
}
