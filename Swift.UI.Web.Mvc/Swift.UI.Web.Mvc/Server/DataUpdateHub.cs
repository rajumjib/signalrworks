using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace LiveStock.UI.Web.Mvc.Server
{
    [HubName("dataUpdateNotification")]
    public partial class DataUpdateHub : Hub
    {

        public async Task JoinGroup(string groupName)
        {
            await Groups.Add(Context.ConnectionId, groupName);
        }

        public void Update(string message, int count)
        {
            Clients.All.updateMessage(message, count);
        }
    }
}
