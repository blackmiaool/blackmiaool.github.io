var noun1 = ["你", "我", "他", "它", "她", "俺", "自己", "你们", "我们", "咱们", "她们", "他们", "它们", "俺们", "大家", "大伙"];
var weiyu1 = [""];
var adv1 = ["很", "颇", "极", "十分", "有点", "勉强", "确实", "挺", "超级", "非常", "特别", "稍微", "还算", "不太", "并不", "绝不", "绝逼"];
var adj1 = ["伟大", "勇敢", "坚强", "温柔", "崎岖", "含糊", "磅礴", "优秀", "聪明", "年轻", "生动", "固定", "平等", "主观", "主动", "封建", "具体", "含蓄", "平淡", "简单", "干净"];
console.log(noun1.length)
console.log(adv1.length)
console.log(adj1.length)

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
    ToUnicode: function(str) {
        return escape(str).toLocaleLowerCase().replace(/%u/gi, '\\u');
    },
    ToGB2312: function(str) {
        return unescape(str.replace(/\\u/gi, '%u'));
    }
};
var en_index = 0;

function encrypt_put(bit8) {
    encrypt_put_4(parseInt(bit8 / 16))
    encrypt_put_4(bit8 % 16)
}

function encrypt_put_4(index) {
    console.log(index)
    switch (en_index) {
        case 0:
            put(noun1[index])
            break;
        case 1:
            put(adv1[index])
            break;
        case 2:
            put(adj1[index])
            put("。")
            break;
    }
    en_index++;
    if (en_index == 3) {
        en_index = 0;
    }
}

function text_handle() {
    var data = $("#input").val();

    for (var i in data) {
        code = data.charCodeAt(i)
        if (code > 255) {
            encrypt_put(parseInt(code/256))

        }
        encrypt_put(code%256)
        // console.log(code)
    }


    // console.log(data)

}
rput(noun1)
rput(adv1)
rput(adj1)
put("。")
