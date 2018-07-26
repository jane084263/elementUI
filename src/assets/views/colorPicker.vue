<template>
    <el-container>
        <el-header class="text-center">
            <h3>this is color Picker Demo</h3>
        </el-header>
        <el-main>
            <div class="block">
                <span class="demonstration">有默认值</span>
                <el-color-picker v-model="color1" show-alpha></el-color-picker>
            </div>
            <div class="block">
                <span class="demonstration">无默认值</span>
                <el-color-picker v-model="color2"></el-color-picker>
            </div>
            <div class="block">
                <span class="demonstration">预定义颜色</span>
                <el-color-picker v-model="color3"   show-alpha :predefine="predefineColors" size="mini"></el-color-picker>
            </div>
        </el-main>
    </el-container>
</template>
<script>
    export default {
        data() {
            return {
                color1: '#409EFF',
                color2: null,
                color3:'rgba(255, 69, 0, 0.68)',
                predefineColors: [
                    '#ff4500',
                    '#ff8c00',
                    '#ffd700',
                    '#90ee90',
                    '#00ced1',
                    '#1e90ff',
                    '#c71585',
                    'rgba(255, 69, 0, 0.68)',
                    'rgb(255, 120, 0)',
                    'hsv(51, 100, 98)',
                    'hsva(120, 40, 94, 0.5)',
                    'hsl(181, 100%, 37%)',
                    'hsla(209, 100%, 56%, 0.73)',
                    '#c7158577'
                ]
            }
        }
    };
</script>
<style lang="scss">

</style>