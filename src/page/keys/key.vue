<template>
    <div class="keyManagement">
        <!-- 审核列表 -->
        <ul>
            <li v-for="item in manageList"  :key=item.id @click="showPopup(item.status)">
                <div class="content">
                    <!-- 头像 -->
                    <img class="avator" src="@/assets/image/avator.png" />
                    <!-- 用户信息 -->
                    <div class="user">
                        <h3>{{item.name}}</h3>
                        <p>{{item.tel}}</p>
                    </div>
                </div>
                <!-- 是否审核 -->
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
        <div class="diaolog" v-show="noExamine">
            <div class="popup">
                <img src="@/assets/image/keypopup.png" alt="">
                <!-- 要审核的内容 -->
                <div class="content">
                    <label> 
                        <h4>审核？？：</h4>
                        <input type="text">
                        <!-- 详细信息 -->
                        <div class="detail">
                            <p>详细信息</p>
                            <img src="@/assets/image/key_right.png" alt="">
                        </div>
                    </label>
                    <label> 
                        <h4>审核人员：</h4>
                        <input type="text">
                    </label>
                    <label> 
                        <h4>审核描述：</h4>
                        <div class="describe">
                            <textarea v-model="desc" cols="30" rows="8" placeholder="请输入不少于10个字的描述" @input="controlNumber" ref="count">
                            </textarea>
                            <span>{{number}}/240</span>
                        </div>
                        
                    </label>
                </div>
                <!-- 提交 -->
                <button class="commit">
                    提交
                </button>
                <!-- 弹窗关闭按钮 -->
                <img class="close" src="@/assets/image/key_close.png" alt="" @click="closePopup">
            </div>
            <div class="cover">
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'keyManagement',
    data: () => ({
            // 弹窗显示
            noExamine:false, 
            //字数
            number:0,   
            // 描述内容
            desc:'', 
            // 审核信息列表
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
            ],
               
            
    }),
    methods:{
        // 点击列表
        showPopup(status){
            if(status == 0){
                this.noExamine = true
            }else{
                this.noExamine = false
            }
        },
        // 关闭弹窗
        closePopup(){
            this.noExamine = false
        },
        // 控制数量
        controlNumber(){
            this.number = this.desc.length
            if(this.desc.length >= 240){
                this.$refs.count.setAttribute("maxlength",240);
                this.number = 240
            }
        }
    }
}
</script>
<style scoped lang="css">
    .keyManagement{
        width: 100%;
        text-align: left;
    }
    /* 审核列表 */
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
    /* 头像 */
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
    /* 弹窗样式 */
    .diaolog  .popup{
        width: 87%;
        position: fixed;
        top: 50%;
        left: 50%;
        background: #fff;
        transform: translate(-50%, -50%);
        border-radius: 0.1rem;
        z-index: 99;
        display: flex;
        flex-direction: column;
        justify-content: center
    }
    .diaolog  .popup img{
        width: 100%;
        
    }
    .diaolog .cover{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #000;
        z-index: 9;
        opacity: 0.65;
    }
    /* 审核内容 */
    .diaolog .content{
        width: 100%;
        padding: 0.7rem 0.28rem 0.44rem 0.28rem;

    }
    .diaolog .content label{
        display: flex;
        position: relative;
        flex-direction: row;
        margin-bottom: 0.76rem;
        justify-content:space-between;
    }
    .diaolog .content label h4{
        color: #3B4859;
        font-size: 0.3rem;
        font-weight: normal;
    }
    .diaolog .content label input{
        flex: 1;
        border:0;
        border-bottom: 1px solid #EEEEEE;
        margin-left: 0.3rem;
    }
    /* 详细信息 */
    .diaolog .content label .detail{
        position: absolute;
        z-index: 9;
        bottom: 2px;
        right: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .diaolog .content label .detail p{
        font-size: 0.28rem;
        color: #778392;
        margin-right: 0.14rem;
    }

    .diaolog .content label .detail img{
        width: 0.26rem;
        height: 0.30rem;
    }
    /* 审核描述 */
    .diaolog .content label:last-child{
        flex-direction: column;
        margin-bottom: 0;
    }
    .diaolog .content label .describe{
        width: 100%;
        margin-top: 0.48rem;
        position: relative;
    }
    .diaolog .content label textarea{
        width: 100%;
        border: 0;
        border-top: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;
        padding: 0.32rem;
        font-size: 0.28rem;
        color:#3B4859;
    }
    .diaolog .content label textarea::placeholder {
        color: #CCCCCC;
        font-size: 0.26rem;
    }
    .diaolog .content label .describe span{
        position: absolute;
        font-size: 0.26rem;
        right: 0.16rem;
        bottom: 0.28rem;
        color: #CCCCCC;
        font-size: 0.26rem;
    }
    /* 提交按钮 */
    .popup .commit{
        border: 0;
        background: none;
        margin: 0 auto;
        width: 3.2rem;
        height: .7rem;
        background: #1082FF;
        color: #fff;
        border-radius: .4rem;
        font-size: .3rem;
        line-height: .7rem;
        margin-bottom: 0.52rem;
    }
    /* 弹窗关闭按钮 */
    .diaolog .popup .close{
        position: absolute;
        top: -0.25rem;
        right: -0.25rem;
        width: 0.5rem;
        height: 0.5rem;
    }
</style>