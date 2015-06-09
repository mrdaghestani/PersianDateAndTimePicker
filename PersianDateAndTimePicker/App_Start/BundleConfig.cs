using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace PersianDateAndTimePicker
{
    public class BundleConfig
    {
        public void RegisterBundles(BundleCollection bundles)
        {
            bundles.IgnoreList.Clear();
            bundles.DirectoryFilter.Clear();
            bundles.IgnoreList.Ignore("*.intellisense.js");
            bundles.IgnoreList.Ignore("*-vsdoc.js");
            bundles.IgnoreList.Ignore("*.debug.js", OptimizationMode.WhenEnabled);

            bundles.Add(new ScriptBundle("~/Scripts/webber-persianDTPicker").Include("~/Scripts/webber-persianDTPicker.js"));

            bundles.Add(new ScriptBundle("~/Scripts/webber-persianDTPickerWBehzadi")
                .Include("~/Scripts/persianDatepicker.js")
                .Include("~/Scripts/webber-persianDTPicker.js"));

            ////////////////
            bundles.Add(new StyleBundle("~/Contents/webber-persianDTPicker").Include("~/Contents/webber-persianDTPicker.css"));

            bundles.Add(new StyleBundle("~/Contents/webber-persianDTPickerWBehzadi")
                .Include("~/Contents/persianDatepicker-default.css")
                .Include("~/Contents/webber-persianDTPicker.css"));

            BundleTable.EnableOptimizations = true;
        }
    }
}