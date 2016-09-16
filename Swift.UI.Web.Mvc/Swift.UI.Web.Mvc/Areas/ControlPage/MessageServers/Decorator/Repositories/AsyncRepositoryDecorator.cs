using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Expressions;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

using LiveStock.Core.Domain.Models;
using LiveStock.Core.Repository;
using LiveStock.DAL.EntityFramework;

namespace LiveStock.DAL.Repository.EntityFramework
{
    public abstract partial class AsyncRepositoryDecorator<TEntity, PId, THub> : IAsyncRepository<TEntity, PId>
        where THub : IHub
    {

        IAsyncRepository<TEntity, PId> decorator;

        public AsyncRepositoryDecorator(IAsyncRepository<TEntity, PId> repository)
        {
            decorator = repository;
        }

        Lazy<IHubContext> hub = new Lazy<IHubContext>(
            () => GlobalHost.ConnectionManager.GetHubContext<THub>());

        protected IHubContext Hub
        {
            get { return hub.Value; }
        }

        public async Task<List<TEntity>> GetAsync()
        {
            return await decorator.GetAsync();
        }

        public async Task<TEntity> GetAsync(PId id)
        {
            return await decorator.GetAsync(id);
        }

        public virtual async Task<TEntity> SaveAsync(TEntity entity)
        {
            return await decorator.SaveAsync(entity);
        }

        public virtual async Task<TEntity> PreserveAsync(TEntity entity)
        {
            return await decorator.PreserveAsync(entity);
        }

        public virtual async Task<TEntity> InsertAsync(TEntity entity)
        {
            return await decorator.InsertAsync(entity);
        }

        public virtual async Task<int> InsertAsync(List<TEntity> entities)
        {
            return await decorator.InsertAsync(entities);
        }

        public virtual async Task<TEntity> UpdateAsync(TEntity entity)
        {
            return await decorator.UpdateAsync(entity);
        }

        public virtual async Task<int> UpdateAsync(List<TEntity> entities)
        {
            return await decorator.UpdateAsync(entities);
        }

        public virtual async Task<bool> DeleteAsync(PId id)
        {
            return await decorator.DeleteAsync(id);
        }

        public virtual async Task<bool> RejectAsync(PId id)
        {
            return await decorator.RejectAsync(id);
        }

        public IQueryable<TEntity> Query()
        {
            return decorator.Query();
        }

        public async Task<IEnumerable<TEntity>> GetAsync(Expression<Func<TEntity, bool>> filter = null, Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null, string includeProperties = "")
        {
            return await decorator.GetAsync(filter, orderBy, includeProperties);
        }
    }
}
