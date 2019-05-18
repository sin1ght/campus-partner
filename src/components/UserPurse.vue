<template>
    <div class="user-purse-page">
        <!-- 用户钱包 -->
        <mt-header fixed title="我的钱包">
            <router-link to="/?active=user" slot="left">
                <i class="fa fa-angle-left"></i>
            </router-link>
        </mt-header>

        <div class="content">
            <section class="section-1">
                <img src="../assets/money.png" alt="" width="50px" height="50px">
                <p class="name">虚拟C币</p>
                <p class="num">45</p>
                <mt-button type="default" size="large">充值</mt-button>
                <mt-button type="default" size="large">提现</mt-button>
            </section>

            <section class="section-2">
                <mt-cell title="优惠卷" value="0张可用优惠卷" is-link>
                    <i class="fa fa-ticket" slot="icon" style="color:#ffc107;"></i>
                </mt-cell>
            </section>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>


<style lang="scss">
.user-purse-page{
    .content{
        width: 100vw;
        height: 100vh;
        padding-top:$header-height;
        font-size: 1.6rem;

        .section-1{
            background:white;
            display: flex;
            flex-direction: column;
            align-items: center;

            img{
                margin-top: 2rem;
            }

            p{
                margin-top: 1rem;
            }

            .name{
                color: gray;
            }

            .num{
                font-size: 3rem;
                font-weight: bold;
            }

            .mint-button{
                &:nth-child(4){
                    width: 90%;
                    background: $theme-color;
                    color: white;
                    border-radius: 2rem;
                    margin: 1rem 0;                }
                &:nth-child(5){
                    width: 90%;
                    background: $divider_color;
                    border-radius: 2rem;
                    margin-bottom: 2rem;
                }
            }
        }
    }
}
</style>

