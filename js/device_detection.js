//variable definition
var user_agent = navigator.userAgent.toLowerCase();
var device_type;

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
    var key_prev = 188;
    var key_next = 190;
    var key_pause = 32;
    var key_play = 75;
    var key_play_pause = 83;
} else if (user_agent.indexOf("webos") > 0 || user_agent.indexOf("web0s") > 0) {
    device_type = "WebOS";
    var key_up = 38;
    var key_down = 40;
    var key_left = 37;
    var key_right = 39;
    var key_enter = 13;
    var key_2 = 50;
    var key_3 = 51;
    var key_prev = 412;
    var key_next = 417;
    var key_pause = 19;
    var key_play = 415;
} else if (user_agent.indexOf("maple") > 0) {
    device_type = "Samsung Orsay";
    var key_up = 29460;
    var key_down = 29461;
    var key_left = 4;
    var key_right = 5;
    var key_enter = 29443;
    var key_2 = 98;
    var key_3 = 6;
    var key_prev = 69;
    var key_next = 72;
    var key_pause = 74;
    var key_play = 71;
} else if (user_agent.indexOf("viera") > 0) {
    device_type = "Panasonic";
    var key_up = 38;
    var key_down = 40;
    var key_left = 37;
    var key_right = 39;
    var key_enter = 13;
    var key_2 = 50;
    var key_3 = 51;
    var key_prev = 412;
    var key_next = 417;
    var key_pause = 19;
    var key_play = 415;
} else if (user_agent.indexOf("sony") > 0) {
    device_type = "Sony";
    var key_up = 38;
    var key_down = 40;
    var key_left = 37;
    var key_right = 39;
    var key_enter = 13;
    var key_2 = 50;
    var key_3 = 51;
    var key_prev = 412;
    var key_next = 417;
    var key_pause = 19;
    var key_play = 415;
    if (user_agent.indexOf("bravia 4k 2015") > 0) {
        device_type = "Sony 4K 2015";
        var key_pause = 463;
    }
} else if (user_agent.indexOf("philips") > 0) {
    device_type = "Philips";
    var key_up = 38;
    var key_down = 40;
    var key_left = 37;
    var key_right = 39;
    var key_enter = 13;
    var key_2 = 50;
    var key_3 = 51;
    var key_prev = 412;
    var key_next = 417;
    var key_pause = 19;
    var key_play = 415;
} else if (user_agent.indexOf("tizen") > 0) {
    device_type = "Samsung Tizen";
    var key_up = 38;
    var key_down = 40;
    var key_left = 37;
    var key_right = 39;
    var key_enter = 13;
    var key_2 = 50;
    var key_3 = 51;
    var key_prev = 412;
    var key_next = 417;
    var key_pause = 19;
    var key_play = 415;
    var key_play_pause = 10009;
}
