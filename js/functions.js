//variables declaration
var current_view;
var scrollHeight = 0;
var busy = false;
var player;
var view_type;
var focus_timer;

//function focus next
function focusNext() {
    var element = $(".active");
    if (element.next().length && $('#menu_bar').hasClass('active_nav_area')) {
        element.removeClass("active");
        element.next().addClass("active");
    } else if (current_view === "news" && $('#page_content').hasClass('active_nav_area')) {
        $(".menu_icon").removeClass("active");
        if ($('.two-third-block').hasClass("active")) {
            if (element.next(".two-third-block").length) {
                element.removeClass("active");
                element.next(".two-third-block").addClass("active");
                element.next(".two-third-block").scrollintoview({
    duration: 500,
    direction: "vertical",
});
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
        element.removeClass("active");
        element.prev().addClass("active");
    } else if (current_view === "news" && $('#page_content').hasClass('active_nav_area')) {
//        $(".menu_icon").removeClass("active");
        if ($('.two-third-block').hasClass("active")) {
            if (element.prev(".two-third-block").length) {
                element.removeClass("active");
                element.prev(".two-third-block").addClass("active");
                element.prev(".two-third-block").scrollintoview({
    duration: 500,
    direction: "vertical",
});
            } else {
            element.removeClass("active");
            $('.menu_icon').addClass("active");
            $('#main_content').animate({scrollTop: '0px'}, 500);
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
    element.fadeTo( 100 , -10, function() {element.fadeTo( 50 , 1, function() {element.removeAttr('style');}); });
    if ($(".focus_highlight")) {
        $(".focus_highlight").removeClass("focus_highlight");
    }
    if ($("#" + current_view)) {
        $("#" + current_view).addClass("focus_highlight");
    }
    if (current_view == "news" && $('#page_content').hasClass('active_nav_area')) {
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
        content_page.scrollTop = scrollHeight - now;
    }, complete: function () {
        scrollHeight = scrollHeight - 150;
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
        content_page.scrollTop = scrollHeight + now;
    }, complete: function () {
        scrollHeight = scrollHeight + 150;
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
        $(".close_btn").addClass("active");
    }
    $("#menu_bar").addClass("active_nav_area");
    $("#page_content").removeClass("active_nav_area");
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    $(".active").removeClass("active");
    document.getElementById("menu_bar").style.width = "0px";
    if (view_type == "narrow") {
        document.getElementById("page_content").style.paddingLeft = "65px";
    } else {
        document.getElementById("page_content").style.paddingLeft = "0px";
    }
    document.getElementById("page_content").style.marginLeft = "0px";
    $(".menu_icon").addClass("active");
    $("#menu_bar").removeClass("active_nav_area");
    $("#page_content").addClass("active_nav_area");
}

//Keydown keycode identifier function
$(document).keydown(function(e){
//Prevent default key function
        e.preventDefault();
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
        } else if (e.keyCode == key_next) {
            nextVideo();
            console.log(e.keyCode + " = key_next");
        } else if (e.keyCode == key_prev) {
            prevVideo();
            console.log(e.keyCode + " = key_prev");
        } else if (e.keyCode == key_pause) {
            pauseVideo();
            console.log(e.keyCode + " = key_pause");
        } else if (e.keyCode == key_play) {
            playVideo();
            console.log(e.keyCode + " = key_play");
        } else if (e.keyCode == key_play_pause) {
            playPauseVideo();
            console.log(e.keyCode + " = key_play_pause");
        } else {
            console.log("Unknown key: " + e.keyCode);
        }
    logger.scrollTop = logger.scrollHeight;
    }
);

//Homepage Function
function homepage() {
//    start the loader and adjust container
    document.getElementById('page_content').innerHTML = "<img class='loader' src='img/loader.gif'>";
//    set current view
    current_view = "homepage";
    view_type = "wide";
    console.log('current view: ' + current_view);
    var x = Math.floor((Math.random() * 3) + 1);
    document.getElementById('page_content').innerHTML = '<img class="advert" src=".//img/ads/ad' + x + '.gif">';
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
    var text = getContents(your_url);
    text.then(function (text) {
        // then you can manipulate your text as you wish
    text = $(text.contents); //this turns your string into real html
    text = text.find('#white-background').eq(0).html();
    text = wrapContent(text);
    document.getElementById('page_content').innerHTML = text;
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
    var text = getContents(your_url);
    text.then(function (text) {
            // then you can manipulate your text as you wish
            text = $(text.contents);//this turns your string into real html
            text = text.find('#home-blog-items').eq(0).html();
            text = "<div id='white-background'><h2 class='current_header'>Latest News</h2><div class='solid_bar'></div>" + text + "</div>";
            text = wrapContent(text);
            document.getElementById('page_content').innerHTML = text;
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
    var text = getContents(your_url);
    text.then(function (text) {
            // then you can manipulate your text as you wish
            text = $(text.contents);//this turns your string into real html
            text = text.find('#white-background').eq(0).html();
            text = wrapContent(text);
            document.getElementById('page_content').innerHTML = text;
    });
}

//Get latest video
function showVideo() {
//    set appropriate page width
    document.getElementById("page_content").style.paddingLeft = "0px";
//    start the loader
    document.getElementById('page_content').innerHTML = "<img class='loader' src='img/loader.gif'>";
//    set current view
    current_view = "video";
    view_type = "wide";
    console.log('current view: ' + current_view);
    //Load youtube Iframe API if it has not been yet
    if ($("#youtube_API").length == 0) {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        tag.id = "youtube_API";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
        onYouTubeIframeAPIReady();
    }
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
            disablekb: 1,
            showinfo: 0,
            fs: 0,
        },
        height: '100%',
        width: '100%',
      events: {
        'onReady': loadVideo
      }
    });
  }

function loadVideo() {
    player.loadPlaylist({listType:"user_uploads",list:"streetleague",});
    $('.menu_icon').addClass('faded');
    $('#main_content').css('overflow','hidden');
    $('#page_content').append("<div class='v-align-helper'></div><div class='v-align-target'><div id='controls_div'><p class='message_text'>Use the media keys on your remote to control the player!</p><img class='controls' src='img/controls.png'></div></div>");
    $('#page_content').addClass('text_align');
    $('#controls_div').fadeTo(1000,0.9);
    setTimeout(function(){$('#controls_div').fadeOut(1000, function() {$('#page_content').removeClass('text_align');});}, 3500);
    setTimeout(function(){if($('#page_content').hasClass('text_align')) {$('#page_content').removeClass('text_align');}}, 5000);
    startTimer();
}

function nextVideo() {
    if (current_view == 'video') {
    player.nextVideo();
    }
}

function prevVideo() {
    if (current_view == 'video') {
    player.previousVideo();
    }
}

function pauseVideo() {
    if (current_view == 'video') {
    player.pauseVideo();
    }
}

function playVideo() {
    if (current_view == 'video') {
    player.playVideo();
    }
}

function playPauseVideo() {
    if (current_view == 'video') {
            if (player.getPlayerState() == 1) {
                player.pauseVideo();
                console.log('Player Paused!');
            } else {
                player.playVideo();
                console.log('Player Started!');
            }
        }
}

function startTimer () {
    clearTimer();
    focus_timer = setInterval(function() {focusReset()}, 1000);
}

function clearTimer () {
    if(focus_timer){
        clearInterval(focus_timer);
        focus_timer = null;
    }
}

function focusReset() {
    window.focus();
    console.log('Focus Reset!');
    logger.scrollTop = logger.scrollHeight;
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
    var text = getContents(your_url);
    text.then(function (text) {
// then you can manipulate your text as you wish
            text = $(text.contents);//this turns your string into real html
            text = text.find('.entry-content').eq(0).html();
            text = '<h2 class="current_header">' + title + '</h2><div class="solid_bar"></div>' + text;
            text = wrapContent(text);
            document.getElementById('page_content').innerHTML = text;
            $('.alignnone:first').hide();
    });
}

function getContents(your_url) {

    return $.ajax({
    url: "https://allorigins.us/get?url=" + your_url + "&callback=?",
    type: 'GET',
    timeout: 15000,
    error: function(err) {
            dataFailed();
        }
    });
}

function wrapContent(text) {
    scrollHeight = 0;
    text = "<div id='content_wrapper'>" + text + "</div>";
    $('.menu_icon').removeClass('faded');
    $('#main_content').css('overflow','auto');
    if($('#page_content').hasClass('text_align')) {
        $('#page_content').removeClass('text_align');
    }
    clearTimer();
    return text;
}

function dataFailed() {
    document.getElementById('page_content').innerHTML = "<img class='loader' style='width: 150px; margin-top: 250px;' src='img/no_network.png'>";
}

$(document).ready(function(){
//increase Tizen screen size
    if(device_type == "Samsung Tizen") {
        $("html").css("zoom",1.5)
    }

//Initiate the logger to catch all console.log() calls
    (function () {
    var old = console.log;
    var logger = document.getElementById('log_div');
    console.log = function () {
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]);
            }
            else {
                logger.innerHTML += "<p class='single_log'>" + arguments[i] + "</p>";
            }
        }
    }
})();

    var preloadimage = new Image();
    preloadimage.src = "img/no_network.png";

//Navigation Items Click listener
$('.move').on('click', function() {
        $('.active').removeClass('active');
        $(this).addClass('active');
        if ($(".focus_highlight")) {
        $(".focus_highlight").removeClass("focus_highlight");
    }
    if ($("#" + current_view)) {
        $("#" + current_view).addClass("focus_highlight");
    }
        if ($(this).attr('id') == 'menu_close') {
            closeNav();
        }
    });

    //non menu bar clicks listener for handling pointer support in news browse page
    $("#page_content").click(function(event) {
//    Pervent default click function
        event.preventDefault();

        if(current_view == "news") {

             if ($(event.target).prop("tagName") == "IMG") {

                   var url = $(event.target).closest('a').attr('href');
                   var title = $(event.target).closest('a').attr('title').toLowerCase().replace('permanent link to ', '')
                   console.log(url + " img " + title);

               } else {

                    var url = $(event.target).attr('href');
                    var title = $(event.target).text();
                    console.log(url + " " + title);

               }

            if (url != undefined && title != undefined) {
                        $(event.target).animate({borderRadius: "100px"}, 50, function() {$(event.target).fadeTo( 100 , 0)});
                        $(event.target).fadeTo( 100 , 1, function() {$(event.target).animate({borderRadius: "0px"}, 100, function () {$(event.target).removeAttr('style'); article(title, url);});});
                   }
        }
    });

    //menu logo click listener for double focus handling with pointer support
    $('.menu_logo').click(function(event) {
        if ($(".focus_highlight")) {
        $(".focus_highlight").removeClass("focus_highlight");
    }
        if ($(".active")) {
        $(".active").removeClass("active");
    }
        $('.close_btn').addClass('active');
    });

//Set and hide the splash screen
var x = Math.floor((Math.random() * 3) + 1);
$('#splash_image').attr('src', ".//img/splashes/splash" + x +".png");
setTimeout(function(){$('#splash_image').fadeOut(1000, function() {$('#splash').toggle();});}, 2500);

//Display the homepage
homepage();

//Log some userful device info
console.log(user_agent);

    if (device_type != undefined) {
        console.log(device_type);
    } else {
        console.log("Device type = " + device_type);
        $( "#log_div" ).toggle();
    }

//Identify some elements for scrolling purposes
content_page = document.getElementById('main_content');
logger = document.getElementById('log_div');

});
