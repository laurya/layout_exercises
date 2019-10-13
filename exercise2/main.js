$(document).ready(function(){
    var theme = $("theme");

    $(".seccRed").hide();
    $(".seccBlue").hide();

    $(".theme_red").click(function(){
        $(".seccBlue").hide();
        $(".seccRed").show();
    });

    $(".theme_blue").click(function(){
        $(".seccRed").hide();
        $(".seccBlue").show();      
    });
});