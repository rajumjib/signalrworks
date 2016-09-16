using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace LiveStock.Core.Domain.Models
{
    public class DevTest
    {

        [Key]
        public int Id { get; set; }

        [StringLength(255)]
        [Display(Name = "Campaign Name")]
        public String CampaignName { get; set; }

        public DateTime Date { get; set; }

        public int Clicks { get; set; }

        public int Conversions { get; set; }

        public int Impressions { get; set; }

        [StringLength(255)]
        [Display(Name = "Affiliate Name")]
        public String AffiliateName { get; set; }

        public int Arrange { get; set; }

        [ForeignKey("UserData")]
        [Display(Name = "User")]
        public int UserDataId { get; set; }
        public virtual UserData UserData { get; set; }

        [Display(Name = "Entry Date")]
        [Required]
        public DateTime EntryDate { get; set; }

        [Timestamp]
        [Display(Name = "Time")]
        public Byte[] TimeStamp { get; set; }

    }
}

