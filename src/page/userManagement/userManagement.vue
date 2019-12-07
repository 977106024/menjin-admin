<template>
    <div class="userManagement">
        <!-- 添加用户 -->
        <div class="addUser">
            <div class="Useravator">
                <img src="@/assets/image/user_addUser.png" alt="">
                <p>添加用户</p>
            </div>
            <img class="add" src="@/assets/image/user_add.png" alt="">
        </div>
        <!-- 用户列表 -->
        <ul class="userList">
            <li v-for="item in userList"  :key=item.id>
                <p>
                   <img class="avator" :src="item.avator" />
                   <span>{{item.name}}</span>
                </p> 
                <p>
                    <span>{{item.number}}</span>
                    <img class="right" src="@/assets/image/key_right.png" alt="">
                </p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'userManagement',
    data: () => ({
        // 用户信息列表
        userList:[
            {
                avator:require('@/assets/image/avator.png'),
                name:'懒洋洋',
                number:'NO.123456',
            },
            {
                avator:require('@/assets/image/avator.png'),
                name:'懒洋洋',
                number:'NO.123456',
            },
            {
                avator:require('@/assets/image/avator.png'),
                name:'懒洋洋',
                number:'NO.123456',
            },
            {
                avator:require('@/assets/image/avator.png'),
                name:'懒洋洋',
                number:'NO.123456',
            },
            {
                avator:require('@/assets/image/avator.png'),
                name:'懒洋洋',
                number:'NO.123456',
            },
            {
                avator:require('@/assets/image/avator.png'),
                name:'懒洋洋',
                number:'NO.123456',
            },
        ],
            
    }),
}
</script>
<style lang="css" scoped>   
    .userManagement{
        width: 100%;
        padding: .4rem;
    }
    p{
        font-size: 0.28rem;
        color: #3D4155;
    }
    /* 添加用户 */
    .addUser{
        width: 100%;
        background: #ffffff;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: .3rem 0.44rem 0.3rem 0.3rem;
        margin-bottom: .3rem;
    }
    .addUser img{
        width: 0.62rem;
        height: 0.62rem;
    }
    .addUser .Useravator{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center
    }
    .addUser .Useravator p{
        color: #FFBA00;
        margin-left: 0.36rem;
    }
    /* 用户列表 */
    .userList{
        width:100%;
    }
    .userList li,li>p{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .userList li{
        width: 100%;
        background: #ffffff;
        padding: 0.22rem 0.3rem;
        margin-bottom: .3rem;
    }
    .userList li:last-child{
        margin-bottom: 0;
    }
    .userList li p .avator{
        width: .8rem;
        height: .8rem;
        margin-right: 0.3rem;
    }
     .userList li p .right{
        width: .26rem;
        height: .3rem;
        margin-left: 0.3rem;
    }
</style>