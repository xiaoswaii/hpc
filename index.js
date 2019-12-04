// $(document).ready(function(){
//     $("#nav ul li a[href^='#']").on('click', function(e) {

//         // prevent default anchor click behavior
//         e.preventDefault();
    
//         // animate
//         $('html, body').animate({
//             scrollTop: $(this.hash).offset().top
//           }, 300, function(){
    
//             // when done, add hash to url
//             // (default click behaviour)
//             window.location.hash = this.hash;
//           });
    
//      });
// })

$(document).ready(function() {
    // Add smooth scrolling on all links inside the navbar
    $("#infox, #introx, #timetablex, #contactx, #placex").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    removeClass();
});

function initMap() {
    var lct = {
        lat: 25.0208863,
        lng: 121.5398093
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: lct
    });
    var marker = new google.maps.Marker({
        position: lct,
        map: map
    });
}

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
var body = $("html, body");
  body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
 });
}

function removeClass() {
    console.log(window.innerWidth)
    if(window.innerWidth < '767'){
        document.querySelector('#outline-div-1').classList.remove("px-5");
        document.querySelector('#outline-div-2').classList.remove("mx-5");
        document.querySelector('#outline-1').classList.remove("px-5");
        document.querySelector('#outline-1').classList.remove("mx-5");
        document.querySelector('#outline-2').classList.remove("px-5");
        document.querySelector('#outline-2').classList.remove("mx-5");
        document.querySelector('#tt').classList.remove("mx-5");
        document.querySelector('#tt').classList.remove("px-5");
        document.querySelector('#timetable').classList.remove("px-5");
        document.querySelector('#workshop').classList.remove("px-5");
        document.querySelector('#workshop').classList.remove("mx-5");
        document.querySelector('#outline').classList.remove("px-5");
        for(var i=1;i<6;i++){
            document.querySelector(`#workshop-content-${i}`).classList.remove(`mx-5`);
            document.querySelector(`#workshop-content-${i}`).classList.remove(`px-5`);
        }
        
    }
}


