$(document).ready(function () {

  $("#signUp").on("click", function (e) {
    e.preventDefault();
    console.log("this hit");
    const userInfo = {
      firstName: $("#first-name-input").val().trim(),
      lastName: $("#last-name-input").val().trim(),
      userName: $("#user-name-input").val().trim(),
      email: $("#email-input").val().trim(),
      password: $("#password-input").val().trim()
    };

    // check if anything is empty
    $("form input").each(function(i) {
      if (!$(this).val()) {
        $(this).addClass("is-invalid");
        return false;
      } else {
        $(this).removeClass("is-invalid").addClass("is-valid");
      }
    })

    $.ajax({
      url: '/api/users',
      method: 'POST',
      data: userInfo
    })
      .then((userInfo) => {
        console.log(userInfo);
        location.replace("/login")
      })
      .catch(err => console.log(err));
  });

});
console.log("Signup.js Linked!");
