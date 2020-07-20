<template>
<div style="color: black">
    <div class="dropdown">
        <a-dropdown >
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                <a-button icon="user" >
                </a-button>
            </a>
            <a-menu slot="overlay">
                <a-menu-item>
                    <a-button >
                        主页
                    </a-button>
                </a-menu-item>
                <a-menu-item>
                    <a-button >
                        退出登陆
                    </a-button>
                </a-menu-item>
            </a-menu>
        </a-dropdown>
    </div>

    <h1 >用户中心</h1>
    <p>{{this.username}}</p>
    <a-button type="primary" block @click="createvote()">
        创建投票
    </a-button>
    <p>我创建的投票</p>
    <el-table
            :data="tableData"
            style="width: 100%">
        <el-table-column
                label="id"
                width="180">
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.id }}</span>
            </template>
        </el-table-column>
        <el-table-column
                label="创建者"
                width="180">
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.describes }}</span>
            </template>
        </el-table-column>

        <el-table-column
                label="投票主题"
                width="180">
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.votename }}</span>
            </template>
        </el-table-column>

        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
                <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <br>
    <br>






</div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "UserCenter",
        data(){
            return{
                tableData: {
                    id:'',
                    describes:'',
                    voteBegintime:'',
                    voteNum:'',
                    voteOvertime:'',
                    voteState:'',
                    votename:'',
                },
                username:'',

            }
        },methods:{
            createvote(){
                this.$router.push('/vote')
            },
            handleEdit(index, row) {
                console.log(index, row);
                this.$router.push('/result?code='+row.id);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }

        },
        created() {
            const _this=this;
            this.axios.get('http://localhost:9090/voteservice/voteservice/user-info/getUsername').then(function (resp) {
                if (resp.data.code=='10000'){
                    _this.username=resp.data.data;
                    Vue.prototype.$username = _this.username;
                }
            })
            this.axios.get('http://localhost:9090/voteservice/voteservice/vote-info/getUserVote').then(function (resp) {
                // console.log(resp)
                _this.tableData=resp.data.data
                console.log(_this.tableData)
            })

        }
    }
</script>

<style scoped>
    .dropdown{
        float: right;
        margin: 30px;
    }
</style>
