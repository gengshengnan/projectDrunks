<template>
    <div class="loginContainer">
        <div class='header'>
            <a href="#" class="a1">
                <i class="iconfont">&#xe621;</i>
            </a>
                <h2 class="login">注册</h2>
            <a href="#" class="a2">
                
            </a>
        </div>
        <div class='login-user'>
            <form>
                <input type="tel"  placeholder="请输入用户名/手机号" class="userNumber"/>
                <input type="tel" placeholder="请输入密码" class="identifying-code"/>
                <input type="tel" placeholder="请再次输入密码" class="identifying-code"/>
            </form>
               
        </div>
        <div class='check'>
            <input type='checkbox'>
            <span>我以看过并接受<a href='#'>《用户协议》</a></span>
        </div>
        <div class='login-btn'>
            <button>注册</button>
        </div>
        <router-link to="/forget" class="to_forget" v-if="!loginWay">忘记密码？</router-link>
        <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
    </div>
</template>

<script>
    import headTop from '../../components/header/head'
    import alertTip from '../../components/common/alertTip'
    import {mapState, mapMutations} from 'vuex'
    import {mobileCode, checkExsis, sendLogin, getcaptchas, accountLogin} from '../../service/getData'

    export default {
        data(){
            return {
                loginWay: true, //登录方式，默认短信登录
                showPassword: false, // 是否显示密码
                phoneNumber: null, //电话号码
                mobileCode: null, //短信验证码
                validate_token: null, //获取短信时返回的验证值，登录时需要
                computedTime: 0, //倒数记时
                userInfo: null, //获取到的用户信息
                userAccount: null, //用户名
                passWord: null, //密码
                captchaCodeImg: null, //验证码地址
                codeNumber: null, //验证码
                showAlert: false, //显示提示组件
                alertText: null, //提示的内容
            }
        },
        created(){
            this.getCaptchaCode();
        },
        components: {
            headTop,
            alertTip,
        },
        computed: {
            //判断手机号码
            rightPhoneNumber: function (){
                return /^1\d{10}$/gi.test(this.phoneNumber)
            }
        },
        methods: {
            ...mapMutations([
                'RECORD_USERINFO',
            ]),
            //改变登录方式
            changeLoginWay(){
                this.loginWay = !this.loginWay;
            },
            //是否显示密码
            changePassWordType(){
                this.showPassword = !this.showPassword;
            },
            //获取验证吗，线上环境使用固定的图片，生产环境使用真实的验证码
            async getCaptchaCode(){
                if (process.env.NODE_ENV !== 'development'){
                    this.captchaCodeImg = 'http://test.fe.ptdev.cn/elm/yzm.jpg';
                }else{
                    let res = await getcaptchas();
                    this.captchaCodeImg = 'https://mainsite-restapi.ele.me/v1/captchas/' + res.code;
                }
            },
            //获取短信验证码
            async getVerifyCode(){
                if (this.rightPhoneNumber) {
                    this.computedTime = 30;
                    this.timer = setInterval(() => {
                        this.computedTime --;
                        if (this.computedTime == 0) {
                            clearInterval(this.timer)
                        }
                    }, 1000)
                    //判读用户是否存在
                    let exsis = await checkExsis(this.phoneNumber, 'mobile');
                    if (exsis.message) {
                        this.showAlert = true;
                        this.alertText = exsis.message;
                        return
                    }else if(!exsis.is_exists) {
                        this.showAlert = true;
                        this.alertText = '您输入的手机号尚未绑定';
                        return
                    }
                    //发送短信验证码
                    let res = await mobileCode(this.phoneNumber);
                    if (res.message) {
                        this.showAlert = true;
                        this.alertText = res.message;
                        return
                    }
                    this.validate_token = res.validate_token;
                }
            },
            //发送登录信息
            async mobileLogin(){
                if (this.loginWay) {
                    if (!this.rightPhoneNumber) {
                        this.showAlert = true;
                        this.alertText = '手机号码不正确';
                        return
                    }else if(!(/^\d{6}$/gi.test(this.mobileCode))){
                        this.showAlert = true;
                        this.alertText = '短信验证码不正确';
                        return
                    }
                    //手机号登录
                    this.userInfo = await sendLogin(this.mobileCode, this.phoneNumber, this.validate_token);
                }else{
                    if (!this.userAccount) {
                        this.showAlert = true;
                        this.alertText = '请输入手机号/邮箱/用户名';
                        return
                    }else if(!this.passWord){
                        this.showAlert = true;
                        this.alertText = '请输入密码';
                        return
                    }else if(!this.codeNumber){
                        this.showAlert = true;
                        this.alertText = '请输入验证码';
                        return
                    }
                    //用户名登录
                    this.userInfo = await accountLogin(this.userAccount, this.passWord, this.codeNumber);
                }
                //如果返回的值不正确，则弹出提示框，返回的值正确则返回上一页
                if (!this.userInfo.user_id) {
                    this.showAlert = true;
                    this.alertText = this.userInfo.message;
                    if (!this.loginWay) this.getCaptchaCode();
                }else{
                    this.RECORD_USERINFO(this.userInfo);
                    this.$router.go(-1);

                }
            },
            closeTip(){
                this.showAlert = false;
            }
        }
    }

</script>

<style>
   .header{
        width:16rem;
        background:#1CBB7F;
        margin-top:1rem;
        height:2rem;
        line-height:2rem;
        font-size:0.6rem;
        
    }
    .header .a1{
        height: 2rem;
        float: left;
        width: 2.10rem;
        text-align: center;
        color:white;
    }
    .header .a1 h1 i{
        height: 2rem;
        width: 1.10rem;
    }
    .header .login{
        height: 2rem;
        float: left;
        width: 9.42rem;
        text-align: center;
        padding-left: 2rem ;
        color:white;
    }
    .header .a2{
        height:2rem;
        float:left;
        width: 4.4rem;
        text-align: right;
        color:white;
    }
    .login-user{
        width:16rem;
        height:6rem;
        background:white;
        padding-left:0.8rem;
        margin-top:0.5rem;
    }
    .login-user form{
        width:16rem;
        height:6rem;
    }
    .login-user input{
        display:block;
        outline:none;
    }
    .userNumber{
        width:16rem;
        height:2rem;
        border-bottom:1px solid #ccc;
    }
    .identifying-code{
        width:16rem;
        height:2rem;
        border-bottom:1px solid #ccc;
    }
    .check{
        width:16rem;
        height:2rem;
        background:#f7f7f7;
        padding-left:0.9rem;
        font-size:0.6rem;
        font-weight:blod;
        line-height:2rem;
    }
    .check input{
        width:0.8rem;
        height:1rem;
        line-height:1rem;
        display:block;
        float:left;
        margin-top:0.55rem;
    }
    .checke span {
        dispaly:block;
        width:0.8rem;
        height:1rem;
        line-height:0.5rem;
        float:left;
        margin-left:1rem;
    }
    .login-btn{
        height: 2rem;
        padding-left:1rem;
        margin-top: 1rem;
    }
    .login-btn button{
        height: 2rem;
        line-height:2rem;
        width: 14rem;
        border-radius: 0.2rem;
        background: #1CBB7F;
        color: white;
        font-size:0.6rem;
    }
    .way{
        width:16rem;
        height:2rem;
        padding-left:1rem;
        font-size:0.6rem;
        line-height:2rem;
        padding-left:9.9rem;
    }
    .way li{
        float:left;
        width:2.4rem;
    }
    .way li a{
        float:left;
        width:2.4rem;
    }
    .way li.forget {
        margin-right:0.3rem;
    }
    .cooperate{
        padding-left: 1rem;
        font-size: 0.6rem;
    }
    .cooperate img{
        margin-top: 0.5rem;
    }
    .cooperate .img2{
        margin-left: 0.2rem;
    }
</style>
