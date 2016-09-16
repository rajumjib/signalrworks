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
using LiveStock.DAL.Repository;
using LiveStock.DAL.EntityFramework;
using LiveStock.DAL.Repository.EntityFramework;

namespace LiveStock.Logic.Service.EntityFramework
{
    public partial class DevTestService : IDevTestService
    {
        private UnitOfWorkRepository repository;

        public DevTestService() {
            repository = new UnitOfWorkRepository();
        }

        public DevTestService(UnitOfWorkRepository repository)
        {
            this.repository = repository;
        }

        public DevTestService(SystemManagementContext context) {
            repository = new UnitOfWorkRepository(context);
        }

        public async Task<List<DevTest>> GetAsync()
        {
            return await repository.DevTest.GetAsync();
        }

        public async Task<DevTest> GetAsync(int id)
        {
            return await repository.DevTest.GetAsync(id);
        }

        public async Task<DevTest> SaveAsync(DevTest devTest)
        {
            return await repository.DevTest.SaveAsync(devTest);
        }

        public async Task<DevTest> PreserveAsync(DevTest devTest)
        {
            return await repository.DevTest.PreserveAsync(devTest);
        }

        public async Task<bool> RemoveAsync(int id)
        {
            return await repository.DevTest.DeleteAsync(id);
        }

        public async Task<bool> DiscardAsync(int id)
        {
            return await repository.DevTest.RejectAsync(id);
        }

        public IQueryable<DevTest> Query()
        {
            return repository.DevTest.Query();
        }

        public async Task<bool> isExistsAsync(int id)
        {
            return await repository.DevTest.Query().CountAsync(e => e.Id == id) > 0;
        }

        protected void Dispose(bool disposing)
        {
            if (disposing)
            {
                //repository.Dispose(disposing);
            }
            //base.Dispose(disposing);
        }


        public async Task<List<DevTestVM>> GetVMAsync()
        {
            var devTests = await repository.DevTest.Query()
                .ToListAsync();

            var devTestVMs = devTests.Select(r => new DevTestVM(r))
                .ToList();

            return devTestVMs;
        }

        public async Task<DevTestVM> GetVMAsync(int id)
        {
            var devTest = await repository.DevTest.GetAsync(id);
            var devTestVM = new DevTestVM(devTest);

            /*
            */

            return devTestVM;
        }

        public async Task<List<DevTestDTO>> GetDTOAsync()
        {
            var devTests = await repository.DevTest.Query()
                .ToListAsync();

            var devTestDTOs = devTests.Select(r => new DevTestDTO(r))
                .ToList();

            return devTestDTOs;
        }

        public async Task<DevTestDTO> GetDTOAsync(int id)
        {
            var devTest = await repository.DevTest.GetAsync(id);
            var devTestDTO = new DevTestDTO(devTest);

            /*
            */

            return devTestDTO;
        }

    }
}
