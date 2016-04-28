//globals:blackground
var cover_order = [];
for (i = 0; i < 10; i++) {
  cover_order[i] = false;
}
touched=false;
div_text=false;
text_click=false;
div_bg_click=false;
div_btn_click=false;

function main_init() {

  div_text = $(".div-text");

  // div_text.click=function(){
  //   div_text_click=true;
  //   print("text_click")
  // }



  div_bg = $(".div-bg");
  div_bg.click(function(){
    div_bg_click=true;
    touched=true;
    //print("touched")
  })
   div_btn = $(".div-btn");
  // div_btn.click(function(){
  //   div_btn_click=true;
  //   bg_click=true;
  //   print("touched")
  // })

  message = message_create();
  chat_text = $("#chat_text");
  chat_text.click(function(){
    text_click=true;
    touched=true;
    //print("touched")
  })




  div_half=$(".div-half");

  div_bg.html('<img id="background"></img>')
  bg = $("#background");
  v=clone(v_init)


  //text.setNString("喵到了到了无可放假了无可减肥来我空间俄方为了减肥无可放假了无可减肥来我空间俄方为了减肥").start()
  //
  message.hide()

    function center(obj) {  
      
            obj.css('position','absolute');  
             obj.css('top', ( $(window).height() - obj.height() ) / +$(window).scrollTop() + 'px');  
             obj.css('left', ( $(window).width() - obj.width() ) / 2+$(window).scrollLeft() -sx/2+ 'px');  
             return obj;  
        
    }
    center($(".div-relative"))

    


}







section = {}
section.cover = eval(Wind.compile("async", function() {

  
  $await(ts(res.cover))
    //div_text.empty()
  div_text.append("<h1 class='logo-title'>三分钟自我介绍视频</h1>")
  div_btn.html('<button indexx=0 class="cover_btn button  button-rounded button-raised button-caution" id="cover_btn1" style="position: relative;top:240px;">开始人生</button> \
      <br/> \
      <button indexx=1 id="cover_btn2" class="cover_btn button  button-raised button-rounded button-primary" href="langshenjiao/index.html" style="position: relative;top:260px;">读取进度</button> \
      <br/> \
      <button indexx=2 id="cover_btn3" class="cover_btn button  button-raised button-rounded button-primary" style="position: relative;top:280px;">关于</button> \
      <br/> \
      <br/>')

  $('.div-btn').click(function() {
    console.log("click big")
  })
  $('.div-text').click(function() {
    console.log("click c")

  })
  $('.logo-title').addClass('animated zoomIn');


  $(".cover_btn").mouseover(
    function(e) {
      var eve = e || window.event;
      eve.preventDefault();
      var index = $(this).context.attributes.indexx.value
      var ac = []
      ac[0] = "swing"
      ac[1] = "rubberBand"
      ac[2] = "tada"
      $(this).addClass('animated ' + ac[index]).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function() {
          $(this).removeClass('animated ' + ac[index]);
        });
    })
  $(".cover_btn#cover_btn1").click(
    function() {
      cover_order_set(0);

    })




  $await(cover_order_wait(0)); //btn start

  console.log("click little")
    //$('.logo-title').addClass('animated hinge')
  $('.logo-title').removeClass('animated zoomIn');
  $('.logo-title').addClass('animated hinge').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function() {

      $(this).removeClass('animated hinge')
      cover_order_set(1)
      $(this).remove();
        //$(this).addClass('animated fadeOut')

    });
  $await(cover_order_wait(1)); //title leave
  $(".cover_btn#cover_btn1").addClass('animated bounceOut')
  $await(delay(300))
  $(".cover_btn#cover_btn2").addClass('animated bounceOut')
  $await(delay(300))
  $(".cover_btn#cover_btn3").addClass('animated bounceOut').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    function() {
      cover_order_set(2)
    });


  $await(cover_order_wait(2)); //btns leave
  $(".cover_btn#cover_btn1").remove()
  $(".cover_btn#cover_btn2").remove()
  $(".cover_btn#cover_btn3").remove()
}))
var main = eval(Wind.compile("async", function() {
  main_init()

  $await(preload())

  while(1)
  {
    if(game_over)
    {
      game_over=false;
    //  $await(section.cover())
       $await(section.start())
     // $await(section.xuanjianghui())
    }
  }

  
}))

function cover_order_clear(index) {
  cover_order[index] = false;
}
function cover_order_set(index) {
  cover_order[index] = true;
}


var cover_order_wait = eval(Wind.compile("async", function(index) {
  while (!cover_order[index]) {
    $await(delay(100))
  }
  cover_order_clear(index)
}))
