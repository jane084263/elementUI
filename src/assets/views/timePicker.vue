<template>
    <el-container>
        <el-header class="text-center">
            <h3>this is timePicker Demo</h3>
        </el-header>
        <el-main>
            <div class="block">
                <el-time-select  v-model="value1" :picker-options="obj">

                </el-time-select>
            </div>
            <div class="block">
                <span>任意时间点</span>
                <el-time-select
                        placeholder="起始时间"
                        v-model="startTime"
                        :picker-options="obj1">
                </el-time-select>
                <el-time-select
                        placeholder="结束时间"
                        v-model="endTime"
                        :picker-options="obj2">
                </el-time-select>
            </div>
        </el-main>
    </el-container>
</template>
<script type="text/javascript">
    export default {
        data() {
            return {
                value1: '',
                obj:{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                },
                obj1:{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                },
                obj2:{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                    minTime: ''
                },
                startTime:'',
                endTime:''
            };
        }
    }
</script>
<style lang="scss">

</style>