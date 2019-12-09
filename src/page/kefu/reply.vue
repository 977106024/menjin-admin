<template>
    <div class="kefu-reply">

<!--        投诉-->
            <section class="card">

                <!--                标题-->
                <header>
                    <div class="title">
                        <span class="dot"></span>
                        <span>{{listData.title}}</span>
                    </div>
                </header>

                <!--                内容-->
                <section class="content">
                    <p>{{listData.content}}</p>
                </section>

                <!--                底部-->
                <footer>
                    <div>{{listData.time}}</div>
                    <div class="handle">{{listData.address}}</div>
                </footer>
            </section>

<!--            回复消息-->
            <section class="card text">

                <!--                标题-->
                <header>
                    <div class="title">
                        <span>{{replyData.title}}</span>
                    </div>
                </header>

                <!--                内容-->
                <section class="content">
                    <textarea name="" id="" cols="30" rows="5" placeholder="请输入回复内容" @blur="inputOk"></textarea>
                </section>
            </section>

<!--            底部按钮-->
            <footer>
                <button>回复</button>
                <button>已解决</button>
            </footer>
    </div>
</template>

<script>
    import {mixinInput} from '@/assets/js/mixin';
    export default {
        name: "kefu-reply",
        mixins:[mixinInput],
        data:()=>({
            listData: {
                    id:'1',
                    title:'投诉',
                    content:'AntV 是蚂蚁金服全新一代数据可视化解,AntV 是蚂蚁金服全新一代数据可视化解,AntV 是蚂蚁金服全新一代数据可视化解\n',
                    time:'上报时间：201-05-16',
                    address:'待处理',
                },
            replyData:{
                title:'添加回复内容',
            }
        })
    }
</script>

<style scoped>
    .kefu-reply{
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
    .card{
        margin-bottom: .5rem;
        background: white;
        box-shadow:0px 0px 24px 0px rgba(39,52,125,0.06);
    }

    /*header*/
    .card header{
        color: #3B4859;
        font-size: .32rem;
        border-bottom: 1px solid #eee;
    }

    /*标题*/
    .card header .title{
        font-weight: bold;
        display: flex;
        align-items: center;
    }

    /*圆点*/
    .card header .dot{
        display: inline-block;
        height: .2rem;
        width: .2rem;
        border-radius: 50%;
        background: #E86C6C;
        margin-right: .2rem;
    }

    /*头部&底部*/
    .card header,.card footer{
        display: flex;
        justify-content: space-between;
        padding:.3rem .78rem;
    }
    .card footer{
        color: #8392A7;
        font-size: .24rem;
        padding-top: 0;
    }

    /*输入框*/
    section.text .content{
        padding-bottom: .3rem;
    }
    section.text .content textarea{
        width: 100%;
        border: 0;
    }
    textarea::-webkit-input-placeholder {
        color: #778392;
        font-size: .28rem;
    }

    /*底部按钮*/
    footer{
        padding-bottom: .4rem;
    }
    footer button{
        color: #fff;
        padding:.14rem 1.04rem;
        margin-top: .3rem;
        border-radius: .35rem;
        background: #1082FF;
    }
    footer button + button{
        margin-left: .88rem;
    }
</style>