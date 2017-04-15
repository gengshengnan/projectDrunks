 <template>
  <div class="discover">
    <div id="header">
      <mt-search
        v-model="value"
        cancel-text="取消"
        placeholder="搜索商家">
      </mt-search>
    </div>
    <div id="section">
        <div class="menu-left">
            <ul>
              <li class="active">中国酒</li>
              <li>法国酒</li>
              <li>韩国酒</li>
              <li>泰国酒</li>
              <li>美国酒</li>
              <li>英国酒</li>
              <li>英国酒</li>
              <li>英国酒</li>
              <li>英国酒</li>
            </ul>
        </div>
        <div class="menu-right j-content" style="display:block;">
            <h5>白酒</h5>
            <ul>
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201609/goods_img/1293_G_1473382258462.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201608/goods_img/1155_G_1471214731826.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201606/goods_img/978_G_1465320547265.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201603/thumb_img/6_thumb_G_1457462157422.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>                    
            </ul>
            <h5 class="second">啤酒</h5>
            <ul>  
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201608/goods_img/1214_G_1472425312081.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201608/goods_img/1214_G_1472425312081.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201608/goods_img/1214_G_1472425312081.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201608/goods_img/1214_G_1472425312081.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201608/goods_img/1214_G_1472425312081.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201608/goods_img/1214_G_1472425312081.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201608/goods_img/1214_G_1472425312081.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>                                                  
            </ul>
          </div>
        </div>
        <div class="menu-right j-content" style="display:none;">
            <h5>红酒</h5>
            <ul>
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201609/goods_img/1293_G_1473382258462.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201608/goods_img/1155_G_1471214731826.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201606/goods_img/978_G_1465320547265.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201603/thumb_img/6_thumb_G_1457462157422.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>                    
            </ul>
            <h5 class="second">啤酒</h5>
            <ul>  
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201608/goods_img/1214_G_1472425312081.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201608/goods_img/1214_G_1472425312081.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201608/goods_img/1214_G_1472425312081.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201608/goods_img/1214_G_1472425312081.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201608/goods_img/1214_G_1472425312081.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201608/goods_img/1214_G_1472425312081.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>
              <li class="w-3">
                <a href="#">
                  <img src="http://www.9haoxg.cn/images/201608/goods_img/1214_G_1472425312081.jpg">
                  <span class="font">老白干</span>
                </a>
              </li>                                                  
            </ul>
          </div>
        </div> 
        <!--  <div class="menu-right j-content" style="display:none;">
                    <h5>白酒</h5>
                    <ul>
                      <li class="w-3">
                        <a href="#">
                          <img src="http://www.9haoxg.cn/images/201609/goods_img/1293_G_1473382258462.jpg">
                          <span class="font">老白干</span>
                        </a>
                      </li>
                      <li class="w-3">
                        <a href="#">
                          <img src="http://www.9haoxg.cn/images/201608/goods_img/1155_G_1471214731826.jpg">
                          <span class="font">老白干</span>
                        </a>
                      </li>
                      <li class="w-3">
                        <a href="#">
                          <img src="http://www.9haoxg.cn/images/201606/goods_img/978_G_1465320547265.jpg">
                          <span class="font">老白干</span>
                        </a>
                      </li>
                      <li class="w-3">
                        <a href="#">
                          <img src="http://www.9haoxg.cn/images/201603/thumb_img/6_thumb_G_1457462157422.jpg">
                          <span class="font">老白干</span>
                        </a>
                      </li>                    
                    </ul>
                    <h5 class="second">啤酒</h5>
                    <ul>  
                      <li class="w-3">
                        <a href="#">
                          <img src="http://www.9haoxg.cn/images/201608/goods_img/1214_G_1472425312081.jpg">
                          <span class="font">老白干</span>
                        </a>
                      </li>
                      <li class="w-3">
                        <a href="#">
                          <img src="http://www.9haoxg.cn/images/201608/goods_img/1214_G_1472425312081.jpg">
                          <span class="font">老白干</span>
                        </a>
                      </li>
                      <li class="w-3">
                        <a href="#">
                          <img src="http://www.9haoxg.cn/images/201608/goods_img/1214_G_1472425312081.jpg">
                          <span class="font">老白干</span>
                        </a>
                      </li>
                      <li class="w-3">
                        <a href="#">
                          <img src="http://www.9haoxg.cn/images/201608/goods_img/1214_G_1472425312081.jpg">
                          <span class="font">老白干</span>
                        </a>
                      </li>
                      <li class="w-3">
                        <a href="#">
                          <img src="http://www.9haoxg.cn/images/201608/goods_img/1214_G_1472425312081.jpg">
                          <span class="font">老白干</span>
                        </a>
                      </li>
                      <li class="w-3">
                        <a href="#">
                          <img src="http://www.9haoxg.cn/images/201608/goods_img/1214_G_1472425312081.jpg">
                          <span class="font">老白干</span>
                        </a>
                      </li>
                      <li class="w-3">
                        <a href="#">
                          <img src="http://www.9haoxg.cn/images/201608/goods_img/1214_G_1472425312081.jpg">
                          <span class="font">老白干</span>
                        </a>
                      </li>                                                  
                    </ul>
                  </div>
        </div> -->              
  </div>
</template>

<script>
import { Search } from 'mint-ui';
import $ from 'jquery';
var obj={};
obj[Search.name]=Search;
// Vue.component(Search.name, Search)
export default {
  name: 'discover',
  data () {
    return {
      value: ''
    }
  },
  mounted () {
      $(function(){
        $('.menu-left ul li').click(function(){
            $(this).addClass('active').siblings('li').removeClass('active');
            // console.log('fdsa')
            var index = $(this).index();
            console.log(index);
            $('.j-content').hide();
            $('.j-content').eq(index).show();
            console.log(index)
        })
      }) 
  },
  components:obj
}

</script>

<style scoped>
*{
    margin:0;
    padding:0;
}
#header{
  height:1.7rem;
}
#section{
  flex:1;
  /*overflow: hidden;*/
}
.menu-left{
    float:left;
    background:#F6F6F9;
    overflow-y:auto;
    width:3.5rem;
    height:15rem;
}
.menu-left ul li{
    padding: .5rem .3rem;
    box-sizing: border-box;
    font-size: .7rem;
    text-align: center;
}
.menu-left ul li.active {
    background: #fff;
    position: relative;
    color: #1CBB7F;
}
.menu-right{
    background: #ccc;
    position: inherit;
    height:22rem;
    top:1rem;
    left: 3.5rem;
    margin-left:3.5rem;
    padding:.5rem;
    overflow-y: auto;
}
.menu-right ul{
  overflow:hidden;
  margin-top:.5rem;
}
.second{
    margin-top:.7rem;
}
.w-3{
  width:3.2rem;
  height:4rem;
  float:left;
  margin-left:.4rem;
  margin-bottom:.7rem;
}
.w-3 a{
  display: block;
  text-decoration: none;
}
.w-3 img{
  width:3.2rem;
  height:3.2rem;
}
.w-3 .font{
    display:block;
    width:100%;
    text-align:center;
    color:black;
    font-size:.5rem;
}
</style>
