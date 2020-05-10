using System.Web.Http;
using Unity;
using System.Web.Http.Dependencies;
using System;
using System.Collections.Generic;
using PMS.Provider.Resolver;
using PMS.Framework;
using AutoMapper;

namespace PMS.WebApi
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
            var container = new UnityContainer();
            container.AddNewExtension<DependencyInjectionExtension>();
            container.RegisterInstance<IUnityContainer>(container);
          
            GlobalConfiguration.Configuration.DependencyResolver = new UnityResolver(container);
        }
    }

    public class UnityResolver : IDependencyResolver
    {
        private readonly IUnityContainer _container;

        public UnityResolver(IUnityContainer container)
        {
            _container = container;
        }


        public object GetService(Type serviceType)
        {
            try
            {
                return _container.Resolve(serviceType);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            try
            {
                return _container.ResolveAll(serviceType);
            }
            catch (Exception e)
            {
                return new List<object>();
            }
        }

        public IDependencyScope BeginScope()
        {
            var child = _container.CreateChildContainer();
            return new UnityResolver(child);
        }

        public void Dispose()
        {
            _container.Dispose();
        }

       
    }
}