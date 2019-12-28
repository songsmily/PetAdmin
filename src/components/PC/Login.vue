<template>


        <div>
            <div class="sc-1duRon-1 sbfRl">
                <p class="sc-1I1iYs-3 kmwMDA" style='font-family: serif;font-size: 18px;color: #41464B;'>宠物之家</p>

            </div>
            <div class="sc-1duRon-3 cPHJDB">
                <div class="sc-1duRon-4 doAKkT">
                    <div class="sc-3JRwrF irtYus">
                        <div class="main">

                            <div class="title">
                                <!--                                <img src="http://localhost/exam/resources/views/img/70.png" style="width: 40%">-->
                                <p >
                                    宠物之家 -- 管理系统
                                </p>
                            </div>
                            <div class="sc-3JRwrF-1 khjAih">

                                <div class="form-wrapper">

                                    <div class="sc-2oZUsG bHHvBK">

                                        <div>

                                            <form action="">
                                                <div class="sc-3ksGSP kPTEpp" type="mobileOrEmail"><label class="label">账号</label>
                                                    <at-input v-model="username"  :status="usernameType" :icon="''"></at-input>
                                                    <div :class="{'errorTips':usernameType === 'error' , 'successTips':usernameType === 'success'}" id="usernameTip">{{usernameTip}}</div>
                                                </div>
                                                <div class="sc-3ksGSP kPTEpp" type="mobileOrEmail"><label class="label">登录密码</label>

                                                    <at-input v-model="password" type="password"   :status="passwordType" :icon="''"></at-input>
                                                    <div :class="{'errorTips':passwordType === 'error' , 'successTips':passwordType === 'success'}" id="usernameTip">{{passwordTip}}</div>


                                                </div>
                                                <div class="sc-3ksGSP kPTEpp" type="password"><label class="label">图形验证码</label>
                                                    <at-input v-model="imgYzm"   :status="imgYzmType" :icon="''">
                                                        <template slot="append">
                                                            <span style="width: 80px;cursor: pointer;">
                                                                <img :src="yzmSrc" @click="changeYzmSrc" style="width: 150px;height: 30px" alt="">
                                                            </span>
                                                        </template>
                                                    </at-input>

                                                    <div :class="{'errorTips':imgYzmType === 'error' , 'successTips':imgYzmType === 'success'}">{{imgYzmTip}}</div>
                                                </div>
                                                <button class="sm-button submit sc-1n784rm-0 bcuuIb" type="button" @click="doLogin">立即登录</button>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

</template>

<script>

    import {Tooltip} from "element-ui"
    import {Input} from "at-ui"
    import axios from "axios"
    export default {
        name: "Login",
        components:{
            Tooltip,
            AtInput:Input
        },
        data(){
          return{
              yzmSrc:'/api/regist/yzm',//验证码获取地址
              username:'admin',//电话
              password:'admin',//密码
              imgYzm:'',//图片验证码
              usernameType:'',//电话框类型
              passwordType:'',//密码类型
              imgYzmType:'',//图片验证码类型
              usernameTip:'',//电话提示
              passwordTip:'',//密码提示
              imgYzmTip:'',//图片验证码提示
              imgYzmIsRight:'',
          }
        },
        watch:{
          "username":function () {
              this.checkPhone()
          },
          "password":function () {
              this.checkPassword()
          },
          "imgYzm":function () {
                this.checkImgYzm()
          }
        },
        methods:{
            doLogin:function(){

                this.$Message("正在登录中......")
                let checkPhone =  this.checkPhone()
                let checkPassword =  this.checkPassword()
                this.checkImgYzm()
                const that = this
                Promise.all([new Promise((resolve , reject) => {
                    if (this.imgYzm.length >= 4){
                        let url = "/api/regist/checkImgYzm?imgYzm=" + this.imgYzm
                        const that = this
                        return axios.get(url).then(function (res) {
                            if(res.data.code === 100){
                                that.imgYzmType = "success"
                                that.imgYzmTip = "图片验证码匹配成功！"
                                resolve(true)
                            }else{
                                that.imgYzmType = "error"
                                that.imgYzmTip = "图片验证码匹配失败！"
                                resolve(false)
                            }
                        })
                    }else{
                        resolve(false)
                    }
                })]).then(function (results) {
                    if (results[0] && checkPhone  && checkPassword ){
                        let url = "/api/admin/login/doLogin?username=" + that.username + "&password=" + that.password
                        axios.get(url).then(function (res) {
                            if (res.data.code === 100){
                                that.$Message.closeAll()
                                that.$Message({
                                    message: '登录成功！',
                                    type:"success"
                                });
                                that.$util.getUserInfo(that)
                                that.$router.push("/admin")
                            }else{
                                that.$Message.closeAll()
                                that.$Message({
                                    message: '用户名或密码填写错误！',
                                    type:"warning"
                                });
                            }
                        })

                    }else{
                        that.$Message.closeAll()
                        that.$Message({
                            message: '信息填写错误！',
                            type:"warning"
                        });
                    }
                })
            },
            //判断图片验证码
            checkImgYzm:function () {
                if (this.imgYzm.length >=4){
                    let url = "/api/regist/checkImgYzm?imgYzm=" + this.imgYzm
                    const that = this
                    return axios.get(url).then(function (res) {
                        if(res.data.code === 100){
                            that.imgYzmType = "success"
                            that.imgYzmTip = "图片验证码匹配成功！"
                            return true
                        }else{
                            that.imgYzmType = "error"
                            that.imgYzmTip = "图片验证码匹配失败！"
                            return false
                        }
                    })
                }else {
                    this.imgYzmType = "error"
                    this.imgYzmTip = "图片验证码匹配失败！"
                    return false
                }
            },
            //改变图片验证码
            changeYzmSrc:function () {
                this.yzmSrc = '/api/regist/yzm?now=' + Date.now();
            },
            //判断电话号码
            checkPhone:function () {
                if (this.username.length >= 5){
                    this.usernameType = "success"
                    this.usernameTip = "核验通过！"
                    return true
                }else{
                    this.usernameType = 'error'
                    this.usernameTip = "核验失败！"
                    return false
                }
            },
            //判断电话号码
            checkPassword:function () {
                if (this.password.length >= 5){
                    this.passwordType = "success"
                    this.passwordTip = "核验通过！"
                    return true
                }else{
                    this.passwordType = 'error'
                    this.passwordTip = "密码长度最少5位！"
                    return false
                }
            },
            GithubAuth:function () {
                let url = "https://github.com/login/oauth/authorize?client_id=4523142b190f9a6fec47&redirect_uri=http://localhost:8099/GithubCallback&scope=user&state=1"
                window.location.href = url
            },
            QQAuth:function () {
                let url = "https://graph.qq.com/oauth2.0/show?which=Login&display=pc&client_id=101826131&response_type=code&scope=get_info%2Cget_user_info&redirect_uri=http://127.0.0.1:8099/QQCallBack&state=2"
                window.location.href = url
            }
        }
    }
</script>

<style scoped>
    @import "~assets/css/logres/login.css";
    label{
        text-align: left;
        text-shadow: none;
        font-family: -apple-system,BlinkMacSystemFont,"PingFang SC",Helvetica,Tahoma,Arial,"Microsoft YaHei",微软雅黑,黑体,Heiti,sans-serif,SimSun,宋体,serif;
        display: block;
        padding: 0;
    }
    .main{
        margin-top: 100px;
    }
    .title > p{
        font-size: 0.7em;
    }

</style>
