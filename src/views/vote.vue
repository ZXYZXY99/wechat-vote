<template>
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
        <el-form-item
                prop="email"
                label="名称"
                :rules="[
      {  required: true, message: '名称不能为空', trigger: 'blur' }
    ]"
        >
            <el-input v-model="dynamicValidateForm.email"></el-input>

<!--            可选择选项数量:<el-input-number v-model="dynamicValidateForm.num" @change="handleChange" :min="1"-->
<!--                                    :max="10"-->
<!--                              label="描述文字"></el-input-number>-->
<!--            投票持续天数<el-input-number v-model="relform.day" @change="handleChange" :min="1"-->
<!--                                    :max="10"-->
<!--                                    label="描述文字"></el-input-number>-->


        </el-form-item>
        <el-form-item
                v-for="(domain, index) in dynamicValidateForm.domains"
                :label="'选项' + index"
                :key="domain.key"
                :prop="'domains.' + index + '.value'"
                :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
        >
            <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
            <el-button @click="addDomain">新增选项</el-button>
            <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                dynamicValidateForm: {
                    domains: [{
                        value: ''
                    }],
                    email: '',
                    num: 1,
                },
                relform:{
                    domain:'',
                    name:'',
                    num: '',
                    day:'',
                }


            };
        },
        methods: {
            submitForm(formName) {
                const  _this=this;
                for (var i=0;i<this.dynamicValidateForm.domains.length;i++){
                    console.log(this.dynamicValidateForm.domains[i].value)
                    this.relform.domain=this.relform.domain+"="+this.dynamicValidateForm.domains[i].value
                }
                this.relform.name=this.dynamicValidateForm.email
                this.relform.num=this.dynamicValidateForm.num
                console.log(this.relform.domain+"Test")
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.axios.post('http://localhost:9090/voteservice/voteservice/vote-info/addvote',
                            _this.relform) .then(function (resp) {
                                if (resp.data.code=10000){
                                    _this.$message.info("创建成功")
                                    console.log(resp)
                                    _this.$router.push("/vote_tp?code="+resp.data.data);

                                }
                        })


                        console.log(this.dynamicValidateForm.domains)
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            removeDomain(item) {
                var index = this.dynamicValidateForm.domains.indexOf(item)
                if (index !== -1) {
                    this.dynamicValidateForm.domains.splice(index, 1)
                }
            },
            addDomain() {
                this.dynamicValidateForm.domains.push({
                    value: '',
                    // key: Date.now()
                });
            }
        }
    }
</script>
