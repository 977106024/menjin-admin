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
                <span @click="showPicker = true"> > </span>
            </div>
            <div class="status">
                <span>状态</span>
                <span>显示中</span>
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
            showPicker:false,
            columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
        }),
        methods: {
            onConfirm() {
                // Toast(`当前值：${value}, 当前索引：${index}`);
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
</style>