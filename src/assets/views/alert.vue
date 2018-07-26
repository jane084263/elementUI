<template>
    <el-container>
        <el-header class="text-center">
            <h3>this is demo</h3>
        </el-header>
        <el-main>
            <div class="block">
                <el-alert class="alert"
                          title="成功提示的文案"
                          type="success"
                          description="文字说明文字说明文字说明文字说明文字说明文字说明"
                          show-icon>
                </el-alert>
            </div>
            <div class="block">
                <el-alert
                        title="消息提示的文案"
                        type="info"
                        description="文字说明文字说明文字说明文字说明文字说明文字说明"
                        show-icon>
                </el-alert>
            </div>
            <div class="block">
                <el-alert
                        title="警告提示的文案"
                        type="warning"
                        description="文字说明文字说明文字说明文字说明文字说明文字说明"
                        show-icon>
                </el-alert>
            </div>
            <div class="block">
                <el-alert
                        title="错误提示的文案"
                        type="error"
                        description="文字说明文字说明文字说明文字说明文字说明文字说明"
                        show-icon>
                </el-alert>
            </div>
        </el-main>
    </el-container>

</template>
<script>

</script>
<style lang="scss">
    .block {
        margin-top: 15px;
    }
</style>