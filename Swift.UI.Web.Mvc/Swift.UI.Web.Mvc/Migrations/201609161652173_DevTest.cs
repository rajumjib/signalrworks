namespace Swift.UI.Web.Mvc.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DevTest : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.DevTest",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        CampaignName = c.String(maxLength: 255),
                        Date = c.DateTime(nullable: true),
                        Clicks = c.Int(nullable: true),
                        Conversions = c.Int(nullable: true),
                        Impressions = c.Int(nullable: true),
                        AffiliateName = c.String(maxLength: 255),
                        Arrange = c.Int(nullable: false),
                        UserDataId = c.Int(nullable: false),
                        EntryDate = c.DateTime(nullable: false),
                        TimeStamp = c.Binary(nullable: false, fixedLength: true, timestamp: true, storeType: "rowversion"),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.UsersData", t => t.UserDataId)
                .Index(t => t.UserDataId);
            
            CreateTable(
                "dbo.UsersData",
                c => new
                    {
                        UserDataId = c.Int(nullable: false, identity: true),
                        UserName = c.String(nullable: false, maxLength: 250),
                        Arrange = c.Int(nullable: false),
                        EntryDate = c.DateTime(nullable: false),
                        TimeStamp = c.Binary(nullable: false, fixedLength: true, timestamp: true, storeType: "rowversion"),
                    })
                .PrimaryKey(t => t.UserDataId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.DevTest", "UserDataId", "dbo.UsersData");
            DropIndex("dbo.DevTest", new[] { "UserDataId" });
            DropTable("dbo.UsersData");
            DropTable("dbo.DevTest");
        }
    }
}
