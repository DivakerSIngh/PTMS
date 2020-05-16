using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security.OAuth;
using PMS.Repository;
using System;
using System.Security.Claims;
using System.Threading.Tasks;

namespace PMS.WebApi.Provider
{
    public class AuthProvider : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }
        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            ApplicationUser user = null;

            var userManager = context.OwinContext.GetUserManager<ApplicationUserManager>();

            user = await userManager.FindByEmailAsync(context.UserName);
            //if login with email else default username
            if (user != null)
            {
                user = await userManager.FindAsync(user.UserName, context.Password);
            }
            else
            {
                user = await userManager.FindAsync(context.UserName, context.Password);
            }

            if (user != null)
            {
                try
                {
                    var userRole = await userManager.GetRolesAsync(user.Id);
                    var role = string.Join(",", userRole);
                    // var identity = new ClaimsIdentity(context.Options.AuthenticationType);
                    var identity = await userManager.CreateIdentityAsync(user, DefaultAuthenticationTypes.ApplicationCookie);
                    identity.AddClaim(new Claim("UserName", user.UserName));
                    identity.AddClaim(new Claim("UserId", user.Id));
                    //identity.AddClaim(new Claim("FirstName", user?.FirstName));
                    identity.AddClaim(new Claim(ClaimTypes.Role, role));
                    identity.AddClaim(new Claim("LoggedOn", DateTime.Now.ToString()));
                    context.Validated(identity);
                }
                catch (Exception ex)
                {
                    context.SetError("server_error", ex.Message);
                    context.Rejected();
                    return;
                }
            }
            else
            {
                context.SetError("invalid_grant", "Invalid User Id or password'");
                context.Rejected();
            }

        }
    }
}