//variable for height of window minus nav
let navHeight = $(window).height() - 50;

//nav bar slide off on click
$(".fa-times").click(function () {
  $(".toggle").toggle("slide right");
});

//nav bar slide on on click
$(".menuLink").click(function () {
  $(".toggle").toggle("slide"); 
  if ($(window).scrollTop < navHeight) {
    $(".click").addClass("mobileContainer");
  } 

});

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
    left: "+=105%",
  }, {
      duration: 2000
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