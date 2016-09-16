using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations;

namespace LiveStock.Core.Domain.Models
{
    public class UserData
    {
        [Key]
        public int UserDataId { get; set; }


        [Display(Name = "UserName")]
        [Required]
        [StringLength(250)]
        public String UserName { get; set; }

        public int Arrange { get; set; }

        [Display(Name = "Entry Date")]
        [Required]
        public DateTime EntryDate { get; set; }

        [Timestamp]
        [Display(Name = "Time")]
        public Byte[] TimeStamp { get; set; }
    }


    public class UsersData
    {
        public static IList<UserData> SampleData()
        {
            var userData = new List<UserData>(){
                new UserData {
                    UserDataId = 1,
                    UserName = "rajumjib@aol.com"
                }
            };
            return userData;
        }

        public static UserData[] SeedData()
        {

            var userData = SampleData();

            int arrange = 0;
            foreach (var user in userData)
            {
                arrange++;
                user.Arrange = arrange;
                user.EntryDate = DateTime.Today;
            }

            return userData.ToArray();
        }
    }
}
