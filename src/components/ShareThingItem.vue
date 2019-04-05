<template>
    <!-- 动态简介 -->
    <div class="share-thing-item">
        <header>
            <div class="avatar">
                <img :src="shareThing.user.avatar"/>
            </div>
            <div class="info">
                <p>{{shareThing.user.nickname}}</p>
                <p>{{shareThing.time}}</p>
            </div>
            <div class="follow" v-if="shareThing.is_follow">
                <span><i class='fa fa-heart-o'></i> 关注</span>
            </div>
        </header>
        <article>
            {{shareThing.content}}
        </article>
        <footer>
            <p><i class="fa fa-send-o"></i> {{shareThing.share}}</p>
            <p><i class="fa fa-comment-o"></i> {{shareThing.comment}}</p>
            <p><i class="fa fa-thumbs-o-up"></i> {{shareThing.up}}</p>
        </footer>
    </div>
</template>


<script>
export default {
    props:['shareThing']
}
</script>


<style lang="scss">
.share-thing-item{
    width: 100vw;
    box-sizing: border-box;
    background: white;
    padding: 1rem;
    margin-top:1rem; 
    color:$gray_font_color;

    header{
        display: flex;
        align-items: center;
        .avatar{
            width: 15%;
            img{
                height: 4rem;
                width: 4rem;
                border-radius:2rem; 
            }
        }
        .info{
            width: 65%;
            font-size: 1.2rem;
            p{
                &:first-child{
                    font-weight: bold;
                    color: $theme-color;
                    margin-bottom: 0.3rem;
                }
            }

        }
        .follow{
            width: 20%;
            text-align: right;
            font-size: 1rem;
            span{
                color: $theme-color;
                border: 1px solid $theme-color;
                padding: 0.5rem;
                border-radius: 1.5rem;
            }
        }
    }

    article{
        margin-top: 1rem;
        margin-bottom: 1rem;
        color: black;
    }

    footer{
        display: flex;
        p{
            text-align: center;
            &:nth-child(odd){
                width: 20%;
            }
            &:nth-child(even){
                width: 60%;
            }
        }
    }
}
</style>

