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