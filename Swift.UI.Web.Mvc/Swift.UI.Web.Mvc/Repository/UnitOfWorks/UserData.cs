using System;

using LiveStock.Core.Domain.Models;
using LiveStock.Core.Repository;
using LiveStock.DAL.Repository.EntityFramework;
using LiveStock.DAL.EntityFramework;

namespace LiveStock.DAL.Repository
{
    public partial class UnitOfWorkRepository
    {
        private IUserDataRepository userData;
        public IUserDataRepository UserData
        {
            get
            {
                if (userData == null)
                {
                    userData = new UserDataRepository((UserManagementContext)db);
                }
                return userData;
            }
        }

    }
}
