# Persian Date & Time Picker

In every project I used to add [behzadi/persianDatepicker](https://github.com/behzadi/persianDatepicker) to my solution and add textbox input to get selected date from user.

But when I started to use [MVVM](http://en.wikipedia.org/wiki/Model_View_ViewModel) architectural pattern, I decided to create input that can get both PersianDate & Time into standard c# DateTime.

Her it is, and I decided to create one stand alone for other that had the same issue.

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
or You can use both [behzadi/persianDatepicker](https://github.com/behzadi/persianDatepicker) & webber-persianDTPicker in one bundle:
```
<script src="//cdn.adaksys.com/jquery-1.10.2.min.js"></script>
<script src="//demo.adaksys.com/PersianDateAndTimePicker/Scripts/webber-persianDTPickerWBehzadi"></script>

<link href="//demo.adaksys.com/PersianDateAndTimePicker/Contents/webber-persianDTPickerWBehzadi" rel="stylesheet" />

```


## Usage

Just add `webber-persian-dtpicker` CssClass to your input and enjoy.

No matter your inputType is `text` or `hidden`.

Sample1: `<input type="text" name="datetime" class="webber-persian-dtpicker" />`

Sample2: `<input type="hidden" name="datetime" class="webber-persian-dtpicker" />`

## Options

To customize input, simply add data attribute to your input:

`<input type="text" name="datetime" class="webber-persian-dtpicker"  data-type="date" />`

available types: `date`, `time`, `dateTime`

## Demo

[Demo Website](http://demo.adaksys.com/PersianDateAndTimePicker)

## License

Released under the MIT license.

Created by MohammadReza Daghestani, [ADAK SYS Co.](http://adaksys.com/)