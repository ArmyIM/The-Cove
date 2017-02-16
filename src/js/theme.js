
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


   $(".searchandfilter li").each(function(i) {
    $(this).addClass("item" + (i+1));

  });

});


var select=document.getElementById('ofcategory');

for (i=0;i<select.length;  i++) {
   if (select.options[i].value=='1') {
     select.remove(i);
   }
}




$('.search-nav a').on('click', function (event) {
    $(this).parent().toggleClass("open");
});

$('body').on('click', function (e) {
    if (!$('search-nav').is(e.target) && $('search-nav').has(e.target).length === 0 && $('.open').has(e.target).length === 0) {
        $('search-nav').removeClass('open');
    }
});


