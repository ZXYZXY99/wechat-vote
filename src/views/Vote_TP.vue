<template>
    <div>
        <p>{{this.voteinfo.votename}}</p>
        <a-radio-group v-model="radio_value" name="radioGroup" @change="onChange" >
            <a-radio  v-for="(item,i) in voteOption" :value="item.id">
                {{item.voteOptionName}}
            </a-radio>
        </a-radio-group>
        <br>
        <a-button type="primary" :size="size"  @click="vote()">
            投票
        </a-button>

    </div>
</template>

<script>
    import Vue from 'vue'
    import {getToken} from "../util/TokenUtil";
    export default {

        name: "Vote_TP",
        data(){
            return{
                username:'',
                codes:'',
                size: 'large',
                radio_value:'',
                voteinfo:{
                    describes:'',
                    id:'',
                    voteBegintime:'',
                    voteNum:'',
                    voteOvertime:'',
                    voteState:'',
                    votename:''
                },
                voteOption:{
                    id:'',
                    voteName:'',
                    voteOptionName:'',
                    voteOptionNumber:'',
                },
            }
        },created() {
            this.username=this.$username
            const _this=this;
            var url=window.location.href;
            // console.log(url+'im')
            var cs = url.split('?')[1];
            var code=cs.split('=')[1]
            this.codes=code;
            Vue.prototype.$code=code
            // console.log(getToken())
            if (getToken()==undefined){
                // console.log('eeeee')
                _this.$router.push('/login')
            }
            console.log(code)
            this.axios.get('http://localhost:9090/voteservice/voteservice/vote-info/getInfo',{params:{
                    id: code
                }}).then(function
                (resp) {
                    if (resp.data.code==10000){
                        console.log(resp.data.data[1]);
                        _this.voteinfo=resp.data.data[0];
                        _this.voteOption=resp.data.data[1];
                    } else if(resp.data.code==11110){
                        _this.$router.push('/result?code='+code)

                    }


            })

        },
        methods:{
            onChange(){
                // console.log(`checked = ${this.radio_value}`);
            },
            vote(){
                const _this=this;
                this.axios.post('http://localhost:9090/voteservice/voteservice/vote-option/vote_num',null,{params:{
                    id:_this.radio_value,
                    }}).then(function
                    (resp) {
                    console.log(resp)
                    if (resp.data.code==10000){
                        _this.$message.info('投票成功');
                        _this.$router.push("/result?code="+_this.codes)
                    }
                })

            }

        }
    }
</script>

<style scoped>

</style>
