// Highlight current tab

$('#myTabs a[href="#service"]').tab('show')

// Service Ajax requests

$('#create').submit(function (e) {
    e.preventDefault();
    $.ajax({
        method: "POST",
        url: "/service",
        data: $("#create").serialize(), // serializes the form's elements.
        success: function(data)
        {
            $.each(data["service"], function(key, value) {
                $("#result").append(key + ": " + value + "<br>");
            });
            $("#result").append("<br>");
        }
    });
});

$('#getinfo').submit(function (e) {
    e.preventDefault();
    $.ajax({
        method: "GET",
        url: "/service",
        data: $("#getinfo").serialize(), // serializes the form's elements.
        success: function(data)
        {
            $.each(data["service"], function(key, value) {
                $("#result").append(key + ": " + value + "<br>");
            });
            $("#result").append("<br>");
        }
    });
});

$('#update').submit(function (e) {
    e.preventDefault();
    $.ajax({
        method: "PATCH",
        url: "/service",
        data: $("#update").serialize(), // serializes the form's elements.
        success: function(data)
        {
           $("#result").append(data + "<br>"); // show response from the php script.
        }
    });
});

$('#delete').submit(function (e) {
    e.preventDefault();
    $.ajax({
        method: "DELETE",
        url: "/service",
        data: $("#delete").serialize(), // serializes the form's elements.
        success: function(data)
        {
            $("#result").append(data + "<br>"); // show response from the php script.
        }
    });
});
