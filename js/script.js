$(window).on('load', function () {
    var myVar;
    myVar = setTimeout(showPage, 3000);


    function showPage() {
        $(".load").css({'display': 'none'});
        $("#app").css({
            'display': 'block'
        })

    }


});
$(document).ready(function () {
    var mainNav = $(".main-nav");
    $.get("https://my-json-server.typicode.com/ka245/fake-json/users", function (data, status) {
        $.each(data, function (i, name) {
            var item = $('<tr/>', {
                class: 'main-nav__item'
            }).appendTo(mainNav);

            $('<td>', {
                class: 'main-nav__id',
                text: '' + name.id + ''
            }).appendTo(item);

            $('<a>', {
                class: 'main-nav__img'
            }).appendTo(item);

            $('<td>', {
                text: '' + name.name + '',
                class: 'main-nav__name search'
            }).appendTo(item);

            $('<td>', {
                class: 'main-nav__tel'
            }).appendTo(item);

            $('<td>', {
                text: '' + name.email + '',
                class: 'main-nav__email search '
            }).appendTo(item);

            $('<td>', {
                class: 'main-nav__address'
            }).appendTo(item);

            $('<td/>', {
                class: 'main-nav__status'
            }).appendTo(item);

            $('<button/>', {
                text: 'X',
                class: 'main-nav__delete',
            }).appendTo(item);

            $('<button>', {
                text: '!',
                class: 'main-nav__edit'
            }).appendTo(item);

        });
        $(".main-nav__delete").on("click", onDelete);
        $(".main-nav__edit").on("click", onEdit);
        $(".main-nav__item").on("click", onView)

        $(".exit").on("click", function () {
            $('html').removeClass('show-contacts');
            $(this).removeClass('selected-contact');
        })

    });

    function onDelete() {
        var item = $(this).parent();

        item.fadeOut(function () {
            item.remove()
        })

    }

    function onEdit() {
        $('#name').val($(this).parent().children('.main-nav__name').text());
        $('#email').val($(this).parent().children('.main-nav__email').text());
        $('#tel').val($(this).parent().children('.main-nav__tel').text());
        $('#address').val($(this).parent().children('.main-nav__address').text());
        $('#select').val($(this).parent().children('.main-nav__status').text());

        $('<div/>', {
            class: 'holder',
            text: 'Edit contact',
            id: 'edit'
        }).appendTo($('#container label[for="submit-input"]'));

        $('body').addClass('add');
    }

    function onView() {
        $('html').addClass('show-contacts');
        $(this).addClass('selected-contact');

    }

});

$(document).ready(function () {
    $.get("https://tinyfac.es/api/users", function (data, status) {
        $.each(data, function (i, avatar) {
            $('.main-nav__img').eq(i).css('background-image', 'url("' + avatar.avatars[0].url + '")')
        });
    });
});

$(document).ready(function () {
    $.get("https://my-json-server.typicode.com/ka245/fake-json/status", function (data, i) {
        $.each(data, function (i, status) {
            for (var j = 0; j < 10; j++) {
                if ($('.main-nav__id').eq(i).text() == data[j].userId) {
                    $('.main-nav__status').eq(i).text(status.status)
                }
            }
        });
    });
});

$(document).ready(function () {
    $.get("https://my-json-server.typicode.com/ka245/fake-json/address", function (data, status) {
        $.each(data, function (i, address) {
            for (var j = 0; j < 10; j++) {
                if ($('.main-nav__id').eq(i).text() == data[j].userId) {
                    $('.main-nav__tel').eq(i).text(address.phone);
                    $('.main-nav__address').eq(i).text(address.address.city)
                }

            }

        });
    });
});


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

    var searchForm = $('.search-form');
    var searchButton = $('.search-form__button');

    searchButton.on("click", function () {
        searchForm.toggleClass('active');
    });

    $(".search-form__input").on("keyup touchend", function () {
        var value = $(this).val().toLowerCase();
        $(".main-nav__item ").filter(function () {
            $(this).toggle($(this).children('.search').text().toLowerCase().indexOf(value) > -1);
        });
    });

    $('.select-form__items div').on('click', function () {
        var value = $(this).text().toLowerCase();
        $(".main-nav__item ").filter(function () {
            if (value === 'all') {
                $(this).toggle($('.main-nav__item div').text() !== null)
                $('html').removeClass('show-contacts');
                $(this).removeClass('selected-contact');
            } else {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                $('html').removeClass('show-contacts');
                $(this).removeClass('selected-contact');
            }
        });
    });


    $('.add-new').on("click", function () {
        $('<div/>', {
            class: 'holder',
            text: 'Add contact',
            id: 'submit'
        }).appendTo($('#container label[for="submit-input"]'));

        $('body').addClass('add');


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