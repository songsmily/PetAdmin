<template>
    <aside id="aside" class="app-aside hidden-xs bg-white b-r" :class="{'off-screen animated' : $store.state.isMobile && $store.state.isShowNavBarInMobile}">
        <div class="aside-wrap" layout="column">
            <div class="navi-wrap scroll-y" flex="">
                <!-- user -->
                <div class="clearfix hidden-xs text-center  show" id="aside-user">
                    <div class="dropdown wrapper">
                        <div ui-nav="">
                            <a href="index.php/cross.html">
                                <span class="thumb-lg w-auto-folded avatar m-t-sm">
                      <img v-if="this.$store.state.loginType" :src="this.$store.state.userInfo.avatarUrl" class="img-full">
                      <img v-else src="~assets/img/logo.svg" class="img-full">
                    </span>
                            </a>
                        </div>
                        <a href="#" >
                <span class="clear">
                  <span class="block m-t-sm">
                    <strong v-if="this.$store.state.loginType" class="font-bold text-lt">-- {{this.$store.state.userInfo.name}} --</strong>
                    <strong v-else class="font-bold text-lt">-- 游客 --</strong>
                  </span>
                  <span v-if="this.$store.state.loginType" class="text-muted text-xs block">{{this.$store.state.userInfo.bio}}</span>
                  <span v-else class="text-muted text-xs block">欢迎访问宠物之家...</span>
                </span>
                        </a>

                    </div>
                </div>
                    <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo">
                        <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                            <span>社区</span>
                        </li>
                        <router-link to="/home">
                            <el-menu-item index="1">
                                <i class="el-icon-menu"></i>
                                <span slot="title">发现</span>
                            </el-menu-item>
                        </router-link>

                        <el-menu-item index="2">
                            <i class="el-icon-s-promotion"></i>
                            <span slot="title">分享</span>
                        </el-menu-item>

                        <el-menu-item index="3">
                            <i class="el-icon-s-comment"></i>
                            <span slot="title">答疑</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">归类</span>
                        </el-menu-item>
                        <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                            <span>管理</span>
                        </li>
                        <el-submenu index="1">

                            <template slot="title">
                                <i class="user-icon">
                                    <svg t="1576574788301" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1192" width="24" height="18"><path d="M324.266667 657.066667c-91.733333-61.866667-130.133333-125.866667-130.133334-211.2 0-19.2-19.2-36.266667-40.533333-36.266667s-40.533333 17.066667-40.533333 36.266667c0 96 40.533333 172.8 123.733333 241.066666-128 87.466667-200.533333 177.066667-234.666667 292.266667-6.4 19.2 8.533333 38.4 29.866667 42.666667 4.266667 0 6.4 2.133333 10.666667 2.133333 19.2 0 34.133333-10.666667 40.533333-27.733333 34.133333-110.933333 106.666667-194.133333 245.333333-279.466667 19.2-10.666667 23.466667-34.133333 10.666667-49.066667-6.4-4.266667-10.666667-8.533333-14.933333-10.666666zM1021.866667 977.066667c-36.266667-115.2-106.666667-204.8-232.533334-290.133334 87.466667-68.266667 128-147.2 128-243.2 0-19.2-19.2-36.266667-40.533333-36.266666-23.466667 0-40.533333 14.933333-40.533333 36.266666 0 87.466667-40.533333 151.466667-130.133334 213.333334-6.4 2.133333-10.666667 6.4-14.933333 10.666666-12.8 17.066667-8.533333 38.4 10.666667 49.066667 138.666667 85.333333 209.066667 166.4 243.2 277.333333 4.266667 14.933333 21.333333 25.6 40.533333 25.6 4.266667 0 6.4 0 10.666667-2.133333 19.2-2.133333 32-21.333333 25.6-40.533333z" fill="#58666D" p-id="1193"></path><path d="M147.2 371.2c23.466667-4.266667 38.4-21.333333 34.133333-40.533333 0 0-19.2-100.266667 53.333334-174.933334 53.333333-55.466667 147.2-83.2 277.333333-83.2s221.866667 27.733333 277.333333 83.2c72.533333 72.533333 53.333333 172.8 53.333334 174.933334-4.266667 19.2 10.666667 38.4 34.133333 40.533333h6.4c19.2 0 36.266667-12.8 40.533333-29.866667 2.133333-6.4 25.6-132.266667-72.533333-232.533333-70.4-70.4-185.6-108.8-341.333333-108.8C356.266667 0 241.066667 38.4 170.666667 110.933333 74.666667 209.066667 98.133333 337.066667 100.266667 341.333333c4.266667 19.2 25.6 32 46.933333 29.866667z" fill="#58666D" p-id="1194"></path><path d="M364.8 345.6c-23.466667 0-40.533333 14.933333-40.533333 36.266667v38.4c0 19.2 19.2 36.266667 40.533333 36.266666s40.533333-14.933333 40.533333-36.266666v-38.4c0-19.2-17.066667-36.266667-40.533333-36.266667zM659.2 345.6c-23.466667 0-40.533333 14.933333-40.533333 36.266667v38.4c0 19.2 19.2 36.266667 40.533333 36.266666 23.466667 0 40.533333-14.933333 40.533333-36.266666v-38.4c0-19.2-19.2-36.266667-40.533333-36.266667zM614.4 497.066667c-19.2-10.666667-44.8-6.4-57.6 10.666666 0 0-17.066667 23.466667-44.8 23.466667-25.6 0-42.666667-21.333333-44.8-21.333333-12.8-17.066667-38.4-21.333333-57.6-10.666667-19.2 10.666667-25.6 32-12.8 49.066667 14.933333 21.333333 55.466667 55.466667 113.066667 55.466666 57.6 0 100.266667-34.133333 115.2-55.466666 12.8-19.2 6.4-40.533333-10.666667-51.2z" fill="#58666D" p-id="1195"></path></svg>
                                </i>
                                <span>个人中心</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item  @click="$store.state.isShowUserSecret = !$store.state.isShowUserSecret">
                                    <i class="el-icon-lock"></i>
                                    <span>安全设置</span>
                                </el-menu-item>
                                <router-link to="/user/manage">
                                    <el-menu-item index="1-2">
                                        <i class="user-icon">
                                            <svg t="1576574848340" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2864" width="24" height="18"><path d="M469.333333 533.312c129.386667 0 234.666667-105.258667 234.666667-234.645333 0-129.408-105.28-234.666667-234.666667-234.666667S234.666667 169.258667 234.666667 298.666667c0 129.386667 105.28 234.645333 234.666666 234.645333m0 42.709333c-153.173333 0-277.333333-124.181333-277.333333-277.333333C192 145.493333 316.16 21.333333 469.333333 21.333333c153.152 0 277.333333 124.16 277.333334 277.333334 0 153.152-124.181333 277.354667-277.333334 277.354666z" fill="#58666D" p-id="2865"></path><path d="M85.312 1002.666667H42.666667c0-259.2 210.154667-469.312 469.333333-469.312v42.666666c-235.264 0-426.688 191.36-426.688 426.645334M960 1002.666667H533.354667v-42.666667H960v42.666667z m0-149.354667H533.354667v-42.666667H960v42.666667zM960 725.333333H533.354667v-42.666666H960v42.666666z" fill="#58666D" p-id="2866"></path></svg>

                                        </i>
                                        <span>个人信息管理</span>
                                    </el-menu-item>
                                </router-link>

                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index=“2”>

                            <template slot="title">
                                <i class="user-icon">
                                    <svg t="1576893185139" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6567" width="24" height="18"><path d="M418.133333 320c-21.333333-51.2-38.4-98.133333-51.2-136.533333-21.333333-55.466667-85.333333-110.933333-119.466666-110.933334s-38.4 25.6-25.6 72.533334c-85.333333 12.8-132.266667 17.066667-149.333334 17.066666-29.866667 0-42.666667 29.866667-34.133333 64 4.266667 29.866667 21.333333 55.466667 42.666667 72.533334 25.6 12.8 55.466667 21.333333 89.6 29.866666l17.066666 85.333334L426.666667 341.333333l-8.533334-21.333333z m-196.266666 38.4l-17.066667-68.266667h-17.066667c-29.866667-8.533333-59.733333-17.066667-85.333333-29.866666-12.8-8.533333-21.333333-25.6-25.6-42.666667v-12.8c25.6 0 81.066667-8.533333 170.666667-21.333333l25.6-4.266667-4.266667-21.333333c-4.266667-17.066667-8.533333-29.866667-8.533333-38.4 21.333333 12.8 55.466667 46.933333 68.266666 81.066666s25.6 68.266667 42.666667 115.2l-149.333333 42.666667zM981.333333 307.2c-8.533333-21.333333-34.133333-21.333333-42.666666-4.266667-12.8 29.866667-68.266667 89.6-85.333334 93.866667-25.6 8.533333-128 8.533333-247.466666 0-85.333333-8.533333-140.8-17.066667-157.866667-29.866667l-8.533333-4.266666-243.2 72.533333 4.266666 21.333333c42.666667 179.2 72.533333 307.2 85.333334 379.733334 12.8 59.733333 34.133333 93.866667 59.733333 102.4 29.866667 8.533333 55.466667-12.8 64-42.666667s12.8-98.133333 17.066667-204.8l285.866666-25.6c8.533333 106.666667 17.066667 183.466667 21.333334 221.866667 4.266667 38.4 25.6 59.733333 55.466666 59.733333 25.6 0 46.933333-21.333333 59.733334-46.933333 12.8-29.866667 25.6-153.6 42.666666-371.2 34.133333-42.666667 51.2-76.8 59.733334-93.866667 17.066667-38.4 25.6-68.266667 25.6-93.866667 8.533333-17.066667 8.533333-25.6 4.266666-34.133333z m-64 106.666667c-8.533333 17.066667-25.6 46.933333-59.733333 93.866666H853.333333v4.266667c-17.066667 213.333333-29.866667 341.333333-38.4 366.933333-4.266667 12.8-12.8 21.333333-17.066666 21.333334s-12.8-8.533333-12.8-25.6c-8.533333-38.4-12.8-119.466667-25.6-238.933334v-21.333333l-366.933334 34.133333v21.333334c0 115.2-4.266667 187.733333-12.8 213.333333-12.8 12.8-17.066667 17.066667-17.066666 12.8-8.533333 0-21.333333-25.6-34.133334-68.266667-12.8-68.266667-42.666667-192-81.066666-362.666666l187.733333-55.466667c29.866667 12.8 81.066667 21.333333 166.4 29.866667 128 8.533333 234.666667 8.533333 264.533333 0 12.8-4.266667 38.4-25.6 59.733334-46.933334-4.266667 8.533333-4.266667 12.8-8.533334 21.333334z" fill="#333333" p-id="6568"></path><path d="M119.466667 460.8m-42.666667 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z" fill="#333333" p-id="6569"></path></svg>
                                </i>
                                <span>宠物管理</span>
                            </template>
                            <el-menu-item-group>
                                <router-link to="/pet/upload">
                                <el-menu-item index="2-1" >
                                        <i class="user-icon">
                                            <svg t="1576893651797" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7425" width="24" height="18"><path d="M512 76.8a428.8 428.8 0 1 1-428.8 428.8c0-236.8 192-428.8 428.8-428.8M512 6.4C236.8 6.4 12.8 224 12.8 499.2v6.4c0 275.2 217.6 499.2 492.8 499.2H512c275.2 0 499.2-217.6 499.2-492.8v-6.4C1011.2 230.4 793.6 6.4 512 6.4z" fill="#989898" p-id="7426"></path><path d="M512 224c-19.2-6.4-38.4 12.8-38.4 32V761.6c0 19.2 12.8 38.4 38.4 38.4 19.2 0 38.4-12.8 38.4-38.4V256c-6.4-19.2-19.2-32-38.4-32z" fill="#989898" p-id="7427"></path><path d="M761.6 473.6H262.4c-19.2 0-32 19.2-32 38.4s12.8 32 32 32h499.2c19.2 0 38.4-12.8 38.4-32 0-25.6-19.2-38.4-38.4-38.4z" fill="#989898" p-id="7428"></path></svg>
                                        </i>
                                    <span>新增宠物信息</span>
                                </el-menu-item>
                                </router-link>
                                <router-link to="/pet/petinfo">
                                    <el-menu-item index="2-2">
                                        <i class="el-icon-collection">
                                        </i>
                                        <span>宠物信息管理</span>
                                    </el-menu-item>
                                </router-link>

                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
            </div>
        </div>
    </aside>
</template>

<script>

    import DefBadge from "../common/Badge"
    import {Badge, Menu, MenuItem, MenuItemGroup, Submenu} from "element-ui"

    export default {
        name: "AsideBar",
        components:{
            DefBadge:DefBadge,
            Badge,
            ElMenu:Menu,
            ElMenuItem:MenuItem,
            ElMenuItemGroup:MenuItemGroup,
            ElSubmenu:Submenu
        },
        computed:{

        },
        data(){
            return{
                listShowPos:{
                    listOne:false,
                    listTwo:false,
                    listThree:false,
                },
            }
        },
        created() {
        }

    }
</script>

<style scoped>
    .user-icon{
        margin-right: 5px;
        width: 24px;
        height: 18px;
    }

</style>


