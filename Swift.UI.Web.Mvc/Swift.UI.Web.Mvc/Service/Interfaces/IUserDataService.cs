using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using LiveStock.Core.Domain.Models;
using LiveStock.Core.Domain.Models.DataTransmissionObject;
using LiveStock.Core.Domain.Models.ViewModel;
using LiveStock.Core.Service;

namespace LiveStock.Core.Service
{
    public partial interface IUserDataService : IAsyncService<UserData,int>
    {
        UserData Get(string userName);

        Task<List<UserDataDTO>> GetDTOAsync();

        Task<UserDataDTO> GetDTOAsync(int id);

        Task<List<UserDataVM>> GetVMAsync();

        Task<UserDataVM> GetVMAsync(int id);
    }
}
