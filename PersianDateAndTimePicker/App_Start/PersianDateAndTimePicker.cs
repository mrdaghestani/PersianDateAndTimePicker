using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Html;

namespace PersianDateAndTimePicker
{
    public enum PersianDTInputType
    {
        Date = 1,
        Time = 2,
        DateTime = 3
    }
    public static class PersianDateAndTimePickerHelpers
    {

        public static IHtmlString PDatePickerFor<TModel, TProperty>(this HtmlHelper<TModel> helper, System.Linq.Expressions.Expression<Func<TModel, TProperty>> expression, PersianDTInputType type = PersianDTInputType.DateTime)
        {
            return helper.HiddenFor(expression, new { @class = "webber-persian-dtpicker", dataType = type.ToString() });
        }

        public static IHtmlString PDatePicker(this HtmlHelper helper, string name, object value, PersianDTInputType type = PersianDTInputType.DateTime)
        {
            return helper.Hidden(name, value, new { @class = "webber-persian-dtpicker", dataType = type.ToString() });
        }
    }
}