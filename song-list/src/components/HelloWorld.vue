<template>
    <div class="example-drag" v-if="!finished" style="margin:auto;">
        <div>
            <div v-if="xlsFile.length">
                xls file:
                <span>{{ xlsFile[0].name }}</span> - <span>{{ xlsFile[0].size }}Byte</span>
            </div>
            <div style="margin-bottom:20px; overflow: hidden;" class="upload" v-if="!xlsFile.length">
                <div class="upload-btn btn">
                    <file-upload class="btn btn-primary" post-action="/upload/post1" :multiple="false" :drop="false"
                        :drop-directory="false" v-model="xlsFile" ref="upload1" accept="application/vnd.ms-excel">
                        <i class="fa fa-plus"></i>
                        选择.xls文件
                    </file-upload>
                </div>
            </div>

            <div v-if="imageFile.length">
                jpg file:
                <span>{{ imageFile[0].name }}</span> - <span>{{ imageFile[0].size }}Byte</span>
                <span v-if="imageWidth && imageHeight"> - {{ imageWidth }}x{{ imageHeight }}</span>
                <br>
                <label for="sortMode">排序模式:</label>
                <select v-model="sortMode" id="sortMode">
                    <option value="length">字数模式</option>
                    <option value="alphabet">首字母模式</option>
                </select>
                <br>
                <input type="checkbox" v-model="autoSort" id="autoSort">
                <label for="autoSort">自动排序</label>
                <br>
                <input type="checkbox" v-model="hideSongListTitle" id="hideSongListTitle">
                <label for="hideSongListTitle">隐藏“歌单”</label>
                <br>
                <input type="checkbox" v-model="hideTitles" id="hideTitles">
                <label for="hideTitles">隐藏标题</label>
                <br>
                <input type="checkbox" v-model="crossPage" id="crossPage">
                <label for="crossPage">跨页展示</label>
                <br>
                <label for="fontSize">字体大小:</label>
                <input type="number" v-model.number="fontSize" id="fontSize" min="10" max="100" placeholder="28">
                <br>
                <label for="backgroundOpacity">遮罩层不透明度:</label>
                <input type="range" v-model.number="backgroundOpacity" id="backgroundOpacity" min="0" max="1"
                    step="0.1">
                <br>
                <label for="maxLength">最大字数:</label>
                <input type="number" v-model.number="maxLength" id="maxLength" min="1" placeholder="10">
                <div v-if="sortMode === 'length'">

                </div>
            </div>

            <div style="margin-bottom:20px; overflow: hidden;" class="upload"
                v-if="xlsFile.length && !imageFile.length">
                <div class="upload-btn btn">
                    <file-upload class="btn btn-primary" post-action="/upload/post2" :multiple="false" :drop="false"
                        :drop-directory="false" v-model="imageFile" ref="upload2" accept="image/jpeg">
                        <i class="fa fa-plus"></i>
                        选择.jpg背景图片文件
                    </file-upload>
                </div>
            </div>



        </div>
        <div class="generate-btn btn" v-if="xlsFile.length && imageFile.length" @click="generateForRelease">
            生成歌单
        </div>
        <div>
            <div class="generate-btn btn" v-if="xlsFile.length && imageFile.length" @click="generateForDebug">
                调试生成歌单
            </div>
        </div>

        <div>
            <h3>使用说明</h3>
            <div>
                字母模式：要自己按拼音排，xls的A列是A开头的歌，以此类推。AA是日文AB是韩文 <br>
                字数模式：按汉字字数排序，最后一列是“其他”可以放外语歌。不需要其他的话最后一列第一行写1 <br>
                使用的表单无视名字，表格文件里仅可有1个表单，否则后果未知 <br>
                自动排序无视表单内部任何数据顺序，字母模式暂不支持自动排序
            </div>
        </div>
        <div class="generate-area">
            <div class="image-wrap" v-for="(list, i) in imglist" :key="i" :data-image-index="i"
                style="position: relative;margin:auto;" :style="{
                    width: shouldWidth + 'px',
                    height: shouldHeight + 'px'
                }">
                <img class="bg-img" :src="bgUrl" alt="" style="width: 100%; display: block" />
                <div style="
            position: absolute;
            left: 45px;
            right: 45px;
            top: 45px;
            bottom: 45px;
            /* border: 2px solid white; */
            border-radius: 12px;
            text-align: left;
            padding-left: 35px;
            padding-right: 35px;
            padding-top: 158px;
            padding-bottom: 35px;
          " :style="{
            paddingTop: hideSongListTitle ? '35px' : '158px',
            backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})`
        }">
                    <div class="font-f" style="font-size: 97px; position: absolute; left: 141px; top: 18px"
                        v-if="!hideSongListTitle">
                        歌单
                    </div>
                    <div :data-wrap-index="i" style="
              position: absolute;
              left: 35px;
              right: 35px;
              top: 158px;
              bottom: 40px;
            " :style="{
                top: hideSongListTitle ? '40px' : '158px',
            }">
                        <div class="song-wrap" v-for="li in list" :key="li.title" style="">
                            <div style="padding-bottom: 30px">
                                <div class="line-alph" style="margin-bottom: 10px" v-if="!hideTitles && li.title">
                                    <div style="display: inline-block; position: relative">
                                        <div style="margin-bottom: 10px">
                                            <div style="
                          height: 2px;
                          width: 66px;
                          margin-bottom: 15px;
                        "></div>
                                            <div style="
                          height: 6px;
                          width: 6px;
                          background-color: #5a4477;
                          border-radius: 15px;
                          position: absolute;
                          left: -2.5px;
                          top: -2px; ;
                        "></div>
                                        </div>
                                    </div>
                                    <div style="
                      display: inline-block;
                      font-size: 48px;
                      font-weight: bold;
                      /* font-family: f1; */
                      margin-left: 5px;
                      text-align: left;
                    ">
                                        {{ li.title }}
                                    </div>
                                </div>

                                <div style="position:relative;">
                                    <div v-if="hideTitles && li.title" style="height: 6px;
                                        width: 6px;
                                        background-color: #5a4477;
                                        border-radius: 15px;
                                        position: absolute;
                                        left: -2.5px;
                                        top: 16px; 
                                        " :style="{
                                            top: fontSize / 2 + 6 + 'px'
                                        }"></div>
                                    <div v-for="song in li.list" :key="song" :style="{
                                        display: 'inline-block',
                                        marginLeft: '23px',
                                        fontSize: fontSize + 'px',
                                        /* font-family: f1; */
                                        marginBottom: '6px',
                                    }">
                                        {{ song }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as htmlToImage from "html-to-image";
import * as XLSX from "xlsx";
import FileUpload from "vue-upload-component";

const configKey = "song-list-config"

function number2chinese(num) {
    const units = ["", "十", "百", "千"];
    const digits = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];

    if (num === 0) return digits[0];

    let result = "";
    const strNum = num.toString();
    const len = strNum.length;

    for (let i = 0; i < len; i++) {
        const digit = parseInt(strNum.charAt(i), 10);
        const unitIndex = len - i - 1;

        if (digit !== 0) {
            result += digits[digit] + units[unitIndex];
        } else {
            // Only add '零' if the previous character is not '零' and it's not the last digit
            if (!result.endsWith(digits[0]) && i !== len - 1) {
                result += digits[0];
            }
        }
    }

    // Remove trailing '零'
    if (result.endsWith(digits[0])) {
        result = result.slice(0, -1);
    }

    // Handle special case for numbers between 10 and 19
    if (num >= 10 && num < 20) {
        result = result.replace(/^一十/, "十");
    }

    return result;
}

export default {
    components: {
        FileUpload,
    },
    data() {
        return {
            debugGenerating: false,
            finished: false,
            xlsFile: [],
            imageFile: [],
            imglist: [],

            keyMap: {
                AA: "日文",
                AB: "韩文",
            },
            list: [],
            sortMode: 'length',
            autoSort: true,
            maxLength: 10,
            hideSongListTitle: false,
            hideTitles: false,
            imageWidth: null,
            imageHeight: null,
            shouldWidth: 1080,
            shouldHeight: null,
            fontSize: 28,
            crossPage: false,
            backgroundOpacity: 0.3,
        };
    },
    created() {
        const savedConfig = localStorage.getItem(configKey);
        if (savedConfig) {
            const config = JSON.parse(savedConfig);
            this.sortMode = config.sortMode || 'length';
            this.autoSort = config.autoSort !== undefined ? config.autoSort : true;
            this.maxLength = config.maxLength || 10;
            this.hideSongListTitle = config.hideSongListTitle || false;
            this.hideTitles = config.hideTitles || false;
            this.fontSize = config.fontSize || 28;
            this.crossPage = config.crossPage || false;
            this.backgroundOpacity = config.backgroundOpacity || 0.3;
        }
    },
    watch: {
        imageFile: {
            handler(newFiles) {
                if (newFiles && newFiles.length > 0) {
                    this.bgUrl = URL.createObjectURL(newFiles[0].file);
                    // Get image dimensions
                    const img = new Image();
                    img.onload = () => {
                        this.imageWidth = img.naturalWidth;
                        this.imageHeight = img.naturalHeight;
                        console.log('size', this.imageWidth, this.imageHeight);
                        this.shouldHeight = this.shouldWidth / this.imageWidth * this.imageHeight;

                    };
                    img.src = this.bgUrl;
                } else {
                    this.bgUrl = this.bg;
                    this.imageWidth = null;
                    this.imageHeight = null;
                }
            },
            deep: true
        }
    },
    methods: {
        async exportImages() {
            console.log("done1");
            if (this.debugGenerating) {
                return;
            }
            const doms = document.querySelectorAll("[data-image-index]");
            for (let i = 0; i < doms.length; i++) {
                let dataUrl = await htmlToImage.toJpeg(doms[i], {
                    // canvasWidth:1080,
                    // canvasHeight: 1920,
                    quality: 0.95,
                });

                // Resize the image
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = this.shouldWidth;
                    canvas.height = this.shouldHeight;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, this.shouldWidth, this.shouldHeight);
                    dataUrl = canvas.toDataURL('image/jpeg', 0.95);

                    const imgElement = document.createElement("img");
                    imgElement.style.width = "300px";
                    imgElement.src = dataUrl;
                    document.body.appendChild(imgElement);
                };
                img.src = dataUrl;
            }
            console.log("done2");
            this.imglist = [];
            this.finished = true;
        },
        detectLang(str) {
            const ret = {
                hasEnglish: /[A-Za-z]/.test(str),
                hasJapaneseKana: /[\u3040-\u309F\u30A0-\u30FF\uFF65-\uFF9F]/.test(str),
                hasHangul: /[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/.test(str),
            };
            const hasForeign = ret.hasEnglish || ret.hasJapaneseKana || ret.hasHangul;
            return {
                ...ret, hasForeign
            }
        },
        async getSheet() {
            const xlsData = await this.xlsFile[0].file.arrayBuffer();
            const workbook = XLSX.read(xlsData);

            const sheet = Object.values(workbook.Sheets)[0];
            return sheet;
        },
        handleSheet(sheet) {
            const list = {};
            for (const key in sheet) {
                const columnMatch = key.match(/^[A-Z]+/);
                if (!columnMatch) {
                    continue;
                }
                const column = columnMatch[0];
                if (!list[column]) {
                    list[column] = [];
                }
                const content = sheet[key]?.w?.trim();
                if (!content) {
                    return;
                }
                const found = list[column].find((li) => {
                    return li === content;
                });
                if (!found) {
                    list[column].push(content);
                }
            }
            console.log('list', list);
            if (this.sortMode === 'alphabet') {
                const finalList = Object.keys(list)
                    .sort((a, b) => {
                        if (a.length === b.length) {
                            return 1;
                        } else {
                            return a.length > b.length ? 1 : -1;
                        }
                    })
                    .map((key) => {
                        return {
                            title: this.keyMap[key] || key,
                            list: list[key],
                        };
                    });

                return finalList
            } else if (this.sortMode === 'length') {
                let finalList = [];
                let otherList = []
                if (this.autoSort) {
                    let justOneList = [];
                    for (const column in list) {
                        justOneList.push(...list[column]);
                    }
                    justOneList = justOneList.filter(song => {
                        if (song.length > this.maxLength || this.detectLang(song).hasForeign) {
                            otherList.push(song);
                            return false;
                        }

                        return true;
                    });
                    justOneList.forEach(song => {
                        const len = song.length;
                        if (!finalList[len - 1]) {
                            finalList[len - 1] = {
                                title: number2chinese(len) + '字',
                                list: []
                            }
                        }
                        finalList[len - 1].list.push(song);
                    });
                    finalList = finalList.filter(a => a)
                } else {
                    let index = 1;
                    for (const column in list) {
                        finalList.push({
                            title: number2chinese(list[column][0].length) + '字',
                            list: list[column],
                        });
                        index++
                    }
                    if (list[Object.keys(list).length - 1][0] === '1') {
                        otherList = finalList.pop().list;
                    }
                }
                if (otherList.length > 0) {
                    finalList.push({ title: "其他", list: otherList });
                }
                return finalList
            }

        },
        async generateForRelease() {
            this.debugGenerating = false;
            this.generate();
        },
        async generateForDebug() {
            this.debugGenerating = true;
            this.generate();
        },

        async generate() {
          
            // Save configuration before generating
            localStorage.setItem(configKey, JSON.stringify({ sortMode: this.sortMode, autoSort: this.autoSort, maxLength: this.maxLength, hideSongListTitle: this.hideSongListTitle, hideTitles: this.hideTitles, fontSize: this.fontSize, crossPage: this.crossPage, backgroundOpacity: this.backgroundOpacity }));
            const sheet = await this.getSheet();

            console.log('sheet', sheet);
            let finalList = this.handleSheet(sheet);

            console.log("finalList", finalList);
            if (!finalList.length) {
                alert('表格内容异常，无法生成歌单');
                return;
            }
            // return
            let lastImgList;
            let lastFinalList;
            const checkLayoutCrossPage = async () => {
                let continueLayout = finalList.length > 0;
                let shouldPop = false;
                if (!this.imglist.length) {
                    continueLayout = true;
                }
                const checkIndex = this.imglist.length - 1;

                const dom = document.querySelector(`[data-wrap-index="${checkIndex}"]`);

                if (dom && dom.scrollHeight > dom.clientHeight) {
                    console.log('shouldPop');
                    shouldPop = true;
                    continueLayout = true;
                }
                let currentPage = this.imglist[this.imglist.length - 1];
                if (!this.imglist.length) {
                    currentPage = [{
                        title: finalList[0].title,
                        list: []
                    }];
                    delete finalList[0].title;
                    this.imglist.push(currentPage);
                }
                //pop 然后新开一页
                if (shouldPop) {
                    console.log('shouldPop');
                    this.imglist = lastImgList;
                    finalList = lastFinalList;

                    if (finalList[0].title) {
                        currentPage = [{
                            title: finalList[0].title,
                            list: []
                        }]
                        this.imglist.push(currentPage);
                        delete finalList[0].title;
                    } else {
                        currentPage = [{
                            list: []
                        }]
                        this.imglist.push(currentPage);
                    }
                }
                lastImgList = JSON.parse(JSON.stringify(this.imglist));
                lastFinalList = JSON.parse(JSON.stringify(finalList));
                if (finalList.length) {
                    if (finalList[0].title) {
                        currentPage.push({
                            title: finalList[0].title,
                            list: finalList[0].list.splice(0, 1)
                        })
                        delete finalList[0].title;
                    }
                    currentPage[currentPage.length - 1].list.push(finalList[0].list.shift());

                    if (finalList[0].list.length === 0) {
                        finalList.shift();
                    }
                }


                console.log(this.imglist, finalList);
                if (!continueLayout) {
                    this.exportImages();
                } else {
                    console.log("继续排版");
                    requestAnimationFrame(checkLayoutCrossPage);
                }
            }
            const checkLayout = async () => {
                let continueLayout = false;
                this.imglist.some((li, i) => {
                    const dom = document.querySelector(`[data-wrap-index="${i}"]`);
                    if (!dom) {
                        console.log(i);
                    }
                    if (dom.scrollHeight > dom.clientHeight) {
                        const pop = li.pop();
                        if (!li.length) {
                            alert('排版失败,高度异常：' + pop.title + '建议打开跨页展示后重试');
                            throw new Error('排版失败,高度异常：' + pop.title);
                        }
                        if (!this.imglist[i + 1]) {
                            this.imglist.push([]);
                        }
                        const next = this.imglist[i + 1];
                        next.unshift(pop);
                        continueLayout = true;
                        return true;
                    }
                });
                console.log(this.imglist);
                if (!continueLayout) {
                    this.exportImages();
                } else {
                    console.log("继续排版");
                    requestAnimationFrame(checkLayout);
                }
            };

            if (this.crossPage) {
                this.imglist = [];
                this.$nextTick(() => {
                    checkLayoutCrossPage();
                });
            } else {
                this.imglist = [finalList.slice()];
                this.$nextTick(() => {
                    checkLayout();
                });
            }


            // this.list.
        },
    },

};
</script>

<style>
/* @font-face {
    font-family: "f1";
    src: url("../assets/SourceHanSansCN-VF.otf.woff2") format("woff");
} */

/* @font-face {
    font-family: "f2";
    src: url("../../p2/f2.ttf") format("woff");
} */

.font-f {
    /* font-family: "f1"; */
    color: #5a4477;
}

.btn {
    display: inline-block;
    padding: 2px 4px;
    /* border-radius: 10px; */
    cursor: pointer;
}

.generate-btn {
    background-color: slateblue;
    margin-top: 20px;
    color: white;
}

.upload-btn {
    background-color: steelblue;
    color: white;
}

.example-drag label.btn {
    margin-bottom: 0;
    margin-right: 1rem;
}

.example-drag .drop-active {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 9999;
    opacity: 0.6;
    text-align: center;
    background: #000;
}

.example-drag .drop-active h3 {
    margin: -0.5em 0 0;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 40px;
    color: #fff;
    padding: 0;
}

.upload {
    position: relative;
    ;
}

.generate-area {
    margin: auto;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    zoom: 0.3;
}
</style>
