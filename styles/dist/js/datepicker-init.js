// Date Picker
$('.mydatepicker, #datepicker, .input-group.date').datepicker({
    format: "dd-mm-yyyy" // Example: 14-04-2025
});

$("#datepicker-autoclose").datepicker({
  autoclose: true,
  todayHighlight: true,
});

$("#date-range").datepicker({
  toggleActive: true,
});

$("#datepicker-inline").datepicker({
  todayHighlight: true,
});