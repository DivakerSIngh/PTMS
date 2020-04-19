namespace PMS.Repository
{
    using Microsoft.AspNet.Identity.EntityFramework;
    using System;
    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser()
        {

        }
        public override string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string PostalCode { get; set; }
        public string PhonePrimary { get; set; }
        public string PhoneSecondary { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string CreatedBy { get; set; }
        public int? UpdatedBy { get; set; }
        public bool IsActive { get; set; }
        public string Image { get; set; }
    }
}
