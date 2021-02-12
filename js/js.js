$(function () {

    var wh = $(window).height();
    var bH = $('.banner-top').innerHeight();
    var nH = $('.custom-navbar').innerHeight();
    
    
   //  carousel Height
    $('.carousel.slide , .carousel-item').height( wh -  (bH + nH) );

   //  work chose
   $('.work-chose li').on('click' , function () {
      $(this).addClass('active').siblings().removeClass('active');

      if($(this).data('work') == "all") {
         $('.work-img .row div').css('opacity' , '1');
      }else {
         $('.work-img .row div').css('opacity' , '.2');
         $($(this).data('work')).css({
            opacity : 1,
            transform : 'scale(1.2 , 1.2)',
            transition : 'all .3s ease',
            borderRadius : '20px'
         });

      }

   });

   // Navbar Links
   $('.navbar .nav-link').on('click' , function() {
      $(this).addClass('active').parent().siblings().find('.nav-link').removeClass('active');

      $('html , body').animate({
         scrollTop : $('#'  + $(this).data('scroll')).offset().top - (nH - 1)
      }, 500)
   });

});




   $(window).on('scroll' , function() {


      // button scroll to top
      if($(window).scrollTop() >= 300) {
         if($('.scroll-to').is(':hidden')) {
            $('.scroll-to').fadeIn(200)
         }
      }else {
         $('.scroll-to').fadeOut(200)
      }

      // button scroll to bottom
      if($(window).scrollTop() >= 200) {
         $('.custom-navbar').addClass('custom-navbar-fixed')
      }else {
         $('.custom-navbar').removeClass('custom-navbar-fixed')
      }



      // Daynamic Navbar Links
      $('.block').each(function() {
         var nH = $('.custom-navbar').innerHeight();
         if($(window).scrollTop() > $(this).offset().top - nH ){
            $('.custom-navbar .nav-link').removeClass('active');
            var myID = $(this).attr('id');
               $(".navbar ul li a[data-scroll="  + myID +  "]").addClass('active');
         }
      })
      
   });


   // Scroll To Top and bottom
   $('.scroll-to-top').on('click' , function() {
      $('html , body').animate({
         scrollTop : 0
      }, 500)
   });

   $('.scroll-to-bottom').on('click' , function() {
      $('html , body').animate({
         scrollTop : $(document).height()
      }, 500)
   })


   // Loading Page
 $(window).on('load' , function() {
    $('.loading').fadeOut(1000);
});





