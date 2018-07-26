<template>
    <el-container>
        <el-header class="text-center">
            <h3>this is rate demo</h3>
        </el-header>
        <el-main>
            <div class="block">
                <span class="demonstration">默认不区分颜色</span>
                <el-rate v-model="value1" showText></el-rate>
            </div>
            <div class="block">
                <span class="demonstration">区分颜色</span>
                <el-rate v-model="value2" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" showText>
                </el-rate>
            </div>

        </el-main>
    </el-container>
</template>
<script>
    export default {
        data() {
            return {
                value1:null,
                value2:null,
                value4:null,
                value5:3.7
            }
        },
        watch:{
            value1(newval1,oldval1){
                console.log('newval1',newval1);
                console.log('oldval1',oldval1);
            },
            value2(newval2,oldval2) {
                console.log('newval2',newval2);
                console.log('oldval2',oldval2);
            }
        }
    }
</script>
<style lang="scss">

</style>