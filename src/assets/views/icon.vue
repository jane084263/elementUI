<template>
    <el-container class="icon-container">
        <el-header class="text-center">
             <h3>this is icon demo</h3>
        </el-header>
        <el-main>
            <i class="el-icon-edit" style="color:red;"></i>
            <i class="el-icon-share"></i>
            <i class="el-icon-delete"></i>
            <i class="el-icon-info"></i>
            <i class="el-icon-error" ></i>
            <i class="el-icon-success"></i>
            <i class="el-icon-warning"></i>
            <i class="el-icon-question"></i>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-main>
    </el-container>
</template>
<script>

</script>
<style lang="scss">
    .icon-container {
        i {
            width:50px;
            height:50px;
            line-height:50px;
            text-align:center;
            font-size:30px;
        }
    }
</style>