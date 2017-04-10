//variables definition
var user_agent = navigator.userAgent.toLowerCase();
var device_type;
var current_view;
var scrollHeight = 0;
var busy = false;
var player;
var view_type = "wide";

//check user agent
if (user_agent.indexOf("windows") > 0) {
    device_type = "Windows";
    var key_up = 38;
    var key_down = 40;
    var key_left = 37;
    var key_right = 39;
    var key_enter = 13;
    var key_2 = 50;
    var key_3 = 51;
    var key_equals = 187;
    var key_minus = 189;
} else if (user_agent.indexOf("webos") > 0) {
    device_type = "WebOS";
    var key_up = 38;
    var key_down = 40;
    var key_left = 37;
    var key_right = 39;
    var key_enter = 13;
    var key_2 = 50;
    var key_3 = 51;
} else if (user_agent.indexOf("smarthub") > 0) {
    device_type = "Samsung";
    var key_up = 29460;
    var key_down = 29461;
    var key_left = 4;
    var key_right = 5;
    var key_enter = 29443;
    var key_2 = 98;
    var key_3 = 6;
} else if (user_agent.indexOf("viera") > 0) {
    device_type = "Panasonic";
    var key_up = 38;
    var key_down = 40;
    var key_left = 37;
    var key_right = 39;
    var key_enter = 13;
    var key_2 = 50;
    var key_3 = 51;
}

//function focus next
function focusNext() {
    var element = $(".active");
    if (element.next().length && $('#menu_bar').hasClass('active_nav_area')) {
        element.next().addClass("active");
        element.removeClass("active");
    } else if (current_view === "news" && $('#main_content').hasClass('active_nav_area')) {
        $(".menu_icon").removeClass("active");
        if ($('.two-third-block').hasClass("active")) {
            if (element.next(".two-third-block").length) {
                element.removeClass("active");
                element.next(".two-third-block").addClass("active");
                element.next(".two-third-block")[0].scrollIntoView(false);
            }
        } else {
            $('.two-third-block:first').addClass("active");
        }
    } else {
        scrollDown();
    }
}

//function focus previous
function focusPrev() {
    var element = $(".active");
    if (element.prev().length && $('#menu_bar').hasClass('active_nav_area')) {
        element.prev().addClass("active");
        element.removeClass("active");
    } else if (current_view === "news" && $('#main_content').hasClass('active_nav_area')) {
//        $(".menu_icon").removeClass("active");
        if ($('.two-third-block').hasClass("active")) {
            if (element.prev(".two-third-block").length) {
                element.removeClass("active");
                element.prev(".two-third-block").addClass("active");
                element.prev(".two-third-block")[0].scrollIntoView(false);
            } else {
            element.removeClass("active");
            $('.menu_icon').addClass("active");
            }
        }
    } else {
        scrollUp();
    }
}

//function enter keypress
function keyEnter() {
    var element = $(".active");
    element.click();
    element.animate({borderRadius: "100px"}, 100, function() {element.animate({borderRadius: "25px"}, 100)});
    element.fadeTo( 100 , -100, function() {element.fadeTo( 50 , 1)});

    if ($(".focus_highlight")) {
        $(".focus_highlight").removeClass("focus_highlight");
    }
    if ($("#" + current_view)) {
        $("#" + current_view).addClass("focus_highlight");
    }
    if (current_view == "news" && $('.active_nav_area').attr('id') !== "menu_bar") {
        var title = element.children().children().children().children('h2').children().text();
        var url = element.children().children().children().children().children().children().attr('href');
        console.log(title + " " + url);
        article(title, url);
        }
}

//Scroll Up function
function scrollUp () {
    if (scrollHeight >= 0 && !busy) {
        busy = true;
        $({ n: 0 }).animate({ n: 150}, {
    duration: 250,
    step: function(now, fx) {
//        console.log(now);
        content_page.scrollTop = scrollHeight - now;
    }, complete: function () {
        scrollHeight = scrollHeight - 150;
//        console.log(content_page.scrollTop + " " + scrollHeight + " " + content_page.scrollHeight);
        busy = false;
    }
});
        }
}

//Scroll Down function
function scrollDown () {
    if (scrollHeight + 720 <= content_page.scrollHeight && !busy) {
        busy = true;
         $({ n: 0 }).animate({ n: 150}, {
    duration: 250,
    step: function(now, fx) {
//        console.log(now);
        content_page.scrollTop = scrollHeight + now;
    }, complete: function () {
        scrollHeight = scrollHeight + 150;
//        console.log(content_page.scrollTop + " " + scrollHeight + " " + content_page.scrollHeight);
        busy = false;
    }
});
        }
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    $(".active").removeClass("active");
    document.getElementById("menu_bar").style.width = "250px";
    if (view_type == "narrow") {
        document.getElementById("page_content").style.paddingLeft = "0px";
    }
    document.getElementById("page_content").style.marginLeft = "250px";
    if ($(".focus_highlight").length) {
        $(".focus_highlight").addClass("active");
    } else {
        $(".menu_side").children(".close_btn").addClass("active");
    }
    $(".menu_side").addClass("active_nav_area");
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    $(".active").removeClass("active");
    document.getElementById("menu_bar").style.width = "0px";
    if (view_type == "narrow") {
        document.getElementById("page_content").style.paddingLeft = "70px";
    } else {
        document.getElementById("page_content").style.paddingLeft = "0px";
    }
    document.getElementById("page_content").style.marginLeft = "0px";
    $(".menu_icon").addClass("active");
    $(".menu_side").removeClass("active_nav_area");
}

//Keydown keycode identifier function
$(document).keydown(function(e){
        if (e.keyCode == key_right) {
            closeNav();
            console.log(e.keyCode + " = key_right");
        } else if (e.keyCode == key_left) {
            openNav();
            console.log(e.keyCode + " = key_left");
        } else if (e.keyCode == key_down) {
            focusNext();
            console.log(e.keyCode + " = key_down");
        } else if (e.keyCode == key_up) {
            focusPrev();
            console.log(e.keyCode + " = key_up");
        } else if (e.keyCode == key_enter) {
            keyEnter();
            console.log(e.keyCode + " = key_enter");
        } else if (e.keyCode == key_3) {
            $( "#log_div" ).toggle();
            console.log(e.keyCode + " = key_3");
        } else if (e.keyCode == key_2) {
            location.reload();
            console.log(e.keyCode + " = key_2");
        } else if (e.keyCode == key_equals) {
            scrollDown();
            console.log(e.keyCode + " = key_=");
        } else if (e.keyCode == key_minus) {
            scrollUp();
            console.log(e.keyCode + " = key_-");
        } else {
            console.log("Unknown key: " + e.keyCode);
//            document.getElementById('page_content').innerHTML = wrapContent("Unknown key: " + e.keyCode);
        }
    logger.scrollTop = logger.scrollHeight;
    }
);

//Homepage Function
function homepage() {
    //    start the loader and adjust container
    document.getElementById('page_content').innerHTML = "<img class='loader' src='img/loader.gif'>";
    //    set appropriate page width
//    document.getElementById("page_content").style.paddingLeft = "0px";
    //    set current view
    current_view = "homepage";
    view_type = "wide";
    console.log('current view: ' + current_view);
    var x = Math.floor((Math.random() * 3) + 1);
    document.getElementById('page_content').innerHTML = '<a href="#" onclick=""><img class="advert" src=".//img/ads/ad' + x + '.gif"></a>';
}

//Get curent standings page
function getStandings(your_url) {
//    Start the loader and adjust container
    document.getElementById('page_content').innerHTML = "<img class='loader' src='img/loader.gif'>";
//    set current view
    current_view = "standings";
    view_type = "narrow";
    console.log('current view: ' + current_view);
//  fetch data
    $.ajax({
    url: your_url,
    type: 'GET',
    success: function(res) {
        var text = res.responseText;
        // then you can manipulate your text as you wish
        text = $(text);//this turns your string into real html
        text = text.find('#white-background').eq(0).html();
        text = wrapContent(text);
        document.getElementById('page_content').innerHTML = text;
//        window.stop();
        }
    });
}

//Get News page
function getNews(your_url) {
//    Start the loader
    document.getElementById('page_content').innerHTML = "<img class='loader' src='img/loader.gif'>";
//    set current view
    current_view = "news";
    view_type = "narrow";
    console.log('current view: ' + current_view);
//  fetch data
    $.ajax({
        url: your_url,
        type: 'GET',
        success: function(res) {
            var text = res.responseText;
            // then you can manipulate your text as you wish
            text = $(text);//this turns your string into real html
            text = text.find('#home-blog-items').eq(0).html();
            text = "<div id='white-background'><h2 class='current_header'>Latest News</h2><div class='solid_bar'></div>" + text + "</div>";
            text = wrapContent(text);
            document.getElementById('page_content').innerHTML = text;
//            window.stop();
        }
    });
}

//Get Pro's page
function getPros(your_url) {
//    Start the loader
    document.getElementById('page_content').innerHTML = "<img class='loader' src='img/loader.gif'>";
//    set current view
    current_view = "pros";
    view_type = "narrow";
    console.log('current view: ' + current_view);
//  fetch data
    $.ajax({
        url: your_url,
        type: 'GET',
        success: function(res) {
            var text = res.responseText;
            // then you can manipulate your text as you wish
            text = $(text);//this turns your string into real html
            text = text.find('#white-background').eq(0).html();
            text = wrapContent(text);
            document.getElementById('page_content').innerHTML = text;
//            window.stop();
        }
    });
}

//Get latest video
function showVideo() {
//    set appropriate page width
    document.getElementById("page_content").style.paddingLeft = "0px";
//    set current view
    current_view = "video";
    view_type = "wide";
    console.log('current view: ' + current_view);
//    start the loader
    document.getElementById('page_content').innerHTML = "<img class='loader' src='img/loader.gif'>";
    //Load youtube Iframe API if it has not yet
    if ($("#youtube_API").length == 0) {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        tag.id = "youtube_API";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
        onYouTubeIframeAPIReady();
    }
//    document.getElementById('page_content').innerHTML = '<iframe id="ytplayer" type="text/html" width="720" height="405" src="https://www.youtube.com/embed/?listType=user_uploads&list=streetleague&autoplay=1&modestbranding=1&showinfo=0" frameborder="0" allowfullscreen>';
}

//    Youtube new Player
function onYouTubeIframeAPIReady() {
      document.getElementById('page_content').innerHTML = "<div id='player'></div>";
    player = new YT.Player('player', {
        playerVars: {
            modestbranding: 1,
            rel: 0,
            controls: 0,
            iv_load_policy: 3,
        },
        height: '100%',
        width: '100%',
      events: {
        'onReady': loadVideo
      }
    });
  }

function loadVideo() {
    player.loadPlaylist({listType:"user_uploads",
                    list:"streetleague",
});
}

//Show About page
function aboutPage() {
//    set current view
    current_view = "about";
    view_type = "narrow";
    console.log('current view: ' + current_view);
//  Set the loader
    document.getElementById('page_content').innerHTML = "<img class='loader' src='img/loader.gif'>";
//  Add text
    text = "<h2 class='page-title-heading'>About</h2>";
    text += "<div class='solid_bar'></div>";
    text += "<p class='about_text'>Welcome to the very unofficial Street League skateboarding Smart TV application made by Jan-Willem van Bremen</p>";
    text = wrapContent(text);
//  Load text
    document.getElementById('page_content').innerHTML = text;
}

//  Open article function
function article (title, your_url) {
//    Start the loader
    document.getElementById('page_content').innerHTML = "<img class='loader' src='img/loader.gif'>";
    $('.menu_icon').addClass('active');
//    set current view
    current_view = "article";
    view_type = "narrow";
    console.log('current view: ' + current_view);
//  fetch data
    $.ajax({
        url: your_url,
        type: 'GET',
        success: function(res) {
            var text = res.responseText;
            // then you can manipulate your text as you wish
            text = $(text);//this turns your string into real html
            text = text.find('.entry-content').eq(0).html();
            text = '<h2 class="current_header">' + title + '</h2><div class="solid_bar"></div>' + text;
            text = wrapContent(text);
            document.getElementById('page_content').innerHTML = text;
            $('.alignnone:first').hide();
        }
    });
}

function wrapContent(text) {
    scrollHeight = 0;
    text = "<div id='content_wrapper'>" + text + "</div>";
    return text;
}

$(document).ready(function(){

//Initiate the logger
    (function () {
    var old = console.log;
    var logger = document.getElementById('log_div');
    console.log = function () {
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]);
            }
            else {
                logger.innerHTML += "<p style='line-height: normal;' class='single_log'>" + arguments[i] + "</p>";
            }
        }
    }
})();

//Set and hide the splash screen
var x = Math.floor((Math.random() * 3) + 1);
$('#splash_image').attr('src', ".//img/splashes/splash" + x +".png");
setTimeout(function(){$('#splash_image').fadeOut(1000);}, 2500);

//Display the homepage
homepage();

//Log some userful device info
console.log(user_agent);
console.log(device_type);

//Identify some elements for scrolling purposes
content_page = document.getElementById('main_content');
logger = document.getElementById('log_div');

});
