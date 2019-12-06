<template>
    <div class="keyManagement">
        <ul>
            <li v-for="item in manageList"  :key=item.id>
                <div class="content">
                    <img class="avator" src="@/assets/image/avator.png" />
                    <div class="user">
                        <h3>{{item.name}}</h3>
                        <p>{{item.tel}}</p>
                    </div>
                </div>
                <div class="foot">
                   <div class="examine">
                       <span :class="item.status == 0 ? 'status1' : 'status2' "></span>
                       <p class="statusOne" v-if="item.status == 0">未审核</p>
                       <p class="statusTwo" v-if="item.status == 1">已审核</p>
                    </div> 
                   <p>{{item.date}}</p> 
                </div>
            </li>
        </ul>
        <!-- 未审核弹窗 -->
        <div class="popup">

        </div>
    </div>
</template>
<script>
export default {
    name:'keyManagement',
    data(){
        return{
            manageList:[
                {
                    name:'懒洋洋',
                    tel:'17778999990',
                    status:0,
                    date:'2019-01-15',
                },
                {
                    name:'懒洋洋',
                    tel:'17778999990',
                    status:1,
                    date:'2019-01-15',
                },
                {
                    name:'懒洋洋',
                    tel:'17778999990',
                    status:0,
                    date:'2019-01-15',
                },
                {
                    name:'懒洋洋',
                    tel:'17778999990',
                    status:1,
                    date:'2019-01-15',
                },
            ]
        }
    }
}
</script>
<style scoped lang="css">
    .keyManagement{
        width: 100%;
        text-align: left;
    }
    .keyManagement ul{
        width: 100%;
        padding: 0.6rem .6rem;
        box-sizing: border-box;
    }
    .keyManagement ul li{
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
    .keyManagement ul li:last-child{
        margin-bottom: 0;
    }
    .keyManagement ul li .content{
        display: flex;
        flex-direction: row;
    }
    .keyManagement ul li .avator{
        width:0.68rem;
        height:0.68rem;
        margin-right: 0.44rem;
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
    .examine p{
        font-size: 0.26rem;
    }
    h3{
        font-size: 0.28rem;
        color: #3B4859;
        margin-bottom: 0.1rem;
    }
    p{
        font-size: 0.24rem;
        color: #9B9B9B;
    }
    span{
        display: inline-block;
        width: 0.12rem;
        height: 0.12rem;
        background: black;
        border-radius: 50%;
        margin-right: 0.16rem;
    }
    .statusOne{
        color: #E86C6C;
    }
    .statusTwo{
        color: #17CF66;
    }
     .status1{
        background: #E86C6C;
    }
    .status2{
        background: #17CF66;
    }
    /* 弹窗样式 */
    .popup{
        width: 87%;
        position: fixed;
        top: 50%;
        left: 50%;
        border-radius: 0.16rem;
        background: #fff;
        transform: translate(-50%, -50%);
    }
</style>