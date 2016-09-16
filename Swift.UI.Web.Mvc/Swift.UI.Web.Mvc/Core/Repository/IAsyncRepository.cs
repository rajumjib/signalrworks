using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace LiveStock.Core.Repository
{
    public interface IAsyncRepository<TEntity, PId>
    {
        Task<List<TEntity>> GetAsync();

        Task<TEntity> GetAsync(PId id);

        //Task<List<TEntity>> GetAsync(List<PId> PIds);

        Task<TEntity> SaveAsync(TEntity entity);

        Task<TEntity> PreserveAsync(TEntity entity);

        Task<TEntity> InsertAsync(TEntity entity);

        Task<int> InsertAsync(List<TEntity> entities);

        Task<TEntity> UpdateAsync(TEntity entity);

        Task<int> UpdateAsync(List<TEntity> entities);

        Task<bool> DeleteAsync(PId id);

        //Task<int> DeleteAsync(List<PId> PIds);

        Task<bool> RejectAsync(PId id);

        IQueryable<TEntity> Query();

        Task<IEnumerable<TEntity>> GetAsync(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = "");

    }
}