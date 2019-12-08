<template>
    <div class="add">

<!--        上-->
        <header>
            <img class="cover" src="@/assets/image/addE.png" alt="">
            <div class="select" @click="showPicker = true">
                <span>设备型号</span>
                <img src="@/assets/image/add-right.png" alt="">
            </div>
        </header>

<!--        中-->
        <section class="nameAndNumber">
            <div class="name">
                <p class="title">设备名称</p>
                <input type="text" placeholder="填写设备名称">
            </div>
            <div class="number">
                <p class="title">设备编号</p>
                <input type="text" placeholder="填写设备编号">
            </div>
        </section>

<!--        下-->
        <footer>
            <button>添加设备</button>
        </footer>

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
        name: "add.vue",
        data:()=>({
            showPicker:false,
            columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
        }),
        methods:{
            //区域选择结果
            onConfirm() {
                // Toast(`当前值：${value}, 当前索引：${index}`);
                this.showPicker = false
            },
        }
    }
</script>

<style scoped>
    .add{
        padding: .6rem;
        padding-top: 1.02rem;
        text-align: left;
    }

    /*上 设备型号*/
    .add header{
        display: flex;
        align-items: center;
    }
    .add header .cover{
         height: 1.68rem;
         width: 1.3rem;
        margin-left: .7rem;
        margin-right: 1.04rem;
    }
    .add header .select{
        color: #3B4859;
        font-size: .32rem;
        font-weight: bold;
        display: flex;
        align-items: center;
    }
    .select img{
        height: .5rem;
        width: .5rem;
        vertical-align: top;
    }
    .add header .select img{
        margin-left: .18rem;
    }

    /*中 设备名称 编号*/
    section.nameAndNumber{
        margin-top: 1.17rem;
    }
    section.nameAndNumber>div{
        padding: .49rem .52rem;
        background: white;
        margin-bottom: .3rem;
    }
    section.nameAndNumber>div input{
        border: 0;
        height: .48rem;
    }
    section.nameAndNumber>div .title{
        color: #3B4859;
        font-size: .32rem;
        font-weight: bold;
        padding-bottom: .35rem;
    }
    input::-webkit-input-placeholder {
        color: #ccc;
    }

    /*下 添加按钮*/
    footer{
        padding: .2rem;
        padding-top: 1.03rem;
    }
    footer button{
        color: white;
        width: 100%;
        border: 0;
        border-radius: .8rem;
        padding: .19rem 0;
        background: #1082FF;
    }

</style>