using EarthlyTeaTalesAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

namespace EarthlyTeaTalesAPI.Repository
{
    public class EarthlyTeaTalesUserManager : UserManager<ApplicationUser>
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

        public override async Task<IdentityResult> CreateAsync(ApplicationUser user) 
        {
            CancellationToken tok = new CancellationToken();
            //cancelToken.IsCancellationRequested check at some point
            return await Store.CreateAsync(user, tok);
        }

        public override async Task<bool> CheckPasswordAsync(ApplicationUser user, string password)
        {//Make a DB Call..
            return await ((EarthlyTeaTalesUserRepository)Store).isPasswordValid(user, password);
        }
    }
}
