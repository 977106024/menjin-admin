<template>
    <div class="addUser">
        <!-- 添加信息 -->
        <ul class="addMessage">
            <li>
                <p>区域</p>
                <div class="choose">
                    <span>选择</span>
                    <img src="@/assets/image/key_right.png" alt="">
                </div>
            </li>
            <li>
                <p>姓名</p>
                <input type="text" placeholder="请输入你的姓名">
            </li>
            <li>
                <p>电话</p>
                <input type="number" placeholder="请输入你的电话">
            </li>
            <li>
                <p>卡号</p>
                <input type="number" placeholder="请输入你的卡号">
            </li>
        </ul>
        <!-- 添加图片 -->
        <div class="addImg">
            <p>添加图片</p>
            <div class="imgList">
                <img src="@/assets/image/addUser_add.png" alt="">
                <div class="myImg">
                    <img src="@/assets/image/avator.png" alt="">
                    <img class="close" src="@/assets/image/addUser_close.png" alt="">
                </div>
            </div>
        </div>
        <!-- 授权设备 -->
        <div class="empower">
            <p>授权设备:</p>
            <div class="equipment">
                <button v-for="(item,index) in equipments"  :key=item.id @click="changeE(index)" :class="{ 'activeE': now == index}" >{{item}}</button>
            </div>
        </div>
        <!-- 授权按钮 -->
        <div  class="empowerButton">
            <button>授权</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'addUser',
     data: () => ({
        //  设备
         equipments:['设备1','设备2','设备3'],
         now:0,
     }),
     methods:{
         changeE(index){
             this.now = index
         }
     },
}
</script>
<style scoped lang="css">
    .addUser{
        width: 100%;
        padding: .8rem 0 .4rem .6rem;
    }
    /* 添加信息 */
    .addUser .addMessage{
        width: 100%;
    }
    .addUser .addMessage li{
        border-bottom: 1px solid #E5E9EF;
        margin-bottom: 0.32rem;
        padding-left: .14rem;
    }
    .addUser .addMessage li p{
        font-size: 0.32rem;
        text-align: left;
        color: #3B4859;
    }
    .addUser .addMessage li:first-child{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-bottom: .34rem;
    }
    .addUser .addMessage li .choose{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .addUser .addMessage li .choose span{
        color: #AAAAAB;
        font-size: 0.32rem;
    }
    .addUser .addMessage li .choose img{
        width: 0.26rem;
        height: 0.30rem;
        margin-left: .14rem;
        margin-right: .6rem;
    }
    .addUser .addMessage li input{
        width: 100%;
        margin-top: .14rem;
        margin-bottom: .22rem;
        font-size: .28rem;
        color: #3B4859;
    }
    .addUser .addMessage li input::placeholder{
        color: #AAAAAB;
        font-size: .28rem;
    }
    /* 添加图片 */
    .addImg{
        width: 100%;
        margin-top: .48rem;
        text-align: left;
        padding-left: .06rem;
    }
    .addImg p{
        font-size: .24rem;
        color: #3B4859;
        margin-bottom: .4rem;
    }
    .addImg .imgList{
        display: flex;
        flex-direction: row;
    }
    .addImg .imgList img{
        width: .86rem;
        height: .86rem;
    }
    .addImg .imgList .myImg{
        width: .86rem;
        height: .86rem;
        position: relative;
        margin-left: .26rem;
    }
    .addImg .imgList .myImg img{
        width: 100%;
        height: 100%;
    }
    .addImg .imgList  .myImg .close{
        width: .32rem;
        height: .32rem;
        position: absolute;
        right: -0.16rem;
        top: -0.16rem;
        z-index: 9;
    }
    /* 授权设备 */
    .empower{
        width: 100%;
        text-align: left;
        margin-top: .84rem;
    }
    .empower p{
        font-size: .3rem;
        color: #3B4859;
    }
    .empower button{
        width: 2rem;
        height: .84rem;
        border-radius: .6rem;
        background: #E6E7E8;
        margin-left: .08rem;
        margin-top: .56rem;
        color: #727374;
        font-size: .26rem;
    }
    .empower .activeE{
        background: #FFBA02;
        color: #ffffff;
    }
    /* 授权按钮 */
    .empowerButton{
        width: 100%;
        padding-right: .6rem;
        margin-top: .86rem;
    }
    .empowerButton button{
        width: 100%;
        height: 1rem;
        background: #1082FF;
        font-size: .32rem;
        color: #ffffff;
        border-radius: .5rem;
        line-height: 1rem;
    }

</style>