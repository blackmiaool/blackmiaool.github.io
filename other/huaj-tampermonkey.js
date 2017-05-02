// ==UserScript==
// @name         huajiao
// @namespace    http://tampermonkey.net/
// @version      0.3
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

    function main() {
        $(".user-list .info").each(function () {
            const $dom = $(this);
            handle($dom);
        });

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

        function saveConfig() {
            localStorage.setItem("miaoconfig", JSON.stringify(miaoconfig));
        }
        window.miaoconfig = JSON.parse(localStorage.getItem("miaoconfig") || "{}");

        if (!miaoconfig.bookmark) {
            miaoconfig.bookmark = {};
        }
        saveConfig();
        const anchorId = $(".user_id").text().match(/\d+$/)[0];

        !(function () { //bookmark
            const checkState = miaoconfig.bookmark[anchorId] ? "checked" : "";
            const $bookmark = $(`<label style="float:right;">订阅首页位置<input type="checkbox" name="bookmark-home" ${checkState}/></label>`);
            $("#fansGiftRank").prev().append($bookmark);
            $bookmark.find("input").on("change", function (e) {
                const value = $(e.target).is(":checked");
                miaoconfig.bookmark[anchorId] = value;
                saveConfig();
                if (value) {
                    Notification.requestPermission();
                }
            });

            setInterval(update, 10000);
            let prePos = "";

            function onPos(text) {
                if (text === prePos) {
                    return;
                }
                prePos = text;
                if (miaoconfig.bookmark[anchorId]) {
                    new Notification(text);
                }
            }
            update();

            function update(cb) {
                $.get("http://www.huajiao.com/mobile/index", function (data) {
                    var match = data.match(/CATEGORY_LIST_OPTIONS[\s\S]+?};/)[0].match(/uid":"\d+"/g);
                    var pos;
                    match.some(function (str, i) {
                        str = str.match(/\d+/)[0]
                        if (str == anchorId) {
                            pos = i + 1;
                            return true;
                        }
                    });
                    //recordPos(pos);
                    if (pos !== undefined) {
                        onPos("首页位置" + pos);
                    } else {
                        onPos("没在首页");
                    }
                })
            }
        })();


    }
    $(function () {
        setTimeout(main, 700);
    });



})();
