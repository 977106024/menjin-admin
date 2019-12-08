<template>
    <div class="equipment">
        <ul>
            <li>
                <div class="wrap">
<!--                    内容-->
                    <img src="@/assets/image/status-ok.png" alt="">
                    <div>
                        <p class="title">山水云房小区</p>
                        <p class="number">序列号：06548963112</p>
                    </div>
                </div>
<!--                编辑删除按钮-->
                <div class="btn">
                    <img src="@/assets/image/edit2.png" alt="" @click="edit">
                    <img src="@/assets/image/delete.png" @click="deleteItem" alt="">
                </div>
            </li>
            <li>
                <div class="wrap">
                    <img src="@/assets/image/error.png" alt="">
                    <div>
                        <p class="title">山水云房小区</p>
                        <p class="number">序列号：06548963112</p>
                    </div>
                </div>
                <div class="btn">
                    <img src="@/assets/image/edit2.png" alt="" @click="edit">
                    <img src="@/assets/image/delete.png" @click="deleteItem" alt="">
                </div>
            </li>
        </ul>

<!--        新增-->
        <div class="add">
            <router-link to="/addEquipment">
                <img src="@/assets/image/edit.png" alt="">
            </router-link>
        </div>

        <img v-if="showClose" src="@/assets/image/close.png" alt="" id="close" @click="onClose">
    </div>
</template>

<script>
    import { Dialog } from 'vant';
    export default {
        name: "equipment",
        data:()=>({
            showClose:false
        }),
        components:{[Dialog.Component.name]: Dialog.Component},
        methods:{
            //删除
            deleteItem(){
                this.showClose  = true
                Dialog.confirm({
                    message: '确认删除该门禁？',
                    confirmButtonText:'确定',
                    width:'230px',
                    className:'dialog-ahong',
                    closeOnPopstate:true
                }).then(() => {
                    // on confirm
                    this.showClose  = false
                }).catch(() => {
                    // on cancel
                    this.showClose  = false
                });
            },
            // 关闭弹框 x
            onClose(){
                Dialog.close({})
            },
            //编辑
            edit(){
                this.$router.push('/addEquipment')
            }
        },
    }
</script>

<style scoped>
    .equipment{
        padding-top: .5rem;
        text-align: left;
    }
    ul li{
        padding: .22rem .49rem;
        padding-top: .4rem;
        margin: .6rem;
        background: white;
    }

    /*内容*/
    ul li .wrap{
        display: flex;
    }
    ul li img{
        width: 1.68rem;
        height: 1.16rem;
        margin-right: .27rem;
    }
    li .title{
        color: #3B4859;
        font-size: .32rem;
        font-weight: bold;
        padding-bottom: .31rem;
        padding-top: .2rem;
    }
    li .number{
        color: #778392;
        font-size: .28rem;
    }

    /*编辑删除按钮*/
    li .btn{
        width: 100%;
        text-align: right;
        padding-top: .44rem;
    }
    li .btn > img{
        width: .32rem;
        height: .32rem;
    }

    /*新增*/
    .add{
        position: fixed;
        right: .5rem;
        bottom: .5rem;
    }
    .add img{
        width: 1.5rem;
        height: 1.5rem;
    }

    /*x*/
    #close{
        width: .3rem;
        height: .3rem;
        position: fixed;
        bottom: 5.3rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2222;
    }

</style>