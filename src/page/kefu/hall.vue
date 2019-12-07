<template>
    <div class="kefu-hall">
        <ul>
            <li v-for="(item,index) of listData" :key="index">
                <!--                标题-->
                <header>
                    <div class="title">
                        <span class="dot"></span>
                        <span>{{item.title}}</span>
                    </div>
                    <div class="more-btn">
                        <span class="status">{{item.status}}</span>
                    </div>
                </header>
                <!--                内容-->
                <section class="content">
                    <p>{{item.content}}</p>
                </section>
                <footer>
                    <div>{{item.time}}</div>
                    <div class="handle">{{item.address}}</div>
                </footer>
            </li>
        </ul>

        <!--        新增-->
        <div class="add">
            <router-link to="/addkefu-hall">
                <img src="@/assets/image/edit.png" alt="">
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "kefu-hall",
        data:()=>({
            listData:[
                {
                    id:'1',
                    title:'投诉',
                    content:'创新的实质是理想，总是盘算着心里的小九九,创新的实质是理盘算着心里的',
                    time:'201-05-16 10:40',
                    address:'去处理',
                    status:'待处理'
                },

            ],
            visibleBtn:undefined
        })
    }
</script>

<style scoped>
    .kefu-hall{
        font-size: .28rem;
        padding-top: .5rem;
    }

    /*标题 内容*/
    .content{
        color: #778392;
        font-size: .28rem;
        padding: .7rem;
        text-align: left;
    }
    ul li{
        margin-bottom: .5rem;
        box-shadow:0px 0px 24px 0px rgba(39,52,125,0.06);
    }
    ul li header{
        color: #3B4859;
        font-size: .32rem;
        border-bottom: 1px solid #eee;
    }
    ul li header .title{
        display: flex;
        align-items: center;
    }
    ul li header .dot{
        display: inline-block;
        height: .2rem;
        width: .2rem;
        border-radius: 50%;
        background: #E86C6C;
        margin-right: .2rem;
    }
    ul li header,ul li footer{
        display: flex;
        justify-content: space-between;
        padding:.3rem .78rem;
    }
    ul li footer{
        color: #8392A7;
        font-size: .26rem;
        padding-top: 0;
    }

    /*待处理*/
    .more-btn{
        position: relative;
    }
    .more-btn img{
        width: .4rem;
        height: .4rem;
    }
    .more-btn .status{
        color: #E86C6C;
        font-size: .28rem;
    }
    
    footer .handle{
        color: #3A75FE;
    }

    /*新增*/
    .add{
        position: fixed;
        right: .5rem;
        bottom: .5rem;
    }
    .add img{
        width: 1.5rem;
        height: 1.5rem;
    }
</style>