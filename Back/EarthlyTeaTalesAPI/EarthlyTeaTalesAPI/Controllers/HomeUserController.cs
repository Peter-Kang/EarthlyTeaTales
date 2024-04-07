using EarthlyTeaTalesAPI.Enums;
using EarthlyTeaTalesAPI.Models;
using EarthlyTeaTalesAPI.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Win32;
using EarthlyTeaTalesAPI.Repository;
using EarthlyTeaTalesAPI.Models.Request;
using EarthlyTeaTalesAPI.Models.Response;

namespace EarthlyTeaTalesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : Controller
    {
        private readonly EarthlyTeaTalesUserManager _userManager;
        private readonly TokenService _tokenService;

        public UsersController(EarthlyTeaTalesUserManager userManager, TokenService tokenService, ILogger<UsersController> logger)
        {
            _userManager = userManager;
            _tokenService = tokenService;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> RegisterAsync(RegistrationRequest request)
        {
            //Move this into a service at some point
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            IdentityResult? result = await _userManager.CreateAsync(
                new ApplicationUser { Email = request.Email, PasswordHash=request.Password }
            );

            if (result.Succeeded)
            {
                request.Password = "";
                return CreatedAtAction(nameof(RegisterAsync), new { email = request.Email }, request);
            }

            foreach (IdentityError error in result.Errors)
            {
                ModelState.AddModelError(error.Code, error.Description);
            }

            return BadRequest(ModelState);
        }

        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<AuthResponse>> AuthenticateAsync([FromBody] AuthRequest request) 
        {
            //Move this into a service at some point
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            ApplicationUser managedUser = new ApplicationUser() {Email = request.Email, PasswordHash = request.Password };
            bool isPasswordValid = await _userManager.CheckPasswordAsync(managedUser, request.Password!);
            if (!isPasswordValid)
            {
                return BadRequest("Bad credentials");
            }
             
            if (managedUser is null)
            {
                return Unauthorized();
            }

            string accessToken = _tokenService.CreateToken(managedUser);

            return Ok(new AuthResponse
            {
                Email = managedUser.Email!,
                Token = accessToken,
            });
        }
    }
}
