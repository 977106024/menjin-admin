<template>
    <div class="notice">
        <ul>
            <li v-for="(item,index) of listData" :key="index">
                <header>
                    <div>{{item.title}}</div>
                    <div class="more-btn" @click="showMoreBtn(item.id)">
                        <img src="@/assets/image/more.png" alt="">
                        <div class="btns" v-if="visibleBtn === item.id">
                            <div class="btn">
                                <img src="@/assets/image/show.png" alt="">
                                <span>显示</span>
                            </div>
                            <div class="btn">
                                <img src="@/assets/image/delete.png" alt="">
                                <span>删除</span>
                            </div>
                        </div>
                    </div>
                </header>
                <section class="content">
                    <p>{{item.content}}</p>
                </section>
                <footer>
                    <div>{{item.time}}</div>
                    <div>{{item.address}}</div>
                </footer>
            </li>
        </ul>
        <div class="edit">
            <img src="@/assets/image/edit.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "notice",
        data:()=>({
            listData:[
                {
                    id:'1',
                    title:'物业缴费通知',
                    content:'创新的实质是理想，总是盘算着心里的小九九,创新的实质是理盘算着心里的',
                    time:'2019-05-16',
                    address:'山云房小区'
                },
                {   id:'2',
                    title:'物业缴费通知',
                    content:'创新的实质是理想，总是盘算着心里的小九九,创新的实质是理想盘算着心九',
                    time:'2019-05-16',
                    address:'山云房小区'
                },
                {
                    id:'3',
                    title:'物业缴费通知',
                    content:'创新的实质是理想，总是盘算着心里的小九九,创新的实质是理想盘算着心里九',
                    time:'2019-05-16',
                    address:'山云房小区'
                }, {
                    id:'4',
                    title:'物业缴费通知',
                    content:'创新的实质是理想，总是盘算着心里的小九九',
                    time:'2019-05-16',
                    address:'山云房小区'
                }, {
                    id:'5',
                    title:'物业缴费通知',
                    content:'创新的实质是理想，总是盘算着心里的小九九',
                    time:'2019-05-16',
                    address:'山云房小区'
                }, {
                    id:'6',
                    title:'物业缴费通知',
                    content:'创新的实质是理想，总是盘算着心里的小九九',
                    time:'2019-05-16',
                    address:'山云房小区'
                }, {
                    id:'7',
                    title:'物业缴费通知',
                    content:'创新的实质是理想，总是盘算着心里的小九九',
                    time:'2019-05-16',
                    address:'山云房小区'
                },
            ],
            visibleBtn:undefined
        }),
        methods:{
            showMoreBtn(id){
                this.visibleBtn =  this.visibleBtn === id ? undefined : id
            }
        }
    }
</script>

<style scoped>
    .notice{
        font-size: .28rem;
    }
    .content{
        color: #778392;
        padding: .7rem;
        text-align: left;
    }
    ul li{
        margin-bottom: .5rem;
        box-shadow:0px 0px 24px 0px rgba(39,52,125,0.06);
    }
    ul li header{
        color: #3B4859;
        font-size: .3rem;
        border-bottom: 1px solid #eee;
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
    .more-btn{
        position: relative;
    }
    .more-btn img{
        width: .4rem;
        height: .4rem;
    }
    .btns{
        border-radius: .2rem;
        box-shadow:2px 0px 13px 0px rgba(168,168,168,0.19),0px 2px 13px 0px rgba(168,168,168,0.17);
        background: #FDFDFE;
        position: absolute;
        top: .79rem;
        right: .1rem;
    }
    .btns .btn{
        padding: .25rem .3rem;
    }
    .btns .btn:first-child{
        border-bottom: 1px solid #eee;
    }
    .btns .btn{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btns .btn img{
        margin-right: .1rem;
    }
    .btns .btn>span{
        white-space: nowrap;
    }
    .edit{
        position: fixed;
        right: .5rem;
        bottom: .5rem;
    }
    .edit img{
        width: 1.5rem;
        height: 1.5rem;
    }
</style>