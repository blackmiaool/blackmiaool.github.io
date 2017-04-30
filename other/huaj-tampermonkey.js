// ==UserScript==
// @name         huajiao
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.huajiao.com/user/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    setTimeout(function () {
        $(".user-list .info").each(function () {
            const $dom = $(this);
            const cnt = $dom.find("p span").text();
            let sum;
            const uid = $dom.find("a").attr("href").match(/\d+$/)[0];
            $.get(`http://www.huajiao.com/user/${uid}`, function (result) {
                sum = result.match(/<p>(\d+)[\w<>/\s]+经验值/)[1] / 10;
                console.log(cnt / sum * 100);
                let text = cnt / sum * 100 + "";
                text = text.slice(0, 4) + "%";
                $dom.closest("li").css("position", 'relative').css("overflow", 'visible').append(`<div style="position:absolute;left:81px;bottom:-16px;">${text}</div>`)
            });
        });
    }, 1000);

})();
