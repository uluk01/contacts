$(document).ready(function () {
    $('.add-new').on("click", function () {
        $('<div/>', {
            class: 'holder',
            text: 'Add contact',
            id: 'submit'
        }).appendTo($('#container label[for="submit-input"]'));

        $('body').addClass('add');


    });
});