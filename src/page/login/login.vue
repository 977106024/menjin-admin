<template>
    <div id="login">
<!--        标题-->
        <header>
            <span>登录</span>
        </header>

<!--        账号 密码输入-->
        <section class="login-input">
            <div class="input">
                <div class="user">
                    <img src="@/assets/image/user-login.png" alt="">
                    <input type="text" placeholder="输入账号">
                </div>
                <div class="password">
                    <img src="@/assets/image/password-login.png" alt="">
                    <input type="text" placeholder="输入密码">
                </div>
            </div>
            <div class="login-btn">
                <button>登陆</button>
            </div>
            <div class="password-lose">
                <span>忘记密码?</span>
            </div>
        </section>

<!--        底部-->
        <footer class="support">
            xxxx提供技术支持
        </footer>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
    #login{
        height: 100vh;
        background: white;
    }
    /*头部标题 登录*/
    #login header{
        padding-top: 1.44rem;
        color: #3B4859;
        font-size: .32rem;
        font-weight: bold;
    }
    header{
        box-shadow:0px 4px 22px 0px rgba(225,222,222,0.38);
        padding-bottom: .25rem;
        position: relative;
    }
    /*底部蓝线*/
    header:after{
        content: "";
        display: block;
        height: .08rem;
        width: 2.24rem;
        background: #1082FF;
        position: absolute;
        bottom: 0rem;
        left:50%;
        transform: translateX(-50%);
    }

    /*账号 密码 登录*/
    section.login-input {
        padding-top: 1.33rem;
    }
    section.login-input input{
        outline: none;
        border: 0;
    }
    section.login-input .user>img,section.login-input .password>img{
        width: .34rem;
        height: .34rem;
        margin-right: .22rem;
        vertical-align: top;
    }
    section.login-input .user,section.login-input .password{
        margin: 0 .75rem;
        margin-bottom: .62rem;
        text-align: left;
        padding-left: .1rem;
        padding-bottom: .26rem;
        border-bottom: .035rem solid #E2E2E2;
    }
    input::-webkit-input-placeholder {
        color: #CBCBCB;
        font-size: .28rem;
    }

    /*登录按钮*/
    .login-btn{
        font-size: .3rem;
        width: 100%;
        padding: 0 .876rem;
    }
    .login-btn button{
        color: #fff;
        width: 100%;
        border: 0;
        padding: .19rem 0;
        border-radius: .48rem;
        background: #1082FF;
    }
    
    /*忘记密码*/
    .password-lose{
        font-size: .24rem;
        text-align: right;
        padding: .42rem .75rem;
    }
    .password-lose span{
        color: #4A90E2;
    }

    /*xxx技术支持*/
    .support{
        color: #ccc;
        font-size: .24rem;
        position: fixed;
        bottom: .72rem;
        left: 50%;
        transform: translateX(-50%);
    }
</style>