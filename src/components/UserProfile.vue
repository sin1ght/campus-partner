<template>
    <div class="user-profile">
        <div class="head">
            <div class="banner"></div>

            <mt-header fixed title="" style="background:rgb(241,74,105,0);">
                <i class="fa fa-angle-left fa-2x" slot="left"></i>
            </mt-header>

            <section class="info">
                <div>
                    <div class="avatar">
                        <img src="../assets/avatar.jpg" alt="">
                    </div>
                    <div class="action">
                        <p><i class="fa fa-commenting-o"></i> 聊天</p>
                        <p class="follow"><i class="fa fa-heart-o"></i> 关注</p>
                        <p><i class="fa fa-edit"></i> 编辑</p>
                    </div>
                </div>
                <div class="intro">
                    <p>青柠不青</p>
                    <p>心如花木，向阳而生。心如花木，向阳而生。</p>
                </div>
            </section>

            <section class="statistics">
                <div>
                    <p>3</p>
                    <p>创建的话题</p>
                </div>
                <div>
                    <p>162</p>
                    <p>加入的话题</p>
                </div>
                <div>
                    <p>5</p>
                    <p>她关注的人</p>
                </div>
                <div>
                    <p>72</p>
                    <p>关注她的人</p>
                </div>
            </section>

            <mt-navbar v-model="tabActive">
                <mt-tab-item id="1">动态</mt-tab-item>
                <mt-tab-item id="2">档案</mt-tab-item>
            </mt-navbar>
        </div>

        <mt-tab-container v-model="tabActive" :swipeable='true'>
            <mt-tab-container-item id="1">
                <shareThingItem v-for="item in shareThings" :key="item.id" :shareThing='item'></shareThingItem>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class='cell'>
                    <i class="fa fa-user"></i>
                    <span>基本信息</span>
                </div>
                <div class="content">
                    <p><span>UID</span><span>7846922</span></p>
                    <p><span>性别</span><span>女</span></p>
                    <p><span>星座</span><span>白羊座</span></p>
                    <p><span>所在地</span><span>重庆</span></p>
                </div>
                <div class='cell'>
                    <i class="fa fa-mortar-board"></i>
                    <span>学校</span>
                </div>
                <div class="content">
                    <p>重庆大学</p>
                </div>
                <div class='cell'>
                    <i class="fa fa-tasks"></i>
                    <span>专业</span>
                </div>
                <div class="content">
                    <p>计算机科学与技术</p>
                </div>
                <div class='cell'>
                    <i class="fa fa-file"></i>
                    <span>签名</span>
                </div>
                <div class="content">
                    <p>心如花木，向阳而生</p>
                </div>

            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import ShareThingItem from './ShareThingItem'

export default {
    components:{
      shareThingItem:ShareThingItem  
    },
    data(){
        return {
            tabActive:'1',
            shareThings:[
                {   
                    id:1,
                    is_follow:0,
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
                    is_follow:0,
                    user:{
                        nickname:'青柠不青',
                        avatar:'/img/avatar1.jpg'
                    },
                    time:'03-17',
                    content:'欢乐时光开始了~',
                    share:4,
                    comment:251,
                    up:666

                },
                {   
                    id:3,
                    is_follow:0,
                    user:{
                        nickname:'青柠不青',
                        avatar:'/img/avatar1.jpg'
                    },
                    time:'03-13',
                    content:'欢乐时光开始了~',
                    share:4,
                    comment:251,
                    up:666

                },
                {   
                    id:4,
                    is_follow:0,
                    user:{
                        nickname:'青柠不青',
                        avatar:'/img/avatar1.jpg'
                    },
                    time:'03-15',
                    content:'欢乐时光开始了~',
                    share:4,
                    comment:251,
                    up:666

                },
                {   
                    id:5,
                    is_follow:0,
                    user:{
                        nickname:'青柠不青',
                        avatar:'/img/avatar1.jpg'
                    },
                    time:'03-17',
                    content:'欢乐时光开始了~',
                    share:4,
                    comment:251,
                    up:666

                },
                {   
                    id:6,
                    is_follow:0,
                    user:{
                        nickname:'青柠不青',
                        avatar:'/img/avatar1.jpg'
                    },
                    time:'03-13',
                    content:'欢乐时光开始了~',
                    share:4,
                    comment:251,
                    up:666

                }
            ]
        }
    }
}
</script>


<style lang="scss">
.user-profile{
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    font-size: 1.4rem;

    .head{
        height:40vh;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        color: white;
        .banner{
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: url('../assets/bg2.jpg') no-repeat center;
            background-size: cover;
            filter: blur(3px);
        }

        .info{
            position:absolute;
            top: 5vh;
            left: 0;
            width: 100vw;

            div:first-child{
                display: flex;
                box-sizing: border-box;
                align-items: center;
                .avatar{
                    width: 30%;
                    box-sizing: border-box;
                    padding: 1rem;
                    padding-left: 1.5rem;
                    img{
                        width:8rem;
                        height: 8rem;
                        border-radius: 4rem;
                    }
                }
                .action{
                    padding: 1rem;
                    width: 70%;
                    box-sizing: border-box;
                    justify-content: flex-end;
                    display: flex;
                    p{
                        margin-right: 1rem;
                        padding: 0.5rem;
                        padding-left: 1rem;
                        padding-right: 1rem;
                        background: #b9b4b480;
                        border-radius: 1.5rem;
                        &.follow{
                            background: $theme-color;
                        }
                    }
                }
            }
            .intro{
                padding-left: 1.5rem;
                p{
                    &:first-child{
                        font-size: 1.6rem;
                        margin-bottom: 0.5rem;
                        font-weight: bold;
                        // color: $theme-color;
                    }
                    &:last-child{
                        width: 50vw;
                        overflow:hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
        }

        .statistics{
            display: flex;
            position:absolute;
            bottom:0;
            width: 100%;
            div{
                width: 25%;
                box-sizing: border-box;
                text-align: center;
                padding-bottom: 2.5rem;
                padding-top: 1rem;
            }
        }

        .mint-navbar{
            position:absolute;
            bottom:-3rem;
            width: 100%;
            color: black;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
        }

    }

    .mint-tab-container{
        margin-top: 3rem;

        .mint-tab-container-item{
            max-height: calc(60vh - 3rem);
            overflow-y: auto;

            //档案
            &:last-child{
                .cell{
                    min-height: 0;
                    background: $divider_color;
                    font-size: 1.2rem;
                    i{
                        color: #c1bdbd;
                        width: 10vw;
                        box-sizing: border-box;
                        padding:0.5rem 1rem;
                        
                    }
                    span{
                        color: black;
                    }
                }

                .content{
                    background: white;
                    color: $gray_font_color;
                    padding:1rem;
                    padding-left:10vw;

                    p{
                        margin-bottom: 0.5rem;
                        span:first-child{
                            display: inline-block;
                            width: 15vw;
                        }
                        &:last-child{
                            margin-bottom: 0;
                        }
                    }
                    
                }
            }
        }
    }
}
</style>


