using PMS.Framework;
using System.Web.Http;

namespace PMS.WebApi.Controllers
{
    public class BaseController: ApiController
    {
        protected readonly ILogger Logger;
        public BaseController(ILogger logger)
        {
            Logger = logger;
        }
    }
}