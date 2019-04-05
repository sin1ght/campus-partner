<template>
    <div id="community">
        <mt-header title="动态">
            <i slot="right" class="fa fa-edit"></i>
        </mt-header>

        <div class="content">
            <!-- 热门话题 -->
            <section class="hot-topic">
                <div class="head">
                    <p>热门话题</p>
                    <p>更多热门话题<i class="fa fa-angle-right"></i></p>
                </div>
                <div class="cards" >
                    <div class="item" v-for="(card,index) in cards" :key="index" :style="{backgroundImage:'url('+card.bg+')'}">
                       <div class="mask">
                            {{card.title}}
                       </div>
                    </div>
                </div>
            </section>

            <!-- 动态列表 -->
            <section class="share-things" v-infinite-scroll="loadMore">
                <shareThingItem v-for="item in shareThings" :key="item.id" :shareThing='item'></shareThingItem>
            </section>

        </div>
    </div>
</template>


<script>
import ShareThingItem from './ShareThingItem'

export default {
    components:{
        shareThingItem:ShareThingItem
    },
    data:function(){
        return {
            cards:[
                {
                    bg:'/img/bg1.jpg',
                    title:'每日表情包'
                },
                {
                    bg:'/img/bg2.jpg',
                    title:'考研啊！！'
                },
                {
                    bg:'/img/bg3.jpg',
                    title:'程序员的娱乐之地'
                },
                {
                    bg:'/img/bg3.jpg',
                    title:'喵星人'
                },
                {
                    bg:'/img/bg2.jpg',
                    title:'怪人聚集地'
                },
                
            ],
            shareThings:[
                {   
                    id:1,
                    is_follow:1,
                    user:{
                        nickname:'青柠不青',
                        avatar:'/img/avatar1.jpg'
                    },
                    time:'03-15',
                    content:'欢乐时光开始啦~',
                    share:4,
                    comment:251,
                    up:666

                },
                {   
                    id:2,
                    is_follow:1,
                    user:{
                        nickname:'城南的烟火',
                        avatar:'/img/avatar2.jpg'
                    },
                    time:'03-17',
                    content:'欢乐时光开始了~',
                    share:4,
                    comment:251,
                    up:666

                },
                {   
                    id:3,
                    is_follow:1,
                    user:{
                        nickname:'青柠不青',
                        avatar:'/img/avatar3.jpg'
                    },
                    time:'03-13',
                    content:'欢乐时光开始了~',
                    share:4,
                    comment:251,
                    up:666

                },
                {   
                    id:4,
                    is_follow:1,
                    user:{
                        nickname:'青柠不青',
                        avatar:'/img/avatar5.jpg'
                    },
                    time:'03-15',
                    content:'欢乐时光开始了~',
                    share:4,
                    comment:251,
                    up:666

                },
                {   
                    id:5,
                    is_follow:1,
                    user:{
                        nickname:'城南的烟火',
                        avatar:'/img/avatar4.jpg'
                    },
                    time:'03-17',
                    content:'欢乐时光开始了~',
                    share:4,
                    comment:251,
                    up:666

                },
                {   
                    id:6,
                    is_follow:1,
                    user:{
                        nickname:'青柠不青',
                        avatar:'/img/avatar6.jpg'
                    },
                    time:'03-13',
                    content:'欢乐时光开始了~',
                    share:4,
                    comment:251,
                    up:666

                }
            ]
        }
    },
    methods:{
        loadMore:function(){
            console.log('share-things loadmore');
        }
    }
}
</script>


<style lang="scss">
#community{
    font-size: 1.4rem;
    .content{
        .hot-topic{
            background: white;
            box-sizing: border-box;
            width: 100vw;
            .head{
                display: flex;
                padding: 1rem;
                p{
                    width: 50%;

                    &:first-child{
                        font-weight: bold;
                        color: black;
                    }

                    &:last-child{
                        text-align: right;
                    }
                }
            }

            .cards{
                box-sizing: border-box;
                display: flex;
                width: 100vw;
                padding: 1rem;
                padding-top: 0;
                overflow-x: auto;
                .item{
                    flex-shrink:0;
                    background-repeat: no-repeat;
                    background-size: cover;
                    height: 6rem;
                    width:9rem ;
                    position: relative;
                    color: white;
                    border-radius: 0.5rem;
                    box-sizing: border-box;
                    overflow: hidden;
                    margin-right: 1rem;

                    .mask{
                        position:absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;
                        background:#08080875;
                        padding: 1rem;
                        box-sizing: border-box;
                    }
                }
            }
        }

        .share-things{
            max-height: 71vh;
            overflow-y: auto;
        }
    }
}
</style>

