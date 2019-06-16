//nav bar slide off on click
$(".fa-times").click(function () {
  $(".toggle").toggle("slide right");
});

//nav bar slide on on click
$(".menuLink").click(function () {
  $(".toggle").toggle("slide");
});

const navSlide = function() {
  //sticky nav
  $(window).bind('scroll', function () {
    let navHeight = $(window).height() - 50;
    //if window height is larger than the height minus the menu
    if ($(window).scrollTop() > navHeight) {
      $('.menuContainer').addClass('sticky');
      $(".click").removeClass("mobileContainer");
      $(".menuToggle").addClass("lines");
      $(".menuToggle").removeClass("menuLines");
    } else {
      $('.menuContainer').removeClass('sticky');
      $(".menuToggle").addClass("menuLines");
      $(".menuToggle").removeClass("lines");
      $(".click").addClass("mobileContainer");
    }
  })
}

//header slide
const headerSlide = function() {
  $(".header").animate({
    left: "+=105%",
  }, {
      duration: 3000
    });
}

const init = function() {
  navSlide();
  headerSlide();
}

//document ready
$(document).ready(function(){

  init();

})