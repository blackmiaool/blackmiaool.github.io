var fade_time = 600
var text_time = 100
res = {}
var v;
var gap = {
  def: 70,
  fast: 40,
  slow: 200,
};
var btn_gap = 90
var sz;
var current_scene = 0;
var running = false

var next_scene = 0;
var scene_sprite;
var message = 0;
var half = 0;
var half_sprite = new Array(3)
var delay = eval(Wind.compile("async", function(aa) {
  $await(Wind.Async.sleep(aa)); // 暂停10毫秒
}));
var touched = false
var current_background = 0;
var menu = 0;
var menu_value = false;
var menu_list = new Array()
var quicken_btn;
var quicken;
var mood_sprite;
var save_read; //true:save false:read
var next_to_start = false
var skip_scene_trans = false
var to_desk = false
var leave_cover = false
var page_main;
var sx = 960;
var sy = 540;
var pages;
var menu_speed = 0.3
var fadeout_time = 600
var fadein_time = 600
var color_award = color(166, 226, 45)
var color_punish = color(253, 151, 32)
var people=[];
game_over = true
touch_enable = true
message = {}
people_move_time=1000;

function g(str) {
  return "res/" + str
}
var res = {
  cover: g("me/cover.jpg"),
  earth: g("me/earth.jpg"),
  jin: g("me/jin.jpg"),
  china: g("me/china.jpg"),
  black: g("Background/black.png"),
white: g("Background/white.png"),
};

function color(r, g, b) {
  return "rgb(" + r + "," + g + "," + b + ")"
}
var pp = {
  you: {
    name: "你",
    half: g("Half/monkey1.png"),
    color: color(200, 200, 200),
  },
  monkey2: {
    name: "你",
    half: g("Half/monkey2.png"),
    color: color(149, 35, 42),
  },
      g1: {
    name: "g1",
    half: g("Half/g1.png"),
    color: color(153, 143, 152),
  },
  g2: {
    name: "g2",
    half: g("Half/g2.png"),
    color: color(200, 183, 156),
  },
    miot: {
    name: "高向晨",
    half: g("Half/miot.png"),
    color: color(111, 114, 132),
  },
}
for(i in pp)
{
	res[i]=pp[i].half
}
var skill = {}
skill = {
  

};


var item = {

}


var item_update = function() {
  for (i in item) {
    item[i].cnt = v.item[i];
  }
}
for (i in item) {
  item[i].name = i;
  item[i].cnt = 0;
}
var v_init = {
  basic: {
    title: "麻瓜",
    test: 0,
    year: 2014,
    term: 1,
    week: 1,
    day: 1,
    hours: 1,
    money: 4000,
    money_abt: 1,
    study_abt: 1,
    work_abt: 1,
    isFemale: false,
    way: 0 //0:digital 1:analog 2:both
  },
  experience: {
    OI: false,
    phy: false,
    math: false,
    axe: false
  },
  plot: {
    xuanjianghui: false,
    kexie_first: false,
  },
  amity: {
    lizhihao: 0,
    gaoxiangfu: 0,
  },
  skill: {
    digital_circuit: 0,
  },
  item: {

  },

}


var v_update = function(vv) {
  for (i in item) {
    vv.item[i] = item[i].cnt;
  }
}

function toSaveString(value) {
  var ss = "";
  if (typeof value == "string") {
    ss += "\"";
    ss += value;
    ss += "\"";
  } else {
    //print("sldkfj");
    ss += value;
  }
  return ss;
}

function getSave(value) {
  var ss = "save_retval={"
  for (i in value) {
    ss += toSaveString(i)
    ss += ":{"
    for (j in value[i]) {
      ss += toSaveString(j)
      ss += ":";
      var a = value[i][j]
      ss += toSaveString(a)


      ss += ","
    }
    ss += "},"
  }
  ss += "}"
  return ss
}


function setSave(str) {

}

function clone(myObj) {
    if (typeof(myObj) != 'object') return myObj;
    if (myObj == null) return myObj;
    var myNewObj = new Object();
    for (var i in myObj)
      myNewObj[i] = clone(myObj[i]);
    return myNewObj;
  }
  //console.log(getSave(v_init))
rnd.today = new Date();
rnd.seed = rnd.today.getTime();

function rnd() {　　　　
  rnd.seed = (rnd.seed * 9301 + 49297) % 233280;　　　　
  return rnd.seed / (233280.0);
};

function rand(min, max) {
  var number = max - min + 1
  number = Math.ceil(rnd() * number) + min - 1　　　　
  return number;
};

function getProgressName(index) {
  return "progress" + index
}

function save_progress(id) {
  //print("before")  
  //print(getSave(v))
  v_update(v)
    //print("after")
    //print(getSave(v))

  localStorage.removeItem(getProgressName(id))
  localStorage.setItem(getProgressName(id), getSave(v));

  //localStorage.setItem(getProgressName(id)+"id",getSave(v)); 
}

function load_text(id) {

}


function read_save(src, dest) {
  for (i in dest) {
    for (j in dest[i]) {
      src[i][j] = dest[i][j]
    }
  }
}


function load_progress(id) {
  //print(localStorage.getItem(getProgressName(id)))

  eval(localStorage.getItem(getProgressName(id))) //.replace(/\"/g, "\\\""))
  read_save(v, save_retval)
  item_update()
}





function print() {
  if (print.arguments.length == 2) {
    print(print.arguments[0] + "=" + print.arguments[1])

  } else {
    console.log(print.arguments[0])
  }
}

delay = eval(Wind.compile("async", function(aa) {
  $await(Wind.Async.sleep(aa)); // 暂停10毫秒
}));

bg_fadeout = eval(Wind.compile("async", function(time) {
  var flag = false;
  if (!time) {
    time = fade_time;
  }
  bg.fadeOut(time,
    function() {
      flag = true;
    });
  while (!flag) {
    $await(delay(100));
  }
}))


function ele_create(name, idd, classs) {
  return '<' + name + ' ' + "id=" + idd + " " + "class=" + classs + " " + ">" + "</" + name + ">";
}




bg_set = function(img) {
  bg.attr("src", img)
}
bg_fadein = eval(Wind.compile("async", function(img, time) {

  //  bg.src = img;
  bg.attr("src", img)
  var flag = false;
  if (!time) {
    time = fade_time;
  }
  bg.fadeIn(time,
    function() {
      flag = true;
    });
  while (!flag) {
    $await(delay(100));
  }
}))

bg_fadeoutin = eval(Wind.compile("async", function(img) {
  $await(bg_fadeout())
  $await(bg_fadein(img))
}))

images = []
var preload_bar;

function preload_set(a, b) {

  preload_bar.text("资源加载中 " + a + "/" + b)
  preload_bar.css("width", a / b * 100 + '%')
}
preload_res = eval(Wind.compile("async", function() {
  var res_sum = 0

  // for (i = 0; i < res_sum; i++) {
  //   var argu = para[i];
  //   argu = "res/" + argu;
  //   var name = argu.split('.')
  //   var load_cnt = 0;
  //   name = name[name.length - 2].split('/')
  //   name = name[name.length - 1];

  //   res[name] = argu;
  //   //print(name)
  //   images[i] = new Image()
  //   images[i].src = argu;
  //   images[i].indexx = i;
  //   images[i].onload = function() {
  //     load_cnt++;
  //     //print("load_cnt" + load_cnt)
  //     preload_set(load_cnt,res_sum)
  //   }
  // }
  for (i in res) {
    res_sum++;
    var name = res[i];
    name = name.split('.')
    var load_cnt = 0;
    name = name[name.length - 2].split('/')
    name = name[name.length - 1];
    //print(name)
    images[i] = new Image()
    images[i].src = res[i];
    //print(res[i])
    images[i].onload = function() {
      load_cnt++;
      //print("load_cnt" + load_cnt)
      preload_set(load_cnt, res_sum)
    }
  }
  preload_set(0, res_sum)
  while (load_cnt < res_sum) {
    $await(delay(100))
  }
  preload_bar.parent().remove()
}))


preload = eval(Wind.compile("async", function() {
  $("#loading_text").remove()
  $(".div-bg").before('\
	  	<div class="progress" style="width:960px;">\
	  	<div id="preload_progress_bar" min-width="2em" class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">\
	  	</div></div>');
  preload_bar = $("#preload_progress_bar");
  $await(preload_res());
}))

function message_create() {
  div_text.html('<div id="chat_text"></div>')
  var t = $("#chat_text")
  t.setNString = eval(Wind.compile("async", function(content) {
    $await(this.setString('<h2 id="chat_text_content" style="text-align: left;color:rgb(255,255,255);" ></h2>', content, true))
  }))

  var charIndex = -1;
  var stringLength = 0;
  var inputText;
  var text_content = $("#chat_text_content");
  var name;

  t.setName = function(text) {
    name = text;
  }
  t.setString = eval(Wind.compile("async", function(html, content, init) {
    charIndex = -1;
    text_content.html("")
    var text_time_this = text_time;
    while (charIndex <= stringLength) {
      if (init) {
        init = false
        this.html(html)
        text_content = $("#chat_text_content");
        inputText = content;
        charIndex = 0;
        stringLength = inputText.length;
      }
      if (touched) {
        touched = false;
        text_time_this = 0;
      }
      //text_content.html(" ");
      var initString = text_content.html();

      //print("initString", initString)
      //print("charIndex", charIndex)
      initString = initString.replace(/<SPAN.*$/gi, "");

      var theChar = inputText.charAt(charIndex);
      var nextFourChars = inputText.substr(charIndex, 4);
      if (nextFourChars == '<BR>' || nextFourChars == '<br>') {
        theChar = '<BR>';
        charIndex += 3;
      }
      initString = initString + theChar + "<SPAN id='blink'>_</SPAN>";
      text_content.html(initString);
      charIndex = charIndex / 1 + 1;
      if (charIndex % 2 == 1) {
        document.getElementById('blink').style.display = 'none';
      } else {
        document.getElementById('blink').style.display = 'inline';
      }

      if (charIndex <= stringLength) {

      } else {

        //setTimeout('blinkSpan()', 500);
      }
      $await(delay(text_time_this))
    }
    // while (true) {
    //   if (currentStyle == 'inline') {
    //     currentStyle = 'none';
    //   } else {
    //     currentStyle = 'inline';
    //   }
    //   document.getElementById('blink').style.display = currentStyle;
    //   $await(delay(500))
    // }
  }))
  var currentStyle = 'inline';


  return t;
}
var ts = eval(Wind.compile("async", function(background, time) {
  var temp_time = fadeout_time;
  if (time > -1) {
    fadeout_time = time;
  }

  if (background == current_background) {
    fadeout_time = 0.01
  }
  if (true) {
    running = true
    message.fadeOut(fadeout_time);
    $await(bg_fadeout(fadeout_time));
    //$await(message.setNString(""))
    current_background = background;
    //message.fadeIn(fadein_time);
    $await(bg_fadein(background, fadein_time));
    running = false
  }
  fadeout_time = temp_time
}))
var tc = eval(Wind.compile("async", function(text, name, gapnum, color,wait) {
  touched = false;
  if (!gapnum) {
    gapnum = gap.def
  }
  if (text) {
    message.show()
    message.setName(name)
  } else {
    message.hide()
  }

  $await(message.setNString(text, gapnum, color))
  if (name != "跳过") {
    $await(touch_wait())
  }
}));

var touch_wait = eval(Wind.compile("async", function(text, name, gapnum, color) {
  while (true) {
    //    print("toucheddd")
    if (touched) {
      touched = false;
      if (touch_enable) {
        //print("touc333heddd")
        return
      }
    }
    $await(delay(100))
  }
}))

function menu_btn_create(index, content, len,color) {
  var id = "menu_btn" + index
  var btn = ele_create("button", id, "menu_btn")
  div_btn.append(btn)
  btn = $("#" + id)
  btn.addClass(" button  button-rounded  animated  fadeIn")
  if(color)
  {
    btn.addClass(color)
  }
  else
  {
    btn.addClass("button-primary hvr-grow-rotate")
  }
  btn.attr("indexx", index)

  btn.text(content)
  btn.css("position", "absolute")
  btn.css("top", (sy - 180) * 0.5 + ((len - 1) / (-2) + index) * btn_gap + "px")

  btn.css("left", "480" - parseInt(btn.css("width")) / 2 + "px")
   // btn.attr("disabled", "disabled")
  btn.click(function() {
    menu_value = parseInt($(this).attr("indexx"));
    //print(parseInt($(this).attr("indexx")))
  })
  return;
}



var tm = eval(Wind.compile("async", function(it,it_color) //to menu
  {
    var retval
    var len = it.length
      // div_btn.html('<button indexx=0 class="cover_btn button  button-rounded button-raised button-caution" \
      // 	id="cover_btn1" style="position: relative;top:240px;">开始游戏</button> \
      //   <br/> \
      //   <button indexx=1 id="cover_btn2" class="cover_btn button  button-raised button-rounded button-primary" href="langshenjiao/index.html" style="position: relative;top:260px;">读取进度</button> \
      //   <br/> \
      //   <button indexx=2 id="cover_btn3" class="cover_btn button  button-raised button-rounded button-primary" \
      //    style="position: absolute;left:480px;top:280px;">关于游戏</button> \
      //   <br/> \
      //   <br/>')

    for (var i = 0; i < len; i++) {

      var btn = menu_btn_create(i, it[i], len,it_color?it_color[i]:false)


      // var btn = new cc.MenuItemImage(
      //   res.choose_item,
      //   res.choose_item_on,
      //   function (sprite) {

      //     menu_value=sprite.ind
      //     //sprite.removeFromParent()
      //     menu.removeAllChildren();
      //   });
      // // btn.attr({
      // //   x: sz.width/2,
      // //   y: (sz.height-180)*0.5+180-((len-1)/(-2)+i)*btn_gap,
      // // });
      // var x=sz.width*2/3
      // var y=(sz.height-180)*0.5+180-((len-1)/(-2)+i)*btn_gap
      // btn.ind=i;
      // var text= cc.LabelTTF.create(it[i], "黑体", 25, cc.size(750,0), cc.TEXT_ALIGNMENT_CENTER);
      // text.setPosition(220,20)
      // btn.addChild(text)
      // menu.addChild(btn)
      // btn.setOpacity(0)
      // btn.setPosition(x,y)
      // var ac1=cc.MoveTo.create(menu_speed,sx/2,y)
      // var ac2=cc.FadeIn.create(menu_speed)
      // var ac=cc.Spawn.create(ac1,ac2)
      // var ac0=cc.DelayTime.create(menu_speed*i/len)
      // ac=cc.Sequence.create(ac0,ac)
      // btn.runAction(ac)
      // text.setOpacity(0)
      // var ac0=cc.DelayTime.create(menu_speed*i/len)
      // var ac2=cc.FadeIn.create(menu_speed)
      // ac=cc.Sequence.create(ac0,ac2)
      // text.runAction(ac)
    };
    while (menu_value === false) {

      $await(delay(100))
    }
    div_btn.children().removeClass("fadeIn")
    div_btn.children().fadeOut(300,function(){$(this).remove()})
   // $await(delay(500))
  //  div_btn.empty()
    retval = menu_value
    menu_value = false;

    //var retval=$await(wait_menu());


    //  console.log(item.lenth)
    touched = false;
    return retval
  }))



function pos_covert(pos,pp){
	return sx/6*(pos*2+1)- parseInt(pp.css("width")) / 2
}
function get_half(name,pos) {
  var id = "pp" + name.name
  var pp = ele_create("img", id, "pp")
  div_half.append(pp)
  pp = $("#" + id)

  pp.attr("indexx", pos)
  pp.attr("src",name.half)
  pp.css("position", "absolute")
  pp.css("top", 40+"px")

  pp.css("left", pos_covert(pos,pp)  + "px")
  
  //console.dir(pp[0])
  //console.log(pp[0].clientWidth)
  return pp;
}





// function get_half(name,pos)
// {
//   var   people=cc.Sprite.create(name.half)
//   people.name=name.name

//   people.setPosition(480+250*(i-1),0)
//   return people
// }



var th = eval(Wind.compile("async", function(input, pos) {
  //message.setName(name.name)
  var remove = false
  var show = false
    //print(input)
    console.log("start")
    console.log(people)
  for (j in people) {

    var found = false;
    if (!people[j]) {
      continue;
    }
    for (i in input) {
    	print("input")
    	print([people[j].name ,input[i]])
      if (people[j].name == input[i].name) {
      	
        found = true
        continue;
      }

    }
    if (!found) {
      // var callback = cc.CallFunc.create(
      //   function(para) {
      //     para.removeFromParent()

      //   }, people[j])

//      people[j].runAction(cc.Sequence.create(cc.FadeOut.create(people_move_time), callback))
	    print("fade")
      people[j].fadeOut(people_move_time,function(){$(this.remove())})//.remove();
      people[j].miaoindex = j
      people[j] = undefined
      remove = true

    }
  }

  if (remove) {

    $await(Wind.Async.sleep(people_move_time *1.2));
  }
  for (i in input) {
    var found = false;
    if (!input[i]) {
      continue;
    }
    for (j in people) {
    	print("end")
    	console.log(people[j])
      if (!people[j]) {
        continue;
      }
      if (people[j].name == input[i].name) {
      	print("end2")
      	print([people[j].name,input[i].name])
        found = true;
        //print("found")
        if (people[j].pos != i) {
          //print("not",i)
          show = true
//          people[j].runAction(cc.MoveTo.create(people_move_time, get_pp_position(i)))
	        people[j].pos = i
          people[j].animate({left:pos_covert(people[j].pos,people[j])+"px"})
          

        }

      }
    }

    if (!found) {
      //print("notnot")
      //  print(input[i])
      var ppp = get_half(input[i], i)
//      ppp.setOpacity(0)
      ppp.hide();
      ppp.name=input[i].name
      ppp.pos=i;
     /// print(ppp)
      ppp.pos = i;
      print("len")
      print(people.length)
      people[people.length] = ppp
            print("len")
      print(people.length)
      print("ppp")

      print(ppp)
      print("end3")
      console.log(people)
      console.log("people"+people.length)
      show = true
//      ppp.runAction(cc.FadeIn.create(people_move_time))
      ppp.fadeIn(people_move_time);
    }
  }
  if (show) {
    $await(Wind.Async.sleep(people_move_time ));
  }


}));
