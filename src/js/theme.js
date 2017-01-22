
var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
  });

  // Toggle button
  document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
    slideout.toggle();
  });


$('.group-check').change(function() {
  if ($('.group-check:checked').length > 0) {
    $('#mc-embedded-subscribe').prop('disabled', false);
  } else {
    $('#mc-embedded-subscribe').prop('disabled', true);
  }
});


   // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
$('.dropdown').on('show.bs.dropdown', function(e){
$(this).find('.dropdown-menu').first().stop(true, true).slideDown("fast");
});

// ADD SLIDEUP ANIMATION TO DROPDOWN //
$('.dropdown').on('hide.bs.dropdown', function(e){
$(this).find('.dropdown-menu').first().stop(true, true).slideUp("fast");
});


$(function() {
  var viewPortWidth = $(window).width();

  $(window).scroll(function(event) {
    event.preventDefault();
    if (viewPortWidth > 480) {
      if ($(this).scrollTop() > 180) {
        $('.scrolltop').fadeIn();
      } else {
        $('.scrolltop').fadeOut();
      }
    }
  });

  $('.scrolltop').click(function(event) {
    $('html, body').animate({scrollTop : 0 }, 600);
    event.preventDefault();
  });
});