export const doMain = 'beta.ule.com'; //beta环境域名,发布不同环境需自行切换
export const cdnDoMain = 'beta.ulecdn.com'; //beta环境cdn域名,发布不同环境需自行切换
// export const doMain = 'ule.com'; //生产环境域名,发布不同环境需自行切换
// export const cdnDoMain='ulecdn.com'; //生产环境cdn域名,发布不同环境需自行切换
/**
 * @Description: 砍价列表
 * @params: params = {channel: '2019042509290440'};
 * @return: 
 */
export const bargainList = '//static-content.' + cdnDoMain + '/mobilead/item/bargainItemList.do';
/**
 * @Description: 广告和普通商品推荐位
 * @params:
 *  params = {
        restype: 2001,//2001普通商品推荐位，2001广告推荐位
        moduleKeys: ''//推荐位code，多个code以“,”隔开
    };
 * @return: 
 */
export const dwRecommond = '//static-content.' + cdnDoMain + '/mobilead/recommond/dwRecommond.do';
/**
 * @Description: 优惠券列表
 * @params: 
 * params = {
        useScene: '4000',
        types: '1,2,3,4,5',//['店铺劵', '商品劵', '通用劵', '充值劵', '物流劵']
        activityNo: '',//活动code
        sortBy: '8001',
        pageIndex: '1',//请求优惠券列表页码
        pageSize: '30'//优惠券列表每页显示数量
    }
 * @return: 
 */
export const couponList = 'https://prize.' + doMain + '/mc/m/api/v3/base/coupon/actvityCouponList';
/**
 * @Description: 领取优惠券
 * @params: 
 * params = {
        activityCode:'',//活动code
        couponDetailId: '',//优惠券id
        channel: '',//3000邮乐网app环境，4000其他环境
        mobile: ''//可不传
    };
 * @return: 
 */
export const receiveCoupon = 'https://prize.' + doMain + '/mc/m/api/v3/base/coupon/receiveActivityCoupon';
export const cookieInfo = '//my.' + doMain + '/usr/getIndexCookies.do';