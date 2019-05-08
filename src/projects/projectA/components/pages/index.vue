<template>
  <div class="app">
    <div class="main">我是第一个活动</div>
    <div class="button">显示列表4445555</div>
    <h1>3333</h1>
    <div @click="getCoupon">点击领券</div>
    <div @click="to">去第二个页面</div>
    <coupon-alert v-if="alertState" :alertData="alertData" @handlerClick="close"></coupon-alert>
    <minprog-alert v-show="minAlertState" @minprogState="minprogState"></minprog-alert>
    <input type="text" v-model="test">
  </div>
</template>

<script>
import * as url from '../../../../commom/assets/js/url';
import couponAlert from '../../../../commom/components/coupon-alert';
import minprogAlert from '../../../../commom/components/minProgress-alert';

export default {
    data () {
      return {
        alertState:false,
        alertData:'',
        minAlertState:false,//小程序弹框状态
        test:'',
      }
    },
    created(){
      console.log('1111')
    },
    methods:{
      to(){
        this.$router.push('/two');
      },
      getCoupon(){
        this.HTTP.getCoupon().then((res) => {
            this.alertData=res.data;
            this.alertState=true;
        }, (err) => {
            console.log(err);
        });
      },
      init(){
        this.$http.jsonp(this.url, { jsonp: "jsonCallback", jsonCallback: 'js' }).then(function(res){
            // this.$set('gridData', response.data);
            console.log(res);
        }).catch(function(err){
          console.log(err);
        })
      },
      getTest(){
        // this.$http.get(url.url1).then(function(res){
        //     console.log(res.data);
        // });
      },
      close(data){
        this.alertState=data;
      },
      minprogState(data){
        this.minAlertState=data;
      }
    },
    components:{
      couponAlert,minprogAlert,
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app{
  height: 2000px;
}
</style>
