
// Opening
$('head').append(
'<style type="text/css">.join_logo {display:none;}'
);
$(window).load(function() {
$('.join_logo').fadeIn("8000");
});

//Sec_photos
$(document).ready(function(){

  $('.photo_slider').bxSlider({
    //mode: 'fade',
    auto: true,
    speed: 200,
    pause: 3000,
    pager: true,
    controls: false,
    captions: true,
    responsive: true,
    touchEnabled: false,
    oneToOneTouch: false,
    useCSS: false
  });
});

//Smooth Scroll

$(function(){
  $('a[href^=#]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
