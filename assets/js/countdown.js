$(function () {

  'use strict'

  var leapReleaseDate = moment.tz("2016-11-16 12:00", "Europe/Berlin");

  $('.opensuse-countdown-leap-42-2__number').countdown(leapReleaseDate.toDate(), function(event) {

    if (event.strftime('%D') == 00 && event.strftime('%H') > 00) {
      $(this).html(event.strftime('%H'));
      $('.opensuse-countdown-leap-42-2__days').hide();
      $('.opensuse-countdown-leap-42-2__hours').show( function() {
        $('.opensuse-countdown-leap-42-2__time-left').removeClass('hidden');
      })
      console.log('pasa 1')
    } else if (event.strftime('%H') == 00 && event.strftime('%D') == 00) {

      console.log('pasa 2')
      $('.opensuse-countdown-leap-42-2__time-left').addClass('hidden');
      $('.opensuse-countdown-leap-42-2__released').removeClass('hidden')

    }
     else {
       console.log('pasa 3')
       $('.opensuse-countdown-leap-42-2__hours').hide()
       $('.opensuse-countdown-leap-42-2__days').show()
       $('.opensuse-countdown-leap-42-2__time-left').removeClass('hidden');
       $(this).html(event.strftime('%D'));
    }
  });

});
