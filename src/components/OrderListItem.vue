<template>
    <div class="order-list-item">
        <!-- 订单中心的订单 -->
        <div class="avatar">
            <img :src="item.avatar" width="40px" height="40px">
        </div>
        <div class="info">
            <div class="header">
                <p>{{item.name}}</p>
                <p :class="{'state-confirm':item.state==0,'state-ongoing':item.state==1,'state-finished':item.state==2}">{{orderStateText}}</p>
            </div>
            <div class="item-content">
                <p>陪伴时间{{item.hours}}小时</p>
                <p>{{item.money}}C币</p>
            </div>
            <div class="footer">
                <mt-button type="default" size="small" v-show="item.type==1 && item.state==0">接受订单</mt-button>
                <mt-button type="default" size="small" v-show="item.type==0 && item.state==1">完成订单</mt-button>
                <mt-button type="default" size="small" v-show="item.type==0 && item.state==2">去评价</mt-button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props:['item'],
    data(){
        return {
            // type:0,//0 客户方 1 服务方
            // state:0//0 商家待确认  1 进行中  2已结束
        }
    },
    computed:{
        orderStateText(){
            var states=['商家待确认','进行中','已结束'];
            return states[this.item.state];
        }
    }
}
</script>

<style lang="scss">
.order-list-item{
    display: flex;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 1px 1px 1px 1px #d4d0d0a6,-1px -1px 1px 1px #d4d0d0a6;
    margin-top: 1rem;

    .avatar{
        width: 15%;
        img{
            border-radius: 5px;
        }
    }

    .info{
        width: 85%;

        .header{
            display: flex;
            height: 40px;

            p{
                @include single-line-text-overflow-ellipsis;
                line-height: 40px;
                &:first-child{
                    width: 60%;
                    color: black;
                    font-weight: bold;
                }

                &:last-child{
                    width: 40%;
                    text-align: right;
                }
            }
        }

        .item-content{
            display: flex;
            height: 40px;
            font-size: 1.4rem;
            p{
                @include single-line-text-overflow-ellipsis;
                &:first-child{
                    width: 80%;
                }
                &:last-child{
                    width: 20%;
                    color: black;
                    font-weight:bold;
                    text-align: right;
                }
            }
        }

        .footer{
            text-align: right;
            .mint-button{
                color: white;
                &:nth-child(1){
                    background: $theme-color;
                }
                &:nth-child(2){
                    background: #66CDAA;
                }
                &:nth-child(3){
                    background: #FFC125;
                }
            }
        }
    }

    .state-confirm{
        color: #fb6a00;
    }
    .state-ongoing{
        color: $theme-color;
    }
    .state-finished{
        color: $gray_font_color;
    }

    
}
</style>
