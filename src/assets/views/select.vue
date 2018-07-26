<template>
    <el-container>
        <el-header class="text-center">
            <h3>this is select demo</h3>
        </el-header>
        <el-main>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-row>
                <div>基础多选</div>
                <el-select v-model="value5" multiple placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-select
                        v-model="value11"
                        multiple
                        collapse-tags
                        style="margin-left: 20px;"
                        placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-row>
            <el-row>
                <el-select
                        v-model="value9"
                        multiple
                        filterable
                        remote
                        reserve-keyword
                        placeholder="请输入关键词"
                        :remote-method="remoteMethod"
                        :loading="loading">
                    <el-option
                            v-for="item in options4"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-row>
        </el-main>
    </el-container>

</template>
<script>
    let _export = {
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '黄金糕',
                    disabled: true
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
                value5: [],
                value11: [],
                options4: [],
                value9: [],
                list: [],
                loading: false,
                states: ["Alabama", "Alaska", "Arizona",
                    "Arkansas", "California", "Colorado",
                    "Connecticut", "Delaware", "Florida",
                    "Georgia", "Hawaii", "Idaho", "Illinois",
                    "Indiana", "Iowa", "Kansas", "Kentucky",
                    "Louisiana", "Maine", "Maryland",
                    "Massachusetts", "Michigan", "Minnesota",
                    "Mississippi", "Missouri", "Montana",
                    "Nebraska", "Nevada", "New Hampshire",
                    "New Jersey", "New Mexico", "New York",
                    "North Carolina", "North Dakota", "Ohio",
                    "Oklahoma", "Oregon", "Pennsylvania",
                    "Rhode Island", "South Carolina",
                    "South Dakota", "Tennessee", "Texas",
                    "Utah", "Vermont", "Virginia",
                    "Washington", "West Virginia", "Wisconsin",
                    "Wyoming"]
            }
        },
        methods: {
            remoteMethod(query) {
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.options4 = this.list.filter(item => {
                            return item.label.toLowerCase()
                                .indexOf(query.toLowerCase()) > -1;
                        });
                    }, 200);
                } else {
                    this.options4 = [];
                }
            }
        },
        mounted() {
            this.list = this.states.map(item => {
                return { value: item, label: item };
            });
        },
    }
    export default _export;

</script>
<style lang="scss">

</style>