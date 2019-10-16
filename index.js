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
    $("#infox, #introx, #timetablex").on('click', function(event) {
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
});
