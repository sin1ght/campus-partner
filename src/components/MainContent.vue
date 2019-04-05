<template>
    <div id="main-content">
        <!-- Tab-content -->
        <mt-tab-container v-model="tabbar_active">
            <mt-tab-container-item id="home" class="tab-container-item">
                <home></home>
            </mt-tab-container-item>
            <mt-tab-container-item id="community" class="tab-container-item">
                <community></community> 
            </mt-tab-container-item>
            <!-- <mt-tab-container-item id="need" class="tab-container-item">
                need
            </mt-tab-container-item> -->
            <mt-tab-container-item id="user" class="tab-container-item">
                <user></user>
            </mt-tab-container-item>
        </mt-tab-container>

        
        <!-- Tabbar -->
        <mt-tabbar v-model="tabbar_active" fixed>
            <mt-tab-item id="home">
                <i slot='icon' class="fa fa-home fa-2x"></i>
                首页
            </mt-tab-item>
            <mt-tab-item id="community">
                <i slot='icon' class="fa fa-comments-o fa-2x"></i>
                社区
            </mt-tab-item>
            <!-- <mt-tab-item id="need">
                <i slot='icon' class="fa fa-handshake-o fa-2x"></i>
                探索
            </mt-tab-item> -->
            <mt-tab-item id="user">
                <i slot='icon' class="fa fa-user-o fa-2x"></i>
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>


<script>
import Home from './Home'
import Community from './Community'
import User from './User'

export default {
    components: {
        home:Home,
        community:Community,
        user:User
    },
    data:function(){
        return {
            tabbar_active:'home'
        }
    }
}
</script>


<style lang="scss">
#main-content{
    height: 100vh;
    widows: 100vw;
}
</style>


