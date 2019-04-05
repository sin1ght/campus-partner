<template>
    <div id='user'>
        
        <header>
            <i class="setting fa fa-cog fa-2x"></i>
            <div class="banner"></div>
            <div class="head" @click="goProfile">
                <img src="../assets/avatar.jpg" alt="">
                <div class="intro">
                    <h2><span>青柠不青 </span><i class="fa fa-angle-right"></i></h2>
                    <p><i class="fa fa-eye"></i>10个人来看过你</p>
                </div>
            </div>
        </header>

        <section class="content">
            <mt-cell title="我的钱包">
                <i slot="icon" class="fa fa-credit-card" style="color:rgb(191, 191, 9);"></i>
            </mt-cell>
            <mt-cell title="我的订单">
                <i slot="icon" class="fa fa-file-text" style="color:rgb(51, 183, 109);"></i>
            </mt-cell>
            <mt-cell title="我的关注">
                <i slot="icon" class="fa fa-heart" style="color:#FF6A6A;"></i>
            </mt-cell>
            <mt-cell title="我的话题">
                <i slot="icon" class="fa fa-code" style="color:#48D1CC;"></i>
            </mt-cell>
            <mt-cell title="我的通知">
                <i slot="icon" class="fa fa-bell" style="color:#00CDCD;"></i>
            </mt-cell>

            <mt-cell title="创建话题">
                <i slot="icon" class="fa fa-signing " style="color:#00B2EE;"></i>
            </mt-cell>
            <mt-cell title="帮助与反馈">
                <i slot="icon" class="fa fa-envelope" style="color:#9a9696;"></i>
            </mt-cell>
        </section>

    </div>
</template>


<script>
export default {
    methods:{
        goProfile(){
            this.$router.push('/user/profile/123');
        }
    }
}
</script>


<style lang="scss">
#user{
    header{
        height: 20vh;
        position: relative;
        .setting{
            position: absolute;
            right: 1rem;
            top: 1rem;
            color: white;
        }
        .banner{
            height: 15vh;
            background: $theme-color;
            border-bottom-left-radius: 1.5rem 1rem;
            border-bottom-right-radius: 1.5rem 1rem;
        }
        .head{
            background: white;
            display: flex;
            align-items: center;
            width: 90vw;
            padding: 1rem;
            box-sizing: border-box;
            border-radius: 0.5rem;
            margin: 0 auto;
            color: $gray_font_color;
            margin-top: -8vh;
            box-shadow: 1px 1px 2px 1px #e0d3d37a, -1px 0 2px 1px #e0d3d37a;
            img{
                width: 5rem;
                height: 5rem;
                border-radius: 2.5rem;
                border: 1px solid #dad5d5;
                margin-right: 1rem;
            }
            h2{
                margin-top: 0;
                margin-bottom: 0.5rem;
                span{
                    color: black;
                }
            }
        }
    }

    .content{
        .mint-cell{
            border-bottom: 1px solid $divider_color;

            &:nth-child(6){
                margin-top: 1rem;
            }

            .mint-cell-text{
                margin-left: 0.5rem;
            }
        }
    }
}
</style>


