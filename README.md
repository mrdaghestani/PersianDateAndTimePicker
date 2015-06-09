# Persian Date & Time Picker

In every project I used to add [behzadi/persianDatepicker](https://github.com/behzadi/persianDatepicker) to my solution and add textbox input to get selected date from user.

But when I started to use [MVVM](http://en.wikipedia.org/wiki/Model_View_ViewModel) architectural pattern, I decided to create input that can get both PersianDate & Time into standard c# DateTime.

Here it is, and I decided to create one stand alone for other that had the same issue.

Enjoy...!

## Installation

Add jquery and [behzadi/persianDatepicker](https://github.com/behzadi/persianDatepicker) & webber-persianDTPicker.js and its styles.

Like This:
```
<script src="~/Scripts/jquery-1.10.2.min.js"></script>
<script src="~/Scripts/persianDatepicker.js"></script>
<script src="~/Scripts/webber-persianDTPicker.js"></script>

<link href="~/Contents/persianDatepicker-default.css" rel="stylesheet" />
<link href="~/Contents/webber-persianDTPicker.css" rel="stylesheet" />
```
or Use our bundle & cdn:
```
<script src="//cdn.adaksys.com/jquery-1.10.2.min.js"></script>
<script src="//cdn.adaksys.com/persianDatepicker.js"></script>
<script src="//demo.adaksys.com/PersianDateAndTimePicker/Scripts/webber-persianDTPicker"></script>

<link href="//cdn.adaksys.com/persianDatepicker-default.css" rel="stylesheet" />
<link href="//demo.adaksys.com/PersianDateAndTimePicker/Contents/webber-persianDTPicker" rel="stylesheet" />

```
or You can use both [behzadi/persianDatepicker](https://github.com/behzadi/persianDatepicker) & webber-persianDTPicker in one bundle.

This version is only 1.92 KB:
```
<script src="//cdn.adaksys.com/jquery-1.10.2.min.js"></script>
<script src="//demo.adaksys.com/PersianDateAndTimePicker/Scripts/webber-persianDTPickerWBehzadi"></script>

<link href="//demo.adaksys.com/PersianDateAndTimePicker/Contents/webber-persianDTPickerWBehzadi" rel="stylesheet" />

```

If you are using Asp.Net MVC, I create a file that it Contains `Helpers` and `ModelBinder` that you can use it, just copy `PersianDateAndTimePicker.cs` file into your project and don't forget to add `namespace` to your `~/Views/web.config` file:

```
  <system.web.webPages.razor>
    <host factoryType="System.Web.Mvc.MvcWebRazorHostFactory, System.Web.Mvc, Version=5.0.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35" />
    <pages pageBaseType="System.Web.Mvc.WebViewPage">
      <namespaces>
        <add namespace="System.Web.Mvc" />
        <add namespace="System.Web.Mvc.Ajax" />
        <add namespace="System.Web.Mvc.Html" />
        <add namespace="System.Web.Routing" />
        <add namespace="PersianDateAndTimePicker" /> <!--here it is-->
      </namespaces>
    </pages>
  </system.web.webPages.razor>
```

And add this line into your `global.asax` file:

```
public class MvcApplication : System.Web.HttpApplication
{
    protected void Application_Start()
    {
        AreaRegistration.RegisterAllAreas();
        RouteConfig.RegisterRoutes(RouteTable.Routes);
        new BundleConfig().RegisterBundles(System.Web.Optimization.BundleTable.Bundles);
        DateTimeModelBinder.Register(); //This Line
    }
}
```

## Usage

Just add `webber-persian-dtpicker` CssClass to your input and enjoy.

No matter your inputType is `text` or `hidden`.

Sample1: `<input type="text" name="datetime" class="webber-persian-dtpicker" />`

Sample2: `<input type="hidden" name="datetime" class="webber-persian-dtpicker" />`

If you are using Asp.Net MVC you can use `Html Helpers`.

Sample1: `@Html.PDatePicker("datePick")`

Sample2: `@Html.PDatePicker("datePick", DateTime.Now, PersianDTInputType.Date)`

Sample3: `@Html.PDatePickerFor(x => data.Member.AlarmDate)`

## Options

To customize input, simply add data attribute to your input:

`<input type="text" name="datetime" class="webber-persian-dtpicker"  data-type="date" />`

available types: `date`, `time`, `dateTime`

## Demo

[Demo Website](http://demo.adaksys.com/PersianDateAndTimePicker)

## License

Released under the MIT license.

Created by MohammadReza Daghestani, [ADAK SYS Co.](http://adaksys.com/)