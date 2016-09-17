using System;

using LiveStock.Core.Domain.Models;

namespace LiveStock.UI.Web.Mvc.Server
{
    public partial class DataUpdateHub
    {
        public void AddDevTest(int id, DevTest devTest)
        {
            Clients.OthersInGroup("DevTest").add(id, devTest);
        }

        public void ModifyDevTest(int id, DevTest devTest)
        {
            Clients.OthersInGroup("DevTest").modify(id, devTest);
        }

        public void RemoveDevTest(int id)
        {
            Clients.OthersInGroup("DevTest").remove(id);
        }
    }
}
