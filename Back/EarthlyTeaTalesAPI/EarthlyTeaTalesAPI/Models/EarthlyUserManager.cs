using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

namespace EarthlyTeaTalesAPI.Models
{
    public class EarthlyTeaTalesUserManager : Microsoft.AspNetCore.Identity.UserManager<ApplicationUser>
    {
        public EarthlyTeaTalesUserManager(
            IUserStore<ApplicationUser> store, 
            IOptions<IdentityOptions> optionsAccessor, 
            IPasswordHasher<ApplicationUser> passwordHasher, 
            IEnumerable<IUserValidator<ApplicationUser>> userValidators, 
            IEnumerable<IPasswordValidator<ApplicationUser>> passwordValidators, 
            ILookupNormalizer keyNormalizer, IdentityErrorDescriber errors, 
            IServiceProvider services, 
            ILogger<UserManager<ApplicationUser>> logger) 
            : base(store, optionsAccessor, passwordHasher, userValidators, passwordValidators, keyNormalizer, errors, services, logger)
        {
        }
    }
}
