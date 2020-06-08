$(document).ready(function __selected() {
    var select = $(".select-form__choose");
    var form = $('.select-form');
    var option = $(".select-form__choose option");

    var selected = $("<div/>", {
        class: "select-form__selected",
        text: select.val()
    }).appendTo(form);

    var b = $("<div/>", {
        class: "select-form__items select-form__hide"
    }).appendTo(form);

    $.each(option, function (key, item) {
        var options = $("<div/>", {
            text: `${item.value}`
        }).appendTo(b);

        options.on("click", function () {
            selected.text($(this).text());
            for (var i = 0; i < option.length; i++) {
                b.find(".select-form__same-as-selected").removeClass("select-form__same-as-selected");
                $(this).addClass("select-form__same-as-selected");
            }
        })
    });

    selected.on("click", function (e) {
        e.stopPropagation();
        closeAllSelect(this);
        $(this).next().toggleClass("select-form__hide");
        $(this).toggleClass("select-form__arrow-active");
    });

    function closeAllSelect(elmnt) {

        var x = $(".select-form__items");
        var y = $(".select-form__selected");
        var arrNo = [];
        for (var i = 0; i < y.length; i++) {
            if (elmnt === y[i]) {
                arrNo.push(i)
            } else {
                y.eq(i).removeClass("select-arrow-active");
            }
        }
        for (var i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x.eq(i).addClass("select-form__hide");
            }
        }
    }

    $(document).on("click", closeAllSelect);

    $('.select-form__items div').on('click', function () {
        var value = $(this).text().toLowerCase();
        $(".main-nav__item ").filter(function () {
            if (value === 'all') {
                $(this).toggle($('.main-nav__item div').text() !== null);
                $('html').removeClass('show-contacts');
                $(this).removeClass('selected-contact');
            } else {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
                $('html').removeClass('show-contacts');
                $(this).removeClass('selected-contact');
            }
        });
    });

});
