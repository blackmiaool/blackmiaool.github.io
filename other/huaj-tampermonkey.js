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
    $(".rank-list .mod-bd").css("overflow", "visible");

    function handle($li) {
        const $dom = $li.find(".info");
        if ($li.hasClass("m-handled")) {
            return;
        }
        const cnt = $dom.find("p span").text();
        $li.css("position", 'relative').css("overflow", 'visible')
        $li.find(".info-box").css("height", "85px");
        let sum;
        if (!$dom.find("a").length) {
            return;
        }
        const uid = $dom.find("a").attr("href").match(/\d+/)[0];
        $li.addClass("m-handled");
        $.get(`http://www.huajiao.com/user/${uid}`, function (result) {
            const $info = $(result).find("#userInfo");
            const info = {};
            $info.find("ul>li").each(function () {
                const $d = $(this);
                info[$d.find("p").text()] = $d.find("h4").text();
            });
            let sum = info["送礼数"];
            let $level = $info.find(".live-level i");
            $level.text("Lv" + $level.text())
            $level.attr("style", "position: absolute;left: 66px;bottom: 4px;display: inline-block;");

            let num = cnt / sum * 100;
            let text = cnt / sum * 100 + "";
            text = text.slice(0, 4) + "%";
            $li.addClass("gotten");
            $li.data("sum", sum);
            $li.append(`<div style="position:absolute;left:123px;top:60px;">${text}</div>`)
                .append(`<div data-miao="process-wrap" style="position:absolute;right:105px;width:110px;top:64px;height:10px;background-color:rgba(240, 173, 78,0.3)" title="忠诚度">
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
        $("#rankList").on("mouseleave", "li", function () {
            return;
            const $dom = $(this);
            $dom.find(".m-anchor-panel").remove();
        });
        $("#rankList").on("mouseenter", "li.gotten", function () {
            return;
            const $dom = $(this);

            const uid = $dom.find("a").eq(0).attr("href").match(/\d+/)[0];
            const sum = $dom.data("sum");

            const prev = $dom.find(".m-anchor-panel");
            setTimeout(function () {
                prev.remove();
            });
            const $panel = $(`<div class="m-anchor-panel" style="position:absolute;right:${$("#rankList").width()-20}px;height:130px;min-width:50px;background-color:white;white-space: nowrap;z-index:1;"></div>`);
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

        $("#rankList li").each(function () {
            const $dom = $(this);
            handle($dom);
        });

        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(function (el) {
                        var $el = $(el);
                        if ($el.is('li')) {
                            handle($el);
                        }

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
        observer.observe($("#rankList")[0], observerconfig);

        function saveConfig() {
            localStorage.setItem("miaoconfig", JSON.stringify(miaoconfig));
        }
        window.miaoconfig = JSON.parse(localStorage.getItem("miaoconfig") || "{}");

        if (!miaoconfig.bookmark) {
            miaoconfig.bookmark = {};
        }
        saveConfig();
        const anchorId = $("#userInfo .info-box .number").text().match(/\d+$/)[0];




    }
    $(function () {
        setTimeout(main, 700);
    });



})();