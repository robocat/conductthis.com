var $ = require('jquery');
var Ladda = require('ladda');
var { Retina } = require('retina.js');
var { Lightbox } = require('lightbox2');

const handle_newsletter_submit = function(e) {
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
  const url = 'https://services.northplay.co/subscribe';

  $.ajax({
    url: url,
    method: 'POST',
    cache: false,
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: (data) => {
      $("#newsletter_form").hide();
      $("#newsletter_thanks").show();
      Ladda.stopAll();
    },
    error: (xhr, status, error) => {
      $email.prop('disabled', false);
      Ladda.stopAll();
    }
  });
}

$(document).ready(function () {
  Ladda.bind('button[type=submit]')
  $('#newsletter_form').on('submit', handle_newsletter_submit);

  Retina.init(window);
  Lightbox.init();
});
