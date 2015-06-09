using AdakSA;
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
        public static MvcHtmlString PDatePickerFor<TModel, TProperty>(this HtmlHelper<TModel> helper, System.Linq.Expressions.Expression<Func<TModel, TProperty>> expression, PersianDTInputType type = PersianDTInputType.DateTime)
        {
            var value = ModelMetadata.FromLambdaExpression(expression, helper.ViewData).Model;
            if (value != null)
            {
                if (value is DateTime)
                {
                    value = new ShamsiDateTime((DateTime)value).ToString();
                }
            }
            return helper.HiddenFor(expression, new { @class = "webber-persian-dtpicker", data_type = type.ToString(), Value = value });
        }

        public static MvcHtmlString PDatePicker(this HtmlHelper helper, string name, object value = null, PersianDTInputType type = PersianDTInputType.DateTime)
        {
            if (value != null)
            {
                if (value is DateTime)
                {
                    value = new ShamsiDateTime((DateTime)value).ToString();
                }
            }
            return helper.Hidden(name, value, new { @class = "webber-persian-dtpicker", data_type = type.ToString() });
        }

    }
    public class DateTimeModelBinder : IModelBinder
    {
        public static void Register()
        {
            ModelBinders.Binders.Add(typeof(Nullable<DateTime>), new DateTimeModelBinder());
            ModelBinders.Binders.Add(typeof(DateTime), new DateTimeModelBinder());
        }
        public object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {
            if (bindingContext.ModelType == typeof(DateTime) || bindingContext.ModelType == typeof(DateTime?))
            {
                var value = controllerContext.HttpContext.Request.Form[bindingContext.ModelName];
                if (string.IsNullOrEmpty(value))
                {
                    if (bindingContext.ModelType == typeof(DateTime?))
                    {
                        return null;
                    }
                    else
                    {
                        bindingContext.ModelState.AddModelError(bindingContext.ModelName, "DateTime is Required");
                    }
                }
                else
                {
                    try
                    {
                        return ShamsiDateTime.Parse(value).DateTime;
                    }
                    catch (Exception e)
                    {
                        bindingContext.ModelState.AddModelError(bindingContext.ModelName, e);
                    }
                }
            }
            var binder = new DefaultModelBinder();
            return binder.BindModel(controllerContext, bindingContext);
        }
    }
}