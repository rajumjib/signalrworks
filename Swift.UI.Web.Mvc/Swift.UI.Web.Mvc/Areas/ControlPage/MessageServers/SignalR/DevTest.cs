using System;

using LiveStock.Core.Domain.Models;

namespace LiveStock.UI.Web.Mvc.Server
{
    public partial class DataUpdateHub
    {
        public void AddDevTest(int id, DevTest devTest)
        {
            Clients.Others.add(id, devTest);
        }

        public void ModifyDevTest(int id, DevTest devTest)
        {
            Clients.Others.modify(id, devTest);
        }

        public void RemoveDevTest(int id)
        {
            Clients.Others.remove(id);
        }
    }
}
