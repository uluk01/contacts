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

            $('<i/>', {
                class: 'main-nav__delete icon-trash',
            }).appendTo(item);

            $('<i>', {
                class: 'main-nav__edit icon-pencil'
            }).appendTo(item);

        });
        $(".main-nav__delete").on("click", onDelete);
        $(".main-nav__edit").on("click", onEdit);
        $(".main-nav__item").on("click", onView);

        $.get("https://tinyfac.es/api/users", function (data, status) {
            $.each(data, function (i, avatar) {
                $('.main-nav__img').eq(i).css('background-image', 'url("' + avatar.avatars[0].url + '")')
            });

        });

        $.get("https://my-json-server.typicode.com/ka245/fake-json/status", function (data, i) {
            $.each(data, function (i, status) {
                for (var j = 0; j < 10; j++) {
                    if ($('.main-nav__id').eq(i).text() == data[j].userId) {
                        $('.main-nav__status').eq(i).text(status.status)
                    }
                }
            });

        });

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
        $(this).toggleClass('selected-contact');
        $('.exit').css({
            'display': 'block'
        })

    }


});

