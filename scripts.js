//nav bar slide off on click
$(".fa-times").click(function () {
  console.log('click');
  $(".toggle").toggle("slide right");
});

//nav bar slide on on click
$(".menuLink").click(function () {
  console.log('click');
  $(".toggle").toggle("slide");
});

//sticky scroll

$(document).ready(function(){
  $(window).bind('scroll', function (){
    let navHeight = $(window).height() - 50;
    console.log(navHeight);
    if ($(window).scrollTop() > navHeight) {
      $('.menuContainer').addClass('sticky');
    } else {
      $('.menuContainer').removeClass('sticky');
    }
  })
})