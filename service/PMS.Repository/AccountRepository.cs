using AutoMapper;
using Microsoft.AspNet.Identity;
using PMS.Models;
using System.Threading.Tasks;
using PMS.IRepository;
using Microsoft.AspNet.Identity.EntityFramework;
using System;

namespace PMS.Repository
{

    public class AccountRepository : IAccountRepository
    {
        private readonly IMapper _mapper;
        private readonly PMSDBContext _dbContext;
        private readonly ApplicationUserManager _userManager;


        public AccountRepository()
        {
            _dbContext = new PMSDBContext();
            _userManager = new ApplicationUserManager(new UserStore<ApplicationUser>(new PMSDBContext()));
        }

        public async Task<bool> RegisterUser(UserDTO user, string password)
        {
            try
            {
                var appUser = new ApplicationUser()
                {
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    UserName = user.UserName,
                    EmailConfirmed = true,
                    Address1 = user.Address1,
                    Email = user.Email,
                    CreatedDate = DateTime.Now
                };

                #region user manager validater configuration customized

                // Configure validation logic for usernames 
                _userManager.UserValidator = new UserValidator<ApplicationUser, string>(_userManager)
                {
                    AllowOnlyAlphanumericUserNames = false,
                    RequireUniqueEmail = true
                };
                // Configure validation logic for passwords 
                _userManager.PasswordValidator = new PasswordValidator
                {
                    RequiredLength = 10,
                    RequireNonLetterOrDigit = true,
                    RequireDigit = true,
                    RequireLowercase = true,
                    RequireUppercase = true,
                };
                // Register two factor authentication providers. This application uses Phone 
                // and Emails as a step of receiving a code for verifying the user 
                // You can write your own provider and plug in here. 
                _userManager.RegisterTwoFactorProvider("PhoneCode",
                    new PhoneNumberTokenProvider<ApplicationUser, string>
                    {
                        MessageFormat = "Your security code is: {0}"
                    });
                _userManager.RegisterTwoFactorProvider("EmailCode",
                    new EmailTokenProvider<ApplicationUser, string>
                    {
                        Subject = "Security Code",
                        BodyFormat = "Your security code is: {0}"
                    });
                //manager.EmailService = new EmailService();
                //manager.SmsService = new SmsService();  //todo later
                //var dataProtectionProvider = options.DataProtectionProvider;
                //if (dataProtectionProvider != null)
                //{
                //    manager.UserTokenProvider =
                //        new DataProtectorTokenProvider<ApplicationUser, string>(
                //            dataProtectionProvider.Create("ASP.NET Identity"));
                //}
                #endregion

                var identityResult = _userManager.Create(appUser, password);

                if (identityResult.Succeeded)
                {
                    var userDetails = _userManager.Find(appUser.UserName, password);

                    _userManager.AddToRoles(userDetails.Id, new string[] { "Employee" });
                }

            }
            catch (System.Exception ex)
            {
                throw ex;
            }

            //return new CreateUserResponse(appUser.Id, identityResult.Succeeded, identityResult.Succeeded ? null : identityResult.Errors.Select(e => new Error(e.Code, e.Description)));
            return true;
        }

        public async Task<UserDTO> FindAsync(string userName, string password)
        {
            var applicationUser = await _userManager.FindAsync(userName, password);
            var userDTO = _mapper.Map<UserDTO>(applicationUser);

            return userDTO;
        }
    }


}
