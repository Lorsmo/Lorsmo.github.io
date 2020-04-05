(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict



// Flip function when click on
var face_changers = document.getElementsByClassName("crossRotate");

for(var i = 0; i < face_changers.length; i++){
  face_changers[i].addEventListener('click', function(e) {
      var r1 = this.closest(".flip-container");
      console.log(r1);
      // returns the element with the class "flip-container"
      var baseElement = this.closest(".flip-box-inner");    
      var r2 = baseElement.querySelector(".overlay");
      
      r1.classList.toggle('hover_effect');

      if (r1.classList.value == 'flip-container hover_effect') {
        r2.style.display = 'none';
      } else {
        r2.style.display = 'inline';
      };
      e.preventDefault();
  }, false)
};

