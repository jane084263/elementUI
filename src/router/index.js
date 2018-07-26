import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
var _export = new Router({
    mode: 'hash',
    routes: [{
        path: "/",
        redirect: {
            path: '/index'
        }
    }, {
        path: "/index",
        component: (resolve) => {
            require(['./../assets/views/index.vue'], resolve)
        },
        children: [
            // 页面布局
            {
                path: '/',
                redirect: {
                    path: '/layout'
                }
            },
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
            // rate
            {
                path: "/rate",
                component: (resolve) => {
                    require(['./../assets/views/rate.vue'], resolve)
                }
            },
            // colorPicker
            {
                path: "/colorPicker",
                component: (resolve) => {
                    require(['./../assets/views/colorPicker.vue'], resolve)
                }
            },
            // transfer
            {
                path: "/transfer",
                component: (resolve) => {
                    require(['./../assets/views/transfer.vue'], resolve)
                }
            },
            {
                path: "/table",
                component: (resolve) => {
                    require(['./../assets/views/table.vue'], resolve)
                }
            },
            {
                path: "/form",
                component: (resolve) => {
                    require(['./../assets/views/form.vue'], resolve)
                }
            },
            {
                path: "/badge",
                component: (resolve) => {
                    require(['./../assets/views/badge.vue'], resolve)
                }
            },
            {
                path: "/pagination",
                component: (resolve) => {
                    require(['./../assets/views/pagination.vue'], resolve)
                }
            },
            {
                path: "/alert",
                component: (resolve) => {
                    require(['./../assets/views/alert.vue'], resolve)
                }
            },
            {
                path: "/loading",
                component: (resolve) => {
                    require(['./../assets/views/loading.vue'], resolve)
                }
            },
            {
                path: "/message",
                component: (resolve) => {
                    require(['./../assets/views/message.vue'], resolve)
                }
            },
            {
                path: "/messageBox",
                component: (resolve) => {
                    require(['./../assets/views/messageBox.vue'], resolve)
                }
            },
            {
                path: "/notification",
                component: (resolve) => {
                    require(['./../assets/views/notification.vue'], resolve)
                }
            },
        ]
    },]
})
export default _export;