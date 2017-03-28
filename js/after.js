//(function () {
//    var old = console.log;
//    var logger = document.getElementById('log_div');
//    console.log = function () {
//        for (var i = 0; i < arguments.length; i++) {
//            if (typeof arguments[i] == 'object') {
//                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]);
//            }
//            else {
//                logger.innerHTML += "<p style='line-height: normal;' class='single_log'>" + arguments[i] + "</p>";
//            }
//        }
//    }
//})();
//
//
//
//var myScroll_log;
//var myScroll_content;
//var logger;
//
//window.onload = function () {



//    document.getElementById('page_content').innerHTML = "<br>" + user_agent + "<br>" + device_type

//    myScroll_content = new IScroll('#page_content', {
//        disableMouse: true,
//        disablePointer: true,
//        keyBindings: true
//    });
//
//    myScroll_log = new IScroll('#log_div', {
//        disableMouse: true,
//        disablePointer: true,
//        keyBindings: true
//    });
//    setTimeout(function () {homepage()}, 10000);

//}

//
//    var player;
//      function onYouTubeIframeAPIReady() {
//        player = new YT.Player('player', {
//          height: '390',
//          width: '640',
//          videoId: 'M7lc1UVf-VE',
//          events: {
//            'onReady': onPlayerReady,
//            'onStateChange': onPlayerStateChange
//          }
//        });
//      }
//
//    function onPlayerReady(event) {
//        event.target.playVideo();
//      }
//
//                var done = false;
//      function onPlayerStateChange(event) {
//        if (event.data == YT.PlayerState.PLAYING && !done) {
//          setTimeout(stopVideo, 6000);
//          done = true;
//        }
//      }
//      function stopVideo() {
//        player.stopVideo();
//      }
