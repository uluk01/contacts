$(document).ready(function () {
    $('#name').focus();

    var progressTriangle = $('#progress-triangle');

    $('#name').focus(function () {
        progressTriangle.animate({
            top: "48px"
        });
    });
    $('#email').focus(function () {
        progressTriangle.animate({
            top: "118px"
        });
    });
    $('#password').focus(function () {
        progressTriangle.animate({
            top: "190px"
        });
    });
    $('#select').focus(function () {
        progressTriangle.animate({
            top: "262px"
        });
    });

    $('#submit').on('click', function (e) {
        var num = 100;
        $.post('https://5e9fe4c311b078001679cfaf.mockapi.io/contacts', {
            id: num++,
            name: $('#name').val(),
            address: $('#address').val(),
            email: $('#email').val(),
            status: $('#select').val()
        });
    });

    $("#button").on("click", function () {
        $('body').removeClass('add');
        $("#edit").remove();
        $("#submit").remove()
    });


    $('#edit').on('click', function () {
        $.post('https://5e9fe4c311b078001679cfaf.mockapi.io/contacts', {
            id: num++,
            name: $('#name').val(),
            address: $('#address').val(),
            email: $('#email').val(),
            status: $('#select').val()
        });
        location.reload();

    });

});