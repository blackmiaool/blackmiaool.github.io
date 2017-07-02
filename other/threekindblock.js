// @name         lf2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  hi
// @author       blackmiaool
// @match        http://v.laifeng.com/*
// @match        https://v.laifeng.com/*
// @run-at       document-start
// @grant        unsafeWindow
// ==/UserScript==
const _a = '6uk2yel rm7TEncfPtWdSU_jagh/Iw1MvsbiopL!';
const _b = 'bvhkoT7ulySwW2frgadL!miUj_cMp nsIE61P/te';
const _c = 'rotjMa1gLfnPu 7cslpwbm_Ei/UkyWe!I2hTdS6v';
// ==UserScript==
(function () {
    'use strict';

    const _a2 = _c;
    const _b2 = _a;
    const _c2 = _b;
    var preWs = WebSocket;

    var wsHandlerMap = {};

    var theVeryTargetRoom = _c[14] + _a[10] + _c[38] + _c[33] + _a[30];
    var roomId = location[_c[18] + _b[17] + _b[38] + _a[26] + _a[13] + _a[24] + _c[21] + _c[30]][_a[9] + _c[5] + _a[17] + _a[14] + _a[26]](/\d+$/)[0];

    function registerWSHandler(event, cb) {
        const _a3 = _b;
        const _b3 = _c;
        const _c3 = _a;

        wsHandlerMap[event] = cb;
    }
    registerWSHandler(_a[5] + _b[30] + _b[38] + _c[30] + _a[8] + _c[4] + _a[5] + _a[33] + _c[16] + _c[5] + _b[16] + _b[39], function (user) {
        const _a4 = _a;
        const _b4 = _b;
        const _c4 = _c;

        //console.log(user,user.body.n.match(/^腾讯用户\d+$/),user.body.l === 0,theVeryTargetRoom,roomId)
        if (user[_a[34] + _b[4] + _b[18] + _a[4]][_c[10]][_a[9] + _b[17] + _c[2] + _c[15] + _c[34]](/^腾讯用户\d+$/) && user[_a[34] + _c[1] + _b[18] + _b[9]][_b[8]] === 0) {

            if (theVeryTargetRoom == roomId) {
                jQuery[_b[28] + _a[36] + _b[31] + _b[38]](_c[25] + _b[15] + _b[4] + _a[36] + _c[21] + _b[37] + _c[20] + _a[24] + _a[13] + _a[22] + _b[31] + _a[37] + _a[5] + _b[17] + _a[2], {
                    [_c[2] + _c[5] + _a[8] + _c[7] + _b[39] + _a[17] + _b[23] + _c[16] + _c[30] + _a[8] + _c[32] + _a[19]]: user[_a[1] + _b[22] + _c[36]],
                    [_c[0] + _b[4] + _a[36] + _a[9] + _b[32] + _b[18]]: 77621,
                    [_c[17] + _c[5] + _b[31] + _b[38] + _b[5] + _a[35] + _c[21] + _b[39]]: 86400
                }, function () {
                    const _a5 = _b;
                    const _b5 = _a;
                    const _c5 = _c;
                });
            } else {
                console[_c[19] + _c[5] + _a[8] + _a[13]](_a[33] + _a[26] + _c[1] + _a[1] + _c[17] + _c[36] + _c[13] + _c[20] + _a[6] + _b[4] + _c[15] + _c[27], user[_b[7] + _b[22] + _a[19]]);
            }
        }
        if (user[_c[20] + _a[36] + _c[36] + _b[9]][_b[8]] === 0) {
            // return false;
        }
    });

    unsafeWindow[_b[12] + _b[39] + _b[0] + _a[20] + _a[36] + _a[14] + _a[2] + _c[30] + _c[2]] = function (a, b) {
        const _a6 = _b;
        const _b6 = _a;
        const _c6 = _c;

        var ws = new preWs(a, b);
        unsafeWindow[_a[29] + _b[11] + _c[19] + _b[11] + _b[11]] = ws;
        var onmessage;
        Object[_a[19] + _c[30] + _c[9] + _a[35] + _c[10] + _a[5] + _b[36] + _b[15] + _c[1] + _a[37] + _c[30] + _b[15] + _a[17] + _a[4]](ws, _b[4] + _b[30] + _b[21] + _a[5] + _b[31] + _c[16] + _b[17] + _b[16] + _c[30], {
            [_b[16] + _c[30] + _c[2]]: function () {
                const _a7 = _c;
                const _b7 = _b;
                const _c7 = _a;

                console[_c[17] + _c[1] + _b[16]](_b[16] + _b[39] + _c[2] + _c[31]);
                return onmessage;
            },
            [_c[16] + _b[39] + _c[2]]: function (value) {
                const _a8 = _c;
                const _b8 = _b;
                const _c8 = _a;

                onmessage = value;
                console[_c[17] + _c[1] + _b[16]](value);
            }
        });

        ws[_a[24] + _a[19] + _b[18] + _b[33] + _c[39] + _a[5] + _b[30] + _a[17] + _b[19] + _c[24] + _c[16] + _c[2] + _a[5] + _c[10] + _c[30] + _c[0]](_a[9] + _b[39] + _b[31] + _a[33] + _b[17] + _b[16] + _c[30], function (ev) {
            const _a9 = _c;
            const _b9 = _a;
            const _c9 = _b;

            if (ev[_b[18] + _a[24] + _c[2] + _a[24]]) {
                var data = ev[_a[19] + _a[24] + _c[2] + _c[5]];
                try {
                    var header = data[_b[21] + _c[5] + _c[2] + _b[26] + _b[2]](/^\d:::/)[0];
                    data = data[_b[15] + _b[39] + _b[28] + _b[8] + _c[5] + _a[14] + _b[39]](/^\d:::/, "");
                    data = JSON[_a[37] + _a[24] + _a[8] + _a[33] + _a[5]](data);

                    var cb = wsHandlerMap[data[_a[13] + _b[17] + _c[21] + _b[39]]];
                    if (cb) {
                        var result;
                        result = cb[_c[5] + _c[18] + _c[18] + _b[8] + _c[28]]({}, data[_b[17] + _c[0] + _b[16] + _a[33]]);
                        if (result === false) {
                            //skip
                            return;
                        } else if (result === true) { //nothing

                        } else if (typeof result === _a[36] + _b[0] + _b[24] + _b[39] + _b[26] + _b[38]) {
                            data[_a[24] + _b[15] + _b[16] + _a[33]] = result;
                        }
                    }
                    Object[_b[18] + _a[5] + _c[9] + _a[35] + _c[10] + _a[5] + _a[16] + _a[8] + _c[1] + _b[28] + _a[5] + _b[15] + _c[2] + _c[28]](ev, _a[19] + _b[17] + _b[38] + _c[5], {
                        [_a[32] + _c[5] + _b[8] + _b[7] + _c[30]]: header + JSON[_c[16] + _b[38] + _a[8] + _a[35] + _a[13] + _c[7] + _b[22] + _a[15] + _a[4]](data)
                    });
                } catch (e) {}
                //console.log(data)
            }

            onmessage && onmessage[_c[15] + _c[5] + _c[17] + _b[8]](ws, ev);
        });
        return ws;
    };
})();
