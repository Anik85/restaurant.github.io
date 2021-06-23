$(document).ready(function(){
    $('#sidebar_btn').click(function(){
        $(this).toggleClass('fa-times');
    });
    $('.btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        
    });
    //with jquery
    var $grid = $('.items').isotope({
        // options
    });
    // filter items on button click
    $('.button-container').on( 'click', '.btn', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
});