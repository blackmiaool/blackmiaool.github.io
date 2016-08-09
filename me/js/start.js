menu_false = eval(Wind.compile("async", function() {
      alert("您的余额不足，请充值。")
      $await(delay("500"))
}))
section.start = eval(Wind.compile("async", function() {
  var id = "meem"
  var content = "点券:2"
  var len = 1;
  var index = 0;
  var btn = ele_create("h4", id, "sss")
  div_bg.append(btn)
  btn = $("#" + id)
  btn.addClass("   money-title   hvr-grow-rotate")
  btn.attr("indexx", index)

  btn.text(content)
  btn.css("position", "absolute")
  btn.css("top", 10 + "px")

  btn.css("left", 30 + "px")
    // btn.attr("disabled", "disabled")
  btn.click(function() {
    menu_value = parseInt($(this).attr("indexx"));
    //print(parseInt($(this).attr("indexx")))
  })

  $await(ts(res.cover))
    $await(tc("欢迎来到《我的人生》游戏。<br>在这里，你将经历一次完整的人生。"))
    $await(tc("下面开始创建人物。"))
    $await(tc("请选择性别。","跳过"))
  while (true) {
    var result = $await(tm(["女性（1000点券）", "男性（1点券）"], [" "]))
    if (result == 0) {
      $await(menu_false())
    } else {
      btn.text("点券:1")
      break;
    }
  }
  $await(tc("请选择长相","跳过"))

  while (true) {
    var result = $await(tm(["帅（3000点券）", "一般（10点券）","丑（免费）"], [" "," "]))
    if (result < 2) {
      $await(menu_false())
    } else {
      break;
    }
  }

  $await(tc("请选择身材","跳过"))
  while (true) {
    var result = $await(tm(["瘦（1000点券）", "一般（10点券）","胖（免费）"], [" "," "]))
    if (result < 2) {
      $await(menu_false())
    } else {
      break;
    }
  }
  $await(ts(res.earth))
  $await(tc("请选择国籍","跳过"))
  while (true) {
    var result = $await(tm(["瑞士（10000点券）", "中国（1点券）","朝鲜（免费）"], [" ",false,"button-caution"]))
    if (result ==0) {
      $await(menu_false())
    } 
    else if(result==1){
      btn.text("点券:0")
      break;
    }
    else
    {
      $await(ts(res.jin))
        $await(tc("金将军赐死了你。"))
        game_over=true;
        return;
    }
  }
  $await(ts(res.china))
  $await(tc("请选择出生地","跳过"))
  while (true) {
    var result = $await(tm(["北京（5000点券）", "上海（3000点券）","山东（免费）"], [" "," "]))
    if (result < 2) {
      $await(menu_false())
    } else {
      break;
    }
  }
  $await(ts(res.white))
  $await(tc("恭喜您，您的角色创建成功！"))
  $await(th([0,pp.you,0]))
  $await(tc(""))
  $await(th([0,pp.you,0]))
  $await(tc("大家好，我叫孙启民。"))
  $await(tc("生于山东，来自成都。"))
  $await(th([pp.you,pp.monkey2,0]))
  $await(tc("性别男，爱好你猜。"))
  $await(th([0,pp.you,0]))
  $await(th([pp.you,pp.g1,pp.g2]))
  $await(tc("喜欢的社区是"))
  $await(th([0,pp.you,0]))
  $await(th([0,pp.miot,pp.you]))  
  $await(tc("所在的团队则是"))
  $await(th([0,pp.you,0]))
  $await(tc("欢迎大家来找我交流"))


  game_over=true;
  while(1)
  {

    $await(delay(100))
  }
  //    $await(ts(res.uestc)) 

  //   // $await(tc(v.basic.year+"年，9月 成都 电子神技大学校门口",0,gap.slow))
  //   // $await(tc("你望着“电子神技大学”这五个字，心灰意冷。"))
  //   // $await(tc("你叫林伟明，是一名大一新生，本该考上桃浦二大的你，高考时发挥失常，不得已而在志愿书上填报了神大的物理电子学院。"))
  //   // $await(tc("“当初如果大姨夫没来该多好！”你又一次地感叹道。"))
  //   $await(tc("这时，你决定"))
  //   var result=$await(tm(["勇敢走入校门","扭头就走"]))
  //   if(result==1){
  //     $await(ts(res.gaozhongketang))
  //     $await(tc("你想了想觉得不甘心，于是回到高中复读。"))
  //     $await(tc("结果。。。"))
  //     if(rand(1,10)>6){
  //      $await(ts(res.qinghuadaxue))
  //      $await(tc("经过不懈的努力，你考入了桃浦二大!<br>完美结局【未曾开始的结束】达成!<br>难度：1")) 
  //      game_over=true;
  //      return;
  //   }
  //    else{
  //     $await(ts(res.luobang))
  //     $await(tc("你又一次落榜了。"))
  //     $await(tc("无奈之下，你再一次填报了神大。"))
  //     v.basic.year+=1
  //     game_over=true;
  //     return
  //   }
  // } 
  // $await(tc("权衡了一下利弊，你决定还是顺其自然比较好。于是你定了定神，迈步走进了神大。"))
  // $await(section.nature_test())

}));
