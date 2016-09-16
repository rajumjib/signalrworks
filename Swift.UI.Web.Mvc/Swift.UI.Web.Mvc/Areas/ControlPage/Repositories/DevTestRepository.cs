using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Expressions;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

using LiveStock.Core.Domain.Models;
using LiveStock.Core.Repository;
using LiveStock.DAL.EntityFramework;

namespace LiveStock.DAL.Repository.EntityFramework
{
    public partial class DevTestRepository : IDevTestRepository
    {
        private SystemManagementContext db;

        public DevTestRepository()
        {
            db = new SystemManagementContext();
        }

        public DevTestRepository(SystemManagementContext db)
        {
            this.db = db;
        }

        public async Task<List<DevTest>> GetAsync()
        {
            return await db.DevTests.ToListAsync();
        }

        public async Task<DevTest> GetAsync(int id)
        {
            return await db.DevTests.FindAsync(id);
        }

        public async Task<DevTest> SaveAsync(DevTest devTest)
        {
            devTest = await PreserveAsync(devTest);
            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
            }
            return devTest;
        }

        public async Task<DevTest> PreserveAsync(DevTest devTest)
        {
            var id = devTest.Id;
            if (await isExistsAsync(id))
            {
                db.Entry(devTest).State = EntityState.Modified;
            }
            else
            {
                db.DevTests.Add(devTest);
            }
            /*
            var found = await db.DevTests.FindAsync(id);
            if (found == null)
            {
                db.DevTests.Add(devTest);
            }
            else
            {
                found.Update(devTest);
                //db.DevTests.Attach(devTest);
                db.Entry(found).State = EntityState.Modified;
            }
            */

            return devTest;
        }

        public async Task<DevTest> InsertAsync(DevTest devTest)
        {
            db.DevTests.Add(devTest);
            return devTest;
        }

        public async Task<int> InsertAsync(List<DevTest> entities)
        {
            foreach (DevTest devTest in entities)
            {
                await InsertAsync(devTest);
            }
            return entities.Count;
        }

        public async Task<DevTest> UpdateAsync(DevTest devTest)
        {
            db.DevTests.Attach(devTest);
            db.Entry(devTest).State = EntityState.Modified;
            return devTest;
        }

        public async Task<int> UpdateAsync(List<DevTest> entities)
        {
            foreach (DevTest devTest in entities)
            {
                await UpdateAsync(devTest);
            }
            return entities.Count;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await RejectAsync(id);
            await db.SaveChangesAsync();
            return true;
        }

        public async Task<bool> RejectAsync(int id)
        {
            var devTest = await db.DevTests.FindAsync(id);
            if (devTest == null)
            {
                return false;
            }

            db.DevTests.Remove(devTest);
            return true;
        }

        public IQueryable<DevTest> Query()
        {
            return db.DevTests.AsQueryable();
        }

        public async Task<IEnumerable<DevTest>> GetAsync(
            Expression<Func<DevTest, bool>> filter = null,
            Func<IQueryable<DevTest>, IOrderedQueryable<DevTest>> orderBy = null,
            string includeProperties = "")
        {
            IQueryable<DevTest> query = db.DevTests;

            if (filter != null)
            {
                query = query.Where(filter);
            }

            foreach (var includeProperty in includeProperties.Split
                (new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
            {
                query = query.Include(includeProperty);
            }

            if (orderBy != null)
            {
                return await orderBy(query).ToListAsync();
            }
            else
            {
                return await query.ToListAsync();
            }
        }

        protected void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            //base.Dispose(disposing);
        }

        public async Task<bool> isExistsAsync(int id)
        {
            return await db.DevTests.CountAsync(e => e.Id == id) > 0;
        }

        public List<DevTest> Get()
        {
            return db.DevTests.ToList();
        }

    }
}
