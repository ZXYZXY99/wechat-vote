<template>
    <div id="components-layout-demo-basic" >
        <a-layout>
            <a-layout-header>
                TingTao投票
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
            <a-layout-content  >
                <router-view></router-view>
            </a-layout-content>
            <a-layout-footer>TingTao Vote ©2020 Created by cj</a-layout-footer>
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
    .dropdown{
        float: right;
    }
</style>
