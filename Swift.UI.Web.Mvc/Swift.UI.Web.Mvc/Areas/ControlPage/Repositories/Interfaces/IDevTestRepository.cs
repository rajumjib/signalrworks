using System;
using System.Collections.Generic;

using LiveStock.Core.Domain.Models;
using LiveStock.Core.Repository;

namespace LiveStock.Core.Repository
{
    public partial interface IDevTestRepository : IAsyncRepository<DevTest,int>
    {

        List<DevTest> Get();

    }
}
