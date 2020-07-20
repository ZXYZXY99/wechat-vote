<template>
  <div id="components-layout-demo-basic" >
    <a-layout>
      <a-layout-header>
        TingTao投票
<!--        <a-avatar style="backgroundColor:#87d068;float: right" icon="user" />-->


      </a-layout-header>
      <a-layout-content style="background-color:rgba(255,255,255,0.6)">
        <router-view style="background-color:rgba(255,255,255,0.6)"></router-view>
      </a-layout-content>
      <a-layout-footer class="footer">TingTao Vote ©2020 Created by cj</a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        defaultHeight: {
          height: ""
        }

      }
    },
    methods: {
      getHeight() {
        this.defaultHeight.height = window.innerHeight - 90 + "px";
      }

    },created() {
      window.addEventListener("resize", this.getHeight);
      this.getHeight();
    }
  };
</script>

<style>

  html,body,#root{
    width: 100%;
    height: 100%;
  }
  .ant-layout{
    height: 100%;
  }


  #components-layout-demo-basic {
    text-align: center;
  }
  #components-layout-demo-basic .ant-layout-header,
  #components-layout-demo-basic .ant-layout-footer {
    background: #7dbcea;
    /*color: #fff;*/
  }
  #components-layout-demo-basic .ant-layout-footer {
    line-height: 1.5;
  }
  #components-layout-demo-basic .ant-layout-sider {
    background: #3ba0e9;
    color: #fff;
    line-height: 120px;
  }
  #components-layout-demo-basic .ant-layout-content {
    /*background: rgba(16, 142, 233, 1);*/
    color: #fff;
    min-height: 120px;
    line-height: 120px;
  }
  #components-layout-demo-basic > .ant-layout {
    margin-bottom: 48px;
  }
  #components-layout-demo-basic > .ant-layout:last-child {
    margin: 0;
  }


  .footer{

    height: 50px;

    width: 100%;

    background-color: #ddd;

    position: fixed;

    bottom: 0;

  }
</style>
