﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

using LiveStock.Core.Domain.Models;

namespace LiveStock.DAL.EntityFramework
{
    public class UserManagementContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx

        public UserManagementContext()
            : base("name=LiveStockConnection")
        {
        }

        public DbSet<UserData> UserDatas { get; set; }
        
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();

            var schemaName = "lsdataapp";
            //var schemaName = "lsdatatest";

            modelBuilder.HasDefaultSchema(schemaName);

            modelBuilder.Entity<UserData>().ToTable("UsersData");

            base.OnModelCreating(modelBuilder);
        }

    }
}