<template>
    <div class="add-notice">
<!--        标题 输入框-->
        <section class="input">
            <header>
                <span>标题</span>
                <input type="text" maxlength="12">
            </header>
            <textarea v-model="desc" name="" id="" cols="30" rows="10" placeholder="请输入公告内容" maxlength="240" @input="controlNumber" @blur="inputOk"></textarea>
            <span class="inputNumber">{{inputNumber}}/240</span>
        </section>
<!--        区域 状态-->
        <section class="select">
            <div class="region">
                <span>区域</span>
                <img src="@/assets/image/key_right.png" @click="showPicker = true" alt="">
            </div>
            <div class="status">
                <span>状态</span>
                <div class="btn">
                    <span class="text">显示中</span>
                    <van-switch v-model="checked" active-color="#108EE9" inactive-color="#fff" size="24px" />
                </div>
            </div>
        </section>
        <van-popup v-model="showPicker" position="bottom">
            <van-picker
                    show-toolbar
                    :columns="columns"
                    @cancel="showPicker = false"
                    @confirm="onConfirm"
            />
        </van-popup>
    </div>
</template>

<script>
    import {mixinInput} from '@/assets/js/mixin';
    export default {
        name: "addNotice",
        mixins:[mixinInput],
        data:()=>({
            // 是否显示按钮
            checked:false,
            // 是否显示区域
            showPicker:false,
            //输入内容
            desc:'',
            //输入字数
            inputNumber:0,
            //区域数据
            columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
        }),
        methods: {
            //区域选择结果
            onConfirm(value,index) {
                window.console.log(`当前值：${value}, 当前索引：${index}`);
                this.showPicker = false
            },
            // 控制数量
            controlNumber(){
                this.inputNumber = this.desc.length
            }
        },
    }
</script>

<style scoped>
    .add-notice{
        font-size: .32rem;
    }

    /*标题*/
    .add-notice header{
        color: #3B4859;
        text-align: left;
        padding: .24rem;
        padding-left: .6rem;
        background: white;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
    }
    .add-notice header>span{
        color: #778392;
    }
    .add-notice header input{
        width: 80%;
        color: #3B4859;
        font-size: .32rem;
        /*font-weight: bold;*/
        outline: none;
        border: 0;
        margin-left: .2rem;
    }
    .add-notice section.input{
        border-bottom: 1px solid #ddd;
    }

    /*公告内容*/
    .add-notice textarea{
        color:#778392;
        width: 100%;
        border: 0;
        padding: .52rem .6rem;
    }
    textarea::-webkit-input-placeholder {
        color: #778392;
        font-size: .28rem;
    }
    .input{
        position: relative;
    }
    .input span.inputNumber{
        position: absolute;
        font-size: 0.26rem;
        right: 0.6rem;
        bottom: 0.6rem;
        color: #CCCCCC;
        font-size: 0.26rem;
        z-index: 11;
    }

    section.select>div{
        padding: .24rem .6rem;
        margin-top: .3rem;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        background: #fff;
        display: flex;
        justify-content: space-between;
    }

    /*区域 状态*/
    section.select .region img{
        height: .4rem;
        width: .4rem;
    }
    section.select .status{
        padding: .16rem .6rem;
        display: flex;
        align-items: center;
    }

    section.select .status .btn{
       display: inline-flex;
        justify-content: center;
        align-items: center;
    }
    section.select .status .btn > .text{
        color: #778392;
        font-size: .28rem;
        padding-right: .25rem;
    }

</style>