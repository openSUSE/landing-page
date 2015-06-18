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
var mainSectionHeight;
var headerHeight;

// always initiate the scroll at the top
$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

// get the height of the browser screen
$(window).on('resize', function() {
  headerHeight = $('header').outerHeight();
  mainSectionHeight = $('#opensuse-os').outerHeight() - headerHeight;
  //remove the height in the container of the main section 'home'
  $('#opensuse-os').css('height', '')
  containerHeight = $('#opensuse-os').outerHeight() + 30
})

$(window).bind('scroll',function(e){
  getScrolledData();
});

$(function() {
  $mainMenu = $('#main-menu').html()
  $('aside').html($mainMenu)
  headerHeight = $('header').outerHeight();
  mainSectionHeight = $('#opensuse-os').outerHeight() - headerHeight;
})

var scrolledDown = false;

function getScrolledData() {
  scrolled = $(window).scrollTop();

  // detect if the user has scrolled more than the first section (height) to reduce the size of the menu
  if (scrolled > mainSectionHeight) {
    headerChanges()
    scrolledDown = true;
  }

  if (scrolledDown && scrolled < mainSectionHeight) {
    headerReset()
  }
}

function headerChanges() {
  $('header').css({
    background: moreInfoOpened ? '#4bb67a' : '#173f4f',
    top: '0px',
    height: '45px',
    padding: '8px',
    'z-index': '1000'
  })
  $('#opensuseLogo').css({
    height: '25px'
  })
  $('header ul li a').css({
    'font-size': '14px',
    'color': '#fff'
  })

}
function headerReset() {
  $('header').removeAttr('style')
  //but always keep the color applied from the scrolling
  $('header').css({
    background: moreInfoOpened ? '#4bb67a' : '#173f4f'
  })
  $('#opensuseLogo').removeAttr('style')
  $('header ul li a').removeAttr('style')
  $('header ul li a').css({
    'color': moreInfoOpened ? '#fff' : ''
  })
}

// init WOW.js
wow = new WOW(
  {
    offset: 30
  }
)
wow.init();

// init OWL slider

$(document).ready(function() {
  $("#owl-slide-news").owlCarousel({

  navigation : true,
  slideSpeed : 300,
  paginationSpeed : 400,
  singleItem : true,
  navigationText : ["&#xf053;","&#xf054;"]
  });
});


// tumbleweed opensuse more information

var moreInfoOpened = false;

$(function() {
  $('#tumbleweed').on('click', function() {
    osMoreInformation($(this))
  })
  $('#openSUSE').on('click', function() {
    osMoreInformation($(this))
  })
})

function osMoreInformation(os) {
  moreInfoOpened = true
  //get the height of the main container
  containerHeight = $('#opensuse-os').outerHeight()

  //find the information of the selected distribution
  $osSelected = os
  title = $osSelected.find("h1").html()
  text = $osSelected.find(".hidden-content").html()
  icon = $osSelected.find(".distributions-icon").html()


  // animation
  $('#opensuse-os .container-fluid').addClass('animated bounceOut')
  $('#opensuse-os').css({
    background: '#4bb67a'
  })
  $('header').css({
    background: moreInfoOpened ? '#4bb67a' : '#173f4f'
  })
  $('header ul li a').css({
    color: "#fff"
  })

  setTimeout(hideLandingPageInfo, 800)
  setTimeout(createMoreInformationArea, 1300)

  function hideLandingPageInfo () {
    $('#opensuse-os').css({
      height: containerHeight + 'px'
    })
    $('#opensuse-os .container-fluid').hide()
  }
  function createMoreInformationArea () {
    information = '<div class="text-center" id="more-information-os">'
                  + '<div class="os-icon"></div>'
                  + '<h1 class="wow fadeInUp">'
                  + title
                  + '</h1>'
                  + '<div class="wow fadeInUp">'
                  + text
                  + '</div>'
                  + '<br/>'
                  + '<div class="btn btn-link back-to-main-page">'
                  + '<i class="fa fa-long-arrow-left"></i> Back to main page'
                  + '</div>'
                  + '</div>'
    $('#opensuse-os').append(information)
    $('.os-icon').html(icon)

    $('.back-to-main-page').on('click', function() {
      backToMainPageOs()
    })
  }
}

function backToMainPageOs () {
  moreInfoOpened = false;
  $('#more-information-os').addClass('animated bounceOut')
  $('header').removeAttr('style')
  $('header ul li a').removeAttr('style')
  $('#opensuse-os').removeAttr('style').css({
      height: containerHeight + 'px'
    })

  setTimeout(hideMoreInformation, 800)
  setTimeout(showMainInformation, 1300)

  function hideMoreInformation () {
    $('#more-information-os').hide()
    $('#more-information-os').remove()

  }

  function showMainInformation () {
    $('#opensuse-os .container-fluid').removeClass('animated bounceOut').show().addClass('animated bounceIn')
  }


}

//init i18n

var lang = new Lang('en');
window.lang.dynamic('es', 'assets/js/langpack/es.json');

