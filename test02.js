(function($, window) {
    $(function() {
        
    $('h1').addClass('title');
    $('#index').removeClass('list');
    
    $('h2').show();
    $('#index').find('li').eq(0).hide();
    });
})(jQuery, window);