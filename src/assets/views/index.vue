<template>
    <el-container style="height: 100%; border: 1px solid #eee">
        <el-aside width="200px">
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                     :router=true>
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">组件</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">Basic</span>
                    <el-menu-item index="/layout" >layOut布局</el-menu-item>
                    <el-menu-item index="/icon">icon图标</el-menu-item>
                    <el-menu-item index="/button">button 按钮</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <span slot="title">Form</span>
                    <el-menu-item index="/radio" >Radio 选项</el-menu-item>
                    <el-menu-item index="/checkBox">CheckBox 多选</el-menu-item>
                    <el-menu-item index="/input">Input 输入框</el-menu-item>
                    <el-menu-item index="/inputCounter">InputNumber 计数器</el-menu-item>
                    <el-menu-item index="/select">select</el-menu-item>
                    <el-menu-item index="/cascader">Cascader 级联选择器</el-menu-item>
                    <el-menu-item index="/switch">switch 开关</el-menu-item>
                    <el-menu-item index="/slider">slider 滑块</el-menu-item>
                    <el-menu-item index="/timePicker">TimePicker 时间选择器</el-menu-item>
                    <el-menu-item index="/datePicker">DatePicker 日期选择器</el-menu-item>
                    <el-menu-item index="/dateTimePicker">DateTmePicker 日期选择器</el-menu-item>
                    <el-menu-item index="/uploader">uploader</el-menu-item>
                    <el-menu-item index="/rate">rate 评分</el-menu-item>
                    <el-menu-item index="/colorPicker">colorPicker</el-menu-item>
                    <el-menu-item index="/transfer">transfer 穿梭框</el-menu-item>
                    <el-menu-item index="/form">form 表单</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group index="2">
                    <span slot="title">
                        <i class="el-icon-menu"></i>
                        Data
                    </span>
                    <el-menu-item index="/table">table</el-menu-item>
                    <el-menu-item index="/pagination">pagination 分页</el-menu-item>
                    <el-menu-item index="/badge">Badge 标记</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                     <span slot="title">
                        <i class="el-icon-menu"></i>
                        Notice
                    </span>
                    <el-menu-item index="/alert">
                        <i class="el-icon-setting"></i>
                        <span slot="title">Alert 警告</span>
                    </el-menu-item>
                    <el-menu-item index="/loading">
                        <i class="el-icon-setting"></i>
                        <span slot="title">Loading 加载</span>
                    </el-menu-item>
                    <el-menu-item index="/message">
                        <i class="el-icon-setting"></i>
                        <span slot="title">Message 消息提示</span>
                    </el-menu-item>
                    <el-menu-item index="/messageBox">
                        <i class="el-icon-setting"></i>
                        <span slot="title">MessageBox 弹框</span>
                    </el-menu-item>
                    <el-menu-item index="/notification">
                        <i class="el-icon-setting"></i>
                        <span slot="title">Notification 通知</span>
                    </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                     <span slot="title">
                        <i class="el-icon-menu"></i>
                        Navigation 导航
                    </span>
                    <el-menu-item index="/navMeue">
                        <i class="el-icon-setting"></i>
                        <span slot="title">
                            naveMeue
                        </span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">NavMenu 导航菜单</span>
                    </el-menu-item>
                    <el-menu-item index="/tab">
                        <i class="el-icon-setting"></i>
                        <span slot="title">Tabs 标签页</span>
                    </el-menu-item>
                    <el-menu-item index="/breadCrumbs">
                        <i class="el-icon-setting"></i>
                        <span slot="title">Breadcrumb 面包屑</span>
                    </el-menu-item>
                    <el-menu-item index="/dropDown">
                        <i class="el-icon-setting"></i>
                        <span slot="title">Dropdown 下拉菜单</span>
                    </el-menu-item>
                    <el-menu-item index="/steps">
                        <i class="el-icon-setting"></i>
                        <span slot="title">steps 步骤条</span>
                    </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                     <span slot="title">
                        <i class="el-icon-menu"></i>
                        Others
                    </span>
                    <el-menu-item index="/dialog">
                        <i class="el-icon-setting"></i>
                        <span slot="title"> Dialog 对话框</span>
                    </el-menu-item>
                    <el-menu-item index="/popup">
                        <i class="el-icon-setting"></i>
                        <span slot="title">Popover 弹出框</span>
                    </el-menu-item>
                    <el-menu-item index="/card">
                        <i class="el-icon-setting"></i>
                        <span slot="title">Card 卡片</span>
                    </el-menu-item>
                    <el-menu-item index="/carousel">
                        <i class="el-icon-setting"></i>
                        <span slot="title">Carousel 走马灯</span>
                    </el-menu-item>
                    <el-menu-item index="/collapse">
                        <i class="el-icon-setting"></i>
                        <span slot="title">Collapse 折叠面板</span>
                    </el-menu-item>
                </el-menu-item-group>

            </el-menu>
        </el-aside>
        <el-container>
            <el-main>
                <router-view>
                </router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script type="text/javascript">
    let _export = {
        data: function () {
            return {
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
    export default _export;

</script>
<style lang="scss">
    .el-menu-vertical-demo {
        width: 200px;
        min-height: 400px
    }
</style>