﻿using System.Web.Http;

namespace PMS.WebApi
{
    public static class WebApiConfig
    {
       
        public static void Register(HttpConfiguration config)
        {
           // EnableCorsAttribute cors = new EnableCorsAttribute("*", "*", "*");  
           // config.EnableCors(cors);  

            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

        }
    }

  
}
