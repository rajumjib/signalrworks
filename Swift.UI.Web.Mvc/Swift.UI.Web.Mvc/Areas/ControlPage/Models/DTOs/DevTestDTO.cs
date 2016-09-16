using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

using LiveStock.Core.Domain.Models;

namespace LiveStock.Core.Domain.Models.DataTransmissionObject
{
    /// <summary>
    /// Data transfer object for <see cref="DevTest"/>
    /// </summary>
    public partial class DevTestDTO
    {
        public DevTestDTO() { }

        public DevTestDTO(DevTest devTest)
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
