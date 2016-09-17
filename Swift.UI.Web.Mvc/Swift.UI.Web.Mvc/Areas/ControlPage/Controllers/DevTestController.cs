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
using LiveStock.Core.Repository;
using LiveStock.DAL.Repository;
using LiveStock.DAL.Repository.EntityFramework;
using LiveStock.Core.Service;
using LiveStock.Logic.Service;
using LiveStock.Logic.Service.EntityFramework;
using LiveStock.UI.Web.Mvc.Controllers;

namespace Swift.UI.Web.Mvc.Areas.ControlPage.Controllers
{
    //[Authorize]
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

        // GET: /ControlPage/DevTest/Edit
        public async Task<ActionResult> Edit()
        {
            return PartialView();
        }

        // GET: /ControlPage/DevTest/Delete
        public async Task<ActionResult> Delete()
        {
            return PartialView();
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
