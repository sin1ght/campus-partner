<template>

<div class="compus-partner-auth">
    <!-- 申请成为校园伙伴 -->
     <mt-header fixed title="校园伙伴认证">
        <router-link to="/?active=user" slot="left">
            <i class="fa fa-angle-left"></i>
        </router-link>
    </mt-header>

    <div class="content">
        <div class="nav_t">
            <ul>
                <li :class="{active:finish_steps.includes(1)}">
                    <div>
                        <i>1</i>
                        <p>个人认证</p>
                    </div>
                    <i></i>
                </li>
                <li :class="{active:finish_steps.includes(2)}">
                    <div>
                        <i>2</i>
                        <p>校园认证</p>
                    </div>
                    <i></i>
                </li>
                <li :class="{active:finish_steps.includes(3)}">
                    <div>
                        <i>3</i>
                        <p>设置资料</p>
                    </div>
                    <i></i>
                </li>
                <li :class="{active:finish_steps.includes(4)}">
                    <div>
                        <i>4</i>
                        <p>客服审核</p>
                    </div>
                </li>
            </ul>
        </div>

        <div class="step1" v-if="active_step==1">
            <div class="form">
                <mt-field label="真实姓名" placeholder="请填写" ></mt-field>
                <mt-field label="证件类型" placeholder="" value="身份证" :readonly="true"></mt-field>
                <mt-field label="证件号码" placeholder="请填写"></mt-field>
                <mt-field label="手机号码" placeholder="请填写" type="tel"></mt-field>
                <mt-field label="验证码" placeholder="请填写" >
                    <div class="get-captcha">获取验证码</div>
                </mt-field>
            </div>

            <footer>
                <mt-button type="default" size="large" @click="nextStepBtnClick(2)">下一步</mt-button>
            </footer>
        </div>

        <div class="step2" v-if="active_step==2">
            <div class="form">
                <mt-field label="学号" placeholder="请填写"></mt-field>
                <mt-field label="专业" placeholder="请填写"></mt-field>
                <mt-field label="年级" placeholder="请填写"></mt-field>
                <mt-field label="班级" placeholder="请填写"></mt-field>
            </div>

            <footer>
                <mt-button type="default" size="large" @click="nextStepBtnClick(3)">下一步</mt-button>
            </footer>
        </div>

        <div class="step3" v-if="active_step==3">
            <div class="form">
                <mt-field label="价格" placeholder="币/小时"></mt-field>
                <mt-field label="个人简介" placeholder="个人简介" type="textarea" rows="4"></mt-field>
                <mt-field label="标签" placeholder="用逗号分隔"></mt-field>
                <div class="img-uploader">
                    <p>照片墙</p>
                    <input type="file" name="" id="uploader" style="display:none;" @change="imgUploadInputChange">
                    <div class="img-content">
                        <img v-for="(item, index) in upload_imgs" :key="index" :src="item" width="80px" height="80px"/>
                        <div class="img-btn" @click="imgUploadBtnClick">
                            <i class="fa fa-camera fa-3x"></i>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <mt-button type="default" size="large" @click="nextStepBtnClick(4)">下一步</mt-button>
            </footer>
        </div>
    </div>


</div>

</template>



<script>
export default {
    data(){
        return {
            finish_steps:[1],
            active_step:1,
            upload_imgs:['/img/avatar1.jpg','/img/avatar2.jpg']
        }
    },

    methods:{
        imgUploadBtnClick(){
            document.querySelector('#uploader').click();
        },
        imgUploadInputChange(){
            var url="https://api.top15.cn/picbed/picApi.php?type=multipart";
            var fileObj=document.getElementById("uploader").files[0];
            var formData=new FormData();
            formData.append("file", fileObj);
            this.axios.post(url,formData).then((res)=>{
                if(res.status==200){
                    console.log(res.data.url);
                    this.upload_imgs.push(res.data.url);
                }
            })
        },
        nextStepBtnClick(step){
            this.active_step=step;
            this.finish_steps.push(step);
        }

    }
}
</script>



<style lang="scss">
.compus-partner-auth{
    .content{
        width: 100vw;
        height: 100vh;
        padding-top:$header-height;


        .nav_t{
            height:80px;
            background: white;

            ul{
                height: 100%;
                width: 100%;
                display: flex;

                li{
                    list-style: none;
                    width: 25%;
                    height: 100%;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    &>i{
                        width:30%;
                        height: 2px;
                        background: #9999994d;
                        display: inline-block;
                        position: absolute;
                        left: calc(50% + 30px);
                        top: calc(50% - 10px);
                    }

                    div{
                        text-align: center;

                        i{
                            color: white;
                            display: inline-block;
                            width: 30px;
                            height: 30px;
                            background:#9999994d;
                            text-align: center;
                            line-height: 30px;
                            border-radius: 15px;
                        }

                        p{
                            margin-top: 5px;
                            color:#a5a5a5;
                        }
                    }
                }

                .active>div>i{
                    background:$theme-color;
                }
            }
        }

        .step1{
            .form{
                margin-top:1rem;

                .get-captcha{
                    background: $theme-color;
                    color: white;
                    font-size:1.2rem;
                    padding: 5px;
                    border-radius: 5px;
                }
            }
        }

        .step2{
            .form{
                margin-top: 1rem;
            }
        }

        .step3{
            .form{
                margin-top:1rem;

                textarea{
                    border: 1px solid $divider_color;
                    border-radius: 5px;
                }

                .img-uploader{
                    min-height: 48px;
                    background: white;
                    padding: 0 10px;
                    padding-bottom: 5px;
                    display: flex;
                    align-items: center;

                    p{
                        font-size: 1.6rem;
                        width: 30%;
                    }

                    .img-content{
                        display: flex;
                        flex-wrap: wrap;
                        width: 70%;
                        
                        img{
                            margin-right: 2px;
                            margin-bottom: 5px;
                            height: 80px;
                            width: 80px;
                        }

                        .img-btn{
                            width: 80px;
                            height: 80px;
                            border: 1px solid #9999994d;
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            i{
                                color: #9999994d;
                            }
                        }
                    }
                }
            }
        }

        footer{
                display: flex;
                justify-content: center;
                margin-top:2rem; 

                .mint-button{
                    width: 90%;
                    background: $theme-color;
                    color: white;
                    border-radius: 2rem;
                }
        }
    }
}
</style>
