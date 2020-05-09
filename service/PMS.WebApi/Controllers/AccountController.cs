using PMS.Framework;
using PMS.IProvider;
using PMS.Models;
using System.Collections.Generic;
using System.Web.Http;

namespace PMS.WebApi.Controllers
{
    [RoutePrefix("api/value")]
  
    public class AccountController : BaseController
    {
        private readonly IAccountProvider _userProvider;
        protected readonly ILogger _ILogger;
        public AccountController(IAccountProvider userProvider, ILogger Logger) : base()
        {
            _ILogger = Logger;
               _userProvider = userProvider;
        }
        // GET api/values
        [Route("get")]
        [HttpGet]
        public IEnumerable<string> Get()
        {
            Logger.Error("test error");
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        [Route("create")]
        public IHttpActionResult Post([FromBody]UserDTO  userDTO)
        {
            
            var created=_userProvider.RegisterUser(userDTO, userDTO.Password);
            return Ok(true);
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
