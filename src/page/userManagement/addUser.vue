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
    </div>
</template>
<script>
export default {
    name:'addUser'
}
</script>
<style scoped lang="css">
    .addUser{
        width: 100%;
        padding: .8rem 0 0 .6rem;
    }
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

    

</style>