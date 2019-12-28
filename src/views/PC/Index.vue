<template>
    <div class="app app-aside-fixed container app-header-fixed ">
        <header-bar></header-bar>
        <nav-bar></nav-bar>
        <div id="content" class="app-content">

            <a class="off-screen-toggle hide"></a>
            <main class="app-content-body ">
                <div class="hbox hbox-auto-xs hbox-auto-sm">
                    <router-view></router-view>
                </div>
            </main>
        </div>

        <el-dialog  width="30%" title="账户密码修改" :visible.sync="$store.state.isShowUserSecret">
            <user-secret></user-secret>
        </el-dialog>



    </div>

</template>

<script>
    import HeaderBar from "components/PC/Header"
    import NavBar from "components/PC/NavBar"
    import "assets/js/core"
    // import UserSecret from "views/PC/User/UserSecret"
    import RightAsideBar from "components/PC/RightAsideBar"

    export default {
        name: 'Index',
        components: {
            HeaderBar,
            NavBar,
            RightAsideBar
        },
        created:function(){
            if (!this.$util.loginType(this)){
                this.$util.getUserInfo(this)
            }
            if (this.$util.loginType(this)){
                this.$util.setUserInfoAndLoginTypeToStore(this)
            }
        },
    }
</script>

<style scoped>

</style>
