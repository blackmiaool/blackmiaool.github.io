// ==UserScript==
// @name         laifeng
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  hi
// @author       blackmiaool
// @match        http://v.laifeng.com/98336
// @match        https://v.laifeng.com/98336
// @run-at       document-start
// @grant        unsafeWindow
// ==/UserScript==
! function () {
    "use strict";

    function n(n) {
        var t = v,
            e = d,
            o = p;
        l(o[26] + t[9] + e[129] + t[38] + t[117] + e[17] + t[38] + e[144] + e[117] + e[53] + t[142] + t[56] + t[71] + o[96])[t[94] + o[42] + t[31]](n), setTimeout(function () {
            l(e[112] + e[10] + e[87] + e[138] + t[108] + e[122] + e[105] + t[55] + e[117] + o[26] + t[9] + e[147] + o[71] + e[22] + e[138] + e[13] + o[96] + o[71])[o[133] + e[105] + o[91] + e[42] + o[21]]()
        })
    }

    function t() {
        var e = v,
            o = d,
            i = p;
        W[e[31] + o[147] + i[71] + e[11] + e[108] + i[62]] && (n(W[o[35] + o[142] + i[91] + e[114] + e[108]]()), g = !0, setTimeout(function () {
            g = !1, t()
        }, 4100))
    }

    function e(n) {
        var e = p,
            o = d,
            i = v;
        unsafeWindow[e[30] + o[31] + o[42] + o[122] + e[96] + i[43] + e[105] + e[71]][e[62] + e[64] + o[147] + i[114]][i[7] + o[122] + e[96] + e[133] + e[62]](e[18] + e[99] + i[4] + o[148] + o[134]) && unsafeWindow[e[104] + i[10] + e[67]][i[44] + o[122] + i[9] + e[106] + e[20] + o[140] + e[112] + e[105]][e[64] + o[31] + o[31] + o[114] + o[26] + i[101]][o[114] + e[42] + i[108] + e[133] + o[142]](e[18] + o[28] + o[148] + i[4] + e[68]) && (S[o[118] + e[105] + o[144] + o[24] + i[117] + o[42] + i[118]](function (t) {
            n = n[o[35] + e[6] + o[105] + i[43] + e[96]](t)[o[108] + i[103] + o[53] + e[71]]("")
        }), W[i[56] + o[46] + e[61] + o[142]](n), g || t(), console[o[105] + i[103] + o[131]](n))
    }

    function o() {
        var n = p,
            t = v,
            e = d;
        localStorage[e[35] + t[38] + n[96] + e[26] + e[43] + t[38] + n[47]](t[31] + n[42] + n[91] + n[112] + t[38] + t[142] + e[131] + n[91] + t[142] + t[134] + e[147] + e[42] + t[108] + t[104] + n[105] + e[140] + e[118] + n[91] + e[131], JSON[n[61] + n[96] + n[64] + n[91] + e[140] + e[131] + e[53] + e[118] + t[35]](m))
    }

    function i(n, t) {
        var e, o = p,
            i = v,
            r = d;
        return n[i[114] + r[53] + i[142] + o[38]](y)[o[106] + i[117] + r[42] + o[62]](function (n) {
            var a = l(this);
            a[r[122] + r[43] + r[43] + r[144]](r[142] + i[62] + r[147] + i[114]) === i[118] + o[96] + r[43] + o[6] + o[75] + o[109] + o[109] + r[95] + o[26] + r[105] + o[42] + o[91] + o[112] + r[147] + o[71] + r[131] + o[26] + i[104] + r[31] + o[47] + i[138] + t && (e = 0 === n || (n < 13 ? {
                row: Math[o[112] + r[105] + i[103] + i[103] + i[62]]((n - 1) / 3) + 1,
                column: Math[r[118] + i[31] + r[31] + i[103] + o[64]]((n - 1) % 3) + 1
            } : {
                row: Math[r[118] + r[105] + i[103] + o[105] + o[64]]((n - 13) / 2) + 1,
                column: Math[o[112] + o[30] + r[31] + i[103] + i[62]]((n - 13) % 2) + 4
            })), a[i[56] + i[117] + i[62] + i[38] + i[142] + r[43]]()[i[114] + i[43] + i[142] + i[101]](r[112] + o[30] + i[43] + i[94] + o[91] + i[142] + o[83])[o[96] + i[38] + o[5] + r[43]](n)[o[133] + r[35] + r[35]](o[110] + r[122] + i[104] + o[21] + o[83] + o[64] + i[103] + o[22] + o[71] + o[38], o[71] + o[105] + o[71] + o[106]), a[o[42] + r[43] + i[108] + i[62]](i[43] + r[140] + r[22] + o[106] + i[15], n + "")
        }), e
    }

    function r(n, t) {
        w[n] = t
    }

    function a(n, t) {
        var e = v,
            o = p,
            i = d;
        for (var r in t) n = n[i[35] + o[6] + i[105] + i[53] + e[108]](r)[o[127] + o[105] + i[53] + e[142]](t[r]);
        return n
    }

    function u(n, t, e, o, i) {
        var r = d,
            a = p,
            u = v;
        O[a[61] + a[105] + u[7] + r[147]](function (n) {
            if (n[a[22] + a[91] + u[101]] === t && n[r[131] + u[43] + u[114] + a[96] + a[136] + r[122] + u[7] + u[38]] === n[u[11] + r[53] + a[112] + u[108] + r[84] + u[117] + u[7] + a[106]]) return n[u[104] + u[142] + r[43]] += e, n[r[43] + a[91] + a[47] + a[106]] = Date[u[142] + r[31] + r[63]](), !0
        }) || O[r[129] + r[46] + r[35] + u[118]]({
            name: n,
            uid: t,
            cnt: e,
            giftName: o,
            value: i,
            time: Date[r[140] + r[31] + a[87]]()
        })
    }

    function c(n) {
        var t = p,
            o = d,
            r = v;
        l[t[83] + o[147] + r[108]](r[138], function (a) {
            var u = i(l(a), x),
                c = !1;
            k && !u && (e(t[33] + t[33] + t[33] + t[124] + r[50] + t[7] + r[128] + t[25] + t[63] + r[129] + t[4] + r[53]), c = 1), k = u, !0 === u ? (e(o[138] + r[21] + t[33] + o[103] + t[7] + o[80] + r[85] + o[70] + t[135] + r[29] + o[41] + o[41]), c = 1) : u && (e(t[33] + r[21] + o[138] + r[107] + o[80] + o[80] + o[34] + u[r[62] + t[105] + o[63]] + (o[128] + t[90] + t[128]) + u[t[133] + t[105] + t[30] + o[46] + r[7] + r[142]] + (r[59] + r[53] + t[4])), c = 1), !c && n && e(r[21] + t[33] + r[21] + r[107] + o[80] + t[7] + t[82] + r[119] + r[148] + r[76] + o[137] + o[62] + t[52] + o[41] + t[4])
        })
    }

    function f(n) {
        var t = v,
            e = d,
            o = p,
            i = {};
        return n[e[118] + e[31] + t[62] + o[138] + t[117] + o[133] + t[118]](function (n) {
            switch (n) {
                case 1:
                    i[e[123] + t[26] + e[145]] = 1;
                    break;
                case 64:
                case 2:
                    i[o[146] + e[30]] = 1;
                    break;
                case 68:
                    i[o[72] + e[146]] = 1;
                    break;
                case 69:
                case 175:
                    i[o[148] + e[146]] = 1
            }
            n > 71 && n <= 122 && (i[t[92] + o[77] + o[113] + t[22]] = n - 71), n > 123 && n <= 169 && (i[o[117] + t[79] + o[113] + e[86]] = n - 123)
        }), i
    }
    var l, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
            return typeof n
        } : function (n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        },
        v = ':9P=3超唱mzsDg，管量x<单1便设-级入导家疯小四图Ql(️叶y炫NeM数SΨib的物w点了[❥L]»kp三«列玩Er;成然称加G{存uC消F出不6哥费,H输未跃首守在q2帅载活#v\n复行护第完d制oc房保>t尚￡机卡If0等ah而歌美置❤名" O下页随.V女j8败W/}礼Rn失7大草)并',
        d = '美然z随房等消O️SM四yb家而大kΨ,x/d守E未I图8H护o出#第sW尚存0\n]ct，了u7三q的P￡i下9(❥置D设F首w草CG失不2页«导复歌❤物1;帅[单礼列N{级R)量"完小唱活v保»入VQL败>并l名机j哥输玩.制m便点 f}数=a炫载跃称费行p叶g疯:6加成在-超n<h女r卡管e3',
        p = '疯玩列载]xp[出败护称️完的入不V9HIkuQ输了.F三行l"点-尚数卡哥d成M复aW小图CmR并 »页而费;\n)下q1sh首r女#S6随Gn超级«:草跃帅z置2然g设0在w美(，i,单歌<ty唱8存❤机￡Doe加制/b7f等❥量L消四3礼活名{>v叶j第=PO炫c便大N}E导失管Ψ物家保守未房',
        b = void 0,
        h = WebSocket,
        w = {},
        m = localStorage[p[83] + v[38] + d[43] + v[113] + v[108] + p[106] + v[7]](v[31] + p[42] + v[43] + d[118] + v[38] + p[71] + d[131] + p[91] + d[140] + d[108] + v[38] + p[133] + d[43] + d[42] + p[105] + v[142] + d[118] + v[43] + p[83]) || p[123] + p[137],
        x = location[v[56] + d[122] + v[108] + p[62] + d[140] + d[122] + d[114] + d[147]][v[7] + v[117] + p[96] + d[42] + d[142]](/\d+$/)[0],
        y = v[131] + p[19] + d[9] + p[33] + d[118] + p[91] + v[62] + d[35] + v[108] + d[117] + d[112] + p[19] + p[40] + v[21] + d[95] + d[53] + v[101] + v[38] + v[103] + v[21] + p[47] + p[105] + v[94] + v[38] + p[50] + v[117] + d[19] + d[112] + v[81] + d[9] + d[138] + p[112] + p[91] + v[62] + p[61] + v[108] + v[126] + v[131] + p[19] + d[10] + p[33] + p[125] + p[91] + v[101] + p[106] + d[31] + p[33] + v[44] + p[42] + p[71] + d[140] + v[38] + v[62] + p[50] + p[42];
    m = JSON[v[56] + p[42] + p[64] + v[9] + p[106]](m), m[v[142] + d[122] + p[47] + d[147] + d[10] + p[42] + p[6]] || (m[v[142] + d[122] + d[114] + p[106] + v[39] + p[42] + p[6]] = {});
    var W = [],
        g = !1;
    unsafeWindow[d[35] + p[106] + p[71] + p[38] + v[39] + d[147] + p[61] + p[61] + p[42] + v[11] + v[38]] = e;
    var S = [v[42], v[27] + d[48], d[52], d[75] + d[8], p[114]];
    unsafeWindow[d[43] + d[147] + p[61] + d[43] + p[67] + d[147] + d[140] + v[101] + d[53] + p[71] + p[83]] = e, r(d[147] + d[140] + p[96] + d[147] + p[64] + d[10] + d[147] + v[9] + p[61] + v[117] + p[83] + p[106], function (n) {
        if (0 === n[v[44] + d[31] + d[22] + d[12]][p[30]]) return !1;
        if (unsafeWindow[v[31] + p[105] + d[42] + p[42] + d[43] + p[91] + p[105] + p[71]][p[62] + d[144] + d[147] + v[114]][d[114] + d[122] + d[43] + v[104] + p[62]](p[18] + v[135] + p[119] + v[4] + d[134]) && unsafeWindow[p[104] + p[104] + v[41]][v[44] + p[42] + p[61] + d[147] + d[26] + p[71] + p[112] + p[105]][p[64] + v[103] + p[105] + d[114] + p[20] + d[22]][v[7] + d[122] + v[108] + v[104] + v[118]](v[1] + d[28] + d[148] + p[119] + p[68]) && b[d[63] + d[147] + v[31] + d[42] + v[103] + p[47] + v[38] + p[33] + p[96] + v[38] + d[20] + v[108]] && b[v[31] + p[106] + p[42] + d[35] + d[43] + v[21] + p[87] + v[38] + v[31] + v[104] + v[103] + p[47] + v[38] + p[33] + d[105] + p[106] + v[94] + d[147] + d[105]] && n[d[13] + v[103] + v[101] + p[97]][v[31]] > 1 * b[v[31] + v[38] + v[117] + p[61] + d[43] + p[33] + v[47] + d[147] + v[31] + p[133] + p[105] + v[7] + v[38] + p[33] + v[31] + p[106] + v[94] + v[38] + d[105]]) {
            var t = {
                    "[玩家名]": m[d[140] + p[42] + v[7] + v[38] + p[40] + v[117] + p[6]][n[v[44] + d[31] + p[38] + p[97]][d[53]]] || n[d[13] + d[31] + v[101] + p[97]][v[142]]
                },
                o = f(n[v[44] + d[31] + p[38] + p[97]][d[31] + p[47] + p[61]]);
            b[v[47] + v[38] + p[30] + p[133] + d[31] + p[47] + p[106] + v[21] + v[11] + v[71] + p[42] + p[64] + d[22] + d[138] + p[96] + p[106] + p[5] + p[96]] && (o[p[146] + d[30]] || o[p[148] + v[13]]) ? (946873441 == n[p[110] + d[31] + d[22] + d[12]][d[53]] && (t[v[90] + v[78]] = v[121] + d[143]), e(a(b[p[87] + d[147] + p[30] + v[104] + p[105] + d[114] + d[147] + v[21] + v[11] + p[22] + v[117] + p[64] + p[38] + p[33] + p[96] + v[38] + d[20] + v[108]], t))) : e(a(b[p[87] + d[147] + p[30] + v[104] + v[103] + p[47] + d[147] + d[138] + v[108] + p[106] + v[15] + p[96]], t))
        }
    });
    var O = [];
    setInterval(function () {
        O = O[p[112] + d[53] + v[31] + v[108] + p[106] + p[64]](function (n) {
            if (Date[d[140] + p[105] + d[63]]() - n[v[108] + d[53] + v[7] + d[147]] > 1500) {
                var t = {
                    "[玩家名]": m[v[142] + d[122] + d[114] + d[147] + v[39] + d[122] + d[129]][n[v[71] + p[91] + d[22]]] || n[p[71] + v[117] + d[114] + v[38]],
                    "[礼物数量]": n[p[133] + d[140] + d[43]],
                    "[礼物名称]": n[d[131] + p[91] + p[112] + p[96] + d[84] + d[122] + d[114] + v[38]]
                };
                return n[d[42] + v[142] + v[108]] * n[v[94] + p[42] + d[105] + d[46] + p[106]] > 1 * (b[v[31] + d[147] + v[117] + v[9] + p[96] + v[21] + v[108] + p[62] + d[20] + p[33] + d[118] + v[38] + d[147]] || 0) && e(a(b[d[131] + d[53] + d[118] + p[96] + p[33] + p[96] + p[106] + d[20] + v[108]], t)), !1
            }
            return !0
        })
    }, 200), r(v[9] + d[147] + p[71] + v[101] + p[70] + d[53] + v[114] + d[43], function (n) {
        if (unsafeWindow[p[30] + v[103] + p[133] + v[117] + d[43] + v[43] + v[103] + p[71]][p[62] + d[144] + p[106] + d[118]][p[47] + d[122] + d[43] + v[104] + d[142]](d[55] + d[28] + v[4] + p[119] + v[77]) && unsafeWindow[d[59] + d[59] + v[41]][d[13] + p[42] + p[61] + v[38] + d[26] + p[71] + p[112] + v[103]][p[64] + d[31] + p[105] + v[7] + v[113] + d[22]][p[47] + p[42] + p[96] + d[42] + v[118]](d[55] + v[135] + p[119] + v[4] + v[77]) && b[v[11] + v[43] + p[112] + p[96] + p[33] + d[43] + p[106] + v[15] + d[43]]) {
            var t = DDS[p[83] + d[53] + p[112] + v[108]][n[p[110] + v[103] + v[101] + p[97]][p[83]]];
            if (t[p[71] + v[117] + p[47] + d[147]] === v[28] + d[130] + d[64]) return;
            n[d[13] + v[103] + d[22] + p[97]][d[140]], n[p[110] + v[103] + p[38] + d[12]][d[49]], t[d[140] + d[122] + p[47] + v[38]];
            u(n[d[13] + p[105] + d[22] + v[35]][d[140]], n[v[44] + p[105] + p[38] + d[12]][d[53]], n[v[44] + v[103] + d[22] + d[12]][p[59]], t[d[140] + d[122] + d[114] + p[106]], t[p[125] + p[42] + p[30] + d[46] + p[106]])
        }
    }), r(p[133] + v[118] + v[117] + v[108] + d[10] + p[106] + d[35] + v[9] + d[122] + v[11] + p[106], function (n) {
        if (0 === n[p[110] + v[103] + p[38] + p[97]][p[30]]) return !1;
        n[p[110] + v[103] + p[38] + d[12]][d[31] + d[114] + d[35]][d[118] + p[105] + v[62] + d[24] + p[42] + p[133] + p[62]](function (n) {}), n[p[110] + v[103] + v[101] + p[97]][v[43]] == DDS[p[42] + p[71] + d[42] + d[142] + p[105] + p[64] + d[26] + p[71] + d[118] + v[103]][p[42] + p[71] + v[104] + d[142] + d[31] + p[64] + d[26] + v[101]] && n[v[44] + d[31] + d[22] + v[35]][p[47]] == d[77] && c(!0);
        var t = n[v[44] + p[105] + p[38] + v[35]][d[114]][p[96] + p[64] + d[53] + p[47]]();
        if ((t === v[130] + p[102] + d[116] + p[94] || t === v[130]) && (n[d[13] + d[31] + p[38] + v[35]][v[103] + v[7] + d[35]][v[31] + p[106] + d[140] + p[83] + d[43] + p[62]] && n[p[110] + p[105] + p[38] + v[35]][p[105] + d[114] + v[9]][0] > 123 || n[p[110] + d[31] + v[101] + d[12]][p[91]] == DDS[d[122] + v[142] + d[42] + p[62] + p[105] + v[62] + d[26] + v[142] + p[112] + p[105]][v[117] + d[140] + p[133] + p[62] + p[105] + v[62] + d[26] + v[101]]))
            if (D) {
                if (!D[p[30] + d[147] + d[140] + p[83] + d[43] + d[142]]) return void console[p[87] + d[122] + p[64] + d[140]](v[120] + d[81] + v[67] + p[3] + d[67] + v[136]);
                var o = D[Math[p[112] + d[105] + d[31] + v[103] + v[62]](Math[d[144] + v[117] + d[140] + p[38] + d[31] + v[7]]() * D[d[105] + d[147] + p[71] + d[131] + d[43] + d[142]])];
                e(n[p[110] + d[31] + v[101] + d[12]][p[71]][p[64] + v[38] + d[129] + d[105] + d[122] + d[42] + v[38]](/小三/g, v[57])[p[64] + v[38] + d[129] + d[105] + d[122] + p[133] + v[38]](/￡/g, "")[v[62] + p[106] + p[6] + v[31] + v[117] + v[104] + d[147]](/❤️|❥/g, "") + "随机到一首《" + o + "》")
            } else console[p[87] + v[117] + d[144] + p[71]](p[94] + p[93] + v[109] + p[147] + p[107] + v[91] + d[91] + d[136])
    }), unsafeWindow[d[36] + d[147] + v[44] + v[41] + v[103] + v[104] + v[55] + v[38] + p[96]] = function (n, t) {
        if (unsafeWindow[p[30] + d[31] + p[133] + d[122] + d[43] + p[91] + d[31] + v[142]][v[118] + v[62] + v[38] + p[112]][d[114] + d[122] + v[108] + d[42] + v[118]](v[1] + v[135] + d[148] + v[4] + d[134]) && unsafeWindow[v[10] + v[10] + p[67]][v[44] + p[42] + d[35] + v[38] + v[113] + p[71] + v[114] + v[103]][d[144] + p[105] + p[105] + p[47] + d[26] + v[101]][p[47] + d[122] + p[96] + p[133] + p[62]](p[18] + p[99] + v[4] + v[4] + p[68])) {
            var e = new h(n, t);
            unsafeWindow[d[63] + d[63] + d[63] + d[63] + v[47]] = e;
            var o;
            return Object[d[22] + p[106] + v[114] + p[91] + v[142] + v[38] + p[130] + p[64] + p[105] + v[56] + v[38] + p[64] + v[108] + d[12]](e, v[103] + p[71] + v[7] + v[38] + v[9] + d[35] + p[42] + d[131] + d[147], {
                get: function () {
                    return o
                },
                set: function (n) {
                    o = n
                }
            }), e[p[42] + p[38] + p[38] + v[61] + v[94] + p[106] + v[142] + p[96] + d[101] + d[53] + d[35] + d[43] + p[106] + p[71] + v[38] + v[62]](d[114] + v[38] + p[61] + d[35] + v[117] + p[83] + p[106], function (n) {
                if (n[v[101] + d[122] + p[96] + v[117]]) {
                    var t = n[p[38] + p[42] + p[96] + p[42]];
                    try {
                        var i = t[v[7] + v[117] + p[96] + p[133] + v[118]](/^\d:::/)[0];
                        t = t[d[144] + p[106] + v[56] + p[30] + p[42] + v[104] + p[106]](/^\d:::/, ""), t = JSON[p[6] + p[42] + v[62] + d[35] + d[147]](t);
                        var r = w[t[p[71] + p[42] + p[47] + p[106]]];
                        if (r) {
                            var a;
                            if (!1 === (a = r[v[117] + v[56] + d[129] + v[31] + p[97]]({}, t[p[42] + v[62] + v[11] + p[61]]))) return;
                            !0 === a || (void 0 === a ? "undefined" : s(a)) === p[105] + p[110] + p[127] + d[147] + d[42] + d[43] && (t[d[122] + p[64] + p[83] + v[9]] = a)
                        }
                        Object[d[22] + v[38] + d[118] + v[43] + p[71] + p[106] + v[2] + v[62] + v[103] + d[129] + p[106] + d[144] + d[43] + d[12]](n, d[22] + d[122] + d[43] + d[122], {
                            value: i + JSON[p[61] + d[43] + d[144] + v[43] + p[71] + p[83] + d[53] + d[118] + d[12]](t)
                        })
                    } catch (n) {}
                }
                o && o[v[104] + d[122] + v[31] + d[105]](e, n)
            }), e
        }
    };
    var k, D, N = setInterval(function () {
        function n() {
            var n = v,
                t = p,
                e = d,
                o = {};
            return w(n[43] + e[140] + n[56] + e[46] + n[108] + t[92] + t[96] + n[38] + e[20] + n[108] + e[122] + t[64] + n[38] + n[117])[n[38] + e[122] + t[133] + t[62]](function () {
                var i = l(this);
                o[i[n[117] + t[96] + t[96] + e[144]](t[91] + t[38])] = i[t[125] + e[122] + n[31]]()
            }), o
        }

        function t() {
            function n() {
                var n = p,
                    t = d,
                    o = v;
                e(r[a]), ++a === r[o[31] + t[147] + o[142] + n[83] + o[108] + n[62]] && (a = 0)
            }
            var t = p,
                o = d,
                i = v,
                r = b[t[30] + i[103] + o[31] + t[6] + t[33] + i[44] + t[64] + o[31] + i[117] + t[38] + i[104] + t[42] + o[35] + o[43]][i[9] + i[56] + i[31] + i[43] + t[96]](i[95]);
            if (r = r[t[112] + o[53] + t[30] + t[96] + t[106] + i[62]](function (n) {
                    return n[t[47] + o[122] + t[96] + t[133] + o[142]](/[\S]/)
                }), r[i[31] + i[38] + t[71] + o[131] + t[96] + i[118]]) {
                var a = 0;
                S && clearInterval(S), n(), S = setInterval(n, 3e4)
            }
        }

        function i() {
            var n = p,
                t = d,
                e = v;
            if (l(n[110] + t[31] + t[22] + t[12] + n[124] + t[112] + n[91] + e[142] + t[108] + n[106] + n[133] + n[96] + n[33] + t[114] + e[103] + t[22] + n[42] + t[105])[e[31] + t[147] + e[142] + e[11] + e[108] + e[118]]) return l(t[13] + t[31] + t[22] + t[12] + t[103] + n[26] + n[91] + e[142] + e[134] + e[38] + n[133] + t[43] + t[138] + t[114] + t[31] + n[38] + n[42] + t[105])[e[62] + e[38] + e[7] + t[31] + t[95] + t[147]](), !1;
            var i, r = l(this),
                a = r[n[38] + t[122] + e[108] + e[117]](n[71] + e[117] + n[47] + e[38]) || r[e[117] + n[96] + e[108] + n[64]](n[96] + e[43] + n[96] + t[105] + n[106]),
                u = r[e[101] + t[122] + t[43] + t[122]](t[53] + t[22]) || r[n[38] + t[122] + t[43] + t[122]](n[133] + t[122] + t[144] + t[22] + t[53] + e[101]);
            r[n[38] + t[122] + n[96] + n[42]](t[42] + n[42] + e[62] + n[38] + n[91] + e[101]) ? i = n[61] + e[118] + e[103] + e[71] + n[62] + t[46] : r[t[22] + t[122] + e[108] + e[117]](n[71] + t[122] + t[114] + e[38]) && (i = n[133] + t[142] + t[122] + t[43]);
            var c = l(e[16] + n[38] + e[43] + n[125] + e[126] + e[104] + t[105] + e[117] + t[35] + t[35] + n[129] + e[125] + n[91] + n[71] + t[108] + t[147] + n[133] + t[43] + n[33] + e[7] + e[103] + n[38] + t[122] + t[105] + t[90] + t[117] + n[61] + n[96] + e[35] + n[30] + e[38] + e[3] + e[125] + e[56] + n[105] + n[61] + e[43] + t[43] + n[91] + e[103] + n[71] + n[75] + e[114] + t[53] + t[20] + e[38] + e[101] + e[63] + e[31] + n[106] + e[114] + t[43] + e[0] + n[85] + t[78] + n[64] + t[53] + n[83] + e[118] + e[108] + n[75] + n[85] + n[55] + t[43] + n[105] + e[56] + t[133] + t[39] + e[63] + e[44] + e[103] + e[108] + n[96] + t[31] + t[114] + t[133] + t[39] + e[63] + e[7] + n[42] + t[144] + n[83] + t[53] + n[71] + e[0] + n[42] + e[71] + t[43] + n[105] + e[63] + e[44] + t[122] + t[42] + n[21] + n[83] + n[64] + e[103] + n[22] + t[140] + n[38] + e[0] + t[117] + n[66] + e[18] + t[22] + e[18] + e[44] + n[81] + e[144] + e[63] + e[104] + n[105] + t[105] + t[31] + n[64] + n[75] + n[87] + n[62] + t[53] + e[108] + e[38] + t[78] + t[142] + e[38] + n[91] + t[131] + e[118] + n[96] + e[0] + e[126] + n[81] + e[115] + e[56] + n[5] + n[55] + e[47] + e[43] + n[38] + e[108] + e[118] + n[75] + t[117] + e[18] + e[115] + t[39] + e[56] + e[15] + e[63] + t[2] + t[138] + e[43] + t[140] + e[101] + n[106] + t[20] + n[75] + n[60] + t[39] + n[85] + t[39] + n[55] + t[90] + n[124] + n[95] + e[43] + e[142] + e[56] + e[71] + n[96] + t[117] + e[56] + n[30] + e[117] + t[42] + e[38] + t[142] + e[103] + t[105] + t[22] + e[38] + e[62] + t[121] + t[90] + a + (e[125] + n[50] + e[9] + e[108] + e[35] + t[105] + n[106] + e[3] + e[125] + e[44] + n[42] + t[42] + t[17] + e[11] + e[62] + t[31] + e[71] + n[71] + t[22] + n[33] + e[104] + e[103] + t[105] + e[103] + e[62] + e[0] + t[63] + e[118] + t[53] + e[108] + n[106] + n[55] + n[31] + t[103] + t[141] + e[138] + t[22] + t[53] + n[125] + t[103]));
            return setTimeout(function () {
                c[e[114] + n[91] + n[71] + n[38]](e[43] + e[142] + t[129] + e[71] + e[108])[n[112] + t[31] + n[133] + n[22] + t[35]]()
            }), c[e[114] + n[91] + t[140] + t[22]](t[53] + e[142] + t[129] + n[22] + t[43])[n[105] + n[71]](t[17] + e[38] + e[35] + n[6] + n[64] + e[38] + t[35] + e[9], function (f) {
                if (13 === f[n[21] + n[106] + e[35] + t[65] + e[103] + e[101] + e[38]]) {
                    l(e[44] + e[103] + n[38] + t[12] + t[103] + n[26] + e[43] + t[140] + e[134] + n[106] + t[42] + t[43] + t[138] + e[7] + t[31] + n[38] + t[122] + n[30])[t[144] + t[147] + n[47] + n[105] + n[125] + e[38]]();
                    c[n[112] + t[53] + n[71] + e[101]](n[91] + n[71] + e[56] + e[71] + t[43])[t[95] + e[117] + e[31]]() ? (m[e[142] + e[117] + n[47] + t[147] + t[10] + n[42] + t[129]][u] = c[t[118] + n[91] + n[71] + t[22]](t[53] + t[140] + e[56] + e[71] + e[108])[n[125] + t[122] + t[105]](), o()) : (delete m[e[142] + n[42] + t[114] + e[38] + n[40] + n[42] + n[6]][u], o()), i === e[9] + n[62] + e[103] + n[22] + n[62] + n[22] ? m[t[140] + e[117] + n[47] + n[106] + e[39] + t[122] + n[6]][u] ? r[n[96] + t[147] + e[15] + e[108]](m[t[140] + n[42] + e[7] + t[147] + n[40] + n[42] + t[129]][u]) : r[t[43] + e[38] + t[20] + n[96]](a) : i === t[42] + n[62] + t[122] + n[96] && (m[n[71] + t[122] + e[7] + t[147] + n[40] + t[122] + t[129]][u] ? r[e[108] + e[38] + e[15] + t[43]](m[t[140] + e[117] + e[7] + t[147] + e[39] + n[42] + e[56]][u] + t[56] + a + n[57]) : r[n[96] + e[38] + t[20] + e[108]](a))
                }
            }), l(t[13] + e[103] + e[101] + n[97])[t[122] + e[56] + e[56] + e[38] + n[71] + n[38]](c), !1
        }

        function r() {
            var n = v,
                t = p,
                e = d;
            l(t[26] + t[40] + n[141] + e[138] + t[83] + e[46] + n[117] + n[62] + t[38] + n[21] + n[104] + t[105] + t[71] + e[43] + t[42] + n[43] + e[140] + n[38] + n[62])[t[112] + t[91] + t[71] + n[101]](e[112] + t[71] + n[117] + e[114] + t[106])[n[38] + e[122] + n[104] + n[118]](function () {
                var o = l(this);
                o[e[43] + e[147] + e[20] + t[96]](m[n[142] + t[42] + t[47] + t[106] + t[40] + n[117] + t[6]][o[e[22] + n[117] + e[43] + e[122]](t[133] + n[117] + n[62] + t[38] + t[91] + t[38])])
            })
        }

        function a() {
            var n = p,
                t = v,
                e = d;
            l[n[83] + t[38] + e[43]](e[21], function (o) {
                var i = [];
                l(o)[e[118] + e[53] + n[71] + e[22]](y)[n[106] + e[122] + e[42] + e[142]](function () {
                    i[e[129] + t[71] + n[61] + t[118]](l(this)[t[117] + t[108] + e[43] + n[64]](t[118] + t[62] + e[147] + e[118]))
                }), i = JSON[n[61] + e[43] + n[64] + n[91] + t[142] + n[83] + n[91] + t[114] + e[12]](i), I ? I !== i && (clearInterval(z), setTimeout(function () {
                    c(), setInterval(c, 12e4)
                }, 3e3)) : I = i
            })
        }
        if (unsafeWindow[d[105] + d[31] + v[104] + p[42] + d[43] + p[91] + d[31] + d[140]][v[118] + d[144] + d[147] + d[118]][p[47] + d[122] + p[96] + v[104] + d[142]](v[1] + v[135] + d[148] + v[4] + p[68]) && unsafeWindow[p[104] + d[59] + p[67]][d[13] + d[122] + v[9] + v[38] + d[26] + d[140] + v[114] + v[103]][p[64] + v[103] + v[103] + p[47] + v[113] + v[101]][d[114] + v[117] + p[96] + v[104] + v[118]](d[55] + p[99] + v[4] + v[4] + p[68]) && unsafeWindow[v[134] + d[100] + v[71] + d[147] + d[144] + p[97]]) {
            l = unsafeWindow[d[108] + d[100] + v[71] + v[38] + v[62] + v[35]];
            var u = l(d[33] + d[101] + d[61] + v[21] + v[104] + d[142] + v[117] + p[96] + v[21] + v[7] + v[9] + p[83] + p[33] + d[122] + d[144] + d[147] + d[122] + p[50] + p[26] + d[13] + v[103] + v[117] + v[62] + d[22] + d[147] + p[64] + d[103] + v[71] + v[31])[0];
            if (u && l(p[26] + d[10] + v[141] + p[33] + p[83] + v[71] + v[117] + v[62] + d[22] + d[138] + d[42] + p[105] + v[142] + d[43] + v[117] + p[91] + d[140] + p[106] + v[62])[p[112] + v[43] + d[140] + v[101]](v[131] + d[140] + v[117] + p[47] + v[38])[v[31] + v[38] + p[71] + d[131] + p[96] + d[142]]) {
                clearInterval(N);
                var f = l(p[95] + v[44] + v[71] + d[43] + v[108] + d[31] + v[142] + p[124] + v[24] + v[75] + p[84] + d[58] + d[141] + v[138] + v[44] + v[71] + d[43] + p[96] + p[105] + p[71] + v[107]),
                    s = l(v[16] + p[110] + d[46] + v[108] + d[43] + d[31] + p[71] + d[103] + v[24] + v[23] + d[60] + p[80] + p[95] + d[21] + d[13] + v[71] + v[108] + p[96] + v[103] + d[140] + v[107]);
                if (f[p[133] + d[105] + v[43] + p[133] + d[17]](function () {
                        prompt(d[73] + v[102] + v[148] + p[145] + d[38], JSON[p[61] + d[43] + v[62] + p[91] + d[140] + v[11] + p[91] + p[112] + v[35]](m))
                    }), s[p[133] + d[105] + d[53] + v[104] + p[21]](function () {
                        var n = prompt(p[24] + d[98] + d[60] + d[58]);
                        n && (m = JSON[d[129] + p[42] + d[144] + d[35] + v[38]](n))
                    }), l(d[112] + d[10] + v[141] + p[33] + d[43] + p[42] + v[9] + p[21] + d[138] + v[104] + d[31] + v[142] + d[43] + p[42] + d[53] + v[142] + d[147] + p[64])[p[42] + v[56] + v[56] + v[38] + p[71] + p[38]](f)[v[117] + v[56] + d[129] + d[147] + v[142] + v[101]](s), unsafeWindow[v[31] + p[105] + d[42] + p[42] + v[108] + d[53] + v[103] + d[140]][v[118] + p[64] + v[38] + p[112]][d[114] + v[117] + d[43] + v[104] + v[118]](d[55] + d[28] + d[148] + p[119] + p[68]) && unsafeWindow[d[59] + v[10] + v[41]][p[110] + v[117] + p[61] + v[38] + d[26] + d[140] + d[118] + v[103]][v[62] + p[105] + v[103] + d[114] + v[113] + p[38]][p[47] + v[117] + d[43] + d[42] + p[62]](p[18] + v[135] + p[119] + d[148] + v[77])) {
                    l(v[103] + v[44] + d[108] + d[147] + p[133] + p[96])[v[62] + d[147] + d[114] + p[105] + v[94] + d[147]]();
                    var h = l('\n<div class="control-panel" style=\'\'>\n        <style>\n.control-panel{\n    position:fixed;\n    left: 70px;\n    width:30%;\n    top: 0;\n    bottom: 0;\n    z-index:1000;\n    background-color:#eee;\n    color:#333;\n    font-size:15px;\n    padding-left:25px;\n    padding-top:25px;\n    overflow:auto;\n}\n.control-panel input{\n    margin-bottom:10px;\n    width:80%;\n}\n.control-panel input[type="number"]{\n    width:130px;\n    text-align:center;\n}\n.control-panel textarea{\n    width:80%;\n    height:300px;\n}\n.control-panel h3{\n    margin-bottom:8px;\n}\n.control-panel button{\n    width: 100px;\n    right: 0;\n    background: #eb3d77;\n    display: block;        \n    height: 54px;\n    line-height: 34px;\n    border-radius: 5px;\n    color: #fff;\n    font-size: 12px;\n    text-align: center;\n    border: none;\n    text-decoration: none;\n    cursor: pointer;\n    font-size:20px;\n}\n.control-panel button:active{\n    opacity:0.5;\n}\n        </style>\n        <h3 style="font-size:20px;color:black;">欢迎语</h3>\n        <label>最低欢迎等级</label>\n<br/>\n        <input type="number" id="least-welcome-level">\n<br/>\n        <label>欢迎语</label>\n<br/>\n        <input type="text" id="welcome-text" placeholder="不填就不欢迎">\n<br/>\n        <label>守护专属欢迎</label>\n<br/>\n        <input type="text" id="welcome-guard-text" placeholder="不填就用普通欢迎语">\n<br/>\n<br/>\n        <h3 style="font-size:20px;color:black;">送礼回谢</h3>\n        <label>最低消费</label>\n<br/>\n        <input type="number" id="least-thx-fee">\n<br/>\n        <label>几秒内同礼物同玩家不回谢</label>\n<br/>\n        <input type="number" id="thx-cooldown" placeholder="不填就都会回谢">\n<br/>\n        <label>回谢语</label>\n<br/>\n        <input type="text" id="gift-text" placeholder="不填就不回谢">\n<br/>\n        <h3 style="font-size:20px;color:black;">循环喊话</h3>\n        <textarea id="loop-broadcast"></textarea>\n        <button class="submit">确定</button>\n</div>\n'),
                        w = h[d[118] + v[43] + d[140] + d[22]][d[13] + d[53] + v[142] + p[38]](h);
                    l(v[44] + d[31] + d[22] + d[12])[v[117] + d[129] + p[6] + d[147] + p[71] + v[101]](h);
                    var x = n(),
                        W = localStorage[p[83] + v[38] + v[108] + v[113] + d[43] + p[106] + v[7]](p[110] + d[105] + v[117] + p[133] + v[55] + p[47] + p[91] + v[117] + v[103] + p[105] + v[31]);
                    W && (x = JSON[v[56] + p[42] + d[144] + v[9] + d[147]](W), function () {
                        var n = p,
                            t = v;
                        for (var e in x) w(n[66] + e)[n[125] + t[117] + n[30]](x[e])
                    }()), b = x, console[p[30] + v[103] + d[131]](p[22] + d[35] + d[53] + v[142] + d[131] + p[17] + d[122] + v[31] + v[71] + d[147], b), w(v[43] + v[142] + p[6] + d[46] + d[43] + d[19] + p[96] + v[38] + p[5] + p[96] + p[42] + v[62] + v[38] + v[117])[v[38] + p[42] + p[133] + p[62]](function () {
                        l(this)[d[31] + d[140]](d[17] + p[106] + p[97] + d[22] + v[103] + v[47] + d[140], function () {
                            setTimeout(function () {
                                x = n()
                            })
                        })
                    });
                    var g = w(v[131] + d[35] + d[46] + p[110] + d[114] + p[91] + p[96]),
                        S = void 0;
                    if (g[v[104] + v[31] + v[43] + p[133] + v[55]](function () {
                            x = n(), localStorage[v[9] + v[38] + v[108] + d[26] + v[108] + p[106] + v[7]](p[110] + d[105] + v[117] + v[104] + p[21] + d[114] + p[91] + v[117] + p[105] + v[103] + p[30], JSON[v[9] + d[43] + p[64] + v[43] + d[140] + v[11] + v[43] + d[118] + p[97]](x)), b = x, t()
                        }), t(), unsafeWindow[p[30] + d[31] + v[104] + p[42] + v[108] + d[53] + d[31] + d[140]][d[142] + v[62] + v[38] + d[118]][d[114] + v[117] + p[96] + p[133] + p[62]](p[18] + d[28] + v[4] + v[4] + d[134]) && unsafeWindow[v[10] + d[59] + v[41]][d[13] + p[42] + v[9] + v[38] + d[26] + p[71] + d[118] + d[31]][d[144] + v[103] + p[105] + v[7] + d[26] + p[38]][d[114] + p[42] + d[43] + d[42] + d[142]](p[18] + v[135] + d[148] + d[148] + v[77])) {
                        l[v[11] + d[147] + p[96]](v[138], function (n) {
                            if (unsafeWindow[d[105] + p[105] + v[104] + v[117] + p[96] + d[53] + p[105] + p[71]][p[62] + d[144] + p[106] + p[112]][d[114] + v[117] + v[108] + v[104] + p[62]](v[1] + v[135] + v[4] + d[148] + v[77]) && unsafeWindow[v[10] + p[104] + p[67]][d[13] + v[117] + d[35] + p[106] + p[20] + v[142] + d[118] + v[103]][p[64] + p[105] + p[105] + v[7] + d[26] + v[101]][p[47] + d[122] + p[96] + d[42] + d[142]](v[1] + p[99] + d[148] + v[4] + d[134])) {
                                var t = {},
                                    e = 0;
                                l(n)[d[118] + v[43] + p[71] + v[101]](y)[p[106] + v[117] + p[133] + d[142]](function (n, o) {
                                    e++;
                                    var i = l(this)[d[122] + v[108] + d[43] + p[64]](d[142] + d[144] + p[106] + p[112]),
                                        r = i[d[114] + v[117] + p[96] + d[42] + v[118]](/\d+$/)[0];
                                    l[d[131] + d[147] + v[108]]("/room/" + r + "/song/status?roomId=" + r, function (n) {
                                        n[p[64] + p[106] + d[35] + v[56] + p[105] + v[142] + p[61] + p[106]][d[22] + p[42] + v[108] + p[42]][d[35] + d[31] + p[71] + v[11] + v[52] + d[53] + v[9] + v[108]][d[118] + d[31] + p[64] + d[24] + d[122] + p[133] + p[62]](function (n) {
                                            n[p[71] + v[117] + p[47] + v[38]] = n[v[142] + d[122] + d[114] + p[106]][v[62] + v[38] + d[129] + p[30] + d[122] + v[104] + d[147]](v[58], ""), n[v[142] + d[122] + p[47] + p[106]] = n[v[142] + v[117] + d[114] + p[106]][v[62] + v[38] + v[56] + d[105] + p[42] + d[42] + d[147]](d[97], ""), -1 === n[d[140] + d[122] + d[114] + v[38]][d[53] + d[140] + v[101] + d[147] + v[15] + p[131] + v[114]](d[3] + d[115]) && -1 === n[v[142] + p[42] + v[7] + v[38]][v[43] + v[142] + p[38] + p[106] + v[15] + v[127] + p[112]](p[32] + d[74]) && -1 === n[d[140] + p[42] + d[114] + p[106]][d[53] + v[142] + v[101] + v[38] + d[20] + d[7] + v[114]](v[45] + v[120]) && -1 === n[d[140] + p[42] + d[114] + v[38]][v[43] + d[140] + d[22] + v[38] + v[15] + v[127] + d[118]](d[68] + v[6]) && (t[n[d[140] + d[122] + d[114] + p[106]]] ? t[n[p[71] + v[117] + v[7] + v[38]]]++ : t[n[d[140] + v[117] + p[47] + d[147]]] = 1)
                                        }), 0 === --e && (D = [], Object[v[55] + p[106] + v[35] + v[9]](t)[p[112] + v[103] + p[64] + v[61] + d[122] + d[42] + d[142]](function (n) {
                                            D[p[6] + v[71] + v[9] + v[118]]({
                                                n: n,
                                                i: t[n]
                                            })
                                        }), D = D[p[61] + d[31] + p[64] + p[96]](function (n, t) {
                                            return n[p[91]] > t[d[53]] ? 1 : -1
                                        })[v[7] + d[122] + p[6]](function (n) {
                                            return n[p[71]]
                                        }))
                                    })
                                })
                            }
                        }), r(), setTimeout(r, 500), setTimeout(r, 1500), l(d[112] + p[40] + v[141] + p[33] + p[83] + v[71] + p[42] + d[144] + v[101] + p[33] + d[42] + p[105] + p[71] + d[43] + d[122] + d[53] + d[140] + p[106] + p[64])[d[31] + d[140]](v[104] + v[103] + d[140] + p[96] + d[147] + p[5] + d[43] + p[47] + p[106] + p[71] + d[46], v[131] + p[71] + d[122] + p[47] + v[38], i);
                        var O = new MutationObserver(function (n) {
                            n[v[114] + p[105] + v[62] + p[138] + p[42] + v[104] + v[118]](function (n) {
                                n[v[108] + v[35] + d[129] + v[38]] === v[104] + v[118] + v[43] + d[105] + v[101] + p[116] + v[43] + p[61] + v[108] && n[d[122] + p[38] + p[38] + p[106] + p[38] + v[37] + v[103] + p[38] + d[147] + p[61]][p[112] + p[105] + v[62] + p[138] + p[42] + d[42] + d[142]](function (n) {
                                    var t = l(n);
                                    t[p[112] + v[43] + v[142] + v[101]](p[26] + d[46] + v[9] + d[147] + v[62] + v[21] + p[71] + p[42] + d[114] + v[38])[v[38] + v[117] + v[104] + d[142]](function () {
                                        var n = l(this),
                                            t = n[d[22] + d[122] + p[96] + p[42]](d[53] + p[38]);
                                        m[d[140] + p[42] + p[47] + v[38] + d[10] + d[122] + v[56]][t] && n[v[108] + p[106] + d[20] + d[43]](m[p[71] + v[117] + p[47] + d[147] + v[39] + p[42] + d[129]][t] + p[89] + n[p[96] + d[147] + d[20] + d[43]]() + p[57])
                                    }), t[v[114] + v[43] + d[140] + p[38]](v[131] + d[46] + v[9] + p[106] + d[144] + d[138] + d[140] + v[117] + p[47] + p[106])[v[103] + d[140]](v[104] + d[31] + p[71] + d[43] + p[106] + v[15] + p[96] + d[114] + d[147] + d[140] + d[46], i)
                                })
                            })
                        });
                        if (unsafeWindow[d[105] + v[103] + d[42] + v[117] + d[43] + p[91] + d[31] + d[140]][d[142] + p[64] + d[147] + v[114]][d[114] + p[42] + p[96] + d[42] + d[142]](p[18] + d[28] + d[148] + v[4] + d[134]) && unsafeWindow[p[104] + p[104] + d[9]][d[13] + v[117] + p[61] + d[147] + d[26] + v[142] + v[114] + d[31]][p[64] + d[31] + d[31] + p[47] + d[26] + p[38]][v[7] + d[122] + v[108] + v[104] + v[118]](v[1] + v[135] + v[4] + v[4] + v[77])) {
                            var k = {
                                attributes: !0,
                                childList: !0,
                                characterData: !0
                            };
                            O[d[31] + v[44] + p[61] + v[38] + d[144] + v[94] + v[38]](u, k), c();
                            var I;
                            a();
                            var z = setInterval(a, 1e4)
                        }
                    }
                }
            }
        }
    }, 300)
}();