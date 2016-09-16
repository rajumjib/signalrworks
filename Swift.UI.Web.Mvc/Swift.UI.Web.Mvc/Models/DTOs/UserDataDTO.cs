using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

using LiveStock.Core.Domain.Models;

namespace LiveStock.Core.Domain.Models.DataTransmissionObject
{
    /// <summary>
    /// Data transfer object for <see cref="UserData"/>
    /// </summary>
    public partial class UserDataDTO
    {
        public UserDataDTO() { }

        public UserDataDTO(UserData userData)
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
