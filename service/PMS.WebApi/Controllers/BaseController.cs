using PMS.Framework;
using System.Web.Http;

namespace PMS.WebApi.Controllers
{
    public class BaseController: ApiController
    {
        protected readonly ILoggerManager Logger;
        public BaseController()
        {
           // Logger = logger;
        }
    }
}