const fullList = [
    "安康",
    "喜乐",
    "如意",
    "顺心",
    "发财",
    "鸿运",
    "富贵",
    "平安",
    "吉祥",
    "康宁",
    "顺遂",
    "美满",
    "永安",
    "荣华",
    "进宝",
    "吉庆",
    "和顺",
    "昌盛",
    "安乐",
    "恒久",
    "丰收",
    "长乐",
    "兴隆",
    "瑞气",
    "祥瑞",
    "喜悦",
    "富裕",
    "永康",
    "顺利",
    "安宁",
    "吉星",
    "盛世",
    "欢喜",
    "顺畅",
    "金辉",
    "祥云",
    "吉运",
    "康乐",
    "春晖",
    "春和",
    "春满",
    "春光",
    "春华",
    "春景",
    "春暖",
    "春芳",
    "春意",
    "春雨",
    "志远",
    "仁爱",
    "志诚",
    "信达",
    "仁心",
    "智远",
    "智慧",
    "博学",
    "睿智",
    "慧心",
    "慧眼",
    "高翔",
    "博雅",
    "腾飞",
    "飞跃",
    "飞翔",
    "展翅",
    "远航",
    "光明",
    "向阳",
    "向荣",
    "向新",
    "光耀",
    "光华",
    "光彩",
    "光辉",
    "璀璨",
    "星辉",
    "星耀",
    "星光",
    "星辰",
    "星河",
    "锦绣",
    "锦程",
    "锦荣",
    "锦意",
    "锦华",
    "紫气",
    "紫瑞",
    "紫霞",
    "紫光",
    "紫宸",
    "紫鹃",
    "紫薇",
    "紫菱",
    "紫燕",
    "紫藤",
    "紫苑",
    "金榜",
    "金路",
    "金石",
    "金玉",
    "金秋",
    "金穗",
    "金轮",
    "金桥",
    "金库",
    "金樽",
    "金谷",
    "金潮",
    "金海",
    "金江",
    "金川",
    "金田",
    "银川",
    "银海",
    "银桥",
    "银杏",
    "银杉",
    "银铃",
    "银菊",
    "银莲",
    "银汉",
    "银花",
    "银月",
    "玉堂",
    "玉宇",
    "玉华",
    "玉润",
    "玉洁",
    "玉璧",
    "玉兰",
    "玉树",
    "玉阶",
    "玉叶",
    "玉佩",
    "玉楼",
    "玉池",
    "玉泉",
    "玉露",
    "玉壶",
    "祥和",
    "祥麟",
    "祥鸿",
    "祥凤",
    "祥龙",
    "祥虎",
    "祥马",
    "祥鹿",
    "祥鹤",
    "祥燕",
    "祥鸽",
    "康健",
    "康泰",
    "康顺",
    "康吉",
    "康荣",
    "康兴",
    "康旺",
    "康美",
    "康喜",
    "康悦",
    "康盛",
    "康瑞",
    "康昌",
    "康贵",
    "康盈",
    "康厚",
    "顺安",
    "顺达",
    "顺昌",
    "顺旺",
    "顺兴",
    "顺和",
    "顺意",
    "顺美",
    "顺荣",
    "顺瑞",
    "顺喜",
    "顺乐",
    "顺全",
    "和谐",
    "和美",
    "和安",
    "和泰",
    "和悦",
    "和畅",
    "和兴",
    "和昌",
    "和乐",
    "和祥",
    "和瑞",
    "和贵",
    "和荣",
    "和满",
    "和惠",
    "吉光",
    "吉时",
    "吉利",
    "吉盛",
    "吉安",
    "吉顺",
    "吉丰",
    "吉美",
    "吉荣",
    "吉昌",
    "吉旺",
    "吉瑞",
    "安泰",
    "安然",
    "安顺",
    "安吉",
    "安祥",
    "安昌",
    "安旺",
    "安盛",
    "安平",
    "安和",
    "安怡",
    "安荣",
    "安满",
    "喜庆",
    "喜旺",
    "喜安",
    "喜顺",
    "喜美",
    "喜荣",
    "喜昌",
    "喜瑞",
    "喜和",
    "喜盛",
    "喜满",
    "喜全",
    "喜福",
    "喜惠",
    "乐安",
    "乐昌",
    "乐顺",
    "乐美",
    "乐荣",
    "乐旺",
    "乐盛",
    "乐祥",
    "乐瑞",
    "乐喜",
    "乐乐",
    "乐和",
    "乐满",
    "乐全",
    "乐福",
    "乐惠",
    "荣盛",
    "荣昌",
    "荣顺",
    "荣美",
    "荣安",
    "荣旺",
    "荣祥",
    "荣瑞",
    "荣喜",
    "荣乐",
    "荣全",
    "荣福",
    "荣惠",
    "荣满",
    "荣和",
    "运通",
    "运达",
    "运昌",
    "运旺",
    "运盛",
    "运顺",
    "运美",
    "运安",
    "运祥",
    "运瑞",
    "运喜",
    "运乐",
    "运全",
    "运福",
    "运惠",
    "运满",
    "顺风",
    "顺水",
    "温馨",
    "安居",
    "慧根",
    "仁德",
    "博爱",
    "志强",
    "向善",
    "进步",
    "进取",
    "攀登",
    "拼搏",
    "奋发",
    "改变",
    "蜕变",
    "超越",
    "昇华",
    "奋勇",
    "精进",
    "勇敢",
    "勇气",
    "勤奋",
    "勤学",
    "敬业",
    "勤劳",
    "勤俭",
    "勤恳",
    "勤诚",
    "勤政",
    "勤勉",
    "勤谨",
    "勤仁",
    "勤智",
    "厚德",
    "厚道",
    "厚爱",
    "厚学",
    "厚望",
    "厚重",
    "厚实",
    "厚礼",
    "厚信",
    "厚谊",
    "厚恩",
    "厚情",
    "厚福",
    "厚生",
    "厚积",
    "厚昌",
    "慧智",
    "慧德",
    "慧勇",
    "慧强",
    "慧达",
    "慧明",
    "慧远",
    "慧诚",
    "慧顺",
    "慧和",
    "慧安",
    "慧志",
    "慧意",
    "慧善",
    "慧行",
    "仁善",
    "仁厚",
    "仁义",
    "仁信",
    "仁礼",
    "仁智",
    "仁勇",
    "仁和",
    "仁顺",
    "仁安",
    "仁昌",
    "仁美",
    "智达",
    "智勇",
    "智仁",
    "智善",
    "智美",
    "智和",
    "智明",
    "智诚",
    "智信",
    "智顺",
    "智安",
    "智昌",
    "智乐",
    "智新",
    "德厚",
    "德善",
    "德美",
    "德顺",
    "德安",
    "德昌",
    "德乐",
    "德新",
    "德远",
    "德信",
    "德达",
    "德行",
    "德敬",
    "德仁",
    "德智",
    "德勇",
    "仁敬",
    "仁谦",
    "仁良",
    "仁恕",
    "仁惠",
    "仁孝",
    "仁忠",
    "清新",
    "清明",
    "清爽",
    "清和",
    "清雅",
    "清正",
    "清安",
    "清乐",
    "清顺",
    "清诚",
    "清善",
    "清美",
    "清远",
    "清达",
    "清昌",
    "清荣",
    "和睦",
    "和新",
    "和远",
    "和信",
    "和达",
    "和行",
    "和敬",
    "和仁",
    "和智",
    "和勇",
    "康复",
    "康强",
    "康安",
    "康新",
    "康远",
    "康信",
    "康达",
    "康行",
    "康敬",
    "乐观",
    "乐活",
    "乐业",
    "乐善",
    "乐趣",
    "乐智",
    "乐仁",
    "乐勇",
    "乐信",
    "乐新",
    "乐远",
    "乐达",
    "乐行",
    "松柏",
    "梅兰",
    "竹菊",
    "丹桂",
    "芳草",
    "芳华",
    "芳菲",
    "芳馨",
    "芳香",
    "芳美",
    "芳顺",
    "芳安",
    "芳达",
    "芳昌",
    "芳新",
    "芳远",
    "荣誉",
    "荣新",
    "荣达",
    "荣远",
    "荣信",
    "荣行",
    "荣敬",
    "荣仁",
    "荣智",
    "荣勇",
    "荣善",
    "安逸",
    "安新",
    "安远",
    "安达",
    "安行",
    "安敬",
    "安仁",
    "安智",
    "安勇",
    "安信",
    "安美",
    "安善",
    "吉新",
    "吉远",
    "吉达",
    "吉信",
    "吉行",
    "吉善",
    "美好",
    "美丽",
    "美妙",
    "美乐",
    "美新",
    "美远",
    "美安",
    "美昌",
    "美顺",
    "美达",
    "美信",
    "美行",
    "美敬",
    "美仁",
    "美智",
    "福地",
    "福缘",
    "福慧",
    "福安",
    "福吉",
    "福乐",
    "福旺",
    "福喜",
    "福顺",
    "福禧"
]
const list1 = fullList.slice(0, 256);
const list2 = fullList.slice(256, 512);
function hasDuplicate(arr) {
    const seen = new Set();

    for (const str of arr) {
        if (seen.has(str)) {
            console.log(str);
            return true; // 找到重复
        }
        seen.add(str);
    }

    return false; // 没有重复
}


function hasPrefixConflictShortStrings(arr) {
    const prefixSet = new Set();

    for (const str of arr) {
        // 对每个字符串生成所有前缀（长度1或2）
        for (let i = 1; i < str.length; i++) {
            prefixSet.add(str.slice(0, i));
        }
    }

    // 检查是否有字符串本身存在于前缀集合
    for (const str of arr) {
        if (prefixSet.has(str)) {
            console.log('conflict', str);
            return true;
        }
    }

    return false;
}


function seededShuffle(array, seed = String(Math.floor(Date.now() / (24 * 36e5)))) {
    // 将日期字符串转换为数字种子
    let numericSeed = 0;
    for (let i = 0; i < seed.length; i++) {
        numericSeed += seed.charCodeAt(i);
    }

    // 自定义伪随机数生成器
    function random() {
        const x = Math.sin(numericSeed++) * 10000;
        return x - Math.floor(x);
    }

    // Fisher-Yates洗牌算法
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


const possibleLength = [2, 3];
let words = [list1, list2];
words = words.map(a => seededShuffle(a))
const flat = words.flat()
console.log('conflict', hasPrefixConflictShortStrings(flat));
console.log('repeat', hasDuplicate(flat));
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

let puncCnt = 0;
const mode = {
    min: 1,
    withPunctuation: true,
    prefix: '祝您',
    check(text) {
        return list1.some(v => {
            return text.startsWith(v);
        });
    },
    init() {
        puncCnt = 0
    },
    encode(raw) {
        const code = raw.charCodeAt(0);
        const text =
            words[0][Math.floor(code / 256)] +
            words[1][Math.floor(code % 256)] + (puncCnt % 2 ? '；' : '');
        puncCnt++;
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
        let decodeIndex = 0;
        let resultStr = "";
        const decodeArr = [];

        let pos = 0;
        do {
            const { len, index } = searchText(words[decodeIndex], text.slice(pos));
            decodeArr[decodeIndex] = index;
            decodeIndex++;
            pos += len;
            if (decodeIndex == words.length) {
                decodeIndex = 0;
                let ch = 0;
                for (let i = 0; i < words.length; i++) {
                    ch += decodeArr[i] * Math.pow(256, 1 - i);
                }

                resultStr += String.fromCharCode(ch);
            }
        } while (pos < text.length);
        return resultStr;
    }
};
window.modes.push(mode);