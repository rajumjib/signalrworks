using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using System.Threading;
//using LiveStock.UI.Web.Mvc.Helpers;

namespace LiveStock.UI.Web.Mvc.Controllers
{
    public class BaseController : Controller
    {
        /*
        protected override IAsyncResult BeginExecuteCore(AsyncCallback callback, object state)
        {
            //string cultureName = null;
            string cultureName = RouteData.Values["culture"] as string;
            if (string.IsNullOrEmpty(cultureName))
            {
                // Attempt to read the culture cookie from Request
                HttpCookie cultureCookie = Request.Cookies["_culture"];
                if (cultureCookie != null)
                    cultureName = cultureCookie.Value;
                else
                    cultureName = Request.UserLanguages != null && Request.UserLanguages.Length > 0 ? Request.UserLanguages[0] : null; // obtain it from HTTP header AcceptLanguages
            }

            // Validate culture name
            cultureName = CultureHelper.GetImplementedCulture(cultureName); // This is safe


            // Modify current thread's cultures            
            Thread.CurrentThread.CurrentCulture = new System.Globalization.CultureInfo(cultureName);
            Thread.CurrentThread.CurrentUICulture = Thread.CurrentThread.CurrentCulture;


            return base.BeginExecuteCore(callback, state);
        }
        */

    }
}