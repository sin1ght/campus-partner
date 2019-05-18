<template>
    <div class="message-center-page">
        <!-- 消息中心页面 -->
        <mt-header fixed title="消息中心">
            <router-link to="/?active=home" slot="left">
                <i class="fa fa-angle-left"></i>
            </router-link>
        </mt-header>

        <div class="message-list">
            <MessageListItem v-for="msg in messageList" :key="msg.id" :item="msg" @click.native="$router.push('/chatroom')"></MessageListItem>
        </div>
    </div>
</template>


<script>
import MessageListItem from './MessageListItem'


export default {
    components:{
        MessageListItem
    },
    data(){
        return{
            messageList:[{
                id:1,
                avatar:'/img/avatar1.jpg',
                nickname:'青柠不青',
                msg:'愿四月的春风，能把我带到你身边',
                time:'2019/04/08 22:37',
                msg_count:0
            },{
                id:2,
                avatar:'/img/avatar2.jpg',
                nickname:'城南的烟火',
                msg:'仍然未知那天所看见的花的名字',
                time:'2019/04/01 22:37',
                msg_count:5
            }]
        }
    }
}
</script>

<style lang="scss">
    .message-center-page{
        height: 100vh;
        width: 100vw;

        .message-list{
            height: 100%;
            padding-top: 4rem;
            background: white;
        }
    }
</style>
