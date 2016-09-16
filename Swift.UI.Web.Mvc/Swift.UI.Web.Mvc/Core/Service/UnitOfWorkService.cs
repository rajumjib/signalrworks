using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Data.Entity;

using LiveStock.Core.Domain.Models;
using LiveStock.Core.Service;
using LiveStock.Core.Repository;
using LiveStock.DAL.Repository;
using LiveStock.DAL.EntityFramework;

namespace LiveStock.Logic.Service
{
    public partial class UnitOfWorkService : IUnitOfWorkService
    {
        private IUnitOfWorkRepository dataAccess;

        public UnitOfWorkService()
        {
            dataAccess = new UnitOfWorkRepository();
        }

        public UnitOfWorkService(IUnitOfWorkRepository repository)
        {
            dataAccess = repository;
        }

        public UnitOfWorkService(DbContext context)
        {
            dataAccess = new UnitOfWorkRepository(context);
        }

        public async Task SaveAsync()
        {
            await dataAccess.CommitAsync();
        }

        public void Save()
        {
            dataAccess.Commit();
        }
    }
}
