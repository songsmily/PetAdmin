import service from "network/axios"
export  default {

    getUserInfo(that){
        const _this = this
        if (!sessionStorage.getItem("userInfo")){
            service.get("/api/admin/adminUser/returnUserInfo").then(function (res) {
                if (res.data.data){
                    sessionStorage.setItem('userInfo',JSON.stringify(res.data.data))
                    that.$store.commit("changeUserInfo",_this.returnUserInfo())
                    that.$store.commit("changeLoginType",true)
                }
            }).catch(function (res) {
                console.log(res)
            })
        }

    },
    replaceUserInfo(that){
        const _this = this
        service.get("/api/admin/adminUser/returnUserInfo").then(function (res) {
            if (res.data.data){
                sessionStorage.setItem('userInfo',JSON.stringify(res.data.data))
                that.$store.commit("changeUserInfo",_this.returnUserInfo())
                that.$store.commit("changeLoginType",true)
                that.reloadUserInfoForm();
            }
        }).catch(function (res) {
            console.log(res)
        })
    },
    setUserInfoAndLoginTypeToStore(that){
        that.$store.commit("changeUserInfo",this.returnUserInfo())
        that.$store.commit("changeLoginType",this.loginType())

    },
    returnUserInfo(){
        return JSON.parse(sessionStorage.getItem("userInfo"))
    },
    loginType(that){
        return !(null === sessionStorage.getItem("userInfo"))
    },

    logOut (that) {
        const _this = this
        service.get("/api/user/logOut").then(function (res) {
            that.$Message({
                message: '已退出登录！',
                type:"success"
            });
            sessionStorage.removeItem("userInfo")
            _this.setUserInfoAndLoginTypeToStore(that)
            that.$router.push('/login')
        })
    }
}
