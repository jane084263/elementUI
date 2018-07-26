<template>
    <el-container>
        <el-header class="text-center">
            <h3>this is radio demo</h3>
        </el-header>
        <el-main>
            <el-row>
                <el-radio v-model="radio" label="1">备选项</el-radio>
                <el-radio v-model="radio" label="2">备选项</el-radio>
            </el-row>
            <el-row>
                <el-radio-group v-model="radio2">
                    <el-radio :label="3">备选项</el-radio>
                    <el-radio :label="6">备选项</el-radio>
                    <el-radio :label="9">备选项</el-radio>
                </el-radio-group>
            </el-row>
        </el-main>
    </el-container>
</template>
<script type="text/javascript">
    let _export = {
        data(){
            return {
                radio: '1',
                radio2:'3'
            }
        }
    };
    export default _export

</script>
<style lang="scss">

</style>