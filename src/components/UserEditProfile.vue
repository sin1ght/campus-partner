<template>
    <div class="user-edit-profile-page">
        <mt-header fixed title="编辑个人资料">
            <i @click="$router.go(-1)" class="fa fa-angle-left" slot="left"></i>
            <i @click="$router.go(-1)" class="fa fa-check" slot="right"></i>
        </mt-header>
        
        <div class="content">
            <header>
                <img class="banner" :src="user.banner" width="100%" height="100%">
                <div class="avatar">
                    <img :src="user.avatar" width="80" height="80">
                    <p @click="imgUploadBtnClick(1)">更换</p>
                </div>
                <p class="action" @click="imgUploadBtnClick(2)">
                    <i class="fa fa-camera"></i>
                    更换封面
                </p>
                <input type="file" id="uploader-avatar" @change="imgUploadInputChange(1)">
                <input type="file" id="uploader-bg" @change="imgUploadInputChange(2)">
            </header>

            <div class="form">
                <mt-field label="昵称" placeholder="30内只能修改一次" ></mt-field>
                <mt-field label="签名" placeholder="介绍一下你自己" ></mt-field>
                <mt-field label="性别" placeholder="男" v-model="user.sex" @click.native="popupSexVisible=true"></mt-field>
                <mt-field label="星座" placeholder="你的星座" v-model="user.constellation" @click.native="popupConstellationVisible=true"></mt-field>
                <mt-field label="所在地" placeholder="你在哪" ></mt-field>
                <mt-field label="学校" placeholder="你的学校" ></mt-field>
                <mt-field label="专业" placeholder="你的专业" ></mt-field>
            </div>

            <mt-popup
                v-model="popupSexVisible"
                popup-transition="popup-fade">
                <mt-radio
                    v-model="user.sex"
                    :options="['男', '女']">
                </mt-radio>
            </mt-popup>

            <mt-popup
                v-model="popupConstellationVisible"
                popup-transition="popup-fade">
                <mt-radio
                    v-model="user.constellation"
                    :options="['白羊座','金牛座','双子座','巨蟹座','狮子座','处女座','天秤座','天蝎座','射手座','摩羯座','水瓶座','双鱼座']">
                </mt-radio>
            </mt-popup>

        </div>

    </div>
</template>

<script>
export default {
    data(){
        return {
            popupSexVisible:false,//性别选择弹出框
            popupConstellationVisible:false,//星座选择弹出框
            user:{
                avatar:'/img/avatar1.jpg',//头像
                banner:'/img/bg2.jpg',//封面背景图
                sex:'',
                constellation:'',
            }
        };
    },
    methods:{
        imgUploadBtnClick(type){
            if(type==1){
                //头像
                document.querySelector('#uploader-avatar').click();
            }else if(type==2){
                //背景封面
                document.querySelector('#uploader-bg').click();
            }
        },//点击上传按钮
        imgUploadInputChange(type){
            var url="https://api.top15.cn/picbed/picApi.php?type=multipart";
            var fileObj=null;
            if(type==1){
                //头像
                fileObj=document.getElementById("uploader-avatar").files[0]
            }else if(type==2){
                //背景封面
                fileObj=document.getElementById("uploader-bg").files[0]
            }

            var formData=new FormData();
            formData.append("file", fileObj);
            this.axios.post(url,formData).then((res)=>{
                if(res.status==200){
                    console.log(type);
                    console.log(res.data.url);
                    if(type==1){
                        //头像
                        this.user.avatar=res.data.url;
                    }else if(type==2){
                        //背景封面
                        this.user.banner=res.data.url;
                    }
                }
            })
        },//图片上传
    }
}
</script>


<style lang="scss">
.user-edit-profile-page{
    .content{
        @include full-screen;
        padding-top:$header-height;

        header{
            width: 100%;
            height: 30%;
            position: relative;

            .banner{
                position: absolute;
                top: 0;
                left: 0;
                filter: brightness(70%);
            }

            .avatar{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                border: 1px solid white;
                border-radius: 40px;
                overflow: hidden;
                width: 80px;
                height: 80px;
                
                
                p{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    background: #a79e9eb0;
                    width: 100%;
                    text-align: center;
                    color: white;
                    font-size: 1.4rem;
                    padding: 5px;
                    box-sizing: border-box;
                }
            }

            .action{
                position: absolute;
                bottom:1rem;
                right: 1rem;
                color: white;
                background: #a79e9eb0;
                font-size: 1.4rem;
                padding: 5px;
                border-radius: 5px;
            }

        }

        .form{
            margin-top: 1rem;

            .mint-field{
                &:nth-child(3){
                    margin-top: 1rem;
                }
                &:nth-child(6){
                    margin-top: 1rem;
                }
            }
        }

        .mint-radiolist{
            width: 80vw;
            max-height: 50vh;
            overflow-y: auto;
        }
    }
}
</style>
