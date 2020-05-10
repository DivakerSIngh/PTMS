using AutoMapper;
using Microsoft.AspNet.Identity;
using PMS.Models;
using System.Threading.Tasks;
using PMS.IRepository;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.AspNetCore.Http;

namespace PMS.Repository
{

    public class AccountRepository : IAccountRepository
    {
        private readonly IMapper _mapper;
        private readonly PMSDBContext _dbContext;
        private readonly ApplicationUserManager _userManager;
        private IHttpContextAccessor _httpContextAccessor;

       

        public AccountRepository(IMapper mapper, IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
            _mapper = mapper;
            _dbContext = new PMSDBContext();
            _userManager = new ApplicationUserManager(new UserStore<ApplicationUser>(new PMSDBContext()));
        }

        public async Task<IEnumerable<string>> RegisterUser(UserDTO user, string password)
        {
            IdentityResult identityResult = null;
            try
            {
                var appUser = new ApplicationUser()
                {
                    //FirstName = user.FirstName,
                    //LastName = user.LastName,
                    UserName = user.UserName,
                    EmailConfirmed = true,
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
                    RequiredLength = 6,
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



                identityResult = _userManager.Create(appUser, password);

                if (identityResult.Succeeded)
                {
                    var userDetails = _userManager.Find(appUser.UserName, password);
                    _userManager.AddToRoles(userDetails.Id, new string[] { user.UserType });
                    return identityResult.Errors;
                }


            }
            catch (System.Exception ex)
            {
                throw ex;
            }

            //return new CreateUserResponse(appUser.Id, identityResult.Succeeded, identityResult.Succeeded ? null : identityResult.Errors.Select(e => new Error(e.Code, e.Description)));
            return identityResult.Errors;
        }

        public async Task<UserDTO> FindAsync(string userName, string password)
        {
            var userDTO = new UserDTO();
            try
            {
                var applicationUser = _userManager.Find(userName, password);
                userDTO = _mapper.Map<UserDTO>(applicationUser);
            }
            catch (Exception ex)
            {

                throw ex;
            }


            return userDTO;
        }

        public IEnumerable<string> UpdateUser(UserDTO userDTO)
        {
            try
            {
                if (System.Web.HttpContext.Current.User.Identity.IsAuthenticated)
                {
                    var userId1 = System.Web.HttpContext.Current.User.Identity.GetUserId();
                }
                var userId = System.Web.HttpContext.Current.User.Identity.GetUserId();
                IdentityResult identityResult = null;
                var applicationUser = new ApplicationUser()
                {
                    Email = userDTO.Email,
                    Address1 = userDTO.Address1,
                    Address2 = userDTO.Address2,
                    City = userDTO.City,
                    FirstName = userDTO.FirstName,
                    LastName = userDTO.LastName,
                    UserName = userDTO.UserName,
                    State = userDTO.State,
                    PhoneNumber = userDTO.PhonePrimary,
                    PostalCode = userDTO.PostalCode,
                    PhoneSecondary = userDTO.PhoneSecondary,
                    UpdatedDate = DateTime.Now,
                    CreatedDate=DateTime.Now,
                    Id = userId
                };
                identityResult = _userManager.Update(applicationUser);
                return identityResult.Errors;
            }
            catch (Exception ex)
            {

                throw;
            }
            
        }
    }


}
