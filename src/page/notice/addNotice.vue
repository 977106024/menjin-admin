<template>
    <div class="add-notice">
<!--        标题 输入框-->
        <section class="input">
            <header>标题</header>
            <textarea name="" id="" cols="30" rows="10" placeholder="请输入公告内容" maxlength="240"></textarea>
        </section>
<!--        区域 状态-->
        <section class="select">
            <div class="region">
                <span>区域</span>
                <img src="@/assets/image/key_right.png" @click="showPicker = true" alt="">
<!--                <span > > </span>-->
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
    export default {
        name: "addNotice",
        data:()=>({
            checked:false,
            showPicker:false,
            columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
        }),
        methods: {
            onConfirm() {
                // Toast(`当前值：${value}, 当前索引：${index}`);
                this.showPicker = false
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
        text-align: left;
        padding: .24rem;
        padding-left: .6rem;
        background: white;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
    }
    .add-notice section.input{
        border-bottom: 1px solid #ddd;
    }

    /*公告内容*/
    .add-notice textarea{
        width: 100%;
        border: 0;
        padding: .52rem .6rem;
    }
    textarea::-webkit-input-placeholder {
        color: #778392;
        font-size: .28rem;
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
        height: .35rem;
        width: .35rem;
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