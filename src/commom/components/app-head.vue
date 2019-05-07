<!--
 * @Description: 
 公用头部组件
 * @version: 
 * @Company: ule.com
 * @Author: ailin
 * @LastEditors: ailin
 * @Date: 2019-04-29 13:17:54
 * @LastEditTime: 2019-05-07 17:19:26
 -->
<template>
<div>
  <!-- <h3 class="headTitle fix">
    <a href="javascript:history.back();" class="back"></a>
    <p>测试</p>
    <a href="javascript:;" class="classfiy"></a>
  </h3>

  <div class="classfiy_pop">
    <div class="mask"></div>
    <ul class="classfiy_nav">
      <li class="homeLi"><a href="//this.ule.com/"><b></b>首页</a></li>
      <li class="classfiyLi"><a href="//this.ule.com/category/all.html" ><b></b>分类</a></li>
      <li class="cartLi"><a href="//this.ule.com/cart/list"><b ></b>购物车</a></li>
      <li class="my_centerLi"><a href="//this.ule.com/user/center"><b></b>我的邮乐</a></li>
    </ul>
  </div> -->
</div>
  
</template>

<script>
export default {
  data(){
    return {

    }
  },
  created(){
    this.info();
  },
  methods:{
    info(){
      var navfix = 'nav_fix';
      // 判断是否出头部
      if (!(this.BASE.$browser().ule || this.BASE.$browser().uzg || this.BASE.$browser().ylxd || location.href.indexOf('app_ylxd') !== -1 || location.href.indexOf('client=psbc_wx') !== -1)) {
          this.init();
          this.Params = this.getParams();
          if (this.Params.ishead == "false") {
              $(".download").css({ "top": "0px" });
              navfix = 'nav_fix3';
          } else {
              navfix = 'nav_fix2';
          }
      };
      this.NavScoll('js_nav', 'nav_jian', true, navfix);
    },
    init: function() {
      var oThis = this;
      var Params = oThis.getParams();
      if (Params.ishead == "false") {
          $("body").css({
              "padding-top": "0px"
          });
          $('<style>nav.fixed{top:0px;}</style>').appendTo('head')
      } else {
          oThis.headHtml();
          oThis.popHtml()
      }
      oThis.getPageUrl = oThis.getParams();
      var skipApp = oThis.getPageUrl.skipApp;
      if (skipApp == 'true') {
          oThis.skipApp()
      }
    },
    headHtml: function() {
        var headHtml = '';
        var headTitle = document.title;
        var fix = "fix";
        if (headTitle == '') {
            headTitle = '活动'
        } else if (headTitle == "邮乐触屏版 - 订单取消进度") {
            headTitle = "订单取消进度"
        } else if (headTitle == "邮乐特卖") {
            headTitle = "天天特卖"
        } else if (headTitle == "生活缴费-订单中心") {
            headTitle = "订单中心"
        }
        $("body").css({
            "padding-top": "40px"
        });
        $('<style>nav.fixed{top:40px;}</style>').appendTo('head');
        if ($.browser.ule) {
            if ($.browser.ios) {
                if ($.browser.version > 367) {
                    $("body").css({
                        "padding-top": "60px"
                    });
                    $('<style>nav.fixed{top:60px;}</style>').appendTo('head')
                }
            }
        }
        headHtml = '<h3 class="headTitle ' + fix + '"><a href="javascript:history.back();" class="back"></a><p>' + headTitle + '</p><a href="javascript:;" class="classfiy"></a></h3>';
        $('body').prepend(headHtml)
    },
    popHtml: function() {
        var m = this;
        var popHtml = '';
        popHtml += '<div class="classfiy_pop">';
        popHtml += '<div class="mask"></div>';
        popHtml += '<ul class="classfiy_nav">';
        popHtml += '<li class="homeLi"><a href="//m.ule.com/"><b></b>首页</a></li>';
        popHtml += '<li class="classfiyLi"><a href="//m.ule.com/category/all.html"><b></b>分类</a></li>';
        popHtml += '<li class="cartLi"><a href="//m.ule.com/cart/list"><b></b>购物车</a></li>';
        popHtml += '<li class="my_centerLi"><a href="//m.ule.com/user/center"><b></b>我的邮乐</a></li>';
        popHtml += '</ul>';
        popHtml += '</div>';
        $('body').append(popHtml);
        $(".classfiy").click(function() {
            $(".classfiy_pop").show()
        });
        $(".classfiy_pop").click(function() {
            $(".classfiy_pop").hide()
        });
        var defultTitleH = '0';
        var appTitleH = '20px';
        var defultBackTop = '12px';
        var appBackTop = '32px';
        $(".headTitle").css({
            "max-width": "640px",
            "background": "rgba(255,255,255,0.95)",
            "width": "100%",
            "position": "relative",
            "border-bottom": "1px solid rgba(255,255,255,0.95)",
            "margin": "0",
            "padding": defultTitleH
        });
        $(".headTitle.fix").css({
            "position": "fixed",
            "top": "0px",
            "left": "auto",
            "z-index": "100"
        });
        $(".headTitle p").css({
            "width": "70%",
            "margin": "0 auto",
            "height": "40px",
            "line-height": "40px",
            "font-family": "microsoft yahei",
            "color": "#333",
            "text-align": "center",
            "font-size": "16px",
            "font-weight": "400",
            "overflow": "hidden",
            "white-space": "nowrap",
            "text-overflow": "ellipsis"
        });
        $(".headTitle a.back").css({
            "position": "absolute",
            "height": "14px",
            "width": "14px",
            "left": "15px",
            "top": defultBackTop,
            "border-top": "2px solid #666",
            "border-left": "2px solid #666",
            "transform": "rotate(-45deg)",
            "-webkit-transform": "rotate(-45deg)"
        });
        var headTitle = document.title;
        if (headTitle == "邮乐特卖" || headTitle == "邮乐触屏版 - 订单取消进度" || headTitle == "邮乐触屏版 - 可用商品") {
            $('.headTitle a.classfiy').remove()
        }
        if ($.browser.ule) {
            $('.headTitle .back').attr('href', 'ulemobile://ulePopView');
            $('.headTitle a.classfiy').remove()
        }
        $('.headTitle a.classfiy').css({
            'background': 'url(//i0.ulecdn.com/ulewap/i/goodsDetail/icon-more.png) center center no-repeat',
            'height': '40px',
            'display': 'inline-block',
            'background-size': '30px',
            'width': '50px',
            'margin-right': '0',
            'position': 'absolute',
            'right': '0',
            'top': '0'
        });
        $('.classfiy_pop').css({
            'background-color': 'rgba(0, 0, 0, 0.3)',
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'z-index': '100',
            'width': '100%',
            'height': '100%',
            'display': 'none'
        });
        $('.classfiy_pop .mask').css({
            'z-index': '101',
            'position': 'fixed',
            'top': '0',
            'left': '0',
            'width': '100%',
            'height': '100%'
        });
        $('.classfiy_nav').css({
            'position': 'fixed',
            'right': '0',
            'top': '40px',
            'background': '#fff',
            'border-radius': ' 0 0 0 5px',
            'z-index': '102'
        });
        $('.classfiy_nav li').css({
            'height': '40px',
            'line-height': '40px',
            'border-bottom': '1px solid #ccc',
            'width': '110px'
        });
        $('.classfiy_nav li:last-child').css({
            'border-bottom': 'none',
            'border-radius': '0 0 0 5px'
        });
        $('.classfiy_nav li a').css({
            'height': '40px',
            'line-height': '40px',
            'display': 'block',
            'box-sizing': 'border-box',
            'width': '100%',
            'color': '#333',
            'padding': '0 0 0 10px',
            'border-left': '2px solid #fff',
            'font-size': '16px'
        });
        $('.classfiy_nav li b').css({
            'width': '22px',
            'height': '24px',
            'background': 'url(//i0.ulecdn.com/ulewap/i/classfiyNav_icon.png) -9999px -9999px no-repeat',
            'background-size': '91px 46px',
            'margin': '0 5px 0 0',
            'display': 'inline-block',
            'vertical-align': 'middle'
        });
        $('.classfiy_nav li.homeLi b').css({
            'background-position': '0 1px',
            'background-size': '91px 46px'
        });
        $('.classfiy_nav li.classfiyLi b').css({
            'background-position': '-24px 1px',
            'background-size': '91px 46px'
        });
        $('.classfiy_nav li.cartLi b').css({
            'background-position': '-48px 1px',
            'background-size': '91px 46px'
        });
        $('.classfiy_nav li.my_centerLi b').css({
            'background-position': '-72px 1px',
            'background-size': '91px 46px'
        });
        $('.classfiy_nav .homeLi.current b').css({
            'background-position': '0 -23px',
            'background-size': '91px 46px'
        });
        $('.classfiy_nav .classfiyLi.current b').css({
            'background-position': '-24px -23px',
            'background-size': '91px 46px'
        });
        $('.classfiy_nav .cartLi.current b').css({
            'background-position': '-48px -23px',
            'background-size': '91px 46px'
        });
        $('.classfiy_nav .my_centerLi.current b').css({
            'background-position': '-72px -23px',
            'background-size': '91px 46px'
        });
        $('.classfiy_nav li a:hover').css({
            'text-decoration': 'none',
            'color': '#333'
        });
        $('.classfiy_nav li.current a').css({
            'border-left': '2px solid #f52626',
            'color': '#f52626'
        });
        if ($.browser.ule) {
            if ($.browser.ios) {
                if (parseInt($.browser.version) > 367) {
                    $(".headTitle").css({
                        "padding-top": "20px"
                    });
                    $(".headTitle a.back").css({
                        "top": "32px"
                    });
                    $(".headTitle a.classfiy").css({
                        "top": "20px"
                    })
                }
            }
        }
    },
    getParams: function() {
        var data = {};
        var href = location.href;
        var paramStr = href.substring(href.indexOf("?") + 1);
        var paramArr = paramStr.split("&");
        for (var i = 0; i < paramArr.length; i++) {
            var item = paramArr[i];
            var keyVal = item.split("=");
            var val = item.slice(item.indexOf("=") + 1);
            data[keyVal[0]] = val
        }
        return data
    },
    skipApp: function() {
        var headTitle = document.title;
        var pageUrl = location.href.sliceAfter('com');
        var myUrl = pageUrl.replace(/skipApp=true&?|&?skipApp=true/, '');
        var uleUrl = location.host.substring(location.host.indexOf('.') + 1);
        if ($.browser.ios) {
            location.href = encodeURI('ulebuy://WEBVIEW%%%hideNavgationBar^^^0///title^^^' + headTitle + '///key^^^https://' + uleUrl + myUrl + '///hasxib^^^0')
        } else if ($.browser.android) {
            location.href = encodeURI('ulebuy://ProductActivity&&wgt.ProductDetail&&url::https://' + uleUrl + myUrl + '##title::' + headTitle)
        }
    },
    NavScoll: function(navclass, arrowCl, judscoll, fixnaclass) {
        var window_w = $(window).width();
        var liArr = [];
        var li_and = 0;
        var li_id_arr = []; //存放相对应的id
        var hom_tianjia = 0;
        var nav_dakai = true;
        $(window).scroll(function() {
            var modtopArr = [];
            for (var i = 0; i < li_id_arr.length; i++) {
                modtopArr.push($("#" + li_id_arr[i]).offset().top);
            }
            var wt = $(window).scrollTop();
            for (var i = 0; i < modtopArr.length; i++) {
                if (i == 0) {
                    if (wt < modtopArr[i + 1]) {
                        scoll_nav(i)
                    }
                } else if (i == modtopArr.length - 1) {
                    if (wt > modtopArr[i] - 80) {
                        scoll_nav(i)
                    }
                } else {
                    if (wt > modtopArr[i] - 80 && wt < modtopArr[i + 1] - 80) {
                        scoll_nav(i)
                    }
                }
            }
            //处理滑动加载页面跳转的问题
            // $(".coll_bott ul li a").each(function() {
            //     var myDate, myDate2, startX, endx;
            //     this.addEventListener('touchstart', function(e) {
            //         myDate = Date.parse(new Date());
            //         startX = e.changedTouches[0].pageX;
            //     });
            //     this.addEventListener('touchend', function(e) {
            //         myDate2 = Date.parse(new Date());
            //         endx = e.changedTouches[0].pageX;
            //         if (Math.abs(endx - startX) < 1) {
            //             window.location.href = $(this).attr("data-href")
            //         }
            //     });
            // })
        });

        function scoll_nav(e) {
            var nav_left = 0;
            if (judscoll) {
                for (var i = 0; i < +e; i++) {
                    nav_left += liArr[i];
                }
                if (-nav_left + window_w / 2 - liArr[e] / 2 < 0) {
                    if (-nav_left + window_w / 2 - liArr[e] / 2 < -(li_and - window_w + jian_w)) {
                        nav_left = -(li_and - window_w + jian_w)
                    } else {
                        nav_left = -nav_left + window_w / 2 - liArr[e] / 2
                    }
                } else {
                    nav_left = 0;
                }
            }
        }
        function nav_diankai() {
            if (nav_dakai) {
                nav_dakai = false;
                myScroll.scrollTo(0, 0);
                myScroll.options.scrollX = false;
            } else {
                nav_dakai = true;
                myScroll.options.scrollX = true;
                myScroll.scrollTo(hom_tianjia, 0);
            }
            myScroll.refresh();
        }
    },
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .headTitle{
    max-width: 640px;
    background: rgba(255, 255, 255, 0.95);
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.95);
    margin: 0px;
    padding: 0px;
    position: fixed;
    top: 0px;
    left: auto;
    z-index: 100;
  }
  .headTitle .back{
    position: absolute;
    height: 14px;
    width: 14px;
    left: 15px;
    top: 12px;
    border-top: 2px solid rgb(102, 102, 102);
    border-left: 2px solid rgb(102, 102, 102);
    transform: rotate(-45deg);
  }
  .headTitle p{
    width: 70%;
    margin: 0px auto;
    height: 40px;
    line-height: 40px;
    font-family: "microsoft yahei";
    color: rgb(51, 51, 51);
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .headTitle .classfiy{
    background: url(//i0.ulecdn.com/ulewap/i/goodsDetail/icon-more.png) center center / 30px no-repeat;
    height: 40px;
    display: inline-block;
    width: 50px;
    margin-right: 0px;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .classfiy_pop{
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 100;
    width: 100%;
    height: 100%;
    transform-origin: 0px 0px;
    opacity: 1;
    transform: scale(1, 1);
  }
  .classfiy_pop .mask{
    z-index: 101;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
  .classfiy_nav{
    position: fixed;
    right: 0px;
    top: 40px;
    background: rgb(255, 255, 255);
    border-radius: 0px 0px 0px 5px;
    z-index: 102;
  }
  .classfiy_nav li{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgb(204, 204, 204);
    width: 110px;
  }

  .classfiy_nav .my_centerLi{
    border-bottom: none;
    border-radius: 0px 0px 0px 5px;
  }
  .classfiy_nav li a{
    height: 40px;
    line-height: 40px;
    display: block;
    box-sizing: border-box;
    width: 100%;
    color: rgb(51, 51, 51);
    padding: 0px 0px 0px 10px;
    border-left: 2px solid rgb(255, 255, 255);
    font-size: 16px;
  }
  .classfiy_nav li a b{
    width: 22px;
    height: 24px;
    margin: 0px 5px 0px 0px;
    display: inline-block;
    vertical-align: middle;
  }
  .classfiy_nav .homeLi a b{
    background: url(//i0.ulecdn.com/ulewap/i/classfiyNav_icon.png) 0px 1px / 91px 46px no-repeat;
  }
  .classfiy_nav .classfiyLi a b{
    background: url(//i0.ulecdn.com/ulewap/i/classfiyNav_icon.png) -24px 1px / 91px 46px no-repeat;
  }
  .classfiy_nav .cartLi a b{
    background: url(//i0.ulecdn.com/ulewap/i/classfiyNav_icon.png) -48px 1px / 91px 46px no-repeat;
  }
  .classfiy_nav .my_centerLi a b{
    background: url(//i0.ulecdn.com/ulewap/i/classfiyNav_icon.png) -72px 1px / 91px 46px no-repeat;
  }
</style>
