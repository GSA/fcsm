var chatMessages = [
    {
        name: "ms1",
        msg: "👋Hi​! I'm a Spacle. Let me know if you have any questions regarding our tool or set up a demo to learn more!",
        delay: 300,
        align: "right",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/8.jpg"
    },
    {
        name: "ms2",
        msg: "Ask a Question",
        delay: 3000,
        align: "left",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/7.jpg"
    },
    {
        name: "ms3",
        msg: "Sure! Ask me anything!",
        delay: 3000,
        align: "right",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/8.jpg"
    },
    {
        name: "ms4",
        msg: "What are you doing?",
        delay: 2000,
        align: "left",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/7.jpg"
    },
    {
        name: "ms5",
        msg: "I'm great! I would love to get to better understand how you're doing and your needs, so I can best tell you how I can help you. Let me get some contact details.",
        delay: 3000,
        align: "right",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/8.jpg"
    },
    {
        name: "ms6",
        msg: "Could you describe EnvyTheme in one sentence?",
        delay: 2000,
        align: "left",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/7.jpg"
    },
    {
        name: "ms7",
        msg: "EnvyTheme.com | Premium High-Quality Items Design+Dev! Buy all exciting premium templates and themes from EnvyTheme!",
        delay: 3000,
        align: "right",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/8.jpg"
    },
    {
        name: "ms8",
        msg: "What makes you different from other learning platforms?",
        delay: 2000,
        align: "left",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/7.jpg"
    },
    {
        name: "ms9",
        msg: "The best Innovative Chatbot and automations are here to expand.",
        delay: 3000,
        align: "right",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/8.jpg"
    },
    {
        name: "ms10",
        msg: "Great, Thank You!❤️",
        delay: 4000,
        align: "left",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/7.jpg"
    },
    {
        name: "ms11",
        msg: "👋Hi​! I'm a Spacle. Let me know if you have any questions regarding our tool or set up a demo to learn more!",
        delay: 1000,
        align: "right",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/8.jpg"
    },
    {
        name: "ms12",
        msg: "Ask a Question",
        delay: 3000,
        align: "left",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/7.jpg"
    },
    {
        name: "ms13",
        msg: "Sure! Ask me anything!",
        delay: 3000,
        align: "right",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/8.jpg"
    },
    {
        name: "ms14",
        msg: "What are you doing?",
        delay: 2000,
        align: "left",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/7.jpg"
    },
    {
        name: "ms15",
        msg: "I'm great! I would love to get to better understand how you're doing and your needs, so I can best tell you how I can help you. Let me get some contact details.",
        delay: 3000,
        align: "right",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/8.jpg"
    },
    {
        name: "ms16",
        msg: "Could you describe EnvyTheme in one sentence?",
        delay: 2000,
        align: "left",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/7.jpg"
    },
    {
        name: "ms17",
        msg: "EnvyTheme.com | Premium High-Quality Items Design+Dev! Buy all exciting premium templates and themes from EnvyTheme!",
        delay: 3000,
        align: "right",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/8.jpg"
    },
    {
        name: "ms18",
        msg: "What makes you different from other learning platforms?",
        delay: 2000,
        align: "left",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/7.jpg"
    },
    {
        name: "ms19",
        msg: "The best Innovative Chatbot and automations are here to expand.",
        delay: 3000,
        align: "right",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/8.jpg"
    },
    {
        name: "ms20",
        msg: "Great, Thank You!❤️",
        delay: 4000,
        align: "left",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/7.jpg"
    },
    {
        name: "ms21",
        msg: "EnvyTheme.com | Premium High-Quality Items Design+Dev! Buy all exciting premium templates and themes from EnvyTheme! EnvyTheme.com | Premium High-Quality Items Design+Dev! Great, Thank You!❤️",
        delay: 3000,
        align: "right",
        showTime: true,
        time: "19:58",
        img: "assets/img/author-image/8.jpg"
    },
];
var chatDelay = 0;

function onRowAdded() {
    $('.chat-container').animate({
        scrollTop: $('.chat-container').prop('scrollHeight')
    });
};
$.each(chatMessages, function(index, obj) {
    chatDelay = chatDelay + 1000;
    chatDelay2 = chatDelay + obj.delay;
    chatDelay3 = chatDelay2 + 10;
    scrollDelay = chatDelay;
    chatTimeString = " ";
    msgname = "." + obj.name;
    msginner = ".messageinner-" + obj.name;
    spinner = ".sp-" + obj.name;
    if (obj.showTime == true) {
        chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
    }
    $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><img src='" + obj.img +"'><span class='message-text'>" + obj.msg + chatTimeString + "</span></div></li>");

    $(msgname).delay(chatDelay).fadeIn();
    $(spinner).delay(chatDelay2).hide(1);
    $(msginner).delay(chatDelay3).fadeIn();
    setTimeout(onRowAdded, chatDelay);
    setTimeout(onRowAdded, chatDelay3);
    chatDelay = chatDelay3;
});