$(document).ready(function () {
    $(".search-form__input").on("keyup touchend", function () {
        var value = $(this).val().toLowerCase();
        $(".main-nav__item ").filter(function () {
            $(this).toggle($(this).children('.search').text().toLowerCase().indexOf(value) > -1);
        });
    });
});