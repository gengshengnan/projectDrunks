<template>
  <div class="profile_page">
        <!-- <head-top go-back='true' :head-title="profiletitle"></head-top> -->
        <div class="header_profile_page">
            <dl>
                <dt>
                    <img src="../../images/qq.png">
                </dt>
                <dd>
                    <h3>叼个帮帮糖拽天下</h3>
                    <span>关注<b>0</b></span>
                    <span>粉丝<b>0</b></span>
                </dd>
            </dl>
            <i></i>
        </div>
        <div class="header_bottom">
            <ul>
                <li>
                    <a href="#">
                        <i></i>
                        <span>关注</span>
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <i></i>
                        <span>收藏</span>
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <i></i>
                        <span>足迹</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="nav_profile_page">
            <ul>
                <li>
                    <a href="">
                        <i></i>
                        <span>待付款</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i></i>
                        <span>待收货</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i></i>
                        <span>带评价</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i></i>
                        <span>售后</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i></i>
                        <span>全部订单</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="content-page">
           <dl>
               <dt>
                   <i></i>
                   <span>我的钱包</span>
               </dt>
               <dd>
                   <span class="pay-day">白付美分期商城 在这里</span> 
                   <i></i>
               </dd>
           </dl>
           <dl>
               <dt>
                   <i></i>
                   <span>优惠券</span>
               </dt>
               <dd>
                   <i></i>
               </dd>
           </dl>
           <dl>
               <dt>
                   <i></i>
                   <span>会员中心</span>
               </dt>
               <dd>
                   <i></i>
               </dd>
           </dl>
           <dl>
               <dt>
                   <i></i>
                   <span>蘑豆商城</span>

               </dt>
               <dd>
                   <span class="pay-day">领蘑豆</span>
                   <i></i>
               </dd>
           </dl>
           <dl>
               <dt>
                   <i></i>
                   <span>分享有礼</span>
               </dt>
               <dd>
                   <span class="pay-day">轻松赚1000元</span>
                   <i></i>
               </dd>
           </dl>
           <dl>
               <dt>
                   <i></i>
                   <span>体验新版</span>
               </dt>
               <dd>
                   <i></i>
               </dd>
           </dl>
        </div>
        <div class="content-page-other">
            <dl>
                <dt>
                    <i></i>
                    <span>客服与帮助</span>
                </dt>
                <dd>
                    <i></i>
                </dd>
            </dl>
            <dl>
                <dt>
                    <i></i>
                    <span>意见反馈</span>
                </dt>
                <dd>
                    <i></i>
                </dd>
            </dl>
        </div>

        <foot-guide></foot-guide>
   </div>
</template>

<script>
import headTop from 'src/components/header/head'
import footGuide from 'src/components/footer/footGuide'
import {mapState, mapMutations} from 'vuex'
import {imgBaseUrl} from 'src/config/env'
import {getImgPath} from 'src/components/common/mixin'

export default {
    data(){
        return{
            profiletitle: '我的',
            getUserinfo: {},        //得到数据
            username: '登录/注册',           //用户名
            resetname: '',
            mobile: '登录后享受更多特权',             //电话号码
            balance: 0,            //我的余额
            count : 0,             //优惠券个数
            pointNumber : 0,       //积分数
            avatar: '',             //头像地址
            imgBaseUrl,
        }
    },
    mounted(){

    },
    mixins: [getImgPath],
    components:{
        headTop,
        footGuide,
    },

    computed:{
        ...mapState([
            'userInfo',
        ]),
        //后台会返回两种头像地址格式，分别处理
        imgpath:function () {
            let path;
            if(this.avatar.indexOf('/') !==-1){
                path = imgBaseUrl +　this.avatar;
            }else{
                path = this.getImgPath(this.avatar)
            }
            this.SAVE_AVANDER(path);
            return path;
        }
    },

    methods:{
        ...mapMutations([
            'SAVE_AVANDER'
        ]),
    },
    watch: {
        userInfo: function (value){
            this.getUserinfo = value || {};
            this.avatar = this.getUserinfo&&this.getUserinfo.avatar || '';
            this.username = this.getUserinfo&&this.getUserinfo.username ||'登录/注册';
            this.mobile = this.getUserinfo&&this.getUserinfo.mobile ||'登录后享受更多特权';
            this.balance = this.getUserinfo&&this.getUserinfo.balance || '0';
            this.count = this.getUserinfo&&this.getUserinfo.gift_amount || '0';
            this.pointNumber = this.getUserinfo&&this.getUserinfo.point || '0';
        }
    }
}

</script>

<style scoped>
    .profile_page{
        width: 16rem;
    }
    .header_profile_page{
        width:16rem;
        height: 2.5rem;
        background: white;
        background: rgb(255,245,247);
    }
    .header_profile_page dl{
        width:16rem;
        height: 2.5rem;
    }
    .header_profile_page dl dt{
        width: 3rem;
        height: 2.5rem;
        float: left;
    }
    .header_profile_page dl dt img{
        width: 2rem;
        height: 2rem;
        padding: 0.25rem 0 0 0.5rem;
    }
    .header_profile_page dl dd{
        float: left;
        width: 10rem;
        height: 2.5rem;
        margin-left: 0.2rem;
        padding-top: 0.2rem;
    }
    .header_profile_page dl dd h3{
        font-size: 0.6rem;
    }
    .header_profile_page dl dd span{
        font-size: 0.5rem;
    }
    .header_bottom{
        width: 16rem;
        height: 2rem;
    }
    .header_bottom ul{
        width: 16rem;
        height: 2rem;
        line-height: 2rem;
    }
    .header_bottom ul li{
        float: left;
        font-size: 0.6rem;
        width: 5rem;
        height: 2rem;
        text-align: center;
    }
    .nav_profile_page{
        width: 16rem;
        height: 2.5rem;
        font-size: 0.5rem;
        line-height: 3rem;
        background: rgb(137,190,178);
    }
    .nav_profile_page ul{
        width: 16rem;
        height: 3rem;
        font-size: 0.6rem;
    }
    .nav_profile_page ul li{
        float: left;
        padding-left: 1.1rem;
        border: none;
    }
    .nav_profile_page ul li span{
        display: block;
    }
    .content-page{
        width: 16rem;
        height: 12rem;
        margin-top: 1rem;
        font-size: 0.6rem;
        background: white;
    }
    .content-page dl{
        width: 16rem;
        height: 2rem;
        line-height: 2rem;
        border-bottom: 1px solid #ccc;
    }
    .content-page dl dt{
        float: left;
        padding-left: 0.5rem;
        width: 7rem;
    }
    .content-page dl dd{
        float: right;
        padding-right: 0.5rem;
        width: 5rem;
        text-align: center;
    }
    .content-page dl dd .pay-day{
        font-size: 0.2rem;
    }
    .content-page-other{
        width: 16rem;
        height: 4rem;
        margin-top: 1rem;
        font-size: 0.6rem;
    }
    .content-page-other dl{
        width: 16rem;
        height: 2rem;
        line-height: 2rem;
        border-bottom: 1px solid #ccc;
    }
    .content-page-other dl dt{
        width: 7rem;
        height: 2rem;
        float: left;
        padding-left: 0.5rem;
    }
    .content-page-other dl dd{
        float: right;
        padding-right: 0.5rem;
        width: 5rem;
        text-align: center;
    }
</style>
