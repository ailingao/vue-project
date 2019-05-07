/*
 * @Description: 使用示例
this.HTTP.getBar().then((res) => {
    console.log(res)
}).catch(err=>{
    console.log(err);
});
 * @version: 
 * @Company: ule.com
 * @Author: ailin
 * @LastEditors: ailin
 * @Date: 2019-04-30 17:05:58
 * @LastEditTime: 2019-05-07 16:49:52
 */
/*
 * @Description: 所有http请求公用方法
 * @version: 
 * @Company: ule.com
 * @Author: ailin
 * @LastEditors: ailin
 * @Date: 2019-04-28 14:27:20
 * @LastEditTime: 2019-05-07 11:33:30
 */
import resource from '../../../resource';
import * as URL from './url.js'
export default {
    install(Vue, options) {
        Vue.prototype.HTTP = {
            // 示例：砍价列表
            getBar() {
                return new Promise((resolve, reject) => {
                    const params = {
                        channel: '2019042509290440'
                    }
                    Vue.http.jsonp(URL.bargainList, { params: params, jsonp: "jsonCallback", jsonCallback: 'js' }).then(function(res) {
                        resolve(res);
                    }).catch(err => {
                        reject(err);
                    })
                })

            },
            couponList() {
                return new Promise((resolve, reject) => {
                    const params = {
                        channel: '2019042509290440'
                    }
                    Vue.http.jsonp(URL.couponList, { params: params, jsonp: "callback", jsonApiCallback: 'js' }).then(function(res) {
                        resolve(res);
                    }).catch(err => {
                        reject(err);
                    })
                })

            },
            getCoupon() { //点击领券
                return new Promise((resolve, reject) => {
                    var channels;
                    if (Vue.prototype.BASE.$browser().ule) {
                        channels = '300000'
                    } else {
                        channels = '400000'
                    }
                    const params = {
                        activityCode: 'MA_U_155650715868919',
                        couponDetailId: '164',
                        channel: channels,
                        mobile: ''
                    }
                    Vue.http.jsonp(URL.receiveCoupon, { params: params, jsonp: "callback", jsonApiCallback: 'js1' }).then(function(res) {
                        resolve(res);
                    }).catch(err => {
                        JEND.tipBox('活动太火爆了，请重试');
                        reject(err);
                    })
                })

            },
            //判断是否为小程序环境
            isminiProgram() {
                if (Vue.prototype.BASE.$browser().wx) {
                    return new Promise((resolve, reject) => {
                        wx.miniProgram.getEnv((res) => {
                            if (res.miniprogram) {
                                resolve(true);
                            } else {
                                resolve(false);
                            }
                        }).catch(err => {
                            reject(err);
                        })
                    })
                }
            },
            //获取用户信息
            getUserId() {
                return new Promise((resolve, reject) => {
                    Vue.http.jsonp(URL.cookieInfo, { jsonp: "jsonCallBack", jsonpCallback: 'js12' }).then(function(response) {
                        resolve(res);
                    }).catch(err => {
                        reject(err);
                    })
                })
            }
        };

    }

}