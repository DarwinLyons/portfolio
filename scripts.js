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
    let navHeight = $(window).height() - 500;
    if ($(window).scrollTop() > navHeight) {
      $('.menuContainer').addClass('sticky');
    } else {
      $('.menuContainer').removeClass('sticky');
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