<template>
  <div class="app">
    <div class="main">我是vue项目首页</div>
    <div class="button">显示列表</div>
    <h1>3333</h1>
    <div @click="getCoupon">点击领券</div>
    <coupon-alert v-if="alertState" :alertData="alertData" @handlerClick="close"></coupon-alert>
  </div>
</template>

<script>
import * as url from '../../assets/js/url';
import couponAlert from '../common/coupon-alert'
export default {
    data () {
      return {
        alertState:false,
        alertData:'',
      }
    },
    created(){
      
    },
    methods:{
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
      }
    },
    components:{
      couponAlert
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
