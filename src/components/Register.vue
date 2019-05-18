<template>
    <div class="register-page">
        <mt-header fixed style="background:transparent;">
            <router-link to="/login" slot="left">
                <i class="fa fa-angle-left"></i>
            </router-link>
        </mt-header>

        <div class="form">
            
            <div class="logo">
                <img src="../assets/logo2.png" alt="" width="80" height="80">
            </div>

            <input type="text" name="" placeholder="请输入手机号码">
            <input type="password" name="" placeholder="请设置6-16位密码">
            <input type="password" name="" placeholder="请再次确认密码">
            
            <mt-button type="primary" size="large">注册</mt-button>
        </div>


    </div>
</template>


<script>
export default {
    
}
</script>


<style lang="scss">
.register-page{
    @include full-screen;
    background: linear-gradient(left top,#efc1c9,$light-theme-color);
    font-size: 1.6rem;
    position: relative;

    .form{
        color: white;
        position: absolute;
        left: 0;
        top:15%;
        z-index: 1;
        display: flex;
        flex-direction: column;
        width: 100vw;
        align-items: center;

        input{
            border: none;
            width: 80%;
            border-bottom: 1px solid white;
            margin-bottom: 1rem;
            outline: none;
            font-size: 1.6rem;
            padding: 5px;
            background: transparent;
            color: white;

            &::-webkit-input-placeholder{
                color: white;
            }
        }

        .mint-button {
            margin-top: 2rem;
            width: 80%;
            background:$theme-color;
            border-radius: 2rem;
        }

        .logo{
            width: 90px;
            height: 90px;
            border-radius: 45px;
            border: 1px solid white;
            overflow: hidden;
            margin-bottom: 5rem;
            padding: 5px;
            background: white;
        }
    }

}
</style>
