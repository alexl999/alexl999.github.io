$(document).ready(function() {
      // Show or hide the sticky footer button
      $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
          $('.go-top').fadeIn(500);
        } else {
          $('.go-top').fadeOut(500);
        }
      });
      
      // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 300);
      })
    });