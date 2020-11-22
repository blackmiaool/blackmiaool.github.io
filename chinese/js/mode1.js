// prettier-ignore
const noun1 = ["你", "我", "他", "它", "她", "俺", "自己", "老纸", "偶", "咱", "这个", "那个", "这些", "那些", "大家", "大伙", "动物", "人们", "那人", "别人"];
// prettier-ignore
const adv1 = ["很", "颇", "极为", "十分", "有点", "勉强", "确实", "也挺", "超级", "非常", "特别", "稍微", "还算", "不太", "并不", "绝不", "绝逼", "也算", "的确", "可别", "莫要", "怎能", "不要", "还挺", "算是", "也算", "还挺", "真是", "总是", "极其"];
// prettier-ignore
const adj1 = ["伟大", "勇敢", "坚强", "温柔",  "含糊", "优秀", "聪明", "年轻", "生动",  "平等", "主观", "主动",  "具体", "含蓄", "平淡", "简单", "干净"];
// prettier-ignore
const ends = [
    "啊！","阿；","呀！","吗？","嘿。","吧？","喽？","哟！","哦。","嗯。","呗。","了。","对吗？","是吗？","对吧？","是吧？"
];
function searchText(arr, text) {
    let index;
    let len;
    arr.some((word, i) => {
        if (text.startsWith(word)) {
            index = i;
            len = word.length;
            return true;
        }
    });
    return {
        index,
        len
    };
}
const words = [noun1, adv1, adj1, ends];
function encryptPut(bit8) {
    return encrypt_put_4(parseInt(bit8 / 16)) + encrypt_put_4(bit8 % 16);
}

// function encryptPut(bit8) {
//     return encrypt_put_4(parseInt(bit8 / 16)) + encrypt_put_4(bit8 % 16);
// }

function encryptPut4(index) {
    console.log(index);
    var output = "";
    switch (en_index) {
        case 0:
            output += noun1[index];
            break;
        case 1:
            output += adv1[index];
            break;
        case 2:
            output += adj1[index];
            output += "。";
            break;
    }
    en_index++;
    if (en_index == 3) {
        en_index = 0;
    }
    return output;
}
const mode = {
    min: 1,
    withPunctuation: true,
    check(text) {
        return noun1.some(v => {
            return text.startsWith(v);
        });
    },
    encode(raw) {
        const code = raw.charCodeAt(0);
        const text =
            words[0][Math.floor(Math.floor(code / 256) / 16)] +
            words[1][Math.floor(Math.floor(code / 256) % 16)] +
            words[2][Math.floor((code % 256) / 16)] +
            words[3][Math.floor((code % 256) % 16)];
        return {
            len: 1,
            text
        };
        // var output = "";
        // en_index = 0;
        // text = text.replace(/\n/g, "");
        // for (var i in text) {
        //     code = text.charCodeAt(i);
        //     console.log("code", code);
        //     output += encrypt_put(parseInt(code / 256));
        //     output += encrypt_put(code % 256);
        // }
        // return output;

        // return encryptPut4(parseInt(bit8 / 16)) + encryptPut4(bit8 % 16);
    },
    decode(text) {        
        let encodeIndex = 0;
        let decodeIndex = 0;
        let resultStr = "";
        var decodeArr = [];

        let pos = 0;
        do {
            const { len, index } = searchText(words[encodeIndex], text.slice(pos));            
            encodeIndex++;
            decodeArr[decodeIndex++] = index;

            if (encodeIndex == 4) {
                encodeIndex = 0;
            }
            pos += len;
            if (decodeIndex == 4) {
                decodeIndex = 0;
                var ch = 0;
                for (var i = 0; i < 4; i++) {
                    ch += decodeArr[i] * Math.pow(16, 3 - i);
                }
                
                resultStr += String.fromCharCode(ch);
            }
        } while (pos < text.length);        
        return resultStr;
    }
};
window.modes.push(mode);
