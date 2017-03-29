import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from 'src/views/Home'
export default new Router({
  routes: [
     {
        path: '/login',
        component: Home,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: Home,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Home, name: '主页', hidden: true },
            { path: '/table', component: Home, name: 'Table' },
            { path: '/form', component: Home, name: 'Form' },
            { path: '/user', component: Home, name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/page4', component: Home, name: '页面4' },
            { path: '/page5', component: Home, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/page6', component: Home, name: '导航三' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: Home, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
  ]
})
