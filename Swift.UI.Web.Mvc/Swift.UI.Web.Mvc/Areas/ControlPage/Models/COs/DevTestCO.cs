using System;
using System.Collections.Generic;

using LiveStock.Core.Domain.Models;
using LiveStock.Core.Domain.Models.DataTransmissionObject;

namespace LiveStock.Core.Domain.Models.CompositObject
{
    /// <summary>
    /// Data transfer object for <see cref="DevTest"/>
    /// </summary>
    public partial class DevTestCO
    {
        public DevTestCO() { }

        public DevTestCO(DevTest devTest)
        {
            //UserData = new UserDataDTO(devTest.UserData);

        }

        //public virtual UserDataDTO UserData { get; set; }

    }
}
