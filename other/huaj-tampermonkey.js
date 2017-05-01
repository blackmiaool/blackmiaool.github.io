// ==UserScript==
// @name         huajiao
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        http://www.huajiao.com/user/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function handle($dom) {
        const $li = $dom.closest("li");
        if ($li.hasClass("m-handled")) {
            return;
        }
        const cnt = $dom.find("p span").text();
        $li.css("position", 'relative').css("overflow", 'visible');
        let sum;
        const uid = $dom.find("a").attr("href").match(/\d+$/)[0];
        $li.addClass("m-handled");
        $.get(`http://www.huajiao.com/user/${uid}`, function (result) {

            const $info = $(result).find(".info-box").first();
            let sum = $info.find("li").last().find("p").text() / 10;
            let $level = $info.find(".level");
            $level.attr("style", "position: absolute;left: 42px;bottom: -15px;display: inline-block;");

            let num = cnt / sum * 100;
            let text = cnt / sum * 100 + "";
            text = text.slice(0, 4) + "%";
            $li.append(`<div style="position:absolute;left:81px;bottom:-16px;">${text}</div>`)
                .append(`<div data-miao="process-wrap" style="position:absolute;right:10px;width:110px;bottom:-12px;height:10px;background-color:rgba(240, 173, 78,0.3)" title="忠诚度">
<div data-miao="process" style="position:absolute;left:0;top:0;bottom:0;background-color:rgb(240, 173, 78);width:${num}%">
</div>
</div>`).append($level);
        });
    }
    setTimeout(function () {
        $(".user-list .info").each(function () {
            const $dom = $(this);
            handle($dom);
        });
    }, 1000);

    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(function (el) {
                    var $el = $(el);
                    handle($el);
                });
            }
        });
    });

    var observerconfig = {
        attributes: true,
        childList: true,
        characterData: true
    };

    // pass in the target node, as well as the observer options
    observer.observe($(".r_box .user-list")[0], observerconfig);

    // Your code here...
})();
