<template>
    <div class="chatroom-msg-item" :class="msg.other==true?'other':'me'">
        <div class="avatar">
            <img :src="msg.avatar" width="50px" height="50px" alt="">
        </div>
        <div class="msg-content">
            <p>{{msg.content}}</p>
        </div>
    </div>
</template>


<script>
export default {
    props:['msg']
}
</script>



<style lang="scss">
.chatroom-msg-item{
    display: flex;
    font-size:  1.6rem;
    margin-top: 1rem;

    .avatar{
        img{
            width: 50px;
            height: 50px;
            border-radius: 25px;
        }
        // margin-right: 1rem;
    }

    .msg-content{
        p{
            margin-top: 1.2rem;
            border-radius: 5px;
            color: white;
            padding: 5px;
        }
    }
}

.other{
    padding-right: 20%;

    .avatar{
        margin-right: 1rem;
    }

    .msg-content{
        p{
            background: #dfb4bb;
        }
    }
}

.me{
    padding-left: 20%;
    flex-direction: row-reverse;

    .avatar{
        margin-left: 1rem;
    }

    .msg-content{
        p{
            background: #77d9b1;
        }
    }
}
</style>

