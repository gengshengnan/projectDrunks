 <template>
    <div class="spirit">
        <div class="spirit_head">
           <a href="#/msite"> < </a>
           <span>白酒</span>
           <span>三</span>
       </div>         
        <div class="main_pic">
            <img class="l" src=" https://img10.jiuxian.com/bill/2017/0411/2d9508d3240744858c4aca13c73c354a.jpg"> 
            <div class="r">
                <img class="pic" src=" https://img09.jiuxian.com/bill/2017/0316/293e4fea00344a648111a14795367634.jpg">
                <img class="pic" src=" https://img07.jiuxian.com/bill/2017/0328/198580fc02c0477d8b51a41d3330e7c0.jpg">
            </div>
        </div>
        
        <div class="main_list">
            <ul class="list">
               <li><a href="">茅台</a></li>
               <li><a href="">五粮液</a></li> 
               <li><a href="">汾酒</a></li>
               <li><a href="">泸州老窖</a></li>
            </ul>
            <ul class="list">
               <li><a href="">酱香</a></li>
               <li><a href="">清香</a></li> 
               <li><a href="">浓香</a></li>
               <li><a class="last" href="">查看全部</a></li>
            </ul>
        </div>
      
        <div class="recommend">
            <div class="title">
                <div></div>
                <div>精品推荐</div>
                <div></div>
            </div>
            <div class="con">
               <img class="l" src=" https://img07.jiuxian.com/2015/0810/779225b476fc4337a554289d16deff944.jpg">
               <div class="r">
                  <span class="con_name">52°泸州老窖三人炫1000ml（双瓶装）</span>  
                  <span class="price">￥179.00</span>
               </div>
            </div>
        </div>
        <!-- <head-top head-title="发现" go-back='true'></head-top> -->
        
        <!-- <foot-guide></foot-guide> -->
    </div>
</template>

<script>
    import headTop from 'src/components/header/head'
    import {getImgPath} from 'src/components/common/mixin'
    import footGuide from 'src/components/footer/footGuide'

    export default {
      data(){
            return{
    
            }
        },
        created(){

        },
        mixins: [getImgPath],
        components: {
            headTop,
            footGuide,
        },
        props:[],
        methods: {
            
        }
    }
</script>
  
<style scoped>
body{
    height:100%;
    width:100%;
}
body,html{
    background-color: #ffffff!important;
}
.spirit_head{
    width:100%;
    height:2.5rem;
    background: #de4943;
    display: flex;
    justify-content: space-between;
    line-height: 2.5rem
  }
.spirit_head span{
    color:#fff;
  }
.spirit_head a{
    color:#fff;
  }
.main_pic{
    width:100%;
    height:9rem;
    padding:0.5rem;
}
.main_pic img.l{
    width:55%;
    float:left;
    height:100%;
}
.main_pic .r{
    width:45%;
    float:right;
}
.main_pic .r img.pic{
    width:100%;
    height:4rem;
}
.main_list{
    width:100%;
    height:4rem;
}
.main_list ul.list{
  width:100%;
  height:1rem;
  padding:0.9rem;
}
.main_list ul.list li{
    font-size: 14px;
    float:left;
    width:25%;
}
.main_list ul.list li a{
    border:0.1rem solid #cecece;
    padding:0.1rem 0.2rem;
}
.main_list ul.list li a.last{
    color:#f00;
}
.recommend{
    width:100%;
    padding:0 0.9rem;
    min-height:8rem;

    margin-top:1rem;
}
.recommend .title{
    width:100%;
    height:1.5rem;
}
.recommend .title div:nth-child(1),.recommend .title div:nth-child(3){
    width:33%;
    height:50%;
    float: left;
    border-bottom:0.1rem solid #ccc;
}
.recommend .title div:nth-child(2){
    width:33%;
    height:100%;
    float: left;
    font-size: 16px;
    text-align: center;
    margin-top:0.2rem;
}
.recommend .con{
  width:100%;
  height:6rem;
  border-bottom:1px solid #ccc;
}
.recommend .con .l{
    float:left;
    width:38%;
    margin-right:0.2rem;
}
.recommend .con .l img{
    width:100%;

}
.recommend .con .r{
    width:58%;
    float:left;
}
.recommend .con .r .con_name{
  display: block;
  font-size: 16px;
}
.recommend .con .r .price{
  display: block;
  color:#f00;
  margin-top:0.8rem;
}
</style>
