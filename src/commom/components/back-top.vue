<!--
 * @Description: 
 返回顶部按钮组件,组件内直接引用
 * @version: 
 * @Company: ule.com
 * @Author: ailin
 * @LastEditors: ailin
 * @Date: 2019-04-29 13:17:54
 * @LastEditTime: 2019-05-05 10:17:19
 -->
<template>
  <div class="fixed_btn" :class="isShow?'fixed_show':''">
    <a class="go_back" href="javascript:void(0);" @click="backTop"></a>
  </div>
</template>

<script>
export default {
    data () {
      return {
        isShow:false,
        scrollTop:''
      }
    },
    mounted(){
      window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
    },
    methods:{
      handleScroll(){
        let scrollTop  = document.documentElement.scrollTop  || document.body.scrollTop  || window.pageYOffset;  
        this.scrollTop=scrollTop;
        // 滚动条滚动高度
        if(scrollTop>=800){
          this.isShow=true;
        }else{
          this.isShow=false;
        }
      },
      backTop(){
        // $("html, body").scrollTop(0);
        let that = this
        let timer = setInterval(() => {
          let ispeed = Math.floor(-that.scrollTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
          if (that.scrollTop === 0) {
            clearInterval(timer);
          }
        }, 16)
      }
    },
    destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
    }
    
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* 返回头部按钮 */
.fixed_btn{
    position: fixed;
    right: 10px;
    z-index: 20;
    transition: all ease 1.2s;
    -webkit-transition: all ease 1.2s;
    -moz-transition: all ease 1.2s;
    -ms-transition: all ease 1.2s;
    -o-transition: all ease 1.2s;
    bottom: -2rem;
}
.fixed_show{
    bottom: 10%;
}
.fixed_btn .go_back{
    width: 1.06rem;
    height: 1.06rem;
    display: block;
    background: url(//i0.ulecdn.com/i/event/2018/0511/shuangEleven/elev28.png) 0px 0px / 100% no-repeat;
    position: relative;
}
</style>
