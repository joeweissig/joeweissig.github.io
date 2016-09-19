//$(document).ready(function(){
//    $("#snapchat").hover(function(){
//        $("#profile").css("background-color", "yellow");
//        }, function(){
//        $(this).css("background-color", "pink");
//    });
//});

//$(document).ready(function() {
//  $("#snapchat").mouseenter(function() {
//    $("#snapcode").fadeIn();
//  });
//  
//  $("#snapchat").mouseleave(function() {
//    $("#snapcode").fadeOut();
//  });
//})

$('#snapchat').hover(function() {

    // increase the 500 to larger values to lengthen the duration of the fadeout 
       // and/or fadein
    $('#profile').fadeOut(250, function() {
        $('#profile').attr("src","/res/snapcode.png");
        $('#profile').fadeIn(250);
    });

});