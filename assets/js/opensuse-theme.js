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

$(function() {
  $mainMenu = $('#main-menu').html()
  $('aside').html($mainMenu)
})
