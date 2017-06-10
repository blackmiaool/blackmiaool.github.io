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
    let mode = "url";

    if (params.mode) {
        mode = params.mode;
    }

    if (mode === 'url') {
        if (!params.url) {
            alert("need a 'url' param in the url");
            return;
        }
    }

    const langMap = {
        js: "javascript",
    }

    const lang = langMap[params.lang] || params.lang;
    config[lang] = {
        deps: ["codemirror"]
    };

    requirejs.config(config);

    let requireArr = ['./codemirror/lib/codemirror', `./codemirror/mode/${lang}\/${lang}`];
    switch (mode) {
        case "url":
            requireArr.push('jQuery');
            break;
    }
    let doc;

    require(requireArr, function (CodeMirror) {
        function initEditor() {
            doc = CodeMirror.fromTextArea(document.querySelector("#area"), {
                lineNumbers: true,
                mode: lang
            });
        }
        switch (mode) {
            case "url":
                const getCode = new Promise(function (resolve, reject) {
                    $.get(decodeURIComponent(params.url), function (code) {
                        resolve(code);
                    });
                });
                getCode.then(function (code) {
                    initEditor();
                    doc.setValue(code);
                });
                break;
            case "postmessage":
                initEditor();
                window.addEventListener('message', function (e) {
                    const msg = e.data;
                    switch (msg.action) {
                        case 'setValue':
                            doc.setValue(msg.data);
                            break;
                    }
                });
                doc.on("change", (editor) => {
                    const data = editor.getValue();                    
                    window.parent.postMessage({
                        action: "change",
                        data
                    }, "*");  
                });
                window.parent.postMessage({
                    action: "ready",
                }, "*");                
                break;
        }
    });
}());