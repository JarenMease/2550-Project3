$(document).ready(function(){
    $(".menu-link").click(function(){
        // Check if the clicked link is the "Biography" link
        if ($(this).hasClass("external-link")) {
            // If it is, let it navigate to the new page without applying the show/hide functionality
            return true;
        }
        // Otherwise, apply the show/hide functionality as before
        var target = $(this).attr("href");
        $("section").removeClass("active");
        $(target).addClass("active");
        $(".menu-link").removeClass("active");
        $(this).addClass("active");
        return false;
    });
});

