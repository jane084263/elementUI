<template>
    <el-container>
        <el-header class="text-center">
            <h3>this is demo</h3>
        </el-header>
        <el-main>
            <el-button :plain="true" @click="open5">消息</el-button>
            <el-button :plain="true" @click="open6">成功</el-button>
            <el-button :plain="true" @click="open7">警告</el-button>
            <el-button :plain="true" @click="open8">错误</el-button>
        </el-main>
    </el-container>

</template>
<script>
    export default {
        methods: {
            open5() {
                this.$message({
                    showClose: true,
                    message: '这是一条消息提示'
                });
            },

            open6() {
                this.$message({
                    showClose: true,
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                });
            },

            open7() {
                this.$message({
                    showClose: true,
                    message: '警告哦，这是一条警告消息',
                    type: 'warning'
                });
            },

            open8() {
                this.$message({
                    showClose: true,
                    message: '错了哦，这是一条错误消息',
                    type: 'error'
                });
            }
        }
    }
</script>
<style lang="scss">

</style>