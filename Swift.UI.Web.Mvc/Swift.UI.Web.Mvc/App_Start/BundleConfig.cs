using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Optimization;

namespace Swift.UI.Web.Mvc
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862

            BundleTable.EnableOptimizations = false;

            bundles.Add(new StyleBundle("~/styles/angular-ui-bootstrap").Include(
                 "~/Content/bootstrap.css",
                 "~/Content/ui-bootstrap-csp.css"));

            bundles.Add(new ScriptBundle("~/scripts/angular-ui").Include(
                "~/Scripts/angular.js",
                "~/Scripts/angular-ui-router.js",
                "~/Scripts/angular-sanitize.js"));

            bundles.Add(new ScriptBundle("~/scripts/angular-bootstrap").Include(
                "~/Scripts/angular-ui/ui-bootstrap.js",
                "~/Scripts/angular-ui/ui-bootstrap-tpls.js"));

            bundles.Add(new ScriptBundle("~/scripts/angular-resource").Include(
                "~/Scripts/angular-mocks.js",
                "~/Scripts/angular-resource.js"));

            bundles.Add(new ScriptBundle("~/scripts/angular-animate").Include(
                "~/Scripts/angular-animate.js"));

        }
    }
}
