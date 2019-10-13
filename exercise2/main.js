"use strict";
$(document).ready(function(){

    var theme = $('#theme');

    $('.theme_red').click(function(){
        theme.attr("href","sass/main_style.scss");
        console.log("rojo");
    });
    
    $('.theme_blue').click(function(){
        theme.attr("href","sass/main2_styles.scss");
        console.log("azul");
        
    });
    
})
