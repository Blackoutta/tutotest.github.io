//**********Smooth Scroll************//
$('#scrollTop').click(function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

//**********Responsive Navigation Bar************//

var mediaQuery690 = window.matchMedia("(min-width:690px)");

function responsiveNav(mediaQuery690) {
    let ul = $('.main-nav');
    let foldButton = $('.foldButton');
    if (mediaQuery690.matches) { // If media query matches
        foldButton.hide();
        ul.show();
        $('.foldButton').transition({
            rotate: '0deg'
        });
    } else {
        foldButton.show();
        ul.hide();
    }
}
responsiveNav(mediaQuery690) // Call listener function at run time
mediaQuery690.addListener(responsiveNav) // Attach listener function on state changes


//Toggle nav bar slides
$('.foldButton').click(function () {
    let ul = $('.main-nav');
    if (ul.css('display') === 'none') {
        ul.slideDown();
        $('.foldButton').transition({
            rotate: '90deg'
        });
    } else {
        ul.slideUp();
        $('.foldButton').transition({
            rotate: '0deg'
        });
    }
});
