import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'index',
        component:() => import('../page/index'),
        meta: {
            title: '门禁管理端'
        }
    },
    {
        path:'/notice',
        name:'notice',
        component:() => import('../page/notice'),
        meta: {
            title: '公告管理'
        }
    },
    {
        path:'/key',
        name:'key',
        component:() => import('../page/key'),
        meta: {
            title: '钥匙管理'
        }
    }
]

const router = new VueRouter({
    routes
})

export default router