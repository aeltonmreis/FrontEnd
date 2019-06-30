/* ----------------------- JavaScript ----------------------- */

/* [RESPONSIVE NAVBAR BUTTON] - BY CLASS.ADD */
function jsMenuResponsive() {
  var x = document.getElementById("jsMenu");
  if (x.className === "menuContainer") {
    x.className += " responsive";
  } else {
    x.className = "menuContainer";
  }
}

/* AMR | HIDE LOGIN PAGE WHEN CLICK ELSEWHERE  */
var clickOutside = document.getElementById('login');
window.onclick = function(event) {
    if (event.target == clickOutside) {
        clickOutside.style.display = "none";
    }
}


/* ----------------------- JQuery ----------------------- */

/* [EMAIL] FIELDS - VALIDATION */

/* AELTON MOTA REIS | DID THIS TO AVOID THE CLICK TO FOLLOW THE [HREF] */
$(document).ready(function() {
  $('#mailBtn').click(function(e) {
      e.preventDefault();
  });
});

$(document).ready(function() {
  $('#next').click(function(e) {
      e.preventDefault();
  });
});

$(document).ready(function() {
  $('#previous').click(function(e) {
      e.preventDefault();
  });
});

$(document).ready(function(e) {
  $('#mailBtn').click(function() {
  var eMail = $('#mail').val();
  
  /* [NULL] EMAIL*/
  if ($.trim(eMail).length == 0) {
  //alert('[A] Please Write Your Email');
  $('.mailLabel01').show().delay(3000).fadeOut();
  e.preventDefault();
  }
  if (emailValido(eMail)) {
  // alert('[A] Email Successfully Validated');
  $('.mailLabel03').show().delay(3000).fadeOut();
  e.preventDefault();
  }
  else {
  // alert('[A] The Email inserted Is Not Valid');
  $('.mailLabel02').show().delay(3000).fadeOut();
  e.preventDefault();
  }
  });
  });
  /* [EMAIL FORMAT] VALIDATOR */
  function emailValido(eMail) {
  var filter = /^[\w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
  if (filter.test(eMail)) {
  return true;
  }
  else {
  return false;
  }
  }

/* SHOW [SEARCH INPUT] FIELD FOR [3] SECONDS */
$(document).ready(function() {
  $('#search').click(function() {
      $('.searchInput').show().delay(3000).fadeOut();
      
      $('.logoAnim').toggleClass("_180"); 

      $('.carousel').Responsive({
        animation: "slide",
        animationLoop: false,
        itemWidth: 216,
        itemMargin: 5
      });

  });
});


 $('#btnCloseBtn').click(function() {
   $('#login').css("display", "none");
 });

 $('#btnCancelBtn').click(function() {
  $('#login').css("display", "none");
});

$('#loginBtn').click(function() {
  $('#login').css("display", "block");
});


/* AELTON MOTA REIS = USING A PRE-BUILD PLUGIN FOR CAROUSEL [OWL PLUGIN] */
var base_carousel = $('.js-base-carousel');
if (base_carousel.length) {
  base_carousel.owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      navText: ["<i class='fas fa-arrow-alt-circle-left'></i>","<i class='fas fa-arrow-alt-circle-right'></i>"],
      // dots: true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  });
}


$('#year').html(new Date().getFullYear());
