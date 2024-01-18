$(document).ready(function () {
  // Slick Slider initialization
  $('#image-slider').slick({
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

    // Access the form data and perform actions (replace this with your logic)
    console.log('Registration form submitted!', formData);

    // You can send the form data to a server, update the UI, or perform other actions here
  });
});
