namespace PMS.Repository.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class newdbcreated : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.RoleMaster",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 256),
                        CreatedDate = c.DateTime(),
                        UpdatedDate = c.DateTime(),
                        CreatedBy = c.String(),
                        UpdatedBy = c.String(),
                        Discriminator = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name, unique: true, name: "RoleNameIndex");
            
            CreateTable(
                "dbo.UserRoleMapping",
                c => new
                    {
                        UserId = c.String(nullable: false, maxLength: 128),
                        RoleId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.UserId, t.RoleId })
                .ForeignKey("dbo.RoleMaster", t => t.RoleId, cascadeDelete: true)
                .ForeignKey("dbo.ApplicationUser", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId)
                .Index(t => t.RoleId);
            
            CreateTable(
                "dbo.SubscriptionPlanMasters",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        PlanName = c.String(),
                        PlanDescription = c.String(),
                        ExpireInDays = c.Int(nullable: false),
                        CreatedDate = c.DateTime(nullable: false),
                        UpdatedDate = c.DateTime(nullable: false),
                        CreatedBy = c.String(),
                        UpdatedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.UserPaymentHistories",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.String(maxLength: 128),
                        SubscriptionPlanId = c.Int(nullable: false),
                        Amount = c.Decimal(nullable: false, precision: 18, scale: 2),
                        CreatedDate = c.DateTime(nullable: false),
                        UpdatedDate = c.DateTime(nullable: false),
                        CreatedBy = c.String(),
                        UpdatedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.SubscriptionPlanMasters", t => t.SubscriptionPlanId, cascadeDelete: true)
                .ForeignKey("dbo.ApplicationUser", t => t.UserId)
                .Index(t => t.UserId)
                .Index(t => t.SubscriptionPlanId);
            
            CreateTable(
                "dbo.ApplicationUser",
                c => new
                    {
                        UserId = c.String(nullable: false, maxLength: 128),
                        Email = c.String(maxLength: 256),
                        EmailConfirmed = c.Boolean(nullable: false),
                        PasswordHash = c.String(),
                        SecurityStamp = c.String(),
                        PhoneNumber = c.String(),
                        PhoneNumberConfirmed = c.Boolean(nullable: false),
                        TwoFactorEnabled = c.Boolean(nullable: false),
                        LockoutEndDateUtc = c.DateTime(),
                        LockoutEnabled = c.Boolean(nullable: false),
                        AccessFailedCount = c.Int(nullable: false),
                        UserName = c.String(nullable: false, maxLength: 256),
                        FirstName = c.String(),
                        LastName = c.String(),
                        Address1 = c.String(),
                        Address2 = c.String(),
                        City = c.String(),
                        State = c.String(),
                        PostalCode = c.String(),
                        PhonePrimary = c.String(),
                        PhoneSecondary = c.String(),
                        CreatedDate = c.DateTime(),
                        UpdatedDate = c.DateTime(),
                        CreatedBy = c.String(),
                        UpdatedBy = c.Int(),
                        IsActive = c.Boolean(),
                        Image = c.String(),
                        Discriminator = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => t.UserId)
                .Index(t => t.UserName, unique: true, name: "UserNameIndex");
            
            CreateTable(
                "dbo.UserClaims",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.String(nullable: false, maxLength: 128),
                        ClaimType = c.String(),
                        ClaimValue = c.String(),
                        CreatedDate = c.DateTime(),
                        UpdatedDate = c.DateTime(),
                        CreatedBy = c.String(),
                        UpdatedBy = c.String(),
                        Discriminator = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ApplicationUser", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.UserLogins",
                c => new
                    {
                        LoginProvider = c.String(nullable: false, maxLength: 128),
                        ProviderKey = c.String(nullable: false, maxLength: 128),
                        UserId = c.String(nullable: false, maxLength: 128),
                        CreatedDate = c.DateTime(),
                        UpdatedDate = c.DateTime(),
                        CreatedBy = c.String(),
                        UpdatedBy = c.String(),
                        Discriminator = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.LoginProvider, t.ProviderKey, t.UserId })
                .ForeignKey("dbo.ApplicationUser", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.UserRoleMapping", "UserId", "dbo.ApplicationUser");
            DropForeignKey("dbo.UserLogins", "UserId", "dbo.ApplicationUser");
            DropForeignKey("dbo.UserClaims", "UserId", "dbo.ApplicationUser");
            DropForeignKey("dbo.UserPaymentHistories", "UserId", "dbo.ApplicationUser");
            DropForeignKey("dbo.UserPaymentHistories", "SubscriptionPlanId", "dbo.SubscriptionPlanMasters");
            DropForeignKey("dbo.UserRoleMapping", "RoleId", "dbo.RoleMaster");
            DropIndex("dbo.UserLogins", new[] { "UserId" });
            DropIndex("dbo.UserClaims", new[] { "UserId" });
            DropIndex("dbo.ApplicationUser", "UserNameIndex");
            DropIndex("dbo.UserPaymentHistories", new[] { "SubscriptionPlanId" });
            DropIndex("dbo.UserPaymentHistories", new[] { "UserId" });
            DropIndex("dbo.UserRoleMapping", new[] { "RoleId" });
            DropIndex("dbo.UserRoleMapping", new[] { "UserId" });
            DropIndex("dbo.RoleMaster", "RoleNameIndex");
            DropTable("dbo.UserLogins");
            DropTable("dbo.UserClaims");
            DropTable("dbo.ApplicationUser");
            DropTable("dbo.UserPaymentHistories");
            DropTable("dbo.SubscriptionPlanMasters");
            DropTable("dbo.UserRoleMapping");
            DropTable("dbo.RoleMaster");
        }
    }
}
