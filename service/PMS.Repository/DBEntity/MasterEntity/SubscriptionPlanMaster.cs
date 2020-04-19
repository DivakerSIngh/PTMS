using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace PMS.Repository
{
   public class SubscriptionPlanMaster : BaseEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string PlanName { get; set; }
        public string PlanDescription { get; set; }
        public int ExpireInDays { get; set; }
    }
}
