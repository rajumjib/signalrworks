using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Web;
using System.Web.Mvc;

//using System.Data.Entity.Infrastructure;

using LiveStock.Core.Domain.Models;
using LiveStock.DAL.EntityFramework;
using LiveStock.Core.Domain.Models.DataTransmissionObject;
using LiveStock.Core.Domain.Models.ViewModel;
using LiveStock.DAL.EntityFramework;
using LiveStock.Core.Repository;
using LiveStock.DAL.Repository;
using LiveStock.DAL.Repository.EntityFramework;
using LiveStock.Core.Service;
using LiveStock.Logic.Service;
using LiveStock.Logic.Service.EntityFramework;
using LiveStock.UI.Web.Mvc.Controllers;

namespace LiveStock.UI.Web.Mvc.Areas.ControlPage.Controllers
{
    [Authorize]
    public partial class DevTestController : BaseController
    {
        private IDevTestService service;

        public DevTestController() {
            service = new DevTestService();
        }


        // GET: /ControlPage/DevTest/
        public async Task<ActionResult> Index()
        {
            return View();
        }

        // GET: /ControlPage/DevTest/List
        public async Task<ActionResult> List()
        {
            return PartialView();
        }

        // GET: /ControlPage/DevTest/Details
        public async Task<ActionResult> Details()
        {
            return PartialView();
        }

        // GET: /ControlPage/DevTest/Create
        public ActionResult Create()
        {
            return PartialView();
        }

        // POST: /ControlPage/DevTest/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include="Id,CampaignName,Date,Clicks,Conversions,Impressions,AffiliateName,Arrange,UserDataId,EntryDate,TimeStamp")] DevTest devTest)
        {
            if (ModelState.IsValid)
            {
                await service.SaveAsync(devTest);
                return RedirectToAction("Index");
            }

            return View(devTest);
        }

        // GET: /ControlPage/DevTest/Edit
        public async Task<ActionResult> Edit()
        {
            return PartialView();
        }

        // POST: /ControlPage/DevTest/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include="Id,CampaignName,Date,Clicks,Conversions,Impressions,AffiliateName,Arrange,UserDataId,EntryDate,TimeStamp")] DevTest devTest)
        {
            if (ModelState.IsValid)
            {
                await service.SaveAsync(devTest);
                return RedirectToAction("Index");
            }
            return View(devTest);
        }

        // GET: /ControlPage/DevTest/Delete
        public async Task<ActionResult> Delete()
        {
            return PartialView();
        }

        // POST: /ControlPage/DevTest/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            DevTest devTest = await service.GetAsync(id);
            await service.RemoveAsync(id);
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                //service.Dispose(disposing);
            }
            base.Dispose(disposing);
        }
    }
}












