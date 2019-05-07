<template>
  <div id="app" :style="downLoadState?'margin-top:64px;':''">
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
      shopurl: {
          ule: 'uleMobile://uleVi_',
          uleH: '//m.' + URL.doMain + '/item/detail/',
          ylxd: '//m.' + URL.doMain + '/mxiaodian/item/preview/',
          ylxdH: '//m.' + URL.doMain + '/mxiaodian/item/detail/'
      },
    }
  },
  mounted(){
    //Start 是否APP打开页面
    if (!(this.BASE.$browser().ule || this.BASE.$browser().uzg || this.BASE.$browser().ylxd) && location.href.indexOf('client=mobile') > 0) {
        this.BASE.autoOpenUleApp('ule')
    }
    //End 是否APP打开页面
  },
  created(){
    this.BASE.share('一只鸭蛋的旅途_安徽站免单_高邮咸鸭蛋_邮乐网','高邮咸鸭蛋专场-一只鸭蛋的旅途，到达安徽站!邮乐咸鸭蛋免单活动，30免1,15免1,10免1等免单比例！更多咸鸭蛋免单优惠就在邮乐高邮咸鸭蛋活动');
    if (this.BASE.$browser().ylxd) {
        // 判断是否小店
        this.isYlxd = true;
        // 获取用户id
        this.getUserId();
    }
    if (this.BASE.$browser().ylxd || location.href.indexOf('app_ylxd') !== -1) {
        this.ylxdH = true;
    } else {
    }
    if (location.href.indexOf('client=app_ylxd') > 0) {
        this.getUserId();
    }
    // 判断普通商品链接
    if (this.BASE.$browser().ule) {
        this.hrefLink = this.shopurl.ule;
    } else if (this.BASE.$browser().ylxd) {
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
  computed:{
      downLoadState(){
          return this.$store.getters.dowmLoadState;
      }
  },
  methods:{
    GetQueryString: function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },
    getUserId: function() { //取邮乐小店useronlyid（storeid）
        var m = this;
        this.HTTP.getUserId().then((res) => {
            m.storeId = response.data.useronlyid;
            if ((!response.data.useronlyid) && location.href.indexOf('client=app_ylxd') > 0) {
                m.storeId = m.GetQueryString("storeid");
            }
            //console.log(m.storeId);
            if (m.BASE.$browser().ylxd) {
                m.hrefLink2 = '.html?storeid=' + m.storeId + '&imageType=xl&client_type=app_ylxd&preview=1';
                m.hrefLink2pin = '&client=app_ylxd&storeid=' + m.storeId + '&ishead=false';
                m.hrefLink2nong = '?client=app_ylxd&storeid=' + m.storeId;
            }
            if (location.href.indexOf('client=app_ylxd') > 0) {
                m.hrefLink2 = '.html?storeid=' + m.storeId + '&imageType=xl&client_type=app_ylxd&preview=1';
                m.hrefLink2pin = '&client=app_ylxd&storeid=' + m.storeId + '&ishead=false';
                m.hrefLink2nong = '?client=app_ylxd&storeid=' + m.storeId + '&from=singlemessage';
            }
        }).catch(err=>{
            m.storeId = 'null';
            console.log(err);
        });
    },
  },
}
</script>

<style>
@import "./assets/css/init.css";
</style>
