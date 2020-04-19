namespace PMS.Repository
{
    using Microsoft.AspNet.Identity.EntityFramework;
    using System;
    public class UserLogin:IdentityUserLogin
    {
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
