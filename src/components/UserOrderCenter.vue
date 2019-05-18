<template>
    <div class="user-order-center-page">
        <!-- 我的订单 -->
        <mt-header fixed title="我的订单">
            <router-link to="/?active=user" slot="left">
                <i class="fa fa-angle-left"></i>
            </router-link>
        </mt-header>

        <div class="content">
            <mt-navbar v-model="active_tabbar">
                <mt-tab-item id="1">客户方</mt-tab-item>
                <mt-tab-item id="2">服务方</mt-tab-item>
            </mt-navbar>

            <mt-tab-container v-model="active_tabbar">
                <mt-tab-container-item id="1">
                    <OrderListItem v-for="(item,index) in orderListTypeUser" :key="index" :item="item"></OrderListItem>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <OrderListItem v-for="(item,index) in orderListTypeService" :key="index" :item="item"></OrderListItem>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>



    </div>    
</template>


<script>
import OrderListItem from './OrderListItem';

export default {
    components:{
        OrderListItem
    },
    data(){
        return {
            active_tabbar:'1',
            orderListTypeUser:[//客户方订单列表
                {type:0,state:0,hours:3,money:100,name:'青柠不青',avatar:'/img/avatar1.jpg'},
                {type:0,state:1,hours:4,money:150,name:'城南的烟火',avatar:'/img/avatar2.jpg'},
                {type:0,state:2,hours:5,money:50,name:'青柠不青',avatar:'/img/avatar3.jpg'},
            ],
            orderListTypeService:[//服务方
                {type:1,state:0,hours:3,money:100,name:'青柠不青',avatar:'/img/avatar1.jpg'},
                {type:1,state:1,hours:4,money:150,name:'城南的烟火',avatar:'/img/avatar2.jpg'},
                {type:1,state:2,hours:5,money:50,name:'青柠不青',avatar:'/img/avatar3.jpg'},
            ]
        }
    }
}
</script>


<style lang="scss">
.user-order-center-page{
    .content{
        width: 100vw;
        height: 100vh;
        padding-top:$header-height;
        font-size: 1.6rem;

        .mint-navbar{
            height:7%;
            .mint-tab-item-label{
                font-size: 1.4rem;
            }
        }

        .mint-tab-container{
            height:93%;
            background: white;
            overflow-y:auto;
            padding: 1rem;
        }
    }
}
</style>





