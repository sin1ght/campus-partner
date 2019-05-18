<template>
    <div id="home">
        <header>
            <div class="head">
                <router-link to="/message/123">
                    <i class="fa fa-commenting-o fa-2x"></i> 
                </router-link>
                
                <div class="search" @click="$router.push('/partner/search')">
                    <i class="fa fa-search"></i>
                    <span>(青柠不青)</span>
                </div>
            </div>
            <!-- 轮播图 -->
            <mt-swipe :auto="40000000" :speed="500">
                <mt-swipe-item>
                    <img src="../assets/bg3.jpg" alt="">
                </mt-swipe-item>
                <mt-swipe-item><img src="../assets/bg2.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/bg1.jpg" alt=""></mt-swipe-item>
            </mt-swipe>
        </header>


        <nav>
            <div class='item' v-for="item in navbarList" :class="{active:navbar_active==item.id}" @click="navbarItemClick($event)" :key="item.id" :data-id='item.id'>
                {{item.title}}
            </div>
            <div class="active item" @click="navbarItemFilterClick">
                <p>筛选&nbsp;</p>
                <i class="fa" :class="{'fa-caret-down':navbar_filter_active==0,'fa-caret-up':navbar_filter_active==1}"></i>
            </div>
        </nav>

        <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
        >
            <div class="filter-content" v-if="navbar_filter_active==1">
                <section>
                    <div v-for="(item,index) in navbarFilterContentList" :key="index">
                        <p class="title">{{item.title}}</p>
                        <div class="content">
                            <p :class="{active:item.select_list.length==0}" @click="navbarFilterContentSelectAllClick(index)">全部</p>
                            <p :class="{active:item.select_list.includes(p)}" v-for="(p,index2) in item.content" :key="index2" @click="navbarFilterContentItemClick(index,p)">{{p}}</p>
                        </div>
                    </div> 
                </section>

                <footer>
                    <div @click="navbarFilterButtonResetClick">重置</div>
                    <div>确定</div>
                </footer>
            </div>
        </transition>


        <mt-tab-container v-model="navbar_active">
            <mt-tab-container-item :class="{filter_active:navbar_filter_active==1}" id="1" v-infinite-scroll="samrtLoadMore" infinite-scroll-distance="0">
                <userItem v-for="item in smartUserList" :key="item.id" :user="item" @click.native="partnerItemClick"></userItem> 
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <userItem v-for="item in hotUserList" :key="item.id" :user="item" @click.native="partnerItemClick"></userItem> 
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <userItem v-for="item in newUserList" :key="item.id" :user="item" @click.native="partnerItemClick"></userItem> 
            </mt-tab-container-item>
        </mt-tab-container>


    </div>
</template>


<script>
import PartnerListItem from './PartnerListItem'

export default {
    name:'home',
    components:{
        userItem:PartnerListItem
    },
    data:function(){
        return {
           navbar_active:'1',
           navbar_filter_active:0,
           navbarList:[
                {
                    id:1,
                    title:'智能排序'
                },{
                    id:2,
                    title:'人气榜单'
                },{
                    id:3,
                    title:'萌新入驻'
                }
           ],
           navbarFilterContentList:[
               {
                   title:'性别',
                   content:['女生','男生'],
                   select_list:[]
               },
               {
                   title:'标签',
                   content:['学习','电影','吃饭','跑步','游戏'],
                   select_list:[]
               },
               {
                   title:'价格',
                   content:[10,20,30,40],
                   select_list:[]
               }
           ],
           smartUserList:[
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
               },
               {
                    id:6,
                    avatar:"/img/avatar6.jpg",
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
                    id:7,
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
                    id:8,
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
               }
           ],
           hotUserList:[
               {
                    id:1,
                    avatar:"/img/avatar3.jpg",
                    intro:{
                        nickname:'醉东风',
                        info:{
                            star:3.0,
                            count:1456,
                            price:25
                        },
                        online:1,
                        tags:['跑步','C++','python','游戏']
                    }   
               },
           ],
           newUserList:[
               {
                    id:1,
                    avatar:"/img/avatar4.jpg",
                    intro:{
                        nickname:'轲啊珂',
                        info:{
                            star:5.0,
                            count:123456,
                            price:25
                        },
                        online:1,
                        tags:['舞蹈','电影','钢琴','吉他']
                    }   
               },
           ] 
        }
    },
    methods:{
        samrtLoadMore:function(){
            console.log('samrtLoadMore....');
        },
        partnerItemClick(){
            this.$router.push('/partner/profile/123');
        },
        navbarItemClick(event){
            this.navbar_active=event.target.getAttribute('data-id');
        },
        navbarItemFilterClick(){
            this.navbar_filter_active++;
            this.navbar_filter_active%=2;
        },
        navbarFilterContentItemClick(index,content){
            let selectArr=this.navbarFilterContentList[index].select_list;
            let itemIndex=selectArr.indexOf(content);
            if(itemIndex==-1){
                selectArr.push(content);
            }else{
                selectArr.splice(itemIndex,1); 
            }
        },
        navbarFilterContentSelectAllClick(index){
            this.navbarFilterContentList[index].select_list=[];
        },
        navbarFilterButtonResetClick(){
            for (let item of this.navbarFilterContentList) {
                item.select_list=[];
            }
        }

    }
}
</script>

<style lang="scss">
#home{
    height: 100vh;
    position: relative;

    header{
        position: relative;
        
        .head{
            position: absolute;
            width: 100vw;
            height: 20%;
            z-index: 100;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 1rem;
            
            i{
                color: white;
                opacity: 0.8;
            }

            .search{
                background: white;
                height: 100%;
                opacity: 0.5;
                width: 65%;
                border-radius: 1rem;
                display: flex;
                align-items: center;
                color: #a09898;
                margin-left: 15%;

                i{
                    color: #a09898;
                    margin-left: 1rem;
                }
            }
        }

        .mint-swipe{
            height:25vh;

            .mint-swipe-indicator{
                opacity: 0.8;
                background: #c5b2b5;
            }
            
            .is-active{
                background: white;
            }

            img{
                width: 100%;
                height: 100%;
            }
        }
    }

    nav{
        display: flex;
        align-items: center;
        height: 5vh;
        background: white;
        border-bottom: 1px solid $divider_color;
        .item{
            width: 25vw;
            height: 100%;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.4rem;
        }
        .active{
            color:$theme-color;
        }
    }

    .filter-content{
        box-sizing: border-box;
        width: 100vw;
        height: 50vh;
        position: absolute;
        top:30vh;
        z-index: 1;
        font-size: 1.4rem;
        background: white;
        section{
            height: 42vh;
            overflow-y: auto;
            .title{
                font-weight: bold;
                margin-left: 2vw;
                margin-top: 2rem;
            }
            .content{
                display: flex;
                flex-wrap: wrap;
                p{
                    margin-left: 2vw;
                    margin-right: 2vw;
                    width: 29vw;
                    box-sizing: border-box;
                    border: 1px solid $divider_color;
                    margin-top: 1rem;
                    text-align: center;
                    padding:0.5rem 0; 
                    border-radius: 0.5rem;
                }
                .active{
                    border: none;
                    background: #f26e8599;
                    color: white;
                }
            }
        }
        footer{
            height: 8vh;
            box-sizing: border-box;
            //border: 1px solid black;
            display: flex;
            div{
                margin-left: 4vw;
                height: 6vh;
                margin-top: 1vh;
                text-align: center;
                line-height: 6vh;
                border-radius: 0.5rem;
                &:first-child{
                    width: 28vw;
                    box-sizing: border-box;
                    border: 1px solid $theme-color;
                    color: $theme-color;
                }
                &:last-child{
                    width: 60vw;
                    color:white;
                    background: $theme-color;
                }
            }            
        }
    }

    .mint-tab-container-item{
        max-height: 62vh;
        overflow-y: auto;
    }

    .filter_active{
        filter: brightness(70%);
    }
    
}
</style>
