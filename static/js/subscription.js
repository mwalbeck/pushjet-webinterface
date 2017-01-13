// Highlight current tab

$('#myTabs a[href="#subscription"]').tab('show')

// Subscription Ajax requests

$('#subscribe').submit(function (e) {
    e.preventDefault();
    $.ajax({
        method: "POST",
        url: "/subscription",
        data: $("#subscribe").serialize(), // serializes the form's elements.
        error: function(textStatus)
        {
            $("#result").append(textStatus + "<br>");
        },
        success: function(data)
        {
           $("#result").append(data + "<br>"); // show response from the php script.
        }
    });
});

$('#get').submit(function (e) {
    e.preventDefault();
    $.ajax({
        method: "GET",
        url: "http://localhost/subscription",
        data: $("#get").serialize(), // serializes the form's elements.
        success: function(data)
        {
            $.each(data["subscriptions"], function( index, obj ) {
                $.each(obj, function(key, value) {
                    $("#result").append(key + ": " + value + "<br>");
                });
                $("#result").append("<br>");
            });
            $("#result").append("<br>");
        }
    });
});

$('#unsubscribe').submit(function (e) {
    e.preventDefault();
    $.ajax({
        method: "DELETE",
        url: "/subscription",
        data: $("#unsubscribe").serialize(), // serializes the form's elements.
        success: function(data)
        {
           $("#result").append(data + "<br>"); // show response from the php script.
        }
    });
});
