var $ = require('jquery');
var Ladda = require('ladda');

$(document).ready(function () {
  Ladda.bind('button[type=submit]')

  $('#newsletter_form').on('submit', function(e) {
    e.preventDefault();
    $email = $(this).find('input[name=email]');

    if ($email.val() == "") {
      Ladda.stopAll();
      return
    }

    $email.prop('disabled', true);

    const data = {
      email: $email.val(),
      list: 'conductthis'
    };
    const url = 'http://newsletters.robocatapps.com/signup';

    $.ajax({
      url: url,
      method: 'POST',
      cache: false,
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: (data) => {
        $email.text("Thank you");
        Ladda.stopAll();
      },
      error: (xhr, status, error) => {
        $email.prop('disabled', false);
        Ladda.stopAll();
      }
    });

  });
});
