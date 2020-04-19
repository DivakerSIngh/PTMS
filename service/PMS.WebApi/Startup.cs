using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Microsoft.Owin.Security.OAuth;
using Owin;
using System;
using PMS.WebApi.Provider;
using PMS.Repository;

[assembly: OwinStartup(typeof(PMS.WebApi.Startup))]

namespace PMS.WebApi
{
    public class Startup
    {
        public void ConfigureAuth(IAppBuilder app)
        {
            app.CreatePerOwinContext(PMSDBContext.Create);
            app.CreatePerOwinContext<ApplicationUserManager>(ApplicationUserManager.Create);
            app.CreatePerOwinContext<ApplicationRoleManager>(ApplicationRoleManager.Create);
            var OAuthOptions = new OAuthAuthorizationServerOptions
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/auth/login"),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(60),//token expiration time  
                Provider = new AuthProvider()
            };

            app.UseOAuthBearerTokens(OAuthOptions);
            app.UseOAuthAuthorizationServer(OAuthOptions);
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());
            app.UseCors(CorsOptions.AllowAll);//this is very important line cross orgin source(CORS)it is used to enable cross-site HTTP requests    
        }


        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }


}
