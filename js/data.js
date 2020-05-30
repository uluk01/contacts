$(document).ready(function () {

    var data = ["https://my-json-server.typicode.com/ka245/fake-json/users", "https://my-json-server.typicode.com/ka245/fake-json/address", "https://my-json-server.typicode.com/ka245/fake-json/status", "https://tinyfac.es/api/users"];
    var newData = [];
    $.each(data, function (index, value) {
        $.get(value, function (data, status) {
            newData.push(data)

        })
    });


});
