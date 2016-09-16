using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LiveStock.Core.Service
{
    public interface IUnitOfWorkService
    {

        Task SaveAsync();

        void Save();
    }
}
