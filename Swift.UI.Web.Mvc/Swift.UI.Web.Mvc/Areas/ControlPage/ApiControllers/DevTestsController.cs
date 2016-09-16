using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

using LiveStock.Core.Domain.Models;
using LiveStock.DAL.EntityFramework;
using LiveStock.Core.Domain.Models.DataTransmissionObject;
using LiveStock.Core.Domain.Models.CompositObject;
using LiveStock.Core.Repository;
using LiveStock.DAL.Repository;
using LiveStock.DAL.Repository.EntityFramework;
using LiveStock.Core.Service;
using LiveStock.Logic.Service;
using LiveStock.Logic.Service.EntityFramework;
//using LiveStock.UI.Web.Mvc.ApiControllers;

namespace LiveStock.UI.Web.Mvc.Areas.ControlPage.ApiControllers
{

    //[Authorize]
    public partial class DevTestsController : ApiController
    {
        //private SystemManagementContext db = new SystemManagementContext();
        private UnitOfWorkService service;
        private IUserDataService users;

        public DevTestsController()
        {
            var context = new SystemManagementContext();
            service = new UnitOfWorkService(context);
            users = new UserDataService(context);
        }

        public DevTestsController(UnitOfWorkService service, IUserDataService users)
        {
            this.service = service;
            this.users = users;
        }

        // GET api/DevTests
        public async Task<IList<DevTestDTO>> GetDevTests()
        {
            return await service.DevTest.GetDTOAsync();
        }

        // GET api/DevTests/5
        [ResponseType(typeof(DevTest))]
        public async Task<IHttpActionResult> GetDevTest(int id)
        {
            DevTestDTO devTest = await service.DevTest.GetDTOAsync(id);
            if (devTest == null)
            {
                return NotFound();
            }

            return Ok(devTest);
        }

        // PUT api/DevTests/5
        public async Task<IHttpActionResult> PutDevTest(int id, DevTest devTest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != devTest.Id)
            {
                return BadRequest();
            }

            devTest.UserDataId = users.Get("rajumjib@aol.com").UserDataId;

            try
            {
                await service.DevTest.SaveAsync(devTest);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DevTestExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // PUT api/DevTests/Update/5
        [Route("api/DevTests/Update")]
        [ResponseType(typeof(DevTestDTO))]
        public async Task<IHttpActionResult> PutDevTestChanges(int id, DevTest devTest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != devTest.Id)
            {
                return BadRequest();
            }

            devTest.UserDataId = users.Get("rajumjib@aol.com").UserDataId;

            try
            {
                devTest = await service.DevTest.SaveAsync(devTest);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DevTestExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(new DevTestDTO(devTest));
        }

        // POST api/DevTests
        [ResponseType(typeof(DevTest))]
        public async Task<IHttpActionResult> PostDevTest(DevTest devTest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            devTest.UserDataId = users.Get("rajumjib@aol.com").UserDataId;
            devTest.EntryDate = DateTime.Today;
            await service.DevTest.SaveAsync(devTest);

            return CreatedAtRoute("DefaultApi", new { id = devTest.Id }, devTest);
        }

        // DELETE api/DevTests/5
        [ResponseType(typeof(DevTest))]
        public async Task<IHttpActionResult> DeleteDevTest(int id)
        {
            DevTest devTest = await service.DevTest.GetAsync(id);
            if (devTest == null)
            {
                return NotFound();
            }

            await service.DevTest.RemoveAsync(id);

            return Ok(devTest);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                //service.Dispose(disposing);
            }
            base.Dispose(disposing);
        }

        private bool DevTestExists(int id)
        {
            return service.DevTest.Query().Count(e => e.Id == id) > 0;
        }

        [Route("api/DevTests/Search/{q}")]
        [ResponseType(typeof(DevTestDTO))]
        public async Task<IHttpActionResult> GetDevTestList(string q)
        {

            if (string.IsNullOrEmpty(q))
            {
                return NotFound();
            }

            var devTestList = await service.DevTest.Query()
                .Where(r => r.CampaignName.Contains(q))
                .ToListAsync();

            var devTestDTOs = devTestList.Select(r => new DevTestDTO(r)).ToList();

            return Ok(devTestDTOs);
        }


        [Route("api/DevTests/Information")]
        [ResponseType(typeof(DevTestCO))]
        public async Task<IList<DevTestCO>> GetDevTestInformation()
        {
            var devTests = await service.DevTest.Query()
                .Where(r => r.Arrange > 0)
                .ToListAsync();

            return devTests.Select(r => new DevTestCO(r)).ToList();
        }

        [Route("api/DevTests/SelectiveList")]
        [ResponseType(typeof(DevTestDTO))]
        public async Task<IList<DevTestDTO>> PostSelectiveDevTests(SelectiveIDs<int> selective)
        {
            if (selective == null || selective.Ids == null || selective.Ids.Count == 0)
                return new List<DevTestDTO>();

            var devTests = await service.DevTest.Query()
                .Where(r => selective.Ids.Contains(r.Id))
                .ToListAsync();

            return devTests.Select(r => new DevTestDTO(r)).ToList();
        }

        [Route("api/DevTests/PageByPage")]
        [ResponseType(typeof(DevTestDTO))]
        public async Task<IList<DevTestDTO>> GetPagedDevTests(int count, int page, string sorting, bool ascending)
        {
            var query = service.DevTest.Query();


            if (!String.IsNullOrEmpty(sorting))
            {
                var field = sorting.Trim().ToLowerInvariant();
                switch (field)
                {
                    case "id":
                        if (ascending)
                            query = query.OrderBy(r => r.Id);
                        else
                            query = query.OrderByDescending(r => r.Id);
                        break;
                    case "campaignname":
                        if (ascending)
                            query = query.OrderBy(r => r.CampaignName);
                        else
                            query = query.OrderByDescending(r => r.CampaignName);
                        break;
                    case "date":
                        if (ascending)
                            query = query.OrderBy(r => r.Date);
                        else
                            query = query.OrderByDescending(r => r.Date);
                        break;
                    case "clicks":
                        if (ascending)
                            query = query.OrderBy(r => r.Clicks);
                        else
                            query = query.OrderByDescending(r => r.Clicks);
                        break;
                    case "conversions":
                        if (ascending)
                            query = query.OrderBy(r => r.Conversions);
                        else
                            query = query.OrderByDescending(r => r.Conversions);
                        break;
                    case "impressions":
                        if (ascending)
                            query = query.OrderBy(r => r.Impressions);
                        else
                            query = query.OrderByDescending(r => r.Impressions);
                        break;
                    case "affiliatename":
                        if (ascending)
                            query = query.OrderBy(r => r.AffiliateName);
                        else
                            query = query.OrderByDescending(r => r.AffiliateName);
                        break;
                    case "arrange":
                        if (ascending)
                            query = query.OrderBy(r => r.Arrange);
                        else
                            query = query.OrderByDescending(r => r.Arrange);
                        break;
                    case "userdataid":
                        if (ascending)
                            query = query.OrderBy(r => r.UserDataId);
                        else
                            query = query.OrderByDescending(r => r.UserDataId);
                        break;
                    case "entrydate":
                        if (ascending)
                            query = query.OrderBy(r => r.EntryDate);
                        else
                            query = query.OrderByDescending(r => r.EntryDate);
                        break;
                    case "timestamp":
                        if (ascending)
                            query = query.OrderBy(r => r.TimeStamp);
                        else
                            query = query.OrderByDescending(r => r.TimeStamp);
                        break;
                }
            }

            if (count > 0)
                query = query.Take(count);

            if (page > 0)
                query = query.Skip(count * (page - 1));

            var devTests = await query.ToListAsync();

            return devTests.Select(r => new DevTestDTO(r)).ToList();
        }
    }
}





















