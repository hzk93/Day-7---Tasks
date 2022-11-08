$(document).ready(function(){
    $('#animateP').animate({color:"blue", opacity:"0.50"}, 6000,function(){$('#animateCompleted').append('Animation Completed !!!')});
    $('#stopAnimation').click(function(){
        $('#animateP').stop();
    })
    $('#usefadeOut').fadeOut(5000,function(){
        $("#fadeOutCompleted").append('.fadeOut Action Completed')
    })
})