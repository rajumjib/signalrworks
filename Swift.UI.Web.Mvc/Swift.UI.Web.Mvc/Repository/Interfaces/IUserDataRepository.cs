using System;
using System.Collections.Generic;

using LiveStock.Core.Domain.Models;
using LiveStock.Core.Repository;

namespace LiveStock.Core.Repository
{
    public partial interface IUserDataRepository : IAsyncRepository<UserData,int>
    {

        List<UserData> Get();

        UserData Get(string userName);
    }
}
