$(function () {
  'use strict'
  var leapReleaseDate = moment.tz("2016-11-16 12:00", "Europe/London");

  $('.leap-42-2-countdown').countdown(leapReleaseDate.toDate(), function(event) {
    $(this).html(event.strftime('%D'));
  });

  var names = moment.tz.names();

  console.log(names);
});
