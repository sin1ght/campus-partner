<template>
    <div class="partner-profile">
        <mt-header fixed>
            <i class="fa fa-angle-left" slot="left"></i>
            <p slot='right' class="text">在线</p>
        </mt-header>

        <mt-swipe :auto="3000" :showIndicators="false" :speed='1000' @click.native="detailClick">
            <mt-swipe-item>
                <img src="../assets/m-bg1.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item><img src="../assets/m-bg2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/m-bg3.jpg" alt=""></mt-swipe-item>
        </mt-swipe>

        <section class="user">
            <div class="intro">
                <div>
                    <img src="../assets/avatar.jpg" alt="">
                </div>
                <div>
                    <p>青柠不青 <i class="fa fa-venus"></i></p>
                    <p>心如花木，向阳而生,心如花木，向阳而生,心如花木，向阳而生</p>
                </div>
                <div>
                    <i class="fa fa-vcard fa-2x" @click="detailClick"></i>
                </div>
            </div>
            <div class="tag">
                <p><span>#&nbsp;</span>学习</p>
                <p><span>#&nbsp;</span>游戏</p>
                <p><span>#&nbsp;</span>跑步</p>
                <p><span>#&nbsp;</span>电影</p>
            </div>
        </section>

        <transition
            enter-active-class="animated slideInUp"
            leave-active-class="animated slideOutDown"
        >
            <section class="user-detail" v-if="detail_active==1">
                <section>
                    <p class="title">个人简介</p>
                    <div>
                        小可爱小可爱小可爱小可爱小可爱小可爱小可爱小可爱小可爱小可爱小可爱小可爱小可爱小可爱小可爱
                    </div>
                </section>

                <section>
                    <div class="head">
                        <p class="title">评价:128</p>
                        <p>
                            <i class="fa fa-star yes"></i>
                            <i class="fa fa-star yes"></i>
                            <i class="fa fa-star yes"></i>
                            <i class="fa fa-star yes"></i>
                            <i class="fa fa-star yes"></i>
                        </p>
                    </div>
                    <div class="tag">
                        <p>人很好</p><p>很温柔</p><p>态度很好</p><p>幽默</p><p>很可爱</p>
                    </div>
                </section>
                
                <section>
                    <div class="item">
                        <div class="head">
                            <div class="avatar">
                                <img src="../assets/avatar.jpg" alt="">
                            </div>
                            <div class="info">
                                <p>匿名</p>
                                <p><i class="fa fa-star"></i> 5</p>
                            </div>
                            <div class="time">3月19日 16:27</div>
                        </div>
                        <div class="content">
                            哎,可惜没有6星好评
                        </div>
                    </div>
                    <div class="item">
                        <div class="head">
                            <div class="avatar">
                                <img src="../assets/avatar.jpg" alt="">
                            </div>
                            <div class="info">
                                <p>匿名</p>
                                <p><i class="fa fa-star"></i> 5</p>
                            </div>
                            <div class="time">3月19日 16:27</div>
                        </div>
                        <div class="content">
                            哎,可惜没有6星好评
                        </div>
                    </div>
                    <div class="item">
                        <div class="head">
                            <div class="avatar">
                                <img src="../assets/avatar.jpg" alt="">
                            </div>
                            <div class="info">
                                <p>匿名</p>
                                <p><i class="fa fa-star"></i> 5</p>
                            </div>
                            <div class="time">3月19日 16:27</div>
                        </div>
                        <div class="content">
                            哎,可惜没有6星好评
                        </div>
                    </div>
                    <div class="item">
                        <div class="head">
                            <div class="avatar">
                                <img src="../assets/avatar.jpg" alt="">
                            </div>
                            <div class="info">
                                <p>匿名</p>
                                <p><i class="fa fa-star"></i> 5</p>
                            </div>
                            <div class="time">3月19日 16:27</div>
                        </div>
                        <div class="content">
                            哎,可惜没有6星好评
                        </div>
                    </div>
                    <div class="item">
                        <div class="head">
                            <div class="avatar">
                                <img src="../assets/avatar.jpg" alt="">
                            </div>
                            <div class="info">
                                <p>匿名</p>
                                <p><i class="fa fa-star"></i> 5</p>
                            </div>
                            <div class="time">3月19日 16:27</div>
                        </div>
                        <div class="content">
                            哎,可惜没有6星好评
                        </div>
                    </div>
                    <div class="item">
                        <div class="head">
                            <div class="avatar">
                                <img src="../assets/avatar.jpg" alt="">
                            </div>
                            <div class="info">
                                <p>匿名</p>
                                <p><i class="fa fa-star"></i> 5</p>
                            </div>
                            <div class="time">3月19日 16:27</div>
                        </div>
                        <div class="content">
                            哎,可惜没有6星好评
                        </div>
                    </div>
                </section>

                <section>
                    <div>聊一聊</div>
                    <div>立即约她</div>
                </section>
            </section>
        </transition>

        <footer>
            <div>立即约ta · 25币/小时</div>
        </footer>
    </div>
</template>


<script>
export default {
    data(){
        return{
            detail_active:0
        }
    },
    methods:{
        detailClick(){
            this.detail_active++;
            this.detail_active%=2;
            console.log('click');
        }
    }
}
</script>


<style lang="scss">
.partner-profile{
    height: 100vh;
    width: 100vw;
    position: relative;

    .mint-header{
        background: transparent !important;
        .text{
            background: #25b185;
            float:right;
            padding:0.5rem 1.5rem;
            border-radius: 3rem;
            font-size: 1.2rem;
        }
    }

    .mint-swipe{
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;

        img{
            width: 100%;
            height: 100%;
            filter: brightness(50%);
        }
    }

    .user{
        position: absolute;
        bottom:10vh;
        color: white;
       .intro{
            display: flex;
            div{
                display: flex;
                align-items: center;
                justify-content: center;
                justify-content: center;
                &:first-child{
                    width: 15vw;
                    img{
                        width: 4rem;
                        height: 4rem;
                        border-radius:2rem; 
                    }
                }
                &:nth-child(2){
                    flex-direction: column;
                    align-items: flex-start;
                    width: 70vw;
                    p:first-child{
                        font-size: 1.4rem;
                        i{
                            font-size: 1px;
                            background: $theme-color;
                            padding: 0.2rem 0.7rem;
                            border-radius: 1.5rem;
                        }
                    }
                    p:last-child{
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        width: 100%;
                    }
                }
                &:last-child{
                    width:15vw;
                }
            }
       }
       .tag{
           display: flex;
           justify-content: center;
           p{  
               padding: 0.5rem 1.5rem;
               border-radius: 1.5rem;
               background: #0000009c;
               margin-right: 0.5rem;
               span{
                   color: #25b185;
               }
           }
       }
    }

    footer{
        height: 5vh;
        width: 100vw;
        position: absolute;
        bottom: 2.5vh;
        color: white;
        div{
            width: 80vw;
            height: 100%;
            margin:0 auto;
            text-align: center;
            background: $theme_color;
            border-radius: 1.5rem;
            font-size: 1.6rem;
            line-height: 5vh;
        }
    }

    .user-detail{
        position: absolute;
        bottom: 0;
        height: 70vh;
        width: 100vw;
        background: $divider_color;
        z-index: 5;
        .fa-star{
            color: #ffc107;
        }


        section{
            background: white;
            padding: 1rem;
            width:100vw;
            box-sizing: border-box;
            p.title{
                font-size: 1.4rem;
                font-weight: bold;
            }
            &:first-child{
                height: 15vh;
                div{
                    margin-top: 1rem;
                    color: $gray_font_color;
                }
            }
            &:nth-child(2){
                margin-top: 1rem;
                height: 10vh;
                .head{
                    display:flex;
                    align-items: center;
                    p:first-child{
                        width: 30%;
                    }
                    p:last-child{
                        text-align: right;
                        width: 70%;
                        i{
                            color: #ffc107;
                            margin-right:0.5rem; 
                        }
                    }
                }
                
                .tag{
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 0.5rem;
                    p{
                        background: $divider_color;
                        padding: 0.2rem 0.7rem;
                        border-radius: 0.5rem;
                        margin-right: 0.5rem;
                    }
                }
            }
            &:nth-child(3){
                height:37vh;
                margin-top: 1px;
                overflow-y: auto;
                padding-top: 0;

                .item{
                    width: 100%;
                    margin-top: 0.5rem;
                    .head{
                        display: flex;
                        align-items: center;
                        .avatar{
                            width:15%; 
                            text-align: center;
                            img{
                                width: 3rem;
                                height: 3rem;
                                border-radius: 1.5rem;
                            }
                        }
                        .info{
                            width: 70%;
                        }
                        .time{  
                            width: 25%;
                            text-align: right;
                        }
                    }
                    .content{
                        padding-left: 15%;
                        padding-bottom: 0.5rem;
                        border-bottom:1px solid $divider_color;
                    }
                }
            }

            &:nth-child(4){
                display: flex;
                padding:0;
                height:6vh;
                position:absolute;
                bottom:0;
                div{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.4rem;
                    color:white;
                    &:first-child{
                        width: 50vw;
                        background: #25b19f;
                    }
                    &:last-child{
                        width: 50vw;
                        background: $theme_color;
                    }
                }
            }
        }        
    }
}
</style>
