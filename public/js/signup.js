$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var firstnameInput = $("input#name1-input");
  var lastnameInput = $("input#name2-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      firstname: firstnameInput.val().trim(),
      lastname: lastnameInput.val().trim()
    };

    if (!userData.email || !userData.firstname) {
      return;

    }
    // If we have an email and names, run the signUpUser function
    signUpUser(userData.email, userData.firstname, userData.lastname);
    emailInput.val("");
    firstnameInput.val("");
    lastnameInput.val("");

  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, firstname, lastname) {
    $.post("/api/signup", {
      email: email,
      firstname: firstname,
      lastname: lastname
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500, function() {
      $("#alert").fadeOut(20000);
    });
  }
});
