import VueRouter from 'vue-router'
import MainContent from './components/MainContent.vue'
import UserProfile from './components/UserProfile.vue'
import PartnerProfile from './components/PartnerProfile.vue'

const routes = [
    { path: '/', component: MainContent },
    { path: '/user/profile/:id', component: UserProfile},
    {path:'/partner/profile/:id',component:PartnerProfile}
]

export default new VueRouter({
    routes:routes 
}) 