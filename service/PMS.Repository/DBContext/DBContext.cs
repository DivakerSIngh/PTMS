using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;

namespace PMS.Repository
{
    public class PMSDBContext : IdentityDbContext
    {
        public PMSDBContext()
       : base("pm_entity")
        {
        }
        public static PMSDBContext Create()
        {
            return new PMSDBContext();
        }
        public virtual DbSet<SubscriptionPlanMaster> SubscriptionPlanMaster { get; set; }
        public virtual DbSet<UserPaymentHistory> UserPaymentHistory { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<IdentityUser>().ToTable("ApplicationUser");
            modelBuilder.Entity<IdentityUser>().ToTable("ApplicationUser").Property(p => p.Id).HasColumnName("UserId");
            modelBuilder.Entity<IdentityUserRole>().ToTable("UserRoleMapping");
            modelBuilder.Entity<IdentityUserLogin>().ToTable("UserLogins");
            modelBuilder.Entity<IdentityUserClaim>().ToTable("UserClaims");
            modelBuilder.Entity<IdentityRole>().ToTable("RoleMaster");
        }
    }
}
