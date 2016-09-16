using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;

using LiveStock.Core.Domain.Models;

namespace LiveStock.Core.Domain.Models.ViewModel
{
    /// <summary>
    /// Data transfer object for <see cref="UserData"/>
    /// </summary>
    public partial class UserDataVM
    {
        public UserDataVM() { }

        public UserDataVM(UserData userData) :
            this(userData, true)
        {
        }

        public UserDataVM(UserData userData, bool convert)
        {
            UserName = userData.UserName;
            Arrange = userData.Arrange;
            EntryDate = userData.EntryDate;
            TimeStamp = userData.TimeStamp;
        }

        public string UserName { get; set; }

        public int Arrange { get; set; }

        public DateTime EntryDate { get; set; }

        [Timestamp]
        public byte[] TimeStamp { get; set; }

        public UserData ToEntity()
        {
            UserData userData = new UserData
            {
                UserName = UserName,
                Arrange = Arrange,
                EntryDate = EntryDate,
                TimeStamp = TimeStamp,
            };
            return userData;
        }
    }
}
