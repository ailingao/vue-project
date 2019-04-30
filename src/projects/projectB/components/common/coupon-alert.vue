<!--
 * @Description: 
 父组件使用@handlerClick接收事件，
 父组件通过alertData传递数据至本组件，
 此组件在父组件中需使用v-if保证父组件数据de正确传递
 * @version: 
 * @Company: ule.com
 * @Author: ailin
 * @LastEditors: ailin
 * @Date: 2019-04-29 13:17:54
 * @LastEditTime: 2019-04-29 16:13:19
 -->
<template>
  <div class="mask">
    <div class="mask-box">
      <div class="mask-t">
        <div class="mask-l">
          <img :src="img">
        </div>
        <div class="mask-r">
          <h3>{{h3}}</h3>
          <p class="mask-tip">{{tips}}</p>
        </div>
        <span class="mask-close" @click="close"></span>
      </div>
      <div class="mask-b" >
        <!-- <a class="btn gousebtn" href="javascript:;"></a> 
        <a class="btn mycouponbtn" href="javascript:;"></a> -->
        <!-- <div v-html="btnHtml"></div> -->
        <a v-show="data.code=='0000'" class="btn mycouponbtn" href="data.content.couponLink">查看我的优惠券</a>
        <a v-show="data.code!='0000'" class="btn cancel" href="javascript:;">确定</a>
      </div>
    </div>
  </div>
</template>

<script>
import * as url from '../../assets/js/url';
export default {
  props:['alertData'],
    data () {
      return {
        data:''||this.alertData,
        h3:'',
        img:'',
        tips:'',
      }
    },
    created(){
      this.init()
    },
    methods:{
      init(){
        console.log(this.data)
        if (this.data.code == '0000') {
            this.h3='恭喜您获得'+this.data.content.amount+'元现金券一张';
            this.img='//i0.ule.com/i/event/2016/1111/success_1.png';
            this.tips='请进我的优惠券查看使用规则';
        } else if (this.data.code == '3005' || this.data.code == '3006') {
            this.h3='亲，该优惠券领取有限制。具体查看活动规则';
            this.img='//i0.ule.com/i/event/2016/1111/enough.png';
            this.tips='快试试其他现金券!';
        } else if (this.data.code == '3004') {
            this.h3='哎哟喂！';
            this.img='//i0.ule.com/i/event/2016/1111/mask_over.png';
            this.tips='还是慢了一拍，现金券已领完！';
        } else if (this.data.code == '3003') {
            this.h3='哎哟喂！还是慢了一拍，该优惠券今日已领完！';
            this.img='//i0.ule.com/i/event/2016/1111/mask_over.png';
            this.tips='快试试其他现金券!';
        } else if (this.data.code == '9002' || this.data.code == '3008') {
            this.h3='活动优惠券领取实在太火爆，您没有抢到哦！';
            this.img='//i0.ule.com/i/event/2016/1111/mask_over.png';
            this.tips='本活动为概率性事件，不能保证所有客户成功领取优惠券。';
        } else if (this.data.code == '9003') {
            this.h3='hi亲，您今天领券的券实在太多了';
            this.img='//i0.ule.com/i/event/2016/1111/mask_over.png';
            this.tips='快试试其他吧！';
        } else if (this.data.code == '1007') {
            this.h3='蓝瘦，香菇，此券已从你的全世界路过。';
            this.img='//i0.ule.com/i/event/2016/1111/mask_over.png';
            this.tips='快试试其他吧！';
        } else if (this.data.code == '3007') {

            this.h3='亲，该优惠券不在领取时间内哦，不能领取！';
            this.img='//i0.ule.com/i/event/2016/1111/mask_over.png';
            this.tips='快试试其他吧！';
        } else {
            JEND.tipBox(this.data.message);
        }
      },
      close(){
        this.$emit('handlerClick',false);
      }
    },
    
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mask {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .7);
    left: 0;
    top: 0;
    z-index: 30
}

.mask .mask-box {
    width: 90%;
    left: 5%;
    position: absolute;
    background: #fff;
    top: 22%
}

.mask .mask-box .mask-t {
    height: 140px;
    position: relative;
    padding-left: 129px;
    padding-top: 50px;
    padding-right: 10px;
    padding-bottom: 10px
}

.mask .mask-box .mask-t .mask-l {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 121px
}

.mask .mask-box .mask-t .mask-l img {
    width: 121px;
}

.mask .mask-box .mask-t .mask-r {
    text-align: center;
    color: #dc1818;
    height: 100%;
    -webkit-box-pack: center;
    height: 121px
}

.mask-tip {
    color: #666;
    font-size: 15px
}

.mask .mask-box .mask-t .mask-r h3 {
    display: block;
    font-size: 14px;
    font-weight: 400;
    text-align: left
}

.mask .mask-box .mask-t .mask-r p {
    display: block;
    text-align: left;
    font-size: 14px;
    padding-top: 4px
}

.mask .mask-box .mask-t .mask-close {
    position: absolute;
    width: 30px;
    height: 30px;
    display: block;
    right: 10px;
    top: 10px;
    background: url(https://i0.ulecdn.com/i/event/2016/1111/mask_close.png) no-repeat center center;
    background-size: 25px
}

.mask .mask-box .mask-b {
    position: absolute;
    bottom: 10px;
    width: 100%;
    text-align: center
}

.mask .mask-box .mask-b .btn {
    height: 40px;
    line-height: 40px;
    margin-top: 7px;
    border-radius: 30px;
    width: 40%;
    text-align: center;
    display: inline-block;
    font-size: 15px;
    margin-right: 5px
}

.mask .mask-box .mask-b .btn.gousebtn {
    background: #dc1818;
    color: #fff;
    border: 1px solid #dc1818
}

.mask .mask-box .mask-b .btn.cancel {
    background: #dc1818;
    color: #fff;
    border: 1px solid #dc1818
}

.mask .mask-box .mask-b .mycouponbtn {
    background: #fff;
    color: #dc1818;
    border: 1px solid #dc1818
}
</style>
