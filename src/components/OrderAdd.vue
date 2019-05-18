<template>
    <div class="order-add-page">
        <!-- 陪玩下单界面 -->
        <mt-header fixed title="下单" @click.native="$router.go(-1)">
            <i class="fa fa-angle-left" slot="left"></i>
        </mt-header>

        <div class="content">
            <section class="head">
                <img src="../assets/avatar.jpg" alt="" width="80px"  height="80px">
                <p>青柠不青</p>
            </section>

            <section class="time-num">
                <p>选择小时</p>
                <div>
                    <span @click="timeSubBtnClick">-</span>
                    <span>{{hours}}</span>
                    <span @click="hours++">+</span>
                </div>
            </section>
            <section class="money-count">
               合计(C币):&nbsp;<span>{{moneyPerHour*hours}}</span>
            </section>

            <footer>
                <mt-button type="default" size="large" @click="$router.push('/user/order')">立即下单</mt-button>
            </footer>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            hours:1,
            moneyPerHour:45
        }
    },
    methods:{
        timeSubBtnClick(){
            if(this.hours>1)
                this.hours--;
        }
    }
}
</script>


<style lang="scss">
.order-add-page{
    .content{
        width: 100vw;
        height: 100vh;
        padding-top:$header-height;
        font-size: 1.6rem;

        section{
            background: white;
        }

        .head{
            display: flex;
            flex-direction: column;
            align-items: center;

            img{
                width: 80px;
                height: 80px;
                border-radius: 40px;
                margin: 1rem 0;
            }

            p{
                color: black;
                font-weight: bold;
                font-size: 1.8rem;
                margin-bottom: 1rem;
            }
        }

        .time-num{
            margin-top: 1rem;
            display: flex;
            padding: 1rem;

            p{
                width: 50%;
            }

            div{
                width: 50%;

                span{
                    display: inline-block;
                    background: $divider_color;
                    border-radius: 10px;
                    height: 20px;
                    text-align: center;
                    line-height: 20px;

                    &:nth-child(2){
                        width: 70%;
                        margin: 0 4px;
                    }

                    &:first-child,&:last-child{
                        width: 20px;
                    }
                }
            }
        }

        .money-count{
            padding: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;

            span{
                font-weight: bold;
                color: black;
                font-size: 3rem;
            }
        }

        footer{
                display: flex;
                justify-content: center;
                margin-top:2rem; 

                .mint-button{
                    width: 90%;
                    background: $theme-color;
                    color: white;
                    border-radius: 2rem;
                }
        }
    }
}
</style>
