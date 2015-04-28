// Functions for the mobile version
$(document).on("click", '#open_main_menu', open_mobile_menu);
var menu_open = false
function open_mobile_menu () {
  if (menu_open) {
    $('aside').css({'left': '-250px'});
    menu_open = false;
  } else {
    $('aside').css({'left': '0px'});
    menu_open = true
  }
}

var scrolled;
var screenheight;

// always initiate the scroll at the top
$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

// get the height of the browser screen
$(window).on('resize', function() {
  screenheight = $(window).outerHeight();
})

$(window).bind('scroll',function(e){
  getScrolledData();
});

$(function() {
  $mainMenu = $('#main-menu').html()
  $('aside').html($mainMenu)
  screenheight = $(window).outerHeight();
})

function getScrolledData() {
  scrolled = $(window).scrollTop();
  // detect if the user has scrolled more than the screensize (height)
  /* Scroll event to trigger the function */

  if (scrolled > screenheight) {
    headerChanges()
  }
  else {
    headerReset()
  }
}

function headerChanges() {
  $('header').css({
    background: '#333',
    position: 'fixed',
    width: '100%',
    height: '45px',
    padding: '8px'
  })
  $('#opensuseLogo').css({
    height: '25px'
  })
  $('header ul li a').css({
    'font-size': '14px'
  })

}
function headerReset() {
  $('header').removeAttr('style')
  $('#opensuseLogo').removeAttr('style')
  $('header ul li a').removeAttr('style')
}

