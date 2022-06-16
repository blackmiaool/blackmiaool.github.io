const noun1 = [
  "冰种",
  "玻璃种",
  "豆种",
  "龙石种",
  "冰糯",
  "豆糯",
  "金丝种",
  "乌鸡种",
  "烟灰种",
  "油青种",
  "老坑",
  "木纳",
  "会卡",
  "雀丙",
  "莫罕",
  "后江",
];

function combine(arr1, arr2) {
  const ret = [];
  arr1.forEach((li1) => {
    arr2.forEach((li2) => {
      ret.push(li1 + li2);
    });
  });
  return ret;
}
const adv1 = combine(["阳", "浓", "正", "纯"], ["绿", "红", "白", "黄"]);

const adj1 = [
  "龙",
  "凤",
  "羊",
  "磬",
  "菊",
  "鹅",
  "蝉",
  "熊",
  "虾",
  "龟",
  "猪",
  "蟾",
  "仙鹤",
  "灵芝",
  "达摩",
  "钟馗",
  "狮子",
];

const ends = [
  "挂件；",
  "无事牌；",
  "路路通；",
  "吊坠；",
  "项链；",
  "耳坠；",
  "摆件；",
  "胸针；",
  "戒面；",
  "手把件；",
  "手链；",
  "平安扣；",
  "镶嵌；",
  "雕刻；",
  "耳环；",
  "戒指；",
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
    len,
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
    return noun1.some((v) => {
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
      text,
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
  },
};
window.modes.push(mode);
// 冰种浓红熊吊坠冰种浓红蝉项链冰种浓红蝉摆件冰种浓红熊吊坠冰种浓红蝉项链冰种浓红蝉摆件
