using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LiveStock.Core.Repository
{
    public interface IUnitOfWorkRepository
    {

        Task CommitAsync();

        void Commit();
    }
}
