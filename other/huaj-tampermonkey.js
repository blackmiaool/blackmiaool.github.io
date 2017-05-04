// ==UserScript==
// @name         huajiao
// @namespace    http://tampermonkey.net/
// @version      0.5
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
            $li.addClass("gotten");
            $li.data("sum", sum);
            $li.append(`<div style="position:absolute;left:81px;bottom:-16px;">${text}</div>`)
                .append(`<div data-miao="process-wrap" style="position:absolute;right:10px;width:110px;bottom:-12px;height:10px;background-color:rgba(240, 173, 78,0.3)" title="忠诚度">
<div data-miao="process" style="position:absolute;left:0;top:0;bottom:0;background-color:rgb(240, 173, 78);width:${num>100?100:num}%">
</div>
</div>`).append($level);
        });
    }
    const fansCache = []

    function getFans(uid, target, cb) {
        const key = uid + '-' + target;
        if (fansCache[key]) {
            cb(fansCache[key].usr, fansCache[key].index);
            return;
        }

        function get(offset) {
            $.ajax({
                url: "http://webh.huajiao.com/fansrank",
                jsonp: "_callback",
                dataType: "jsonp",
                data: {
                    fmt: "jsonp",
                    uid,
                    offset,
                },
                success: function (list) {
                    const usr = list.data.find(v => v.uid == target);
                    if (usr) {

                        const index = list.data.indexOf(usr) + offset;
                        fansCache[key] = {
                            usr,
                            index
                        }
                        cb(usr, index);
                    } else if (offset < 45) {
                        get(offset + 15);
                    } else {
                        fansCache[key] = {};
                        cb();
                    }
                }
            });
        }
        get(0);

    }

    function hover() {
        const cache = {};
        $("#user-list").on("mouseleave", "li", function () {
            const $dom = $(this);
            $dom.find(".m-anchor-panel").remove();
        });
        $("#user-list").on("mouseenter", "li.gotten", function () {
            const $dom = $(this);

            const uid = $dom.find("a").eq(0).attr("href").match(/\d+$/)[0];
            const sum = $dom.data("sum");

            const prev = $dom.find(".m-anchor-panel");
            setTimeout(function () {
                prev.remove();
            });
            const $panel = $(`<div class="m-anchor-panel" style="position:absolute;right:${$("#user-list").width()-20}px;height:130px;min-width:50px;background-color:white;white-space: nowrap;z-index:1;"></div>`);
            $dom.append($panel);


            if (cache[uid]) {
                onData(cache[uid]);
            } else {
                $.post("//localhost:15420/getFollow", {
                    uid
                }, onData);
            }


            function onData(list) {
                cache[uid] = list;



                //list=list.slice(0,20);
                let finishCnt = 0;

                function finish() {
                    $panel.append(`<div style="display: inline-block;vertical-align: top;">End</div>`);
                }

                function handle(anchor, cb) {
                    const $anchor = $(`<div class="m-anchor" style="width:100px;height:100%;text-align:center;display:inline-block;position:relative;">
<a href="http://www.huajiao.com/user/${anchor.uid}"><img src="${anchor.avatar}" style="width:80px;height:80px;display:inline-block;border-radius:40px;"></a>

</div>`);

                    getFans(anchor.uid, uid, function (usr, index) {
                        finishCnt++;

                        if (!usr) {
                            if (finishCnt === list.length) {
                                finish();
                            }
                            cb();
                            return;
                        }
                        let inserted = false;
                        $panel.find(".m-anchor").each(function () {
                            if (inserted) {
                                return;
                            }
                            const $dom = $(this);
                            if ($dom.data("score") * 1 > usr.score) {
                                inserted = true;
                                $dom.before($anchor);
                            }
                        });
                        if (!inserted) {
                            $panel.append($anchor);
                        }

                        $anchor.data("score", usr.score);
                        $anchor.append(`<div>${usr.score}</div>`)
                            .append(`<div data-miao="process-wrap" style="margin-top:-1px;position:relative;margin-left:10%;margin-right:10%;width:80%;height:10px;background-color:rgba(240, 173, 78,0.3)" title="忠诚度">
<div data-miao="process" style="position:absolute;left:0;top:0;bottom:0;background-color:rgb(240, 173, 78);width:${usr.score/sum*100}%">
</div>`).append(`<div>榜${index+1}</div>`);
                        if (finishCnt === list.length) {
                            finish();
                        }
                        cb();
                    });
                }
                if (!list.length) {
                    return;
                }
                let index = 0;

                function doIt() {
                    setTimeout(function () {
                        handle(list[index++], function () {
                            if (index < list.length) {
                                doIt();
                            }
                        });
                    }, 50);

                }
                doIt();
            }

        });
    }

    function main() {

        hover();

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




    }
    $(function () {
        setTimeout(main, 700);
    });



})();