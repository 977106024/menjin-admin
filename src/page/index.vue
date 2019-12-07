<template>
    <div id="index">
        <ul>
            <li>
                <img src="@/assets/image/equipment2.png" alt="">
                <span>设备管理</span>
            </li>
            <li>
                <img src="@/assets/image/user2.png" alt="">
                <span>用户管理</span>
            </li>
            <router-link to="/openingRecord" tag="li">
                <img src="@/assets/image/open-door2.png" alt="">
                <span>开门记录</span>
            </router-link>
            <li>
                <img src="@/assets/image/kefu2.png" alt="">
                <span>客服中心</span>
            </li>
            <router-link to="/key" tag="li">
                <img src="@/assets/image/key2.png" alt="">
                <span>钥匙管理</span>
            </router-link>
            <router-link to="/notice" tag="li">
                <img src="@/assets/image/notice2.png" alt="">
                <span>公告管理</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "index.vue"
    }
</script>

<style scoped>
    #index{
        font-size: .28rem;
        margin-top: .7rem;
    }
    ul{
        width: 100%;
        padding: .8rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    ul li{
        width: 40%;
        margin: 10% 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    li>img{
        height: 2.14rem;
        width: 2.14rem;
    }
    li>span{
        color: #8392A7;
        margin-top: -30px;
    }
</style>