using System;
using System.Collections.Generic;
using System.Linq;

using LiveStock.Core.Domain.Models;

namespace LiveStock.Core.Domain.Models.SeedData
{
    /// <summary>
    /// Sample or Seed object for <see cref="UserData"/>
    /// </summary>
    public partial class UserDataData
    {

        public static IList<UserData> SampleData()
        {
            var userDatas = new List<UserData>(){
                new UserData {
                    UserName = String.Empty,
                }
            };
            return userDatas;
        }

        public static UserData[] SeedData()
        {
            var userDatas = SampleData();
            //var userData = UsersData.SampleData().Where(r => r.UserDataId == 1).First();
            var arrange = 0;
            foreach (var userData in userDatas)
            {
                userData.UserDataId = 1;
                //userData.UserData = userData;
                arrange++;
                userData.Arrange = arrange;
                userData.EntryDate = DateTime.Today;
            }

            return userDatas.ToArray();
        }
    }
}
