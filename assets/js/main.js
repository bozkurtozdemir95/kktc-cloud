$(document).ready(function () {
    $(document).on('click', '.dropdown-menu.no-close', function (e) {
        e.stopPropagation();
    });

    $('.custom-select-toggler').click(function (e) {
        $(e.target).next().toggleClass('open');
    });
    $('.custom-select-menu-item').click(function (e) {
        $(e.target).parents().find('.custom-select-menu').toggleClass('open');
    });
});
$(function () {
    $('.datetimepicker.date').datetimepicker({
        language: 'en',
        pickDate: true,
        pickTime: false,
        pickSeconds: false,
        maskInput: true,
        format: 'dd/MM/yyyy',
    });
    $('.datetimepicker.time').datetimepicker({
        language: 'en',
        pickDate: false,
        pickTime: true,
        pickSeconds: false,
        maskInput: true,
        format: 'hh:mm',
    });
});


$(function () {
    $('[data-toggle="popover"]').popover()
})
