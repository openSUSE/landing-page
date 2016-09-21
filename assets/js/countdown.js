$(function () {

  'use strict'

  var leapReleaseDate = moment.tz("2016-11-16 12:00", "Europe/Berlin");

  $('.opensuse-countdown-leap-42-2__number').countdown(leapReleaseDate.toDate(), function(event) {

    //if no more days left, but still some hours (at least 1 hour left)
    if (event.strftime('%D') == 00 && event.strftime('%H') > 00) {

      $(this).html(event.strftime('%H'));
      //if there is only 1 hour, show the singular text form
      if (event.strftime('%H') == 01) {
        $('.opensuse-countdown-leap-42-2__hours__plural').hide();
        $('.opensuse-countdown-leap-42-2__hours__singular').show();
      } else {
        $('.opensuse-countdown-leap-42-2__hours__plural').show();
        $('.opensuse-countdown-leap-42-2__hours__singular').hide();
      }

      $('.opensuse-countdown-leap-42-2__days').hide();

      $('.opensuse-countdown-leap-42-2__time-left').removeClass('hidden');
    }

    //if no more hours are left (although minutes are not considered here)
    else if (event.strftime('%H') == 00 && event.strftime('%D') == 00) {

      $('.opensuse-countdown-leap-42-2__time-left').addClass('hidden');
      $('.opensuse-countdown-leap-42-2__released').removeClass('hidden');
    }

    //if there are more than 1 day left
    else {

      $(this).html(event.strftime('%D'));
      //if there is only 1 day, show the singular text form
      if (event.strftime('%D') == 01) {
        $('.opensuse-countdown-leap-42-2__days__singular').show();
        $('.opensuse-countdown-leap-42-2__days__plural').hide();
      } else {
        $('.opensuse-countdown-leap-42-2__days__singular').hide();
        $('.opensuse-countdown-leap-42-2__days__plural').show();
      }

      $('.opensuse-countdown-leap-42-2__hours').hide();

      $('.opensuse-countdown-leap-42-2__time-left').removeClass('hidden');

    }
  });

});
