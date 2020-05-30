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
    var options = $(".select-form__items div");
    var searchForm = $('.search-form');
    var searchButton = $('.search-form__button');

    searchButton.on("click", function () {
        searchForm.toggleClass('active')
    });

    $.get("https://5e9fe4c311b078001679cfaf.mockapi.io/contacts", function (data, status) {
        options.on('click', function () {
            var visibleItems = filter(data, $(this).text());

            function filter(items, filter) {
                switch (filter) {
                    case 'All':
                        return items;
                    case 'Family':
                        return items.filter((item) => item.status === 'family');
                    case 'Friends':
                        return items.filter((item) => item.status === '"friend"');
                    case 'Colleague':
                        return items.filter((item) => item.status === 'colleague');
                    default:
                        return items;

                }
            }

        });
        $(".search-form__input").on("keyup touchend", function () {
            var value = $(this).val().toLowerCase();
            $(".main-nav__item ").filter(function () {
                $(this).toggle($(this).children('h4').text().toLowerCase().indexOf(value) > -1)
                console.log($(this).children('h4'))
            })
        });

        data.map(function (data) {
            var item = $('<li/>', {
                class: 'main-nav__item'
            }).appendTo(mainNav);

            $('<h5>', {
                text: `${data.id}`
            }).appendTo(item);

            $('<a>', {
                class: 'main-nav__img'
            }).css('background-image', 'url("' + data.avatar + '")').appendTo(item);

            $('<h4>', {
                class: 'main-nav__name',
                text: `${data.name}`
            }).appendTo(item);

            var tel = $('<h5>', {
                text: '' + data.tel + ''
            }).appendTo(item);

            $('<h5>', {
                text: `${data.email}`
            }).appendTo(item);

            var address = $('<h5>', {
                text: '' + data.address + ''
            }).appendTo(item);

            var status = $('<h5/>', {
                class: "main-nav__status",
                text: '' + data.status + ''
            }).appendTo(item)

        });
    });

});
