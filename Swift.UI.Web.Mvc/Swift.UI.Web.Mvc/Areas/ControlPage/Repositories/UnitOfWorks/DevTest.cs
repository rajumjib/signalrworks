using System;

using LiveStock.Core.Domain.Models;
using LiveStock.Core.Repository;
using LiveStock.DAL.Repository.EntityFramework;
using LiveStock.DAL.EntityFramework;

namespace LiveStock.DAL.Repository
{
    public partial class UnitOfWorkRepository
    {
        private IDevTestRepository devTest;
        public IDevTestRepository DevTest
        {
            get
            {
                if (devTest == null)
                {
                    devTest = new DevTestRepository((SystemManagementContext)db);
                    devTest = new DevTestRepositoryDecorator(devTest);
                }
                return devTest;
            }
        }

    }
}
