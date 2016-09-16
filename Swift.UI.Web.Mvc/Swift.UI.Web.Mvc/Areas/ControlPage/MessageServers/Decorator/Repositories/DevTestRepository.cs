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
using LiveStock.UI.Web.Mvc.Server;

namespace LiveStock.DAL.Repository.EntityFramework
{
    public partial class DevTestRepositoryDecorator : AsyncRepositoryDecorator<DevTest, int, DataUpdateHub>, IDevTestRepository
    {

        IDevTestRepository decorator;

        public DevTestRepositoryDecorator(IDevTestRepository repository)
            : base(repository)
        {
            decorator = repository;
        }

        public override async Task<DevTest> SaveAsync(DevTest devTest)
        {
            var modify = devTest.Id > 0;
            devTest = await base.SaveAsync(devTest);
            var id = devTest.Id;
            if (modify)
                Hub.Clients.Group("DevTest").modify(id, devTest);
            else
                Hub.Clients.Group("DevTest").add(id, devTest);

            return devTest;
        }

        public override async Task<bool> DeleteAsync(int id)
        {
            var status = await base.DeleteAsync(id);
            if (status)
                Hub.Clients.Group("DevTest").remove(id);
            return status;
        }

        public List<DevTest> Get()
        {
            return decorator.Get();
        }

    }
}
