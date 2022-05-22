/*$(document).ready(function() {
    var luni = new Lunicode();
    luni.tools.creepify.options.top = true; // add diacritics on top. Default: true
    luni.tools.creepify.options.middle = true; // add diacritics in the middle. Default: true
    luni.tools.creepify.options.bottom = true; // add diacritics on the bottom. Default: true
    luni.tools.creepify.options.maxHeight = 20; // How many diacritic marks shall we put on top/bottom? Default: 15
    luni.tools.creepify.options.randomization = 100;
    let fontarr = {};
    fontarr.tiny = luni.tools.tiny;
    fontarr.flip = luni.tools.flip;
    fontarr.mirror = luni.tools.mirror;
    fontarr.bubbles = luni.tools.bubbles;
    fontarr.squares = luni.tools.squares;
    fontarr.bent = luni.tools.bent;

    $("#my-insta-button").click(function() {

        var encodedText = "";
        var content = $("#insta-content").val();
        $("#insta-result").html(content);
        //$("#insta-result").css({ "font-weight": "600", "color": "#000", "text-transform": "uppercase" });
        $.each(fontarr, function(key, tool) {
            encodedText += tool.encode(content) + "<br/>";
        });
        $("#insta-result").html(encodedText);

    });

});*/


$(document).ready(function() {
    setNavigation();
});

function setNavigation() {
    var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);

    $(".navbar-nav a").each(function() {
        var href = $(this).attr('href');
        if (path.substring(0, href.length) === href) {
            $(this).closest('li').addClass('active');
        }
    });
}


// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('nav').addClass('white-nav');
    }

    else {
        $('nav').removeClass('white-nav');
    }
})
