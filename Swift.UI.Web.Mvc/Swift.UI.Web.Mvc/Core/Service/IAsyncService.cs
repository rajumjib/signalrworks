using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LiveStock.Core.Service
{
    public interface IAsyncService<TEntity, PId>
    {
        Task<List<TEntity>> GetAsync();

        Task<TEntity> GetAsync(PId id);

        Task<TEntity> SaveAsync(TEntity entity);

        Task<TEntity> PreserveAsync(TEntity entity);

        Task<bool> RemoveAsync(PId id);

        Task<bool> DiscardAsync(PId id);

        IQueryable<TEntity> Query();

        Task<bool> isExistsAsync(PId id);
    }
}