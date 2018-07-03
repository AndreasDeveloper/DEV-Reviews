$(document).ready(function() {


/* SETUP FOR SMOOTH SCROLLING FOR ELEMETS */
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  /* SETUP FOR SMOOTH SCROLLING FOR ELEMENTS */


    /* ANIMATIONS ON SCROLL */

    /*---------------------------------------- */           /*---------------------------------------- */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated slideInLeft');
    }, {                                                    /* FEATURES / ABOUT US Section Animation */
         offset: '100%'
    });
    /*---------------------------------------- */           /*---------------------------------------- */

    /*---------------------------------------- */           /*---------------------------------------- */
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated slideInRight');
    }, {                                                    /* REVIEW SECTION IMAGE ANIMATION */
         offset: '100%'
    });
    /*---------------------------------------- */           /*---------------------------------------- */

    /*---------------------------------------- */           /*---------------------------------------- */
     $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated slideInLeft');
    }, {                                                    /* PREVIEW SECTION IMAGE ANIMATION */
         offset: '100%'
    });
    /*---------------------------------------- */           /*---------------------------------------- */

    /*---------------------------------------- */           /*---------------------------------------- */
     $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated slideInLeft');
    }, {                                                     /* COLUMN BEFORE YOU BUY SECTION TEXT ANIMATION */
         offset: '100%'
    });
    /*---------------------------------------- */           /*---------------------------------------- */

    /*---------------------------------------- */           /*---------------------------------------- */
     $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeIn');
    }, {                                                    /* COLUMN GIVEAWAY SECTION TEXT ANIMATION */
         offset: '100%'
    });
    /*---------------------------------------- */           /*---------------------------------------- */

    /*---------------------------------------- */           /*---------------------------------------- */
     $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated slideInRight');
    }, {                                                    /* COLUMN CLUB SECTION TEXT ANIMATION */
         offset: '100%'
    });
    /*---------------------------------------- */           /*---------------------------------------- */
















});
