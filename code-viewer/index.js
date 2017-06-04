// Here inject gulpConfig veriable
(function () {
    const config = {
        baseUrl: '.',
        paths: {
            'jQuery': '../js/jquery.min',
        },
        shim: {}
    };

    function parseURL(url) {
        const a = document.createElement('a');
        a.href = url || location.href;
        const ret = {
            source: url,
            protocol: a.protocol.replace(':', ''),
            host: a.hostname,
            port: a.port,
            query: a.search,
            params: (function () {
                const params = {};
                const seg = a.search.replace(/^\?/, '').split('&');
                const len = seg.length;
                let i = 0;
                let s;
                for (; i < len; i++) {
                    if (!seg[i]) {
                        continue;
                    }
                    s = seg[i].split('=');
                    params[s[0]] = s[1];
                }
                return params;
            }()),
            file: (a.pathname.match(/\/([^\/?#]+)$/i) || ['', ''])[1],
            hash: a.hash.replace('#', ''),
            path: a.pathname.replace(/^([^\/])/, '/$1'),
            relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || ['', ''])[1],
            segments: a.pathname.replace(/^\//, '').split('/'),
        };
        return ret;
    }
    const params = parseURL().params;
    console.log(params)
    if (!params.lang) {
        alert("缺少lang参数");
    }
    if (!params.url) {
        alert("缺少url参数");
    }
    const langMap = {
        js: "javascript",
    }

    const lang = langMap[params.lang] || params.lang;
    config[lang] = {
        deps: ["codemirror"]
    };

    //    config.paths[lang]=`codemirror/mode/${lang}\/${lang}`;
    requirejs.config(config);
    require(['./codemirror/lib/codemirror', 'jQuery', `./codemirror/mode/${lang}\/${lang}`], function (CodeMirror) {
        const doc = CodeMirror.fromTextArea($("#area")[0], {
            lineNumbers: true,
            mode: lang
        });
        const getCode = new Promise(function (resolve, reject) {
            $.get(decodeURIComponent(params.url), function (code) {
                resolve(code);
            });
        });
        getCode.then(function (code) {
            doc.setValue(code);
        });
    });
}());