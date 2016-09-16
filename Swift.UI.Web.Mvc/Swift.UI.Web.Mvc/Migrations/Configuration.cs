namespace Swift.UI.Web.Mvc.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    using LiveStock.Core.Domain.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<LiveStock.DAL.EntityFramework.SystemManagementContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(LiveStock.DAL.EntityFramework.SystemManagementContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            context.UserDatas.AddOrUpdate(UsersData.SeedData());
        }
    }
}
