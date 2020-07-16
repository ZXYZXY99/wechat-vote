<template>
        <div class="root">
            <transition name="el-zoom-in-center">
                <div class="queckstar" v-show="show">
                    <div class="txt">
                        <p style="color: #42b983">TingTao投票</p>
                        <p style="font-size: 30px;color: black">#免费易用的投票网站</p>
                        <br>
                        <br>
                        <p style="color: #42b983">TingTao vote</p>
                        <p>#Free And Simple</p>

                    </div>

                    <a-button icon="step-forward"   type="primary" @click="jump()" >
                        快速开始
                    </a-button>
                </div>
            </transition>

<!--            <el-button @click="show = !show">Click Me</el-button>-->

        </div>





</template>

<script>
    export default {


        name: "QueckStar",
        data(){
            return{
                show: false
            }
        },
        methods:{
            jump(){
                this.$router.push("/vote")
            },



        },created() {
            this.show = true;

        }
    }
</script>

<style scoped>



</style>
