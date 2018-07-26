<template>
    <el-container>
        <el-header class="text-center">
            <h3>this is checkbox demo</h3>
        </el-header>
        <el-main>
            <el-row>
                <el-checkbox v-model="checked" disabled>备选项</el-checkbox>
            </el-row>
            <el-row>
                <el-checkbox-group v-model="checkList">
                    <el-checkbox label="复选框 A"></el-checkbox>
                    <el-checkbox label="复选框 B"></el-checkbox>
                    <el-checkbox label="复选框 C"></el-checkbox>
                    <el-checkbox label="禁用" disabled></el-checkbox>
                    <el-checkbox label="选中且禁用" disabled></el-checkbox>
                </el-checkbox-group>
            </el-row>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </el-main>
    </el-container>
</template>
<script type="text/javascript">
    const cityOptions = ['上海', '北京', '广州', '深圳'];
    let _export = {
        data(){
            return {
                checked:false,
                checkList: ['选中且禁用'],
                checkAll: false,
                checkedCities: ['上海', '北京'],
                cities: cityOptions,
                isIndeterminate: true
            }
        },
        methods:{
            handleCheckAllChange(val) {
                console.log('val1',val);
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                console.log('value',value);
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            }
        }
    };
    export default _export

</script>
<style lang="scss">

</style>