<template>
    <header id='head_top'>
       <!--  <slot name='logo'></slot>
        <slot name='search'></slot>
        <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
            </svg>
        </section>
        <router-link :to="userInfo? '/profile':'/login'" v-if='signinUp' class="head_login">
            <svg class="user_avatar" v-if="userInfo">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
            </svg>
            <span class="login_span" v-else>登录|注册</span>
        </router-link>
        <section class="title_head ellipsis" v-if="headTitle">
            <span class="title_text">{{headTitle}}</span>
        </section>
        <slot name="edit"></slot>
        <slot name="msite-title"></slot>
        <slot name="changecity"></slot>
        <slot name="changeLogin"></slot> -->
        <ul class="h_2">
            <li><a href=""><i class="iconfont">&#xe612;</i></a></li>
            <li>
                <input type="text" id="search" placeholder="搜索商品"/>
            </li>
            <li><a href="#/food"><i class="iconfont">&#xe66b;</i></a></li>
        </ul>
       
    </header>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
    	data(){
            return{
            }
        },
        mounted(){
            //获取用户信息
            this.getUserInfo();

        },
        props: ['signinUp', 'headTitle', 'goBack'],
        computed: {
            ...mapState([
                'userInfo'
            ]),
        },
        methods: {
            ...mapActions([
                'getUserInfo'
            ]),
        },

    }

</script>

<style scoped>
ul.h_2{
    display: flex;
    justify-content: space-between;
    margin-top:0.5rem;
}
#head_top{
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width:100%;
    height:2.6rem;
    /*background:rgba(28,187,127,0.5);*/
    background: #1cbb7f;
    /*opacity: .1;*/
}
#search{
  width: 9rem;
  height: 1.7rem;
  display: block;
  border-radius: 1rem;
  border:0;
  text-align: center
 }
 ul.h_2 li i{
 font-size: 20px;
  color:#fff;
  margin:0 .5rem;
 }
</style>
