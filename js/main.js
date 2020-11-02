$(document).ready(()=>{
    new WOW({animateClass: 'animate__animated'}).init();
    $('#burger').click (function() {
        $('#header-main').css('display','flex');
    });
    $('#x').click (function() {
        $('#header-main').hide();
    });
});