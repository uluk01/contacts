$(document).ready(function () {
    var searchForm = $('.search-form');
    var searchButton = $('.search-form__button');

    searchButton.on("click", function () {
        searchForm.toggleClass('active');
    });
});