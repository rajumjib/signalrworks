using System;

using LiveStock.Core.Domain.Models;
using LiveStock.Core.Service;
using LiveStock.DAL.Repository;
using LiveStock.Logic.Service.EntityFramework;

namespace LiveStock.Logic.Service
{
    public partial class UnitOfWorkService
    {
        private IUserDataService userData;
        public IUserDataService UserData
        {
            get
            {
                if (userData == null)
                {
                    var repository = dataAccess as UnitOfWorkRepository;
                    if (repository == null)
                        repository = new UnitOfWorkRepository();
                    userData = new UserDataService(repository.UserData);
                }
                return userData;
            }
        }
    }
}
