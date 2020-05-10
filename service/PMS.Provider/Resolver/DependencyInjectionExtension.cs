using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using PMS.IProvider;
using PMS.IRepository;
using Unity.Extension;
using PMS.Repository;
using Unity;
using PMS.Framework;
using System;
using System.Reflection;
using System.Linq;
using System.ServiceModel;
using Microsoft.AspNetCore.Http;

namespace PMS.Provider.Resolver
{
    public class DependencyInjectionExtension : UnityContainerExtension
    {
        protected override void Initialize()
        {
            var mapper = new AutoMapperConfig().Initialize().CreateMapper();
            Container.RegisterInstance(mapper);           
            Container.RegisterType<ILoggerManager, LoggerManager>();
            Container.RegisterType(typeof(IPMSRepository<>), typeof(PMSRepository<>));
            Container.RegisterType<IAccountRepository, AccountRepository>();           
            Container.RegisterType<IAccountProvider, AccountProvider>();
            Container.RegisterType<IHttpContextAccessor, HttpContextAccessor>();
            Container.RegisterType<IUserStore<ApplicationUser>, UserStore<ApplicationUser>>();
            Container.RegisterType<UserManager<ApplicationUser>, UserManager<ApplicationUser>>();




            //var container = new UnityContainer();
            //var repositoryAssembly = AppDomain.CurrentDomain.GetAssemblies()
            //    .First(a => a.FullName == "PMS.Repository, Version=X.X.X.X, Culture=neutral, PublicKeyToken=null");
           
            //var IrepositoryAssembly = AppDomain.CurrentDomain.GetAssemblies()
            //   .First(a => a.FullName == "PMS.IRepository, Version=X.X.X.X, Culture=neutral, PublicKeyToken=null");


            //Container.RegisterType(IrepositoryAssembly.GetType().GetInterfaces().Where(x=>x.FullName.Contains("Repository")),repositoryAssembly.GetTypes().Where(x => x.FullName.Contains("Repository")),);


        }
    }
}
