<template>
    <div class="login-page">
        <div class="banner">
            <img src="../assets/m-bg3.jpg" alt="">
        </div>

        <p class="skip-button">先逛逛</p>

        <div class="form">
            <div>
                <i class="fa fa-user-o"></i>
                <input type="text" name="">
            </div>
            <div>
                <i class="fa fa-unlock"></i>
                <input type="password" name="">
            </div>

            <mt-button type="primary" size="large" @click.native="$router.push('/')">登录</mt-button>
        </div>

        <footer>
            <div>
                <p>忘记密码?</p>
                <p @click="$router.push('/register')">现在注册</p>
            </div>
            <div>
                <i class="fa fa-qq"></i>
                <i class="fa fa-weixin"></i>
                <i class="fa fa-weibo"></i>
            </div>
        </footer>

    </div>
</template>


<script>
export default {
    
}
</script>

<style lang="scss">
.login-page{
    @include full-screen;
    position: relative;
    color: white;

    .banner{
        img{
            @include full-screen;
            position:absolute;
            top: 0;
            left: 0;
            z-index:0;
            filter: brightness(50%);
        }
    }

    .skip-button{
        position: absolute;
        right: 5%;
        top: 3%;
        padding: 5px;
        width: 4rem;
        border:1px solid $light-theme-color;
        border-radius: 12px;
        text-align: center;
    }

    .form{
        color: white;
        position: absolute;
        left: 0;
        top: 35%;
        z-index: 1;
        display: flex;
        flex-direction: column;
        width: 100vw;
        align-items: center;
        font-size: 1.8rem;

        div{
            width: 80%;
            border-bottom: 1px solid white;
            margin-bottom: 1rem;
            i{
                width: 10%;
                text-align: right;
                margin-right: 1rem;
            }
            input{
                width: 80%;
                border: none;
                outline: none;
                font-size: 1.8rem;
                padding: 5px;
                background: transparent;
                color: white;
            }
        }

        .mint-button {
            margin-top: 2rem;
            width: 80%;
            background:linear-gradient(left,$light-theme-color,$theme-color);
            border-radius: 2rem;
        }

    }

    footer{
        position: absolute;
        width: 100vw;
        bottom: 15%;
        left: 0;
        font-size: 1.4rem;

        div{
            display: flex;
            justify-content: center;
            &:first-child{
                p{
                    &:first-child{
                        border-right: 1px solid white;
                        padding-right: 2rem;
                        margin-right: 2rem;
                    }
                }
            }

            &:last-child{
                margin-top: 1rem;
                i{
                    margin-right: 2rem;
                }
            }
        }
    }

}
</style>
