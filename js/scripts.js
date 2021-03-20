$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );

    $("#carousel-pause").click(function(){
        $("#mycarousel").carousel('pause');
    });

    $("#carousel-play").click(function(){
        $("#mycarousel").carousel('cycle');
    });

    $("#loginModalButton").click(function(){
        $("#loginModal").modal('toggle');
    });

    $("#reserveModalButton").click(function(){
        $("#reserveModal").modal('toggle');
    });
});