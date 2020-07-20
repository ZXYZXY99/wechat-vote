<template>
    <div>
        <h1>登陆</h1>

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username" >
                <el-input placeholder="请输入你的手机号" v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="密码" prop="userpassword">
                    <el-input type="password" placeholder="请输入密码" v-model="ruleForm.userpassword"></el-input>
                </el-form-item>

                <div style="text-align: center; margin: 0 auto;">
                    <slide-verify
                            :l="42"
                            :r="10"
                            :w="310"
                            :h="155"
                            @success="onSuccess"
                            @fail="onFail"
                            :slider-text="text"
                    >  //滑动框内提示文字
                    </slide-verify>
                </div>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')"
                               v-loading.fullscreen.lock="fullscreenLoading"
                                :disabled="verification_flag">登陆</el-button>
                    <el-button type="primary" @click="register()">注册</el-button>
                    <br>
                    <el-button type="primary" @click="findpass()">找回密码</el-button>

                    <el-button >重置</el-button>
                </el-form-item>
            </el-form>
        </el-form>

    </div>
</template>

<script>
    import {setToken} from "../util/TokenUtil";

    export default {
        name: "Login",
        data(){
            return{
                verification_flag:true,
                mediaStreamTrack:'',
                dialogVisible:false,
                fullscreenLoading: false,
                rules:{
                    username: [
                        { required: true, message: '请输入电话号码'},
                        {validator:function(rule,value,callback){
                                if(/^1[345789]\d{9}$/.test(value) == false){
                                    callback(new Error("请输入正确的手机号"));
                                }else{
                                    callback();
                                }
                            }, trigger: 'blur'}
                    ],
                    userpassword: [
                        { required: true, message: '密码不能为空', trigger: 'blur'},
                        {min: 5, max: 14, message: '长度在5 到 14 个字符', trigger: 'blur'
                        }
                    ],

                },
                ruleForm:{
                    username:'',
                    userpassword:''
                }

            }
        },
        methods: {
            //图片验证成功
            async onSuccess() {
                //成功后的逻辑代码
                this.verification_flag=false;
                this.$message.info("验证成功");
            },
            //验证失败
            onFail() {
                this.$message.info("验证失败");
                //失败后的逻辑代码
            }, handleClick() {
                // 父组件直接可以调用刷新方法
                this.$refs.slideblock.reset();
            },

            submitForm(ruleForm) {
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                }, 1000);
                const _this = this;
                this.$refs[ruleForm].validate((valid) => {
                    if (valid) {
                        this.axios.post('http://localhost:9090/voteservice/voteservice/user-info/login',
                            _this.ruleForm)
                            .then(function
                                (resp) {
                                if (resp.data.code == "10000") {
                                    _this.userToken = resp.data.data;
                                    console.log(_this.userToken)
                                    setToken(_this.userToken)
                                    if (_this.$code==undefined) {
                                        _this.$router.push("/usercenter")
                                    } else {
                                        _this.$router.push("/vote_tp?code=" + _this.$code)
                                    }
                                } else {
                                    _this.$message.error("账号或密码错误")
                                    _this.handleClick()
                                }
                            })
                    } else {
                        _this.$message.error("登陆失败")
                        return false;
                    }
                });
            },
            register() {
                this.$router.push("/register")
            },
            findpass() {
                this.$router.push("/findpass")
            }

        },created() {
        }
    }
</script>

<style scoped>

</style>
