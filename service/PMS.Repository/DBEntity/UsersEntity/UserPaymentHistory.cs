using PMS.Repository;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PMS.Repository
{
   public class UserPaymentHistory :BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }


        [ForeignKey("UserId")]
        public ApplicationUser User { get; set; }
        public string UserId { get; set; }


        [ForeignKey("SubscriptionPlanMaster")]
        public int SubscriptionPlanId { get; set; }
        public decimal Amount { get; set; }

        public SubscriptionPlanMaster SubscriptionPlanMaster { get; set; }
    }
}
