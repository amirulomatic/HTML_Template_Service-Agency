(function($){
    $(document).ready(function(){
    
    
        $('.hamburger-menu a').click(function(){
            
    
            let menuStatus = $('.menu').css('display');
            
            if(menuStatus == 'block'){
                $('.hamburger-menu a').html('<i class="fas fa-bars"></i>');
                
            }else if(menuStatus == 'none'){
                $('.hamburger-menu a').html('<i class="fas fa-times"></i>');
            };
    
    
            $('.menu').slideToggle();
        });
    
    
        $(window).resize(function(){
            var bodyWidth = $('body').width();
    
            if(bodyWidth > 600){
                $('.menu').show();
                $('.hamburger-menu a').html('<i class="fas fa-bars"></i>');
            }else{
                $('.menu').hide();
            };
        });
    
    
    });
    })(jQuery);
    