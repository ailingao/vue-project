<!--
 * @Description: 
 app下载入口组件,组件内直接引用
 * @version: 
 * @Company: ule.com
 * @Author: ailin
 * @LastEditors: ailin
 * @Date: 2019-04-29 13:17:54
 * @LastEditTime: 2019-05-07 13:09:48
 -->
<template>
  <div class="download" v-show="isShow" :style="top?'':'top:0;'">
    <div class="opacity"></div>
    <div class="download_rec clearfix">
      <img src="//i1.ulecdn.com/i/event/2015/0624/logo.png">
      <div>
        <p>下载邮乐app</p>
        <p>立享新人礼包115元</p>
      </div>
      <a href="javascript://" class="downloadBtn active" title="立即下载">立即下载</a>
      <em id="close" @click="close">×</em>
    </div>
  </div>
</template>

<script>
export default {
    data () {
      return {
        isShow:true,
        top:true
      }
    },
    created(){
      this.init();
    },
    mounted(){
      window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
    },
    methods:{
      close(){
        this.isShow=false;
        this.$store.commit('decrement');
      },
      handleScroll(){
        let scrollTop  = document.documentElement.scrollTop  || document.body.scrollTop  || window.pageYOffset;  
        console.log(scrollTop)
        // 滚动条滚动高度
        if(scrollTop>50){
          this.$store.commit('decrement');
          this.isShow=false;
        }else{
          this.$store.commit('increment');
          this.isShow=true;
        }
      },
      init(){
        if ($.browser.ule || $.browser.uzg || $.browser.ylxd) {
          this.isShow=false;
        }
        if (location.href.indexOf('client=app_ylxd') > 0) {
          this.isShow=false;
        }
        if (location.href.indexOf('ishead=false') > 0) {
          this.top=false;
        }
      }
    },
    destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .download{
    display: block;
    width: 100%;
    max-width: 640px;
    position: fixed;
    top: 40px;
    height: 54px;
    z-index: 6;
    left: 0px;
    transform-origin: 0px 0px;
    opacity: 1;
    transform: scale(1, 1);
  }
  .opacity{
    background: rgb(0, 0, 0);
    opacity: 0.7;
    height: 64px;
    left: 0px;
    top: 0px;
  }
  .download img{
    width: 40px;
    position: absolute;
    margin-right: 6px;
    left: 37px;
    top: 12px;
  }
  .download .download_rec{
    height: 54px;
    position: absolute;
    left: 0px;
    top: 0px;
    padding: 13px 95px 6px 84px;
    width: 100%;
    max-width: 640px;
    box-sizing: border-box;
  }
  .download .downloadBtn{
    float: right;
    width: 74px;
    height: 30px;
    line-height: 30px;
    background: rgb(245, 38, 38);
    color: rgb(255, 255, 255);
    border-radius: 20px;
    text-align: center;
    font-size: 12px;
    margin-top: -15px;
    position: absolute;
    right: 10px;
    top: 50%;
  }
  .download #close{
    display: inline-block;
    color: rgb(255, 255, 255);
    line-height: 20px;
    font-size: 16px;
    width: 20px;
    height: 20px;
    text-align: center;
    background: rgb(38, 38, 38);
    border-radius: 50%;
    position: absolute;
    left: 7px;
    top: 50%;
    margin-top: -6px;
  }
  .download_rec p,.download_rec span{
    font-size: 14px;
    color: rgb(255, 255, 255);
    width: 100%;
    line-height: 20px;
  }
</style>
