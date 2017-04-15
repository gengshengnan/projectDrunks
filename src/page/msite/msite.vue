<template>
<div id="container">
    	<head-top signin-up='msite'>
    		<router-link :to="'/search/' + geohash" class="link_search" slot="search">
	    		<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
	    			<circle cx="9" cy="9" r="8" stroke="rgb(255,255,255)" stroke-width="2" fill="none"/>
	    			<line x1="15" y1="15" x2="20" y2="20" style="stroke:rgb(255,255,255);stroke-width:2"/>
	    		</svg>
    		</router-link>
			<router-link to="/home" slot="msite-title" class="msite_title">
				<span class="title_text ellipsis">地址</span>
			</router-link>
    	</head-top>  
       <!-- 图片轮播 -->
       <div id="pics" class="swiper-container">
           <div class="swiper-wrapper">
                <img class="swiper-slide" src="../../images/pic.jpg"/>
                <img class="swiper-slide" src="../../images/pic1.jpg"/>
                <img class="swiper-slide" src="../../images/pic2.jpg"/>
                <img class="swiper-slide" src="../../images/pic3.jpg"/>
                <img class="swiper-slide" src="../../images/pic4.jpg"/>
                <img class="swiper-slide" src="../../images/pic5.jpg"/>
                <img class="swiper-slide" src="../../images/pic6.jpg"/>
                <img class="swiper-slide" src="../../images/pic7.jpg"/>
           </div>
           <div class="swiper-pagination"></div>
       </div>
    
       <!-- 菜单 -->
        <nav class="msite_nav">
          <ul class="swiper">
                <li class="ban">
                   <a href="#/spirit"> <img src="http://www.9haoxg.cn/mobile/data/attached/nav/d2575e13ada7b28f097500570f2d98af.png">
                      <span>白酒</span>
                    </a>
                </li>
                <li class="ban"> 
                    <a href="#/food">
                      <img src="http://www.9haoxg.cn/mobile/data/attached/nav/4a280d0bad2052fe3daf3dab1234d1fd.png">
                    <span>葡萄酒</span>
                    </a>
                </li>
                <li class="ban">
                   <a href="">
                      <img src="http://www.9haoxg.cn/mobile/data/attached/nav/9da1979510231d3eb58d1ca85351d65c.png">
                    <span>洋酒</span>
                   </a>
                </li>
                <li class="ban">
                   <a href="">
                      <img src="http://www.9haoxg.cn/mobile/data/attached/nav/9998c6aaedac7301d670be0fc20c658d.jpg">
                    <span>热卖好酒</span>
                   </a>
                </li>
                <li class="ban"> 
                   <a href="">
                      <img src="http://www.9haoxg.cn/mobile/data/attached/nav/36f6866417131a6aa6b7150aef104e15.gif">
                    <span>活动酒</span>
                   </a>
                </li>
                <li class="ban">
                    <a href="">
                      <img src="http://www.9haoxg.cn/mobile/data/attached/nav/36f6866417131a6aa6b7150aef104e15.gif">
                    <span>手机专享</span>
                    </a>
                </li>
                <li class="ban">
                    <a href="">
                      <img src="http://www.9haoxg.cn/mobile/data/attached/nav/36f6866417131a6aa6b7150aef104e15.gif">
                    <span>整箱购</span>
                    </a>
                </li>
                <li class="ban">
                    <a href="#/newShops">
                      <img src="http://www.9haoxg.cn/mobile/data/attached/nav/36f6866417131a6aa6b7150aef104e15.gif">
                    <span>新品发布汇</span>
                    </a>
                </li>
          </ul>
        </nav>
        
       <!-- 秒杀 -->

	    	 <div class="shop_turn">
             <h3 class="shop_one">掌上秒拍</h3><span class="shop_two" id="clock"></span><span class="shop_three">更多商品</span><a href="#"> > </a>
         </div>
          
        <!-- 酒类轮播 -->    

      <div class="swiper-container2">
          <div class="swiper-wrapper">
              <div class="swiper-slide" id="wid" style="width:3rem">
                    <a href="">
                      <img src="../../images/ao1.jpg">
                      <span class="s_name">澳大利亚奔赴域名山庄设拉紫赤霞珠</span>
                      <span class="price">￥228.00</span>
                      <span class="oriprice">￥474.00</span>
                    </a>  
              </div>
             <div class="swiper-slide" id="wid">
                    <a href="">
                      <img src="../../images/ao2.jpg">
                       <span>澳大利亚奔赴域名山庄设拉紫赤霞珠</span>
                      <span class="price">￥228.00</span>
                      <span class="oriprice">￥474.00</span>
                    </a>  
              </div>
              <div class="swiper-slide" id="wid">
                    <a href="">
                      <img src="../../images/bai1.jpg">
                       <span>澳大利亚奔赴域名山庄设拉紫赤霞珠</span>
                      <span class="price">￥228.00</span>
                      <span class="oriprice">￥474.00</span>
                    </a>  
              </div>
              <div class="swiper-slide" id="wid">
                    <a href="">
                      <img src="../../images/bai2.jpg">
                       <span>澳大利亚奔赴域名山庄设拉紫赤霞珠</span>
                      <span class="price">￥228.00</span>
                      <span class="oriprice">￥474.00</span>
                    </a>  
              </div>
              <div class="swiper-slide" id="wid">
                    <a href="">
                      <img src="../../images/mao1.jpg">
                       <span>澳大利亚奔赴域名山庄设拉紫赤霞珠</span>
                      <span class="price">￥228.00</span>
                      <span class="oriprice">￥474.00</span>
                    </a>  
              </div>
              <div class="swiper-slide" id="wid">
                    <a href="">
                      <img src="../../images/mao2.jpg">
                      <span>澳大利亚奔赴域名山庄设拉紫赤霞珠</span>
                      <span class="price">￥228.00</span>
                      <span class="oriprice">￥474.00</span>
                    </a>  
              </div>
          </div>
          <!-- Add Pagination -->
          <!-- <div class="swiper-pagination"></div> -->
      </div>
       
       <div class="kinds">
         <a href="">
             <img src="https://img07.jiuxian.com/bill/2017/0412/491cd5cc052847babc133a006aa17a1f.jpg">
         </a>        
         <a href="">
            <img src="https://img07.jiuxian.com/bill/2017/0412/20cbf21ea1b04b7fa833d3021ff3c6a9.jpg">
         </a>
         <a href="">
            <img src="https://img06.jiuxian.com/bill/2017/0412/0a2137b4e77646bebb761af278d403f5.jpg">
         </a>
         <a href="">
              <img src="https://img09.jiuxian.com/bill/2017/0412/04f626e5418c4a51ad2a321c64c60554.jpg">
          </a>
          <a href="">
              <img src="https://img10.jiuxian.com/bill/2017/0412/9ab0fdab784847da94bc438bd5ae77fe.jpg">
          </a>
          <a href="">
              <img src="https://img08.jiuxian.com/bill/2017/0412/65e2178a80f24fd986bd4a275c300ab9.jpg">
          </a>   
          <a href="">
              <img src="https://img10.jiuxian.com/bill/2017/0412/a29a08054059435cb5b3de16798e043a.jpg">
          </a>
       </div>

       <div id="good">
           <div class="one">
              <img class="outside" src="https://img09.jiuxian.com/bill/2017/0321/18c109eff15d43cbba20498a6e24d8e0.jpg">

              <div class="inside">
                  <a href="#">
                    <img class="left" src="https://img10.jiuxian.com/bill/2017/0405/e8c0789a7b8a411d880137e76eb32efd.jpg">
                  </a>
                  <a href="#">
                    <img class="right" src="https://img07.jiuxian.com/bill/2017/0328/8df0f2c60be04cabb7b27ac4f3010ee5.jpg">
                  </a>
              </div>
           </div>
           <div class="two">
              <a href=""><img src="https://img06.jiuxian.com/bill/2017/0321/a74979450229488ab67c65697a5c32ae.jpg"></a>
              <a href=""><img src="https://img09.jiuxian.com/bill/2017/0322/f5bc6aa99f654c26b059616231c173a2.jpg"></a>
              <a href=""><img src="https://img08.jiuxian.com/bill/2017/0322/ba337fff3e7a40ceaa3665bdb5d2f91a.jpg"></a>
           </div>
           <div class="three">
               <img class="outside" src="https://img06.jiuxian.com/bill/2017/0321/2ccef5fad18a4e43a833fe29a5924f05.jpg">
               <div class="spirit">
                  <img class="l" src=" https://img06.jiuxian.com/bill/2017/0413/318ce2e0f7234f10afac2959318722ae.jpg">
                  <div class="r">
                     <img src="https://img08.jiuxian.com/bill/2017/0406/9cda458a90a14d2a814336012ff06315.jpg">
                     <img src="https://img08.jiuxian.com/bill/2017/0410/6bc8c4b829d043f8b0a0b1b78cdfc9d2.jpg">
                     <img src="https://img06.jiuxian.com/bill/2017/0411/048e7653086746bbbef4e84537bc3c98.jpg">
                  </div> 
               </div>
           </div>
           <div class="three">
             <img class="outside" src="https://img10.jiuxian.com/bill/2017/0321/25f63a308e5e4292b506bfdf9cda1f02.jpg">
               <div class="spirit">
                  <img class="l" src="https://img10.jiuxian.com/bill/2017/0411/562c4f3dc7e94cbd8659f11bf8924f95.jpg">
                  <div class="r">
                     <img src="https://img08.jiuxian.com/bill/2017/0321/2c5c314262334fad8ce8a5f8f7b48bcd.jpg">
                     <img src="https://img06.jiuxian.com/bill/2017/0321/45c2b4d09b9e48e69d642d60dfbf860d.jpg">
                     <img src="https://img07.jiuxian.com/bill/2017/0321/804e34b38a9f4e67bb223b628a3bd337.jpg">
                  </div> 
               </div>
           </div>  
           <div class="three">
             <img class="outside" src="https://img07.jiuxian.com/bill/2017/0321/32ddf14f0e4b4b689fa5c17dd3da5b07.jpg">
               <div class="spirit">
                  <img class="l" src="https://img10.jiuxian.com/bill/2017/0321/1987b94a6428407ebcd3afdde943217c.jpg">
                  <div class="r">
                     <img src=" https://img08.jiuxian.com/bill/2017/0330/518c35d25a7741cbba8f1a49554c12f3.jpg">
                     <img src="https://img09.jiuxian.com/bill/2017/0321/0a9e9901a4a54f90a7185069cdcfa183.jpg">
                     <img src="https://img06.jiuxian.com/bill/2017/0328/619d6fe77de047ca9e7eb0e1e272fede.jpg">
                  </div> 
               </div>
           </div>     
           <div class="four">
              <img class="outside" src=" https://img10.jiuxian.com/bill/2017/0321/1746c9c0000e42d2be988597189eb184.jpg">
              <div class="first">
                 <a class="l" href="#">
                    <img src="https://img07.jiuxian.com/bill/2017/0328/37f4eb93d7d94f138827fd8be02031e3.jpg">
                 </a>
                 <a class="r" href="#">
                    <img src="https://img10.jiuxian.com/bill/2017/0328/8fd8c156d0d74f97859366e8eb6b71b0.jpg">
                 </a>
              </div>  

              <div class="first">
                 <a class="l" href="#">
                    <img src="https://img08.jiuxian.com/bill/2017/0110/72636b4071dd496797cb54a148b35cf1.jpg">
                 </a>
                 <a class="r" href="#">
                    <img src="https://img06.jiuxian.com/bill/2017/0205/3122bfa03c6c4a28ae5de2c11083f7ac.jpg">
                 </a>
              </div>  

              <div class="first">
                 <a class="l" href="#">
                    <img src="https://img06.jiuxian.com/bill/2017/0204/c9e69d82e683404bb13c28e0468cba65.jpg">
                 </a>
                 <a class="r" href="#">
                    <img src="https://img06.jiuxian.com/bill/2017/0328/adbfb58fec244d93998e547a6fd72fff.jpg">
                 </a>
              </div>  

              <div class="first">
                 <a class="l" href="#">
                    <img src="https://img07.jiuxian.com/bill/2017/0204/135f7adc0c9048c5924cd7147f11db1b.jpg">
                 </a>
                 <a class="r" href="#">
                    <img src="https://img10.jiuxian.com/bill/2017/0205/be1fb38198654ec19e5aa6d82693ef9a.jpg">
                 </a>
              </div>  
           </div>      
       </div>
       
       <div id="shops">
            <h6>爆款推荐</h6>
            <div class="shops_list">
               <div class="shop_row">
                   <div class="l">
                      <img src="https://img06.jiuxian.com/2016/1116/49df79c934dc43148b461f1ca12052cc4.jpg">
                      <span>【年度品牌盛典】52°酒鬼酒封印1L+52°酒鬼酒（天工开物）1L</span>
                      <span class="price">￥459.00</span>
                      <span class="oriprice">￥1058.00</span>
                   </div>
                   <div class="r">
                      <img src="https://img10.jiuxian.com/2016/1202/fd9303fe23954674b6d3216f338bede84.jpg">
                      <span>【年度品牌盛典】52°酒鬼酒封印1L+52°酒鬼酒（天工开物）1L</span>
                      <span class="price">￥459.00</span>
                      <span class="oriprice">￥1058.00</span>
                   </div>
               </div>
            </div>
       </div>
  

  
  
       <div class="shop_list_container">
            <!-- 列表页 -->
         <shop-list v-if="hasGetData" :geohash="geohash"></shop-list>
       </div>
        <foot-guide></foot-guide>
</div>    
</template>

<script>
import {mapMutations} from 'vuex'
import {imgBaseUrl} from 'src/config/env'
import headTop from 'src/components/header/head'
import footGuide from 'src/components/footer/footGuide'
import shopList from 'src/components/common/shoplist'
import {msiteAdress, msiteFoodTypes, msiteShopList} from 'src/service/getData'
import 'src/plugins/swiper.min.js'
import 'src/style/swiper.min.css'

export default {
	data(){
        return {
        	geohash: '', // city页面传递过来的地址geohash
            msietTitle: '请选择地址...', // msiet页面头部标题
            foodTypes: [], // 食品分类列表
            hasGetData: false, //是否已经获取地理位置数据，成功之后再获取商铺列表信息
            imgBaseUrl, //图片域名地址
        }
    },
    async beforeMount(){
		this.geohash = this.$route.query.geohash || 'wtw3sm0q087';
		//保存geohash 到vuex
		this.SAVE_GEOHASH(this.geohash);
    	//获取位置信息
  	let res = await msiteAdress(this.geohash);
  	this.msietTitle = res.name;

    	// 记录当前经度纬度
  	this.RECORD_ADDRESS(res);

  	this.hasGetData = true;
    },
    mounted(){
        //获取导航食品类型列表
             
        setInterval (this.countdown, 1000);
        console.log("")

       	msiteFoodTypes(this.geohash).then(res => {
       		let resLength = res.length;
       		let resArr = res.concat([]); // 返回一个新的数组
       		let foodArr = [];
    		for (let i = 0, j = 0; i < resLength; i += 8, j++) {
    			foodArr[j] = resArr.splice(0, 8);
    		}
    		this.foodTypes = foodArr;
        }).then(() => {
        	//初始化swiper
       new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    }),
       new Swiper('.swiper-container2', {
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode:true,
        grabCursor: true
      })
      })
    },
    components: {
    	headTop,
    	shopList,
    	footGuide,
    },
    computed: {

    },
    methods: {
      countdown() {
          console.log("in")
          var end = new Date (2017, 4, 15);
          var now = new Date ();
          var m = Math.round ((end - now) / 1000);
          // var day = parseInt (m / 24 / 3600);
          var hours = parseInt ((m % (3600 * 24)) / 3600);
          var minutes = parseInt ((m % 3600) / 60);
          var seconds = m % 60;

          document.getElementById ("clock").innerHTML = "距离结束" +  this.format(hours) + ":" + this.format(minutes) + ":" + this.format(seconds);   
      },
    	...mapMutations([
    		'RECORD_ADDRESS', 'SAVE_GEOHASH'
    	]),
    	// 解码url地址，求去restaurant_category_id值
    	getCategoryId(url){
    		let urlData = decodeURIComponent(url.split('=')[1].replace('&target_name',''));
    		if (/restaurant_category_id/gi.test(urlData)) {
    			return JSON.parse(urlData).restaurant_category_id.id
    		}else{
    			return ''
    		}
    	},
    format(value){
        if(value<10){
            return value='0'+value
        }else{
            return value;
        }
    }
    },
    watch: {

    }
}

</script>

<style scoped>
    /*@import 'src/style/mixin';*/
.l{
  float:left;
}
.r{
  float:right;
}

.outside{
 width:100%;
 height:2rem;
}
#container{
  overflow: hidden;
}

.msite_nav{
	padding-top: 1rem;
	background-color: #fff;
	width:100%;
	height:10rem;
	border-bottom: 0.025rem solid $bc;
	/*padding-bottom: 0.6rem;*/
	bottom: 0.2rem;
  
}
#pics{
  margin-top:2.58rem;
  width:100%;
  height:9rem;
 }
.kinds img{
  width:100%;
  height:4rem;
  display: block;
}



#good .one .inside{
  width:100%;
  height:4.6rem;
  border-bottom:0.1rem dashed #ccc;
}
#good .one .inside .left{
  float:left;
  width:49.5%;
  border-right:0.01rem solid #ccc;
}
#good .one .inside .right{
  float:right;
  width:49.5%;
}
#good .two{
  width:100%;
  height:5.25rem;
}
#good .two img{
  width:33%;
  float:left;
  border-right:0.04rem solid #ccc;
}
#good .two img:nth-child(3){
  border-right:0;
}
#good .three{
  width:100%;
  height:11rem;
}
#good .four{
  width:100%;
  height:15rem;
}
#good .four .first{
  width:100%;
  height:3rem;
}
#good .four .first .l{
   width:50%;
  height:100%;
  float:left;
}
#good .four .first .l img{
   width:100%;
}
#good .four .first .r{
  width:50%;
  height:100%;
  float:right;
}
#good .four .first .r img{
   width:100%;
}
#good .three .spirit img.l{
 width:40%;
 float:left;
}

#good .three .spirit .r{
  width:59%;
  height:100%;
}

#good .three .spirit .r img:nth-child(1){
 width:100%;
 height:5.4rem;
 float:right;
 border-bottom: 0.1rem dashed #ccc;
}
#good .three .spirit .r img:nth-child(2){
  width:49%;
  height:3.2rem;
  float:left;
}
#good .three .spirit .r img:nth-child(3){
  width:50%;
  height:3.2rem;
  float: right;
}
#shops{
  text-align: center;
  min-height:7rem;
  background: #fff
}
#shops h6{
  padding-left:0.2rem;
  border-bottom:0.05rem solid #ccc;
  background: #fff;
  padding-bottom:0.2rem;
}
#shops .shops_list .shop_row{
  width:100%;
  height:10.7rem;
  border-bottom: 0.1rem solid #ccc
}
#shops .shops_list .shop_row .l{
  float: left;
  width:49.9%;
  border-right:0.1rem solid #ccc;
}
#shops .shops_list .shop_row img{
  width: 80%;
  margin-left:0.3rem;
}

#shops .shops_list .shop_row span{
 font-size: 12px
}
#shops .shops_list .shop_row span.price{
  color:#f00;
}
#shops .shops_list .shop_row span.oriprice{
  text-decoration: line-through;
}
/*#shops .shops_list .shop_row .r img{
  width: 100%;
}*/
#shops .shops_list .shop_row .r{
  float: right;
  width:49.9%;
}
.msite_nav li.ban{
  float: left;
  width: 4rem;
  height:4rem;
  box-sizing: border-box;
  text-align: center;
}
#pics .swiper img{
  background-size:contain;
}
.msite_nav li.ban a{
  display: block;
   width: 4rem;
  height:4rem;
}
.msite_nav li.ban a img{
   width:2.4rem;
} 
.msite_nav li.ban a span{
  display: block;
  margin-top:0.1rem;
  font-size:10px;
}
.shop_turn{
  width: 100%;
  height:2rem;
  line-height: 2rem;
  border-bottom:1px solid #ccc;
  display: flex;
  justify-content: space-between;
}

.shop_turn .shop_one{
  float:left;
  font-size: 16px;
  margin-right: 0.5rem;
  margin-left:0.2rem;
}

.shop_turn .shop_two{
  float:left;
  font-size: 14px ;
  margin-right: 1.5rem
}
.shop_turn .shop_three {
  float:left;
  font-size: 14px;
}

.shop_turn a{
  float:left;
}

.swiper-container {
    width: 100%;
    height: 100%;
    
}
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;    
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
   /* -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;*/
    align-items: center;
}

.swiper-container2 {
  width: 100%;
  background:#fff;
}
.swiper-slide2 {
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: 60%;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-slide2:nth-child(2n) {
  width: 40%;
}
.swiper-slide2:nth-child(3n) {
  width: 20%;
}


#wid a img{
 width:4.3rem;
}
#wid a span{
  font-size:12px;
}
#wid a span.price{
color:red;
display: block;
}
#wid a span.oriprice{
  text-decoration:line-through;
}
</style>
