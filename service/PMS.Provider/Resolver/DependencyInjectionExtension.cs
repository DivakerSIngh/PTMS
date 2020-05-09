using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using PMS.IProvider;
using PMS.IRepository;
using Unity.Extension;
using PMS.Repository;
using Unity;
using PMS.Framework;

namespace PMS.Provider.Resolver
{
    public class DependencyInjectionExtension : UnityContainerExtension
    {
        protected override void Initialize()
        {
            //var mapper = MappingProfile.InitializeAutoMapper().CreateMapper();
            // Container.RegisterType<IdentityDbContext<ApplicationUser>, ApplicationDbContext>();
            //Container.RegisterInstance<ILogger>(new Logger());
            Container.RegisterType<ILogger, Logger>();
            Container.RegisterType(typeof(IPMSRepository<>), typeof(PMSRepository<>));
            Container.RegisterType<IAccountRepository, AccountRepository>();           
            Container.RegisterType<IAccountProvider, AccountProvider>();
            Container.RegisterType<IUserStore<ApplicationUser>, UserStore<ApplicationUser>>();
            Container.RegisterType<UserManager<ApplicationUser>, UserManager<ApplicationUser>>();
            //Container.RegisterInstance<IMapper>(mapper);
        }
    }
}
