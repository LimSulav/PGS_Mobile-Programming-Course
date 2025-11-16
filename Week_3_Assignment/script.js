$(document).ready(function() {

    $("#infobutton").click(function() {
        $("#extrainfo").toggle();
    });

    $("#sneakpeek").click(function() {
        $("#sneakpeek_text").slideToggle();  
    });

    $("h1").click(function() {
        $("h1").text("NepLocal Dish App Design Preview");
    });

});
