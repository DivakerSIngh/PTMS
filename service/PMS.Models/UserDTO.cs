using System;

namespace PMS.Models
{
    public class UserDTO
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string UserName { get; set; }
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
        public int CreatedBy { get; set; }
        public int? UpdatedBy { get; set; }
        public bool IsActive { get; set; }

        public string UserType { get; set; }
    }
}
