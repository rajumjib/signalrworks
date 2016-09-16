using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

using LiveStock.Core.Domain.Models;

namespace LiveStock.DAL.EntityFramework
{
    public class SystemManagementContext : UserManagementContext
    {

        public DbSet<DevTest> DevTests { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

            modelBuilder.Entity<DevTest>().ToTable("DevTest");

            base.OnModelCreating(modelBuilder);
        }
    }
}
