import VueRouter from 'vue-router'
import MainContent from './components/MainContent.vue'
import UserProfile from './components/UserProfile.vue'
import PartnerProfile from './components/PartnerProfile.vue'
import MessageCenter from './components/MessageCenter.vue'
import ChatRoom from './components/ChatRoom.vue'
import CompusPartnerAuth from './components/CompusPartnerAuth.vue'
import UserPurse from './components/UserPurse'
import OrderAdd from './components/OrderAdd.vue'
import UserOrderCenter from './components/UserOrderCenter.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import UserEditProfile from './components/UserEditProfile.vue'
import PartnerSearch from './components/PartnerSearch.vue'

const routes = [
    { path:'/', component: MainContent },//主页
    { path:'/user/profile/:id', component: UserProfile},//个人资料
    { path:'/user/purse', component: UserPurse},//我的钱包
    { path:'/partner/profile/:id',component:PartnerProfile},//伙伴资料
    { path:'/message/:id',component:MessageCenter},//消息中心
    { path:'/chatroom',component:ChatRoom},//聊天室
    { path:'/partner/auth',component:CompusPartnerAuth},//校园伙伴认证
    { path:'/order/add',component:OrderAdd},//陪玩下单界面
    { path:'/user/order',component:UserOrderCenter},//我的订单
    { path:'/login',component:Login},//登录
    { path:'/register',component:Register},//注册
    { path:'/user/edit-profile',component:UserEditProfile},//用户编辑个人资料
    { path:'/partner/search',component:PartnerSearch},//搜索伙伴
]

export default new VueRouter({
    routes:routes 
}); 