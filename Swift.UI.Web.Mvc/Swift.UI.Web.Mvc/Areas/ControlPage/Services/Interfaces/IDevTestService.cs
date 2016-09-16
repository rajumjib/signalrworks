using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using LiveStock.Core.Domain.Models;
using LiveStock.Core.Domain.Models.DataTransmissionObject;
using LiveStock.Core.Domain.Models.ViewModel;
using LiveStock.Core.Service;

namespace LiveStock.Core.Service
{
    public partial interface IDevTestService : IAsyncService<DevTest,int>
    {

        Task<List<DevTestDTO>> GetDTOAsync();

        Task<DevTestDTO> GetDTOAsync(int id);

        Task<List<DevTestVM>> GetVMAsync();

        Task<DevTestVM> GetVMAsync(int id);
    }
}
