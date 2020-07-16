<template>
    <div>
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
            this.axios.get('http://localhost:9091/voteservice/vote-info/getInfo',{params:{
                id: code
                }}).then(function
                (resp) {
                    console.log(resp.data.data[1]);
                _this.voteinfo=resp.data.data[0];
                _this.chartData_histogram.rows=resp.data.data[1];
                console.log(_this.chartData_histogram.columns)
                _this.voteOption=resp.data.data[1];
            })


        }
    }
</script>

<style scoped>

</style>
