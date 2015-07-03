$(document).ready(function () {
    webberPersianDTPickerInit($('input.webber-persian-dtpicker'));
});
var webberPersianDTPickerLastId = 0;
function webberPersianDTPickerInit(items) {
    var webberPersianDTPickerTxtFormat = function (id, type, dev, selectedVal) {
        if (selectedVal == undefined || selectedVal == null) {
            selectedVal = '';
        }
        if (selectedVal.toString().indexOf('/') < 0) {
            if (isNaN(Number(selectedVal))) {
                selectedVal = '00';
            }
        }
        var textboxFormat = ((dev != undefined && dev != null && dev != '' ? '<td>' + dev + '</td>' : '')
            + '<td><input type="text" id="' + id + '_#type#" value="' + selectedVal + '" /></td>').replace('#type#', type);
        return textboxFormat;
    };
    items.each(function () {
        var item = $(this);
        var type = item.data('type');
        if (type == undefined || type == null || type == '') {
            type = 'dateTime';
        }
        var hasTime = type.indexOf('time') > -1 || type.indexOf('Time') > -1;
        var hasDate = type.indexOf('date') > -1 || type.indexOf('Date') > -1;

        var itemDataIdName = 'pdtpid';
        var id = 'pdtp_' + (++webberPersianDTPickerLastId);
        item.data(itemDataIdName, id);

        var itemValue = item.val();
        var date = '';
        var hour = '';
        var minute = '';
        var second = '';
        if (itemValue != null && itemValue != '' && itemValue != undefined) {
            var splitedVal = itemValue.toString().split(' ');
            if (splitedVal.length > 1) {
                var date = splitedVal[0];
                var timeSplited = splitedVal[1].split(':');

                var hour = timeSplited.length > 0 ? timeSplited[0] : '';
                var minute = timeSplited.length > 1 ? timeSplited[1] : '';
                var second = timeSplited.length > 2 ? timeSplited[2] : '';
            }
        }
        var ttag = '<table id="' + id + '" class="webber-persian-dtpicker"><tr>'
            + (hasDate ? webberPersianDTPickerTxtFormat(id, 'date', '', date) : '')
            + (hasTime ?
                (webberPersianDTPickerTxtFormat(id, 'hour', (hasDate ? ' ' : null), hour)
                + webberPersianDTPickerTxtFormat(id, 'minute', ':', minute)
                + webberPersianDTPickerTxtFormat(id, 'second', ':', second))
                : '')
            + '</tr></table>';
        item.after(ttag);

        $('#' + id + '_date').persianDatepicker({
            formatDate: "YYYY/0M/0D",
            onSelect: function () {
                //console.log($(this));
                $('#' + id + '_date').change();
                $('#' + id + '_hour').focus();
            }
        });

        //bind main input on textbox changes
        $('table#' + id + ' input').change(function () {
            var hourValue = $('#' + id + '_hour').val();
            var minuteValue = $('#' + id + '_minute').val();
            var secondValue = $('#' + id + '_second').val();

            var date = $('#' + id + '_date').val();
            var hour = Number(hourValue);
            var minute = Number(minuteValue);
            var second = Number(secondValue);

            //validation
            if (!isNaN(hour) && (hour > 23 || hour < 0)) {
                hour = 0;
                $('#' + id + '_hour').val(hour)
            }
            if (!isNaN(minute) && (minute > 59 || minute < 0)) {
                minute = 0;
                $('#' + id + '_minute').val(minute)
            }
            if (!isNaN(second) && (second > 59 || second < 0)) {
                second = 0;
                $('#' + id + '_second').val(second)
            }

            item.val(
                (hasDate ? date : '')
                + (hasDate && hasDate ? ' ' : '')
                + (hasTime && hourValue != '' && minuteValue != '' && secondValue != ''
                ? ((isNaN(hour) ? '00' : (hour > 9 ? hour : ('0' + hour)))
                + ':' + (isNaN(minute) ? '00' : (minute > 9 ? minute : ('0' + minute)))
                + ':' + (isNaN(second) ? '00' : (second > 9 ? second : ('0' + second)))) : ''));
        });

        $('table#' + id + ' input').change();

        //textbox key events
        $('table#' + id + ' input').not('[id*="_date"]').keydown(function (e) {
            // Allow: backspace, delete, tab, escape, enter and .
            //console.log(event);
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                // Allow: Ctrl+A, Command+A
                (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
                // Allow: home, end, left, right, down, up
                (e.keyCode >= 35 && e.keyCode <= 40)
                //Allow: /
                || (e.keyCode == 191)
                ) {
                //Up, Down
                if (e.keyCode == 40 || e.keyCode == 38) {
                    var number = Number($(this).val());
                    if (!isNaN(number)) {
                        if (e.keyCode == 38)
                            number++;
                        else if (e.keyCode == 40)
                            number--;
                        if (number < 0)
                            if ($(this).attr('id').toString().indexOf('_hour') > -1)
                                number = 23;
                            else
                                number = 59;
                        else if ($(this).attr('id').toString().indexOf('_hour') > -1 && number > 23)
                            number = 0;
                        else if (number > 59)
                            number = 0;
                        $(this).val(number < 10 ? '0' + number.toString() : number.toString())
                        $(this).change();
                    }
                }
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
    });
}