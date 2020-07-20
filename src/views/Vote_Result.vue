<template>
    <div>
        <div class="dropdown">
            <a-dropdown >
                <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                    <a-button icon="user" >
                        <!--              <a-icon type="down" />-->
                    </a-button>
                </a>
                <a-menu slot="overlay">
                    <a-menu-item>
                        <a-button @click="jumpUsercenter()" >
                            用户中心
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



        <p style="color: black;">{{this.voteinfo.votename}}</p>



        <ve-histogram :data="chartData_histogram"></ve-histogram>

        <ve-pie :data="chartData_histogram"></ve-pie>


        <ve-waterfall :data="chartData_histogram" ></ve-waterfall>

    </div>




</template>

<script>
    export default {
        name: "Vote_Result",
        data(){
            return{
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
                chartData_histogram:{
                    columns:['voteOptionName','voteOptionNumber'],
                    rows:[],

                }
            }
        },
        created() {
            var url=window.location.href;
            // console.log(url+'im')
            var cs = url.split('?')[1];
             var code=cs.split('=')[1]
            const _this=this;
            // console.log(code+'asdasd')
            this.axios.get('http://localhost:9090/voteservice/voteservice/vote-info/getInfoRsu',{params:{
                id: code
                }}).then(function
                (resp) {
                    console.log(resp.data.data[1]);
                _this.voteinfo=resp.data.data[0];
                _this.chartData_histogram.rows=resp.data.data[1];
                console.log(_this.chartData_histogram.columns)
                _this.voteOption=resp.data.data[1];
            })


        },methods:{
            jumpUsercenter(){
                this.$router.push('/usercenter')

            }


        }
    }
</script>

<style scoped>

</style>
