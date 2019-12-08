<template>
    <div class="user-detail">
<!--        头部-->
        <header>
            <div class="tag">
                <span>销售部</span>
            </div>
            <div class="user-avator-name">
                <img src="@/assets/image/share.jpg" alt="">
                <p>懒洋洋</p>
            </div>
            <div class="number">
                <span>18071525633</span>
                <span>NO.123456</span>
                <span>2019-06-04</span>
            </div>
        </header>

<!--        选择-->
        <section class="checkbox">
            <van-checkbox-group v-model="result">
                <van-cell-group>
                    <van-cell
                            clickable
                            title="全选"
                            @click="toggleAll()"
                    >
                        <van-checkbox
                                :name="0"
                                ref="checkboxes"
                                slot="right-icon"
                        />
                    </van-cell>
                    <van-cell
                            v-for="(item, index) in list"
                            clickable
                            :key="item"
                            :title="`设备 ${item}`"
                            @click="toggle(index)"
                    >
                        <van-checkbox
                                :name="item"
                                ref="checkboxes"
                                slot="right-icon"
                        />
                    </van-cell>
                </van-cell-group>
            </van-checkbox-group>
        </section>

<!--        底部-->
        <footer>
            <button @click="isEmpower = true">授权</button>
        </footer>
        <!-- 是否授权弹窗 -->
        <div class="diaolog" v-show="isEmpower">
            <div class="popup">
                <img class="close" src="@/assets/image/close.png" alt="" @click="close">
                <img class="empowerImg" src="@/assets/image/userD_popup.png" alt="">
                <p>是否确定授权</p>
                <div class="choose">
                    <button @click="cancle">取消</button>
                    <button @click="sure">确定</button>
                </div>
            </div>
            <div class="cover"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userDetail",
        data:()=>({
            data:['设备1','设备2','设备3'],
            result:[],
            list:3,
            checked:false,
            // 显示授权弹窗
            isEmpower:false,
        }),
        methods: {
            // 选择
            toggle(index) {
                this.$refs.checkboxes[index].toggle();
            },
            //全选
            toggleAll() {
                this.result =
                    this.result.length >= 4 ? [] : [0, 1, 2, 3]
            },
            // 取消
            cancle(){
                this.isEmpower = false
            },
            // 确定
            sure(){
                this.isEmpower = false
            },
            // 关闭弹窗
            close(){
                this.isEmpower = false
            }
        }
    }
</script>

<style scoped>
    .user-detail{
        width: 100%;
    }

    /*头部*/
    header{
        padding: .37rem;
        background: white;
    }

    /*标签*/
    header .tag{
        text-align: left;
    }
    header .tag>span{
        color: #FF9A00;
        font-size: .24rem;
        padding: .06rem .2rem;
        border-radius: .23rem;
        background: #FFF2DD;
        display: inline-block;
    }

    /*头像*/
    header .user-avator-name img{
        width: 1.6rem;
        height:1.6rem;
        border-radius: 50%;
        margin-top: -.15rem;
    }
    header .user-avator-name p{
        color: #3B4859;
        font-size: .32rem;
        font-weight: bold;
        padding-top: .26rem;
        padding-bottom: .58rem;
    }

    /*数字*/
    header .number{
        color:#778392;
        font-size: .28rem;
        display: flex;
        justify-content: space-between;
    }

    /*多选*/
    section.checkbox{
        margin-top: .3rem;
        text-align: left;
    }

    /*授权按钮*/
    footer{
        padding: .2rem .6rem;
        padding-top: 1.03rem;
    }
    footer button{
        color: white;
        width: 100%;
        border: 0;
        border-radius: .8rem;
        padding: .28rem 0;
        background: #1082FF;
    }
    /* 是否授权 */
    .diaolog .popup{
        width: 78%;
        position: fixed;
        top: 50%;
        left: 50%;
        background: #fff;
        transform: translate(-50%, -50%);
        border-radius: 0.1rem;
        z-index: 99;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
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
    .popup .empowerImg{
        width: 2rem;
        height: 2rem;
        margin-top: .8rem;
    }
    .popup p{
        width: 100%;
        font-size: .36rem;
        color: #3B4859;
        margin-top: .5rem;
    }
    .popup .choose{
        width: 100%;
        border-top: 1px solid #E5E5E5;
        margin-top: .76rem;
    }
    .popup .choose button{
        width: 50%;
        height: 1rem;
        line-height: 1rem;
        font-size: .36rem;
        color:#6D7278;
    }
    .popup .choose button:last-child{
        color: #108EE9;
    }
    .popup .close{
        position: absolute;
        width: .3rem;
        height: .3rem;
        top: -.6rem;
        right: 0;
        z-index: 999;
    }
</style>