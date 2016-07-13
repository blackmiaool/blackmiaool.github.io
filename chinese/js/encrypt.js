var noun1 = ["你", "我", "他", "它", "她", "俺", "自己", "老纸", "偶", "咱", "这个", "那个", "这些", "那些", "大家", "大伙", "动物", "人们", "那人", "别人"];
var weiyu1 = [""];
var adv1 = ["很", "颇", "极为", "十分", "有点", "勉强", "确实", "也挺", "超级", "非常", "特别", "稍微", "还算", "不太", "并不", "绝不", "绝逼", "也算", "的确", "可别", "莫要", "怎能", "不要", "还挺", "算是", "也算", "还挺", "真是", "总是", "极其"];
var adj1 = ["伟大", "勇敢", "坚强", "温柔", "崎岖", "含糊", "磅礴", "优秀", "聪明", "年轻", "生动", "固定", "平等", "主观", "主动", "封建", "具体", "含蓄", "平淡", "简单", "干净"];
console.log("l1", noun1.length)
console.log("l2", adv1.length)
console.log("l3", adj1.length)

function put(data) {
    $("#output").text($("#output").text() + data)
}

function random(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}

function rput(array)　　 {
    put(array[random(0, array.length - 1)])
}
var GB2312UnicodeConverter = {
    ToUnicode: function (str) {
        return escape(str).toLocaleLowerCase().replace(/%u/gi, '\\u');
    },
    ToGB2312: function (str) {
        return unescape(str.replace(/\\u/gi, '%u'));
    }
};
var en_index = 0;

function encrypt_put(bit8) {
    return encrypt_put_4(parseInt(bit8 / 16)) + encrypt_put_4(bit8 % 16);

}

function encrypt_put_4(index) {
    console.log(index)
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


function searchText(arr, text, pos) {
    console.log(text[pos], arr)
    var index = arr.indexOf(text[pos]);
    var len = 0;
    if (index == -1) {
        index = arr.indexOf(text[pos] + text[pos + 1]);
        len = 2;
    } else {
        len = 1;
    }
    return {
        index: index,
        len: len
    };
}

function decodeText(text) {
    text = text.replace(/。/g, "");
    console.log(text);
    var pos = 0;
    var encodeIndex = 0;
    var decodeIndex = 0;
    var resultStr = "";
    var decodeArr = [];
    do {


        var result;
        switch (encodeIndex) {
        case 0:
            result = searchText(noun1, text, pos);
            break;
        case 1:
            result = searchText(adv1, text, pos);
            break;
        case 2:
            result = searchText(adj1, text, pos);
            break;
        }
        encodeIndex++;
        decodeArr[decodeIndex++] = result.index;

        if (encodeIndex == 3) {
            encodeIndex = 0;
        }
        pos += result.len;
        console.log(result.index);
        if (decodeIndex == 4) {
            decodeIndex = 0;
            var ch = 0;
            for (var i = 0; i < 4; i++) {
                ch += decodeArr[i] * Math.pow(16, 3 - i);
            }
            console.log(ch, String.fromCharCode(ch))
            resultStr += String.fromCharCode(ch);
        }
    } while (pos < text.length)
    return resultStr;

}

function decode() {
    $("#output").empty();
    $("#output").text(decodeText($("#input").val()));
}

function encodeText(text) {
    var output = "";
    text=text.replace(/\n/g,"");
    for (var i in text) {
        code = text.charCodeAt(i)
        console.log("code", code)
        output += encrypt_put(parseInt(code / 256))
        output += encrypt_put(code % 256)
    }
    return output;
}

function encode() {
    $("#output").empty();
    $("#output").text(encodeText($("#input").val()));

}
