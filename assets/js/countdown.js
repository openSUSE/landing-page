$(function () {

  'use strict'

  var leapReleaseDate = moment.tz("2016-11-16 12:00", "Europe/London");

  $('.opensuse-countdown-leap-42-2__number').countdown(leapReleaseDate.toDate(), function(event) {
    $(this).html(event.strftime('%D'));
  });

});
