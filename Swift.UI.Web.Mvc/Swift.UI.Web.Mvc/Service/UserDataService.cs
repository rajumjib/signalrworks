using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Expressions;
using System.Data.Entity;

using LiveStock.Core.Domain.Models;
using LiveStock.Core.Domain.Models.DataTransmissionObject;
using LiveStock.Core.Domain.Models.ViewModel;
using LiveStock.Core.Service;
using LiveStock.Core.Repository;
using LiveStock.DAL.EntityFramework;
using LiveStock.DAL.Repository.EntityFramework;

namespace LiveStock.Logic.Service.EntityFramework
{
    public partial class UserDataService : IUserDataService
    {
        private IUserDataRepository repository;

        public UserDataService() {
            repository = new UserDataRepository();
        }

        public UserDataService(IUserDataRepository repository)
        {
            this.repository = repository;
        }

        public UserDataService(UserManagementContext context) {
            repository = new UserDataRepository(context);
        }

        public async Task<List<UserData>> GetAsync()
        {
            return await repository.GetAsync();
        }

        public async Task<UserData> GetAsync(int id)
        {
            return await repository.GetAsync(id);
        }

        public async Task<UserData> SaveAsync(UserData userData)
        {
            return await repository.SaveAsync(userData);
        }

        public async Task<UserData> PreserveAsync(UserData userData)
        {
            return await repository.PreserveAsync(userData);
        }

        public async Task<bool> RemoveAsync(int id)
        {
            return await repository.DeleteAsync(id);
        }

        public async Task<bool> DiscardAsync(int id)
        {
            return await repository.RejectAsync(id);
        }

        public IQueryable<UserData> Query()
        {
            return repository.Query();
        }

        public async Task<bool> isExistsAsync(int id)
        {
            return await repository.Query().CountAsync(e => e.UserDataId == id) > 0;
        }

        protected void Dispose(bool disposing)
        {
            if (disposing)
            {
                //repository.Dispose(disposing);
            }
            //base.Dispose(disposing);
        }

        public UserData Get(string userName)
        {
            return repository.Get(userName);
        }

        public async Task<List<UserDataVM>> GetVMAsync()
        {
            var userDatas = await repository.Query()
                .ToListAsync();

            var userDataVMs = userDatas.Select(r => new UserDataVM(r))
                .ToList();

            return userDataVMs;
        }

        public async Task<UserDataVM> GetVMAsync(int id)
        {
            var userData = await repository.GetAsync(id);
            var userDataVM = new UserDataVM(userData);

            /*
            */

            return userDataVM;
        }

        public async Task<List<UserDataDTO>> GetDTOAsync()
        {
            var userDatas = await repository.Query()
                .ToListAsync();

            var userDataDTOs = userDatas.Select(r => new UserDataDTO(r))
                .ToList();

            return userDataDTOs;
        }

        public async Task<UserDataDTO> GetDTOAsync(int id)
        {
            var userData = await repository.GetAsync(id);
            var userDataDTO = new UserDataDTO(userData);

            /*
            */

            return userDataDTO;
        }

    }
}
