<template>
    <el-container>
        <el-header class="text-center">
            <h3>thisi is slider demo</h3>
        </el-header>
        <el-main>
            <div class="block">
                <span class="demonstration">默认</span>
                <el-slider v-model="value1"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">自定义初始值</span>
                <el-slider v-model="value2"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">隐藏 Tooltip</span>
                <el-slider v-model="value3" :show-tooltip="false"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">格式化 Tooltip</span>
                <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">禁用</span>
                <el-slider v-model="value5" disabled></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">显示间断点</span>
                <el-slider
                        v-model="value7"
                        :step="10"
                        show-stops>
                </el-slider>
            </div>
        </el-main>
    </el-container>
</template>
<script type="text/javascript">
    export default {
        data() {
            return {
                value1: 0,
                value2: 50,
                value3: 36,
                value4: 48,
                value5: 42,
                value7:50
            }
        },
        methods:{
            formatTooltip(val) {
                return val / 100;
            }
        }
    };
</script>
<style lang="scss">

</style>