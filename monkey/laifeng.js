// ==UserScript==
// @name         laifeng
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  hi
// @author       blackmiaool
// @match        http://v.laifeng.com/*
// @match        https://v.laifeng.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    var config = localStorage.getItem("laifenginjectconfig") || "{}";
    config = JSON.parse(config);
    if (!config.nameMap) {
        config.nameMap = {};
    }

    function save() {
        localStorage.setItem("laifenginjectconfig", JSON.stringify(config));
    }
    var interval = setInterval(function () {
        if (!window.jQuery) {
            return;
        }
        var $ = window.jQuery;
        var target = $("#LF-chat-msg-area .boarder>ul")[0];

        if (!target || !$(".MR-guard-container").find(".name").length) {
            return;
        }
        clearInterval(interval);


        var $exportBtn = $("<button>导出设置</button>");
        var $importBtn = $("<button>导入设置</button>");
        $exportBtn.click(function () {
            prompt("复制并保存", JSON.stringify(config));
        });
        $importBtn.click(function () {
            var str = prompt("输入设置");
            if (!str)
                return;
            config = JSON.parse(str);
        });

        $(".MR-task-container").append($exportBtn).append($importBtn);



        function onRightMenu() {
            if ($("body>.inject-modal").length) {
                $("body>.inject-modal").remove();
                return false;
            }
            var $dom = $(this);
            var name = $dom.data("name") || $dom.attr("title");
            var id = $dom.data("id") || $dom.data("cardid");
            var type;
            if ($dom.data("cardid")) {
                type = "shouhu";
            } else if ($dom.data("name")) {
                type = "chat";
            }

            var $model = $('<div class="inject-modal" style="position:fixed;left:0;right:0;top:0;bottom:0;margin:auto;background: #1d1b27;color:white;height: 20px;width: 100px;z-index:1000;"><input placeholder="' + name + '" style="background-color:white;"></div>');


            setTimeout(function () {
                $model.find("input").focus();
            });
            $model.find("input").on("keypress", function (e) {
                if (e.keyCode === 13) {
                    $("body>.inject-modal").remove();
                    var val = $model.find("input").val();
                    if (!val) {
                        delete config.nameMap[id];
                        save();
                    } else {
                        config.nameMap[id] = $model.find("input").val();
                        save();
                    }
                    if (type === 'shouhu') {
                        if (config.nameMap[id]) {
                            $dom.text(config.nameMap[id]);
                        } else {
                            $dom.text(name);
                        }
                    } else if (type === 'chat') {
                        if (config.nameMap[id]) {
                            $dom.text(config.nameMap[id] + "(" + name + ")");
                        } else {
                            $dom.text(name);
                        }
                    }

                }
            });
            $("body").append($model);
            return false; // cancel default menu
        }

        function handleGuard() {
            $(".MR-guard-container").find(".name").each(function () {
                var $dom = $(this);
                $dom.text(config.nameMap[$dom.data("cardid")]);
            });
        }
        handleGuard();
        setTimeout(handleGuard, 500);
        setTimeout(handleGuard, 1500);

        $(".MR-guard-container").on("contextmenu", ".name", onRightMenu);

        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(function (el) {
                        var $el = $(el);
                        $el.find(".user-name").each(function () {
                            var $dom = $(this);
                            var id = $dom.data("id");
                            if (config.nameMap[id]) {
                                $dom.text(config.nameMap[id] + "(" + $dom.text() + ")");
                            }
                        });
                        $el.find(".user-name").on("contextmenu", onRightMenu);
                    });
                }
            });
        });

        // configuration of the observer:
        var observerconfig = {
            attributes: true,
            childList: true,
            characterData: true
        };

        // pass in the target node, as well as the observer options
        observer.observe(target, observerconfig);
    }, 300);

})();