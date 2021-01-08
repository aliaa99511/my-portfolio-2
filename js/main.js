/*global $*/
$(function () {
  
    "use strict";

    // talk prof
    $('.openChat').click(function(){
      $('.message').slideToggle();
    });
    $('.chat i').click(function(){
      $('.message').slideUp();
    });
    $('.send').click(function(){
      if ($('.message .chat textarea').val().length < 1) {
        $('.message .chat textarea').focus();
      }
      else {
        $('.message .chat').hide();
        $('.message .thank').fadeIn();
      }
    });


       //scroll-top
   var scrollbutton=$(".scrollTop");
    
   $(window).scroll(function ()
    {
       if($(this).scrollTop () >=700){
           
         scrollbutton.show();
       }else{

           scrollbutton.hide();
       }
       
   });



    $('.scrollTop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    // team
    
    $('.tabs button').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('.' + $(this).data('tab')).show();
        $('.type').not('.' + $(this).data('tab')).hide();
    });


    //counter
    $('.num').counterUp({
      delay: 10,
      time: 3000
   });

});


/*
$(function () {
  
  "use strict";
  // shadow/
  
  $(window).scroll(function () {
      if ($(window).scrollTop() >= 100) {
          $('header').addClass('shadow');
          $('header').addClass('white');
          $('.logo h2').css('color','#FF485A');
      } else {
          $('header').removeClass('shadow');
          $('header').removeClass('white');
          $('.logo h2').css('color','#fff');
      }
    });

  // talk prof
  $('.openChat').click(function(){
    $('.message').slideToggle();
  });
  $('.chat i').click(function(){
    $('.message').slideUp();
  });
  $('.send').click(function(){
    if ($('.message .chat textarea').val().length < 1) {
      $('.message .chat textarea').focus();
    }
    else {
      $('.message .chat').hide();
      $('.message .thank').fadeIn();
    }
  });

  // scroll top
  var scrollUp = $('.scrollTop');
  var openChat = $('.openChat');
  var message = $('.message');
  $(window).scroll(function () {
      if ($(window).scrollTop() >= 600) {
          scrollUp.fadeIn(700);
          openChat.fadeIn(700);
      } else {
          scrollUp.fadeOut(700);
          openChat.fadeOut(700);
          message.fadeOut(700);
      }
  });
  $('.scrollTop').click(function () {
      $('html,body').animate({
          scrollTop: 0
      }, 1000);
  });

  // team
  $('.tabs button').click(function() {
      $(this).addClass('active').siblings().removeClass('active');
      $('.' + $(this).data('tab')).show();
      $('.type').not('.' + $(this).data('tab')).hide();
  });


  //counter
  $('.num').counterUp({
    delay: 10,
    time: 3000
 });

});
*/