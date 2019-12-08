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
            <button>授权</button>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "userDetail",
        data:()=>({
            data:['设备1','设备2','设备3'],
            result:[],
            list:3,
            checked:false
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
            }
        }
    }
</script>

<style scoped>
    .user-detail{

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
</style>