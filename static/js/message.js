// Highlight current tab

$('#myTabs a[href="#message"]').tab('show')

// Message Ajax requests

$('#send').submit(function (e) {
    e.preventDefault();
    $.ajax({
        method: "POST",
        url: "/message",
        data: $("#send").serialize(), // serializes the form's elements.
        success: function(data)
        {
           $("#result").append(data + "<br>"); // show response from the php script.
        }
    });
});

$('#unread').submit(function (e) {
    e.preventDefault();
    $.ajax({
        method: "GET",
        url: "/message",
        data: $("#unread").serialize(), // serializes the form's elements.
        success: function(data)
        {
            $("#result").append("<br>");
            $.each(data["messages"], function( index, obj ) {
                $.each(obj, function(key, value) {
                    $("#result").append(key + ": " + value + "<br>");
                });
                $("#result").append("<br>");
            });
            $("#result").append("<br>");
        }
    });
});

$('#markread').submit(function (e) {
    e.preventDefault();
    $.ajax({
        method: "DELETE",
        url: "/message",
        data: $("#markread").serialize(), // serializes the form's elements.
        success: function(data)
        {
           $("#result").append(data + "<br>"); // show response from the php script.
        }
    });
});
