<!--
 * @Description: 
 小程序页面弹窗
 minprogState父组件接收事件
 * @version: 
 * @Company: ule.com
 * @Author: ailin
 * @LastEditors: ailin
 * @Date: 2019-04-29 13:17:54
 * @LastEditTime: 2019-05-07 13:17:58
 -->
<template>
  <div class="maskTip" @click="hide">
    <div class="maskTipBox">
      <img src="//i0.ulecdn.com/i/event/2019/0426/demo/download.jpg">
    </div>
  </div>
</template>

<script>
export default{
  methods:{
    hide(){
      this.$emit('minprogState',false);
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .maskTip{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    left: 0px;
    top: 0px;
    z-index: 30;
  }
  .maskTipBox{
    width: 80%;
    position: absolute;
    top: 22%;
    left: 10%;
    overflow: hidden;
  }
  .maskTipBox img{
    display: block;
  }
</style>
