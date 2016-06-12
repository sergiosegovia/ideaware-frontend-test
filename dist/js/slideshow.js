function out() {
  var $slide = $('#slideshow img');
  var $current = $('#slideshow img.current');
  $slide.fadeOut(2000);
  $slide.toggleClass('current');
  $current.fadeIn(2000);
};

$(function() {
  setInterval('out()', 5000);
});
