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

<!--                底部-->
                <footer>
                    <div>{{item.time}}</div>
                    <router-link to="/kefuReply">
                        <div class="handle">{{item.address}}</div>
                    </router-link>
                </footer>
            </li>
        </ul>
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
        })
    }
</script>

<style scoped>
    .kefu-hall{
        font-size: .28rem;
        padding-top: .5rem;
    }

    /*内容*/
    .content{
        color: #778392;
        font-size: .28rem;
        padding: .7rem;
        text-align: left;
    }
    ul li{
        margin-bottom: .5rem;
        background: white;
        box-shadow:0px 0px 24px 0px rgba(39,52,125,0.06);
    }

    /*header*/
    ul li header{
        color: #3B4859;
        font-size: .32rem;
        border-bottom: 1px solid #eee;
    }

    /*标题*/
    ul li header .title{
        font-weight: bold;
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

    /*头部&底部*/
    ul li header,ul li footer{
        display: flex;
        justify-content: space-between;
        padding:.3rem .78rem;
    }
    ul li footer{
        color: #8392A7;
        font-size: .24rem;
        padding-top: 0;
    }

    /*去处理*/
    footer .handle{
        color: #3A75FE;
        font-size: .26rem;
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
</style>