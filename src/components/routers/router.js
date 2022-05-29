import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)



const routes =  [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home/HomeUser.vue")
    } ,
    {
        path: "/Notifications",
        name: "Notifications",
        component: () => import("../views/notifications/NotifyUser.vue")
    },
    {
        path: "/Wallet",
        name: "Wallet",
        component: () => import("../views/Wallet/WalletUser.vue")
    },
    {
        path: "/FAQ",
        name: "FAQ",
        component: () => import("../views/FAQ/FAQUser.vue")
    }, 
    {
        path: '/Inversiones',
        name: "Inversiones",
        component: () => import("../views/Inversiones/InversionesUser.vue")
    }
]


const router = new VueRouter({
    mode: "history",
    basse: process.env.BASE_URL,
    routes,
    linkExactActiveClass : "active select"
})

export default router