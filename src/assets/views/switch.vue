<template>
    <el-container>
        <el-header class="text-center">
            <h3>thisi is switch</h3>
        </el-header>
        <el-main>
            <el-row>
                <el-switch
                        v-model="value2"
                        active-color="#13ce66"
                        inactive-color="#ff4949">
                </el-switch>
            </el-row>
            <el-row>
                <el-switch
                        v-model="value3"
                        active-text="按月付费"
                        inactive-text="按年付费">
                </el-switch>
                <el-switch
                        style="display: block"
                        v-model="value4"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        active-text="按月付费"
                        inactive-text="按年付费">
                </el-switch>
            </el-row>

        </el-main>
    </el-container>
</template>
<script type="text/javascript">
    export default {
        data() {
            return {
                value2: true,
                value3: true,
                value4: true
            }
        }
    };
</script>
<style lang="scss">

</style>