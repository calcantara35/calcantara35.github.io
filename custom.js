
/* Navbar transparent to solid */

$(document).ready(function() {              /* to make sure that DOM has loaded completely... */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {    /* if the top scroll is 300 pxs away from the window.... */
            $('.navbar').addClass('solid'); /* adding the solid look to navbar using css class */
        }
        else {
            $('.navbar').removeClass('solid'); /* removing the solid look to navbar once it reaches to the top */
            
            
        }
    });
});


/* CLOSE MOBILE NAV ON CLICK */

$(document).ready(function() {
    $(document).click(function (event) { /* If user hits anywhere besides the navbar on the document */

        var clickover = $(event.target); /* this gets the element that we clicked on with the event element */
        var _opened = $('.navbar-collapse').hasClass('show');

        if (_opened === true && !clickover.hasClass('.navbar-toggler')) {
            $('.navbar-toggler').click();
        }
    });
});


/* REFRESH PAGE AT TOP OF DOCUMENT LOAD INSTEAD OF AT #HASH */
/* works for every browser but google chrome because cache needs to be cleared */
$(document).ready(function(){
    $("html,body").animate({scrollTop: 0}, 0)
});