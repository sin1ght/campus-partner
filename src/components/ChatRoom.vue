<template>
    <div class="chatroom-page">
        <!-- 和陪陪聊天 -->
        <mt-header fixed title="青柠不青">
            <i class="fa fa-angle-left" slot="left" @click="$router.go(-1)"></i>
        </mt-header>
        
        <div class="content">
            <p class="info">请勿使用其他聊天工具，以确保沟通，交易的安全</p>
            <MsgItem v-for="(item,index) in msgs" :key="index" :msg='item'></MsgItem>

        </div>

        <footer>
            <input type="text" v-model="msgInput" @keydown.enter="msgSendBtnClick">
            <mt-button type="default" @click="msgSendBtnClick">发送</mt-button>
        </footer>

    </div>
</template>


<script>
import MsgItem from './ChatRoomMsgItem'

export default {
    components:{
        MsgItem
    },
    data(){
        return {
            msgInput:'',
            msgs:[{
                other:true,
                content:'你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊',
                avatar:'/img/avatar1.jpg'
            },{
                other:true,
                content:'你好啊你好啊你好啊',
                avatar:'/img/avatar1.jpg'
            },{
                other:false,
                content:'你好啊你好啊你好啊你好啊你好啊你好啊',
                avatar:'/img/avatar2.jpg'
            }]
        }
    },
    methods:{
        msgSendBtnClick(){
            this.msgs.push({
                other:false,
                content:this.msgInput,
                avatar:'/img/avatar2.jpg'
            });
            this.msgInput='';
        }
    }
}
</script>



<style lang="scss">
.chatroom-page{
    width: 100vw;
    height: 100vh;
    
    .content{
        position: fixed;
        height:calc(100% - 40px - 50px);
        width: 100vw;
        box-sizing: border-box;
        top: 40px;
        left: 0;
        padding:1rem;
        padding-top: 0;

        .info{
            font-size: 1.4rem;
            background: #e2dcdc;
            color: $gray_font_color;
            padding: 5px;
            border-radius: 5px;
            width: 80%;
            margin: 0 auto;
            text-align: center;
            margin-top: 1rem;
        }

    }

    footer{
        background: $theme-color;
        position: fixed;
        bottom: 0;
        width: 100vw;
        height: 5rem;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;

        input{
            width: 75%;
            height: 40px;
            border: none;
            border-radius: 5px;
            padding-left: 5px;
            font-size: 1.8rem;
            margin-right: 5px;
        }

        .mint-button{
            height: 40px;
            width: 20%;
        }
    }
}


</style>
