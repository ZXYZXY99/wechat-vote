<template>
    <a-layout id="components-layout-demo-fixed">
      <a-layout-header class="heder" style="background: transparent">
        <div class="logo" />
        xxx投票

        <div class="dropdown">
          <a-dropdown >
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
              <a-button icon="unordered-list"  >
                <!--              <a-icon type="down" />-->
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
                  主页
                </a-button>
              </a-menu-item>
            </a-menu>
          </a-dropdown>

        </div>
      </a-layout-header>



      <a-layout-content :style="{ padding: '0 50px', marginTop: '64px'  }">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        TingTao Vote ©2020 Created by cj
      </a-layout-footer>
    </a-layout>
</template>



<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data(){
    return{



    }
  },created() {


  },methods:{




  }

}
</script>
<style scoped>
  .dropdown{
    float: right;
  }

  .bg-context{
    padding: 10px;
    height: 90%;
  }
  #components-layout-demo-fixed .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
  }
  #components-layout-demo-fixed{
    height: 100%;
    width: 100%;
  }
  .heder{
    /*background-color: aqua;*/
  }
</style>
