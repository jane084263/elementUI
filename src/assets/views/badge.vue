<template>
    <el-container>
        <el-header class="text-center">
            <h3>this is badge Demo</h3>
        </el-header>
        <el-main>
            <el-badge :value="12" class="item">
                <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="3" class="item">
                <el-button size="small">回复</el-button>
            </el-badge>

            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item class="clearfix">
                        评论
                        <el-badge class="mark" :value="12"/>
                    </el-dropdown-item>
                    <el-dropdown-item class="clearfix">
                        回复
                        <el-badge class="mark" :value="3"/>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-main>
    </el-container>
</template>
<script type="text/javascript">

</script>
<style lang="scss">
    .item {
        margin-top: 10px;
        margin-right: 40px;
    }
</style>