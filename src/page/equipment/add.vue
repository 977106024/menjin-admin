<template>
    <div class="add">

<!--        上-->
        <header>
            <img src="@/assets/image/addE.png" alt="">
            <div>
                <span>设备型号</span>
                <span> > </span>
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
    </div>
</template>

<script>
    export default {
        name: "add.vue"
    }
</script>

<style scoped>
    .add{
        padding: .6rem;
        padding-top: 1.02rem;
        text-align: left;
    }

    /*上*/
    .add header{
        display: flex;
        align-items: center;
    }
    .add header img{
         height: 1.68rem;
         width: 1.3rem;
        margin-left: .7rem;
        margin-right: 1.04rem;
    }

    /*中*/
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

</style>