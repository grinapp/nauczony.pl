var main = function() {
  $('form').submit(function() {
    var firstName = $('#first').val();
    
    if(firstName === "") {
      $('.first-name-error').text('Prosze podac swoj login.');
    };

    return false;
  });
    
  $('form').submit(function() {
    var lastName = $('#last').val();
    if(lastName === "") {
      $('.last-name-error').text('Please enter your last name.');
    };

    return false;
  });
  $('form').submit(function() {
    var lastName = $('#password').val();
    if(lastName === "") {
      $('.password-error').text('Please enter your password');
    };

    return false;
  });
  $('form').submit(function() {
    var lastName = $('#email').val();
    if(lastName === "") {
      $('.email-error').text('Prosze podac swoj adres e-mail.');
    };

    return false;
  });
   $('form').submit(function() {
    var lastName = $('#email').val();
    if(lastName === "piotr.dolega@g.pl") {
      $('.email-error').text('This email is already taken.');
    };

    return false;
  });
   $('form').submit(function() {
    var lastName = $('#password').val();
    if(lastName.length <= 7) {
      $('.password-error').text('Latwo zgadnac krotkie hasla. Sprobuj takiego z chociaz 8 znakami.');
    };

    return false;
  });
};

$(document).ready(main);