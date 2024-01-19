// Paste your modified index.js code here
$(document).ready(function () {
  $('#image-slider').slick({
    // Slick Slider settings
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
  });

  // Interaction for Registration Form
  $('#registration-form').submit(function (event) {
    event.preventDefault();

    // Retrieve form data
    var formData = {
      name: $('#name').val(),
      email: $('#email').val(),
      phone: $('#phone').val(),
      password: $('#password').val(),
      confirmPassword: $('#confirm-password').val(),
    };

    // Simple client-side validation
    if (!formData.name || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Password and Confirm Password must match.');
      return;
    }

    // Display the submitted name
    $('#submitted-names').append('<p>' + formData.name + '</p>');

    // You can send the form data to a server, update the UI, or perform other actions here
    console.log('Registration form submitted!', formData);
  });

  // Function to prompt for name and ID
  function promptForDetails(buttonName) {
    var userName = prompt('Enter your name:');
    var userID = prompt('Enter your ID:');

    if (userName && userID) {
      alert('Name: ' + userName + '\nID: ' + userID + '\nButton clicked: ' + buttonName);
    } else {
      alert('Name and ID are required.');
    }
  }

  // Add event listeners to buttons
  $('.apply-button').click(function () {
    promptForDetails('Apply Now');
  });

  $('.enroll-button').click(function () {
    promptForDetails('Enroll Now');
  });

  $('.register-company-button').click(function () {
    showAlert('Register Your Company');
  });

  // Function to show an alert with the button name
  function showAlert(buttonName) {
    alert('Button clicked: ' + buttonName);
  }
});