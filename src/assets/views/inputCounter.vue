<template>
    <el-container>
        <el-header class="el-header">
            <h3>this is input counter</h3>
        </el-header>
        <el-main>
            <el-row>
                <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
            </el-row>
            <el-row>
                <el-input-number v-model="num3" :step="2"></el-input-number>
            </el-row>
            <el-row>
                <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
            </el-row>
        </el-main>
    </el-container>
</template>
<script>
    let _export = {
        data() {
            return {
                num1: 1,
                num3: 5,
                num8: 1
            }
        },
        methods:{
            handleChange(value) {
                console.log(value);
            }
        },
    }
    export default _export;
</script>
<style lang="scss">

</style>