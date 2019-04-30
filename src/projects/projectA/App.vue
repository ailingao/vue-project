<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import "../../commom/assets/js/zepto_yl.min.js";
import * as URL from '../../commom/assets/js/url.js'
(function(doc, win) { // rem 自适应
    var defaulfFontSize = '85.3333333px';
    var docEl = doc.documentElement,
        // docEl.style.fontSize = defaulfFontSize + 'px';
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth > 640) {
                docEl.style.fontSize = defaulfFontSize;
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
var wholeWhare = { "title": "一只鸭蛋的旅途_安徽站免单_高邮咸鸭蛋_邮乐网", "content": "高邮咸鸭蛋专场-一只鸭蛋的旅途，到达安徽站!邮乐咸鸭蛋免单活动，30免1,15免1,10免1等免单比例！更多咸鸭蛋免单优惠就在邮乐高邮咸鸭蛋活动" };
var userOnlyId = '';
/* 全局调用 分享 */
var shareCall = function() {
    var title = wholeWhare.title,
        content = wholeWhare.content,
        imgUrl = "https://i0.ulecdn.com/i/event/2018/0511/duanwu/logo2.png",
        // 需获取url
        linkUrl = location.href + '?client=app_ylxd&storeid=' + userOnlyId;
    var linkStr = title + "##" + content + "##" + imgUrl + "##" + linkUrl + "&&WX##WF##QQ";
    if ($.browser.android) {
        window.group.jsMethod(linkStr);
    } else if ($.browser.ios) {
        return linkStr;
    } else {
        return linkStr;
    }
};
window.shareCall = shareCall;
export default {
  name: 'App',
  data(){
    return {
      storeId: 'null',
      isYlxd: false,
      isuleApp: false,
      navjian: 'none', //控制nav 展开按钮
      hrefLink: '//m.ule.com/item/detail/', //浏览器里面链接
      hrefLink2: '', //浏览器里面链接
      hrefLink2pin: '', //pinlei后
      hrefLink2nong: '', //农品
      url: {
          cookieInfo: '//my.' + JEND.server.uleUrl + '/usr/getIndexCookies.do', //获取cookie信息
          dwRecommond: '//static-content.ulecdn.com/mobilead/recommond/dwRecommond.do?' //商品广告推荐位
      },
      shopurl: {
          ule: 'uleMobile://uleVi_',
          uleH: '//m.' + URL.doMain + '/item/detail/',
          ylxd: '//m.' + URL.doMain + '/mxiaodian/item/preview/',
          ylxdH: '//m.' + URL.doMain + '/mxiaodian/item/detail/'
      },
      hideDownApp: false,
      url: {
          cookieInfo: '//my.' + JEND.server.uleUrl + '/usr/getIndexCookies.do', //获取cookie信息
      },
    }
  },
  mounted(){
    var that = this;
    that.sollTop(); //返回顶部
    //Start 是否APP打开页面
    that.downloadHtml()
    if (!($.browser.ule || $.browser.uzg || $.browser.ylxd) && location.href.indexOf('client=mobile') > 0) {
        that.autoOpenUleApp('ule')
    }
    $(".downloadBtn").on('click', function() {
        that.autoOpenUleApp('ule', 'pagetype')
    });
    that.scrollEvent()
    $(window).scroll(function(event) {
        if (!(that.hideDownApp)) {
            that.scrollEvent()
        }
    });

    if ($.browser.ule || $.browser.uzg || $.browser.ylxd) {
        $('.download').hide();
    }
    if (location.href.indexOf('client=app_ylxd') > 0) {
        $('.download').hide();
    }
    //End 是否APP打开页面
  },
  created(){
    this.scoll();
    if ($.browser.ylxd) {
        // 判断是否小店
        this.isYlxd = true;
        // 获取用户id
        this.getUserId();
    }
    if ($.browser.ylxd || location.href.indexOf('app_ylxd') !== -1) {
        this.ylxdH = true;
    } else {
    }
    if (location.href.indexOf('client=app_ylxd') > 0) {
        this.getUserId();
    }
    // 判断普通商品链接
    if ($.browser.ule) {
        this.hrefLink = this.shopurl.ule;
    } else if ($.browser.ylxd) {
        var _title = $('title').text();
        dsBridge.call('setNativeTitle', { 'title': _title });
        this.hrefLink = this.shopurl.ylxd;
    } else {
        if (location.href.indexOf('app_ylxd') !== -1) {
            this.hrefLink = this.shopurl.ylxdH;
        } else {
            this.hrefLink = this.shopurl.uleH;
        }
    }
  },
  methods:{
    // 头部导航
    scoll: function() {
        var m = this,
            navfix = 'nav_fix';
        // 判断是否出头部
        if (!($.browser.ule || $.browser.uzg || $.browser.ylxd || location.href.indexOf('app_ylxd') !== -1 || location.href.indexOf('client=psbc_wx') !== -1)) {
            JEND.innerHead.init();
            m.Params = JEND.innerHead.getParams();
            if (m.Params.ishead == "false") {
                $(".download").css({ "top": "0px" });
                navfix = 'nav_fix3';
            } else {
                navfix = 'nav_fix2';
            }
        };
        JEND.load.add('scoll2', { js: 'https://i0.ulecdn.com/j/app/event/2018/0511/nine3c/scoll.js' });
        JEND.load('scoll2', function() {
            m.NavScoll('js_nav', 'nav_jian', true, navfix);
        });
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
            $(".coll_bott ul li a").each(function() {
                var myDate, myDate2, startX, endx;
                this.addEventListener('touchstart', function(e) {
                    myDate = Date.parse(new Date());
                    startX = e.changedTouches[0].pageX;
                });
                this.addEventListener('touchend', function(e) {
                    myDate2 = Date.parse(new Date());
                    endx = e.changedTouches[0].pageX;
                    if (Math.abs(endx - startX) < 1) {
                        window.location.href = $(this).attr("data-href")
                    }
                });
            })
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
    GetQueryString: function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },
    getUserId: function() { //取邮乐小店useronlyid（storeid）
        var m = this;
        Vue.http.jsonp(m.url.cookieInfo, { jsonp: "jsonCallBack", jsonpCallback: 'js12' }).then(function(response) {
            m.storeId = response.data.useronlyid;
            if ((!response.data.useronlyid) && location.href.indexOf('client=app_ylxd') > 0) {
                m.storeId = m.GetQueryString("storeid");
            }
            //console.log(m.storeId);
            if ($.browser.ylxd) {
                m.hrefLink2 = '.html?storeid=' + m.storeId + '&imageType=xl&client_type=app_ylxd&preview=1';
                m.hrefLink2pin = '&client=app_ylxd&storeid=' + m.storeId + '&ishead=false';
                m.hrefLink2nong = '?client=app_ylxd&storeid=' + m.storeId;
            }
            if (location.href.indexOf('client=app_ylxd') > 0) {
                m.hrefLink2 = '.html?storeid=' + m.storeId + '&imageType=xl&client_type=app_ylxd&preview=1';
                m.hrefLink2pin = '&client=app_ylxd&storeid=' + m.storeId + '&ishead=false';
                m.hrefLink2nong = '?client=app_ylxd&storeid=' + m.storeId + '&from=singlemessage';
            }
        }, function(response) {
            m.storeId = 'null';
        })
    },
    //  滚动到头部按钮
    sollTop: function() {
        $(window).scroll(function() {
            var wt2 = $(window).scrollTop();
            if (wt2 > 800) {
                $(".fixed_btn").addClass("fixed_show")
            } else {
                $(".fixed_btn").removeClass("fixed_show")
            }
        });
        $(".go_back").click(function() {
            $("html, body").scrollTop(0)
        })
    },
    //直接跳转参数传一个，点击跳转参数传两个
    autoOpenUleApp: function(apptype, pagetype) {
        var title = document.title;
        var pageUrl = location.href.sliceAfter('com');
        var myUrl = pageUrl.replace(/client=mobile&?|&?client=mobile/, '');
        var uleUrl = location.host.substring(location.host.indexOf('.') + 1);
        if (apptype == 'ule') {
            if ($.browser.android) {
                var schemes = 'ulebuy://ProductActivity&&wgt.ProductDetail&&url::https://' + uleUrl + myUrl + '##title::' + title;
                if (arguments.length == 2) {
                    setTimeout(function() {
                        window.location = '//a.app.qq.com/o/simple.jsp?pkgname=com.tom.ule.ui&g_f=994283';
                    }, 2000);
                }
                var s = document.createElement("div");
                s.style.visibility = "hidden";
                s.innerHTML = '<iframe src="' + schemes + '" scrolling="no" width="1" height="1"></iframe>';
                document.body.appendChild(s);
            } else {
                var link = 'ulebuy://WEBVIEW%%%hideNavgationBar^^^0///title^^^' + title + '///key^^^https://' + uleUrl + myUrl + '///hasxib^^^0'
                if (arguments.length == 2) {
                    setTimeout(function() {
                        window.location = '//a.app.qq.com/o/simple.jsp?pkgname=com.tom.ule.ui&g_f=994283';
                    }, 2000);
                }
                window.location.href = encodeURI(link);
            }
        }
    },
    scrollEvent: function() {
        var scrollTop = $(window).scrollTop()
        if (!($.browser.ule || $.browser.uzg || $.browser.ylxd)) {
            if (scrollTop > 50) {
                $("body").attr('id', '');
                $(".download").hide();
                $("#app").css('margin-top', '0');
            } else if (scrollTop < 49) {
                $("body").attr('id', 'fixdown');
                $(".download").show();
                $("#fixdown #app").css('margin-top', '64px');
            }
        }
    },
    // app打开和下载处理    
    downloadHtml: function() {
        var _that = this
        const htmlCont = "<div class='download' style='display: block; transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);'>" +
            "<div class='opacity'></div>" +
            "<div class='download_rec clearfix'>" +
            "<img src='//i1.ulecdn.com/i/event/2015/0624/logo.png'>" +
            "<div><p>下载邮乐app</p><p>立享新人礼包115元</p></div>" +
            "<a href='javascript://' class='downloadBtn active' title='立即下载'>立即下载</a>" +
            "<em id='close'>×</em>" +
            "</div>" +
            "</div>"
        $("body").append(htmlCont);
        $(".download").css({
            "width": "100%",
            "max-width": "640px",
            "position": "fixed",
            "top": "40px",
            "height": "54px",
            "z-index": "6",
            "left": "0"
        });
        $(".download img").css({
            "width": "40px",
            "position": "absolute",
            "margin-right": "6px",
            "left": "37px",
            "top": "12px"
        });
        $(".download .opacity").css({
            "background": "#000",
            "opacity": ".7",
            "height": "64px",
            "left": "0",
            "top": "0"
        });
        $("#searbg,#searbg.level0").css({
            "opacity": "0"
        });
        $(".download .download_rec").css({
            "height": "54px",
            "position": "absolute",
            "left": "0",
            "top": "0",
            "padding": "13px 95px 6px 84px",
            "width": "100%",
            "max-width": "640px",
            "box-sizing": "border-box"
        });
        $(".download .downloadBtn").css({
            "float": "right",
            "width": "74px",
            "height": "30px",
            "line-height": "30px",
            "background": "#f52626",
            "color": "#fff",
            "border-radius": "20px",
            "text-align": "center",
            "font-size": "12px",
            "margin-top": "5px",
            "position": "absolute",
            "right": "10px",
            "top": "50%",
            "margin-top": "-15px"
        });
        $(".download #close").css({
            "display": "inline-block",
            "color": "#fff",
            "line-height": "20px",
            "font-size": "16px",
            "width": "20px",
            "height": "20px",
            "text-align": "center",
            "background": "#262626",
            "border-radius": "50%",
            "position": "absolute",
            "left": "7px",
            "top": "50%",
            "margin-top": "-6px"
        });
        $(".download_rec p,.download_rec span").css({
            "font-size": "14px",
            "color": "#fff",
            "width": "100%",
            "line-height": "20px"
        })
        $('.download #close').click(function() {
            _that.hideDownApp = true
            $('.download').hide();
            $("body").attr('id', '')
            $(".download").hide()
            $("#app").css('margin-top', '0');
            $("h3.title.fixed").css('top', '0');
        })
        if ($.browser.ule || $.browser.uzg || $.browser.ylxd) {
            $('.download').hide();
        }
        if (location.href.indexOf('client=app_ylxd') > 0) {
            $('.download').hide();
        }
        if (location.href.indexOf('ishead=false') > 0) {
            $(".download").css({
                "top": "0"
            });
        }
    },
  }
}
</script>

<style>
@import "./assets/css/init.css";
</style>
