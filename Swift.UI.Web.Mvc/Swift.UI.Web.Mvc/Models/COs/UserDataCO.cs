using System;
using System.Collections.Generic;

using LiveStock.Core.Domain.Models;
using LiveStock.Core.Domain.Models.DataTransmissionObject;

namespace LiveStock.Core.Domain.Models.CompositObject
{
    /// <summary>
    /// Data transfer object for <see cref="UserData"/>
    /// </summary>
    public partial class UserDataCO
    {
        public UserDataCO() { }

        public UserDataCO(UserData userData)
        {
        }

    }
}
