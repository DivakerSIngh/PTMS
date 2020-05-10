using PMS.Framework;
using PMS.IProvider;
using PMS.Models;
using System.Collections.Generic;
using System.Web.Http;
using System.Threading.Tasks;
using System.Linq;
using System.Net;

namespace PMS.WebApi.Controllers
{
    [RoutePrefix("api/user")]
  
    public class AccountController : BaseController
    {
        private readonly IAccountProvider _userProvider;
        protected readonly ILoggerManager _ILogger;
        public AccountController(IAccountProvider userProvider, ILoggerManager Logger) : base()
        {
            _ILogger = Logger;
            _userProvider = userProvider;
        }
       
        [Route("get")]
        [HttpGet]
        [AllowAnonymous]
        public IHttpActionResult Test(string username,string password)
        {
            return Ok(new { username, password });
        }


        #region User Manage Public Methods
        [HttpPost]
        [Route("register")]
        [AllowAnonymous]
        public async Task<IHttpActionResult> Register([FromBody]UserDTO userDTO)
        {
            try
            {
                var data = await _userProvider.RegisterUser(userDTO, userDTO.Password);
                var response = new Response()
                {
                    Code = (int)(data.Count()>0?HttpStatusCode.BadRequest: HttpStatusCode.Created),
                    Status = (data.Count() > 0 ? HttpStatusCode.BadRequest : HttpStatusCode.Created).ToString(),
                    Result = data
                };
                return Ok(response);
            }
            catch (System.Exception ex)
            {
                _ILogger.Error(ex.Message, ex);
                return InternalServerError();
            }

        }


        [HttpPost]
        [Route("update")]
        [Authorize(Roles ="Author,Learner")]
        public IHttpActionResult UpdateUserPrfile([FromBody]UserDTO userDTO)
        {
            try
            {
                //var name = User.Identity.cl;
                var data = _userProvider.UpdateUser(userDTO);
                var response = new Response()
                {
                    Code = (int)(data.Count() > 0 ? HttpStatusCode.BadRequest : HttpStatusCode.Created),
                    Status = (data.Count() > 0 ? HttpStatusCode.BadRequest : HttpStatusCode.Created).ToString(),
                    Result = data
                };
                return Ok(response);
            }
            catch (System.Exception ex)
            {
                _ILogger.Error(ex.Message, ex);
                return InternalServerError();
            }

        }
        #endregion

    }
}
