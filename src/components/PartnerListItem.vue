<template>
    <!-- 陪玩 -->
    <div class="partner-list-item">
        <div class="avatar">
            <img :src='user.avatar' alt="">
        </div>
        <div class="intro">
            <div class="nickname">{{user.intro.nickname}}</div>
            <div class="info">
                <p><i class="fa fa-star"></i> {{user.intro.info.star}}</p>
                <p>接单量 <span>{{user.intro.info.count}}</span></p>
                <p>{{user.intro.info.price}}币/小时</p>
            </div>
            <div v-if="user.intro.online"><i class="fa fa-circle" style="color:#65ec65;"></i> 在线</div>
            <div v-else><i class="fa fa-circle" style="color:#e67171;"></i> 离线</div>
            <div class="tag">
                <p v-for="(tag,index) in user.intro.tags" :key="index">{{tag}}</p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:'PartnerListItem',
    props:['user']
}
</script>


<style lang="scss">
.partner-list-item{
    display: flex;
    width: 100%;
    padding: 0.5rem;
    border-bottom: 1px solid $divider_color;
    box-sizing: border-box;
    background: white;

    .avatar{
        width: 25%;
        padding-right: 0.5rem;
        padding-left: 0.5rem;
        box-sizing: border-box;
        img{
            height: 8rem;
            width: 100%;
            border-radius: 0.5rem;
        }
    }

    .intro{
        width: 75%;
        color:$gray_font_color;
        box-sizing: border-box;

        >div{
            margin-bottom: 0.5rem;
        }

        .nickname{
            font-weight: bold;
            color: $theme-color;
            font-size: 1.4rem;
        }
        
        .info{
            display: flex;
            align-items: center;

            p{
                &:nth-child(1){
                    width: 15%;
                    color: #ffc107;
                }
                &:nth-child(2){
                    width: 50%;
                }
                &:nth-child(3){
                    width: 30%;
                    text-align: right;
                    color: red;
                }
            }
        }

        .tag{
            display: flex;
            margin-bottom: 0;

            p{
                border: 1px solid $divider_color;
                padding: 0.2rem;
                margin-right: 0.5rem;
                border-radius: 0.5rem;
            }
        }
    }
}
</style>
