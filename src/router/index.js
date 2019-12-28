import Vue from 'vue'
import VueRouter from "vue-router"
import Header from "../components/PC/Header"
import loginType from "@/utils/util"
const Home = ()=> import("views/PC/Home")
const Share = ()=> import("views/PC/Share")

const Login = ()=> import("components/PC/Login")
const Index = ()=> import("views/PC/Index")

Vue.use(VueRouter)

const routes = [
    {
        path:"/",
        redirect:"/admin"
    },
    {
        path:"/login",
        component:Login,
        meta:{
            tittle:"登录"
        }
    },{
        path:"/admin",
        component:Index,
        meta:{
            tittle:"管理员首页"
        },
        children:[
            {
                path:"/",
                component:Home,
                meta:{
                    tittle:"管理员首页"
                }
            }
        ]
    },
    //
    // {
    //     path:"/share",
    //     component:Share,
    //     meta: {
    //         tittle:"分享"
    //     }
    // },
    // {
    //     path:"/user/manage",
    //     component:UserManage,
    //     meta: {
    //         tittle:"个人信息管理"
    //     }
    // },
    // {
    //     path:"/pet/upload",
    //     component:UploadInfo,
    //     meta: {
    //         tittle:"宠物信息上传"
    //     }
    // },
    // {
    //     path:"/pet/petinfo",
    //     component:PetInfo,
    //     meta: {
    //         tittle:"宠物信息管理"
    //     }
    // },
    // {
    //     path:"/pet/petinfo/detail",
    //     component:PetDetail,
    //     name:"petinfo/detail",
    //     meta: {
    //         tittle:"宠物详细信息"
    //     },
    // }
]
const authRoute = ["/login"]
const router = new VueRouter({
    routes,
    mode: 'history'
})
router.beforeEach((to,from,next) => {
    if (!authRoute.includes(to.path)){
        if (!sessionStorage.getItem("userInfo")){
            router.push("/login")
        }
    }


    document.title = to.meta.tittle
    next()
})
export default router
