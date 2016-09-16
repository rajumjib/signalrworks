using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LiveStock.Core.Domain.Models
{
    public class SelectiveIDs<T>
    {
        public List<T> Ids { get; set; }
    }
}
