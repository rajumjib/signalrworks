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
    public partial class UserDataRepository : IUserDataRepository
    {
        private UserManagementContext db;

        public UserDataRepository()
        {
            db = new UserManagementContext();
        }

        public UserDataRepository(UserManagementContext db)
        {
            this.db = db;
        }

        public async Task<List<UserData>> GetAsync()
        {
            return await db.UserDatas.ToListAsync();
        }

        public async Task<UserData> GetAsync(int id)
        {
            return await db.UserDatas.FindAsync(id);
        }

        public async Task<UserData> SaveAsync(UserData userData)
        {
            userData = await PreserveAsync(userData);
            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
            }
            return userData;
        }

        public async Task<UserData> PreserveAsync(UserData userData)
        {
            var id = userData.UserDataId;
            if (await isExistsAsync(id))
            {
                db.Entry(userData).State = EntityState.Modified;
            }
            else
            {
                db.UserDatas.Add(userData);
            }
            /*
            var found = await db.UserDatas.FindAsync(id);
            if (found == null)
            {
                db.UserDatas.Add(userData);
            }
            else
            {
                found.Update(userData);
                //db.UserDatas.Attach(userData);
                db.Entry(found).State = EntityState.Modified;
            }
            */

            return userData;
        }

        public async Task<UserData> InsertAsync(UserData userData)
        {
            db.UserDatas.Add(userData);
            return userData;
        }

        public async Task<int> InsertAsync(List<UserData> entities)
        {
            foreach (UserData userData in entities)
            {
                await InsertAsync(userData);
            }
            return entities.Count;
        }

        public async Task<UserData> UpdateAsync(UserData userData)
        {
            db.UserDatas.Attach(userData);
            db.Entry(userData).State = EntityState.Modified;
            return userData;
        }

        public async Task<int> UpdateAsync(List<UserData> entities)
        {
            foreach (UserData userData in entities)
            {
                await UpdateAsync(userData);
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
            var userData = await db.UserDatas.FindAsync(id);
            if (userData == null)
            {
                return false;
            }

            db.UserDatas.Remove(userData);
            return true;
        }

        public IQueryable<UserData> Query()
        {
            return db.UserDatas.AsQueryable();
        }

        public async Task<IEnumerable<UserData>> GetAsync(
            Expression<Func<UserData, bool>> filter = null,
            Func<IQueryable<UserData>, IOrderedQueryable<UserData>> orderBy = null,
            string includeProperties = "")
        {
            IQueryable<UserData> query = db.UserDatas;

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
            return await db.UserDatas.CountAsync(e => e.UserDataId == id) > 0;
        }

        public List<UserData> Get()
        {
            return db.UserDatas.ToList();
        }

        public UserData Get(string userName)
        {
            return db.UserDatas.Where(r => r.UserName == userName).First();
        }
    }
}
