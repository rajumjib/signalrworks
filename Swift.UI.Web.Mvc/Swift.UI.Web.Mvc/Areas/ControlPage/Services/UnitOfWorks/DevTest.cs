using System;

using LiveStock.Core.Domain.Models;
using LiveStock.Core.Service;
using LiveStock.DAL.Repository;
using LiveStock.Logic.Service.EntityFramework;

namespace LiveStock.Logic.Service
{
    public partial class UnitOfWorkService
    {
        private IDevTestService devTest;
        public IDevTestService DevTest
        {
            get
            {
                if (devTest == null)
                {
                    var repository = dataAccess as UnitOfWorkRepository;
                    if (repository == null)
                        repository = new UnitOfWorkRepository();
                    devTest = new DevTestService(repository);
                }
                return devTest;
            }
        }
    }
}
