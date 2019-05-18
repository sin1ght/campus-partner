<template>
    <div class="partner-search-page">
        <!-- 搜索伙伴 -->
        <header>
            <div><i @click="$router.go(-1)" class="fa fa-angle-left"></i></div>
            <div>
                <i class="fa fa-search"></i>
                <input type="text" autofocus="autofocus" @keypress.enter="activeContainer=2">
            </div>
        </header>

        <!-- <div class="content">
            <section class="hot">
                <p class="title">大家都在搜</p>
                <div>
                    <p v-for="(item,index) in hotItemList" :key="index">{{item}}</p>
                </div>
            </section>
            <section class="history">
                <p class="title">搜索历史</p>
                <div>
                    <p v-for="(item,index) in historyItemList" :key="index">{{item}}</p>
                </div>
            </section>
        </div> -->

        <mt-tab-container v-model="activeContainer">
            <mt-tab-container-item :id="1">
                <div class="content">
                    <section class="hot">
                        <p class="title">大家都在搜</p>
                        <div>
                            <p v-for="(item,index) in hotItemList" :key="index">{{item}}</p>
                        </div>
                    </section>
                    <section class="history">
                        <p class="title">搜索历史</p>
                        <div>
                            <p v-for="(item,index) in historyItemList" :key="index">{{item}}</p>
                        </div>
                    </section>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item :id="2">
               <div class="parter-list-content">
                   <parter-list-item v-for="item in searchResultList" :key="item.id" :user="item"></parter-list-item>
               </div>
            </mt-tab-container-item>
        </mt-tab-container>

    </div>
</template>

<script>
import ParterListItem from './PartnerListItem';

export default {
    components:{
        'parter-list-item':ParterListItem
    },
    data(){
        return {
            activeContainer:1,
            hotItemList:['1plus7PRO','明日方舟','权力的游戏','ig','我来画个宝可梦'],
            historyItemList:['青柠不青','醉东风','柯啊柯','城南的烟火'],
            searchResultList:[
               {
                    id:1,
                    avatar:"/img/avatar1.jpg",
                    intro:{
                        nickname:'青柠不青',
                        info:{
                            star:5.0,
                            count:123456,
                            price:25
                        },
                        online:1,
                        tags:['跑步','电影','学习','游戏']
                    }   
               },
               {
                    id:2,
                    avatar:"/img/avatar2.jpg",
                    intro:{
                        nickname:'城南的烟火',
                        info:{
                            star:4.5,
                            count:3434,
                            price:40
                        },
                        online:0,
                        tags:['lol','吃鸡','学习','吃饭']
                    }   
               },
               {
                    id:3,
                    avatar:"/img/avatar3.jpg",
                    intro:{
                        nickname:'青柠不青',
                        info:{
                            star:5.0,
                            count:123456,
                            price:25
                        },
                        online:1,
                        tags:['跑步','电影','学习','游戏']
                    }   
               },
               {
                    id:4,
                    avatar:"/img/avatar4.jpg",
                    intro:{
                        nickname:'城南的烟火',
                        info:{
                            star:4.5,
                            count:3434,
                            price:40
                        },
                        online:0,
                        tags:['lol','吃鸡','学习','吃饭']
                    }   
               },{
                    id:5,
                    avatar:"/img/avatar5.jpg",
                    intro:{
                        nickname:'青柠不青',
                        info:{
                            star:5.0,
                            count:123456,
                            price:25
                        },
                        online:1,
                        tags:['跑步','电影','学习','游戏']
                    }   
               }
           ],
        };
    }
}
</script>


<style lang="scss">
.partner-search-page{
    @include full-screen;

    header{
        width: 100%;
        height: $header-height;
        font-size: 1.8rem;
        background: $theme-color;
        color: white;
        display: flex;

        div{
            line-height: $header-height;
            &:first-child{
                width: 20%;
                padding-left:2rem;
            }
            &:last-child{
                width: 80%;
                input{
                    width: 70%;
                    border:none;
                    outline: none;
                    font-size: 1.8rem;
                    padding: 5px;
                    background: transparent;
                    color: white;
                    border-bottom: 1px solid white;
                    margin-left: 1rem;
                }
            }
        }
    }

    .content{
        height: calc(100vh - 40px);
        overflow-y:auto;
        font-size: 1.8rem;
        
        section{
            background: white;
            padding: 1rem;

            &:last-child{
                margin-top: 1rem;
            }

            .title{
                border-bottom: 1px solid $divider_color;
                padding-bottom: 5px;
            }
            div{
                display: flex;
                flex-wrap: wrap;
                p{
                    background: #f5eded;
                    color: #a79999;
                    padding: 5px 10px;
                    margin-top: 1rem;
                    margin-right: 1rem;
                    font-size: 1.6rem;
                    border-radius: 5px;
                }
            }
        }
    }

    .parter-list-content{
        height: calc(100vh - 40px);
        background: white;
        overflow-y: auto;
    }
}
</style>

