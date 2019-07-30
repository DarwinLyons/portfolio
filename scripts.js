//submit a tags when enter
const accessibleNav = function () {
  console.log("access!")
  function navigateLink(evt) {
    if (evt.type == "click" ||
      evt.keyCode == sap.ui.keycodes.ENTER) {
      const ref = evt.target != null ? evt.target : evt.srcElement;
      if (ref) window.open(ref.getAttribute("href"), "_blank");
    }
  }

}

// Add smooth scrolling to all links
const smoothScroll = function () {
  $("a").on('click', function (event) {
  
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
  
      // Store hash
      const hash = this.hash;
  
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
  
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

}

// variable for page 
const page = $("html, body");

//variable for height of window minus nav
let navHeight = $(window).height() - 50;

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

const lineAnimation = function() {
  $('.menuLink').click(function () {
    $(".toggle").toggle("slide right");
    line1.classList.toggle("change");
    line2.classList.toggle("change");
    line3.classList.toggle("change");
  })
};


const navSlide = function() {
  //sticky nav
  $(window).bind('scroll', function () {
    
    //if window height is larger than the height minus the menu
    if ($(window).scrollTop() > navHeight) {
      $('.menuContainer').addClass('sticky');
      $(".click").removeClass("mobileContainer");
      $(".menuToggle").addClass("lines");
      $(".menuToggle").removeClass("menuLines");
    } else {
      $('.menuContainer').removeClass('sticky');
      $(".click").addClass("mobileContainer");
      $(".menuToggle").addClass("menuLines");
      $(".menuToggle").removeClass("lines");
    }
  })
}


//header slide
const headerSlide = function() {
  $(".header").animate({
    left: "+=115%",
  }, {
      duration: 2000
    });
}

//actor gallery shuffle
// filter .actor items
// $grid.isotope({ filter: '.actor' });

// // filter .director items
// $grid.isotope({ filter: '.director' });

// // filter .creator items
// $grid.isotope({ filter: '.creator' });

// // filter .educator items
// $grid.isotope({ filter: '.educator' });

// // filter .producer items
// $grid.isotope({ filter: '.producer' });

// // show all items
// $grid.isotope({ filter: '*' });

// // hash of functions that match data-filter values
// const filterFns = {
//   // show if actor
//   actor: function () {
//     const name = $(this).find('.name').text();
//     return name.match(/actor$/);
//   },
//   director: function () {
//     const name = $(this).find('.name').text();
//     return name.match(/director$/);
//   },
// };

// // filter items on button click
// $('.filter-button-group').on('click', 'button', function () {
//   var filterValue = $(this).attr('data-filter');
//   // use filter function if value matches
//   filterValue = filterFns[filterValue] || filterValue;
//   $grid.isotope({ filter: filterValue });
// });

const init = function() {
  navSlide();
  headerSlide();
  lineAnimation();
  smoothScroll();
  accessibleNav();
}

//document ready
$(document).ready(function(){

  init();

    

})