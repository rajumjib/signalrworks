using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Data.Entity;
using System.Data.Entity.Infrastructure;

using LiveStock.Core.Domain.Models;
using LiveStock.DAL.EntityFramework;
using LiveStock.Core.Repository;

namespace LiveStock.DAL.Repository
{
    public partial class UnitOfWorkRepository : IUnitOfWorkRepository
    {
        private DbContext db;

        public UnitOfWorkRepository()
        {
            db = new SystemManagementContext();
        }

        public UnitOfWorkRepository(DbContext context)
        {
            db = context;
        }

        public async Task CommitAsync()
        {
            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
            }
        }

        public void Commit()
        {
            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
            }
        }
    }
}
