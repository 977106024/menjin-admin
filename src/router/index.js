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
        component:() => import('../page/notice/notice'),
        meta: {
            title: '公告管理'
        }
    },{
        path:'/addNotice',
        name:'addNotice',
        component:() => import('../page/notice/addNotice'),
        meta: {
            title: '添加公告'
        }
    },
    {
        path:'/key',
        name:'key',
        component:() => import('../page/keys/key'),
        meta: {
            title: '钥匙管理'
        }
    },
    {
        path:'/openingRecord',
        name:'openingRecord',
        component:() => import('../page/openingRecord'),
        meta: {
            title: '开门记录'
        }
    },

















    {
        path:'/login',
        name:'login',
        component:() => import('../page/login/login'),
        meta: {
            title: '登陆'
        }
    }
]

const router = new VueRouter({
    routes
})

export default router