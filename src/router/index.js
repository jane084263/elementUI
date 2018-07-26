import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
var _export = new Router({
    mode:'hash',
    routes:[{
        path:"/",
        redirect:{
            path:'/index'
        }
    },{
        path:"/index",
        component:(resolve) =>{
            require(['./../assets/views/index.vue'],resolve)
        },
        children:[
            // 页面布局
            {
                path: "/layout",
                component: (resolve) => {
                    require(['./../assets/views/layout.vue'], resolve)
                }
            },
            // icon
            {
                path: "/icon",
                component: (resolve) => {
                    require(['./../assets/views/icon.vue'], resolve)
                }
            },
            // button
            {
                path: "/button",
                component: (resolve) => {
                    require(['./../assets/views/button.vue'], resolve)
                }
            },
            // 单选按钮
            {
                path: "/radio",
                component: (resolve) => {
                    require(['./../assets/views/radio.vue'], resolve)
                }
            },
            // checkBox
            {
                path: "/checkBox",
                component: (resolve) => {
                    require(['./../assets/views/checkBox.vue'], resolve)
                }
            },
            // input
            {
                path: "/input",
                component: (resolve) => {
                    require(['./../assets/views/input.vue'], resolve)
                }
            },
            // inputCounter
            {
                path: "/inputCounter",
                component: (resolve) => {
                    require(['./../assets/views/inputCounter.vue'], resolve)
                }
            },
            // select 选择器
            {
                path: "/select",
                component: (resolve) => {
                    require(['./../assets/views/select.vue'], resolve)
                }
            },
            // select 选择器
            {
                path: "/cascader",
                component: (resolve) => {
                    require(['./../assets/views/cascader.vue'], resolve)
                }
            },
            // switch 开关
            {
                path: "/switch",
                component: (resolve) => {
                    require(['./../assets/views/switch.vue'], resolve)
                }
            },
            // slider 滑块
            {
                path: "/slider",
                component: (resolve) => {
                    require(['./../assets/views/slider.vue'], resolve)
                }
            },
            // slider 滑块
            {
                path: "/timePicker",
                component: (resolve) => {
                    require(['./../assets/views/timePicker.vue'], resolve)
                }
            },
            // dateTimePicker
            {
                path: "/datePicker",
                component: (resolve) => {
                    require(['./../assets/views/datePicker.vue'], resolve)
                }
            },
            // dateTimePicker
            {
                path: "/dateTimePicker",
                component: (resolve) => {
                    require(['./../assets/views/dateTimePicker.vue'], resolve)
                }
            },
            // uploader
            {
                path: "/uploader",
                component: (resolve) => {
                    require(['./../assets/views/uploader.vue'], resolve)
                }
            },
        ]
    },]
})
export default _export;