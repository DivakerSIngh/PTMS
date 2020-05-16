using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Microsoft.Owin.Security.OAuth;
using Owin;
using System;
using PMS.WebApi.Provider;
using PMS.Repository;
using NLog;
using System.IO;
using System.Reflection;

[assembly: OwinStartup(typeof(PMS.WebApi.Startup))]

namespace PMS.WebApi
{
    public class Startup
    {
        public void ConfigureAuth(IAppBuilder app)
        {
            //for local project directory
             //System.Web.HttpContext.Current != null ?
             //                     AppDomain.CurrentDomain.BaseDirectory :
             //                      Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
            LogManager.LoadConfiguration(String.Concat(AppDomain.CurrentDomain.BaseDirectory, "/Nlog.config"));
            app.CreatePerOwinContext(PMSDBContext.Create);
            app.CreatePerOwinContext<ApplicationUserManager>(ApplicationUserManager.Create);
            app.CreatePerOwinContext<ApplicationRoleManager>(ApplicationRoleManager.Create);
            var OAuthOptions = new OAuthAuthorizationServerOptions
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/api/auth/login"),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(60),//token expiration time  
                Provider = new AuthProvider()
            };

            app.UseOAuthBearerTokens(OAuthOptions);
            app.UseOAuthAuthorizationServer(OAuthOptions);
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());
            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);
            //app.UseCors(CorsOptions.AllowAll);//this is very important line cross orgin source(CORS)it is used to enable cross-site HTTP requests    
        }


        public void Configuration(IAppBuilder app)
        {
            //todo later
            // Use a cookie to temporarily store information about a user logging in with a third party login provider
           // app.UseExternalSignInCookie(DefaultAuthenticationTypes.ExternalCookie);

            // Enables the application to temporarily store user information when they are verifying the second factor in the two-factor authentication process.
           // app.UseTwoFactorSignInCookie(DefaultAuthenticationTypes.TwoFactorCookie, TimeSpan.FromMinutes(5));

            // Enables the application to remember the second login verification factor such as phone or email.
            // Once you check this option, your second step of verification during the login process will be remembered on the device where you logged in from.
            // This is similar to the RememberMe option when you log in.
           // app.UseTwoFactorRememberBrowserCookie(DefaultAuthenticationTypes.TwoFactorRememberBrowserCookie);

            // Enable the application to use bearer tokens to authenticate users
           // app.UseOAuthBearerTokens(OAuthOptions);

            // Uncomment the following lines to enable logging in with third party login providers
            //app.UseMicrosoftAccountAuthentication(
            //    clientId: "",
            //    clientSecret: "");

            //app.UseTwitterAuthentication(
            //    consumerKey: "",
            //    consumerSecret: "");

            //app.UseFacebookAuthentication(
            //    appId: "",
            //    appSecret: "");

            //app.UseGoogleAuthentication(new GoogleOAuth2AuthenticationOptions()
            //{
            //    ClientId = "",
            //    ClientSecret = ""
            //});
            ConfigureAuth(app);
        }
    }


}
