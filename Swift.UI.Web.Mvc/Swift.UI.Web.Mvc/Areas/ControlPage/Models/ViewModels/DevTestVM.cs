using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;

using LiveStock.Core.Domain.Models;

namespace LiveStock.Core.Domain.Models.ViewModel
{
    /// <summary>
    /// Data transfer object for <see cref="DevTest"/>
    /// </summary>
    public partial class DevTestVM
    {
        public DevTestVM() { }

        public DevTestVM(DevTest devTest) :
            this(devTest, true)
        {
        }

        public DevTestVM(DevTest devTest, bool convert)
        {
            Id = devTest.Id;
            CampaignName = devTest.CampaignName;
            Date = devTest.Date;
            Clicks = devTest.Clicks;
            Conversions = devTest.Conversions;
            Impressions = devTest.Impressions;
            AffiliateName = devTest.AffiliateName;
            Arrange = devTest.Arrange;
            EntryDate = devTest.EntryDate;
            TimeStamp = devTest.TimeStamp;
        }

        [Key]
        public int Id { get; set; }

        public string CampaignName { get; set; }

        public DateTime Date { get; set; }

        public int Clicks { get; set; }

        public int Conversions { get; set; }

        public int Impressions { get; set; }

        public string AffiliateName { get; set; }

        public int Arrange { get; set; }

        public DateTime EntryDate { get; set; }

        [Timestamp]
        public byte[] TimeStamp { get; set; }

        public DevTest ToEntity()
        {
            DevTest devTest = new DevTest
            {
                Id = Id,
                CampaignName = CampaignName,
                Date = Date,
                Clicks = Clicks,
                Conversions = Conversions,
                Impressions = Impressions,
                AffiliateName = AffiliateName,
                Arrange = Arrange,
                EntryDate = EntryDate,
                TimeStamp = TimeStamp,
            };
            return devTest;
        }
    }
}
