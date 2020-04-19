namespace PMS.Repository
{
    using Microsoft.AspNet.Identity.EntityFramework;
    using System;
    public class UserRoleMapping : IdentityRole
    {
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
    }
}
