/**
 * Created by Patrick on 11/24/2016.
 */
$(document).ready(function(){

    $("head").append("<link rel='stylesheet' type='text/css' href='hecarim.css' />");

    function hecarimTest() {
        console.log("hecarim passive");
    }
    $("body").on( "click", hecarimTest );
    
});