<template>
    <div class="openingRecord">
        <!-- 审核列表 -->
        <ul>
            <li v-for="item in manageList"  :key=item.id @click="showPopup(item.status)">
                <div class="content">
                    <!-- 用户信息 -->
                    <div class="user">
                        <h3>{{item.name}}</h3>
                        <p>{{item.desc}}</p>
                    </div>
                </div>
                <!-- 是否成功-->
                <div class="foot">
                   <div class="examine">
                       <span :class="item.status == 0 ? 'status1' : 'status2' "></span>
                       <p class="statusOne" v-if="item.status == 0">失败</p>
                       <p class="statusTwo" v-if="item.status == 1">成功</p>
                    </div> 
                   <p>{{item.date}}</p> 
                </div>
            </li>
        </ul>    
    </div>
</template>
<script>
export default {
    name:'openingRecord',
    data: () => ({
            // 开分记录列表
            manageList:[
                {
                    name:'懒洋洋',
                    desc:'大门',
                    status:0,
                    date:'2019-01-15',
                },
                {
                    name:'懒洋洋',
                    desc:'大门',
                    status:1,
                    date:'2019-01-15',
                },
                {
                    name:'懒洋洋',
                    desc:'大门',
                    status:1,
                    date:'2019-01-15',
                },
                {
                    name:'懒洋洋',
                    desc:'大门',
                    status:1,
                    date:'2019-01-15',
                },
            ],
               
            
    }),
}
</script>
<style scoped lang="css">
    .openingRecord{
        width: 100%;
        text-align: left;
    }
    .openingRecord ul{
        width: 100%;
        padding: 0.6rem .6rem;
        box-sizing: border-box;
    }
    .openingRecord ul li{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        box-shadow : 0px 1px 4px 0px rgba(0,0,0,0.13);
        border-radius:4px;
        margin-bottom: 0.3rem;
        background: #ffffff;
        padding: 0.2rem;
    }
    .openingRecord ul li:last-child{
        margin-bottom: 0;
    }
    .openingRecord ul li .content{
        display: flex;
        flex-direction: row;
    }
    .user,.foot{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .foot .examine{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 0.1rem;
    }
    .foot p{
        color: #9B9B9B;
    }
    .examine p{
        font-size: 0.26rem;
    }
    h3{
        font-size: 0.28rem;
        color: #3B4859;
        margin-bottom: 0.1rem;
    }
    .user p{
        font-size: 0.24rem;
        color: #3B4859;
    }
    .examine span{
        display: inline-block;
        width: 0.12rem;
        height: 0.12rem;
        background: black;
        border-radius: 50%;
        margin-right: 0.16rem;
    }
    .examine .statusOne{
        color: #E86C6C;
    }
    .examine .statusTwo{
        color: #17CF66;
    }
    .examine .status1{
        background: #E86C6C;
    }
    .examine .status2{
        background: #17CF66;
    }
    
</style>