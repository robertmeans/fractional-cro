// Or, to start a slideshow, just pass in an array of images
$("#hero").backstretch([
"_images/fractional-cro_hero_03.jpg",
"_images/fractional-cro_hero_02.jpg",
"_images/fractional-cro_hero_01.jpg"
], {duration: 2000,
  fade: 4000});

$(document).ready(function() { 
  // If a link has a dropdown, add sub menu toggle.
  $('nav ul li a:not(:only-child)').click(function(e) {
    $(this).siblings('.nav-dropdown').toggle();
    // Close one dropdown when selecting another
    $('.nav-dropdown').not($(this).siblings()).hide();
    e.stopPropagation();
  });
  // Clicking away from dropdown will remove the dropdown class
  $('html').click(function() {
    $('.nav-dropdown').hide();
  });
  // Toggle open and close nav styles on click
  $('#nav-toggle').click(function() {
    $('nav ul').slideToggle();
  });
  // Hamburger to X toggle
  $('#nav-toggle').on('click', function() {
    this.classList.toggle('active');
  });
}); 


// Back to top
mybutton = document.getElementById("btt");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// contact modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var spanz = document.getElementsByClassName("cloze")[0];
// var spanzz = document.getElementByID("clozer")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
spanz.onclick = function() {
  modal.style.display = "none";
}
// spanzz.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onmousedown = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// contact form
$(document).ready(function() {
  $('#cloze').click(function() {
    event.preventDefault();
  });
  $('#send').click(function() {
    event.preventDefault();
    $.ajax({
      dataType: "JSON",
      url: "_includes/contact-process.php",
      type: "POST",
      data: $('#contact').serialize(),
      beforeSend: function(xhr) {
        $('#msg').html('<span>Sending - one moment...</span>');
      },
      success: function(response) {
        // console.log(response);
        if(response) {
          console.log(response);
          if(response['signal'] == 'ok') {
            $('#contact').html('<span>Your message was sent successfully.</span>');
            // $('#msg').html('<div class="alert alert-success">' + response['msg'] + '</div>');
            // $('#send-success').html('<input name="clozer" id="clozer" class="clozer" value="Close">');
          } else {
            $('#msg').html('<div class="alert alert-warning">' + response['msg'] + '</div>');
          }
        } 
      },
      error: function() {
        $('#msg').html('<div class="alert alert-warning">There was an error between your IP and the server. Please try again later.</div>');
      }, 
      complete: function() {
        // $('#contact').html('<span>Your message was sent successfully.</span>');
        // $('#send-success').html('<input name="clozer" id="clozer" class="clozer" value="Close">');
      }
    })
  });
});
