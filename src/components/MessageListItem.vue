<template>
    <div class="message-list-item">
        <div class="avatar">
            <img :src="item.avatar" alt="" width="5rem" height="5rem">
        </div>
        <div class="info">
            <p>{{item.nickname}}</p>
            <p>{{item.msg}}</p>
        </div>
        <div class="time">
            <p>{{time}}</p>
            <p v-if="item.msg_count != 0"><mt-badge type="error" size="small">{{item.msg_count}}</mt-badge></p>
        </div>
    </div>
</template>


<script>
export default {
    props:['item'],
    computed:{
        time:function (){
            let currDate=this.getFormatTimeNow().split(' ')[0];//年月日
    
            if(this.item.time.startsWith(currDate))
                return this.item.time.split(' ')[1];
            else
                return this.item.time.split(' ')[0];
        }
    }
}
</script>



<style lang="scss">
.message-list-item{
    display:flex;
    align-items: center;
    width: 100vw;
    box-sizing: border-box;
    padding: 0.5rem;
    border-bottom: 1px solid $divider_color;
    color: $gray_font_color;

    .avatar{
        width:15%;
        //text-align: center;
        img{
            width: 5rem;
            height: 5rem;
            border-radius:2.5rem; 
        }
    }

    .info{
        width: 65%;
        p{
            &:first-child{
                font-size: 1.4rem;
                margin-bottom: 0.5rem;
                color: black;
            }
            &:last-child{
                @include single-line-text-overflow-ellipsis;
            }
        }
    }

    .time{
        text-align: right;
        width: 20%;

        p{
            &:first-child{
                margin-bottom: 0.5rem;
            }
            &:last-child{
                .mint-badge{
                    font-size: 1rem;
                }
            }
        }
    }
}
</style>

