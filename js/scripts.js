$(document).ready(function(){
  console.log('test');

  $('.test').slick('slickGoTo', 2);

  $('.single-item').slick({
    dots: true,
    //adaptiveHeight: true,

  });

  $("#recommend").flip();
  $(".card").flip();
});
