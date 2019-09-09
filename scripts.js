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

//grab the past projects grid
const $container = $('.grid');

const $grid = $($container).isotope({
  // options
  itemSelector: '.gridItem',
  layoutMode: 'masonry',
});

// layout Isotope again after all images have loaded
$grid.imagesLoaded(function () {
  $grid.isotope('layout');
});

// filter items on button click
$('.filter-button-group button').on('click', function () {
  if( $(this).hasClass('checked') && $(this).hasClass('filter')) {
    $(this).removeClass('checked');
    $container.isotope({ filter: '*'})
    $('.all').addClass('checked');
  } else {
    $('.filter-button-group button').removeClass('checked');
    const filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    $(this).addClass('checked')
  }
});

//header slide
const headerSlide = function() {
  $(".header").animate({
    left: "+=115%",
  }, {
      duration: 2000
    });
}



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