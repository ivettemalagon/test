import vueRouter from 'vue-router'


import User from './components/User'
import UserAuth from './components/UserAuth'
import UserBalance from './components/UserBalance'
import UserTransaction from './components/UserTransaction'
import Inventory from './components/Inventory'
import Search from './components/Search'
import Modify from './components/Modify'
import App from './App'


const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            {
                path: '/',
                name: "root",
                component: App
            },
            {
                path: '/user/:username',
                name: "user",
                component: User
            },
            {
                path: '/user/auth',
                name: "user_auth",
                component: UserAuth
            },
            {
                path: '/user/balance/:username',
                name: "user_balance",
                component: UserBalance
            },
            {
                path: '/user/transaction/:username',
                name: "user_transaction",
                component: UserTransaction
            },
          {
            path: '/inventory',
            name: "inventory",
            component: Inventory
          },
          {
            path: '/inventory/product/',
            name: "buscar",
            component: Search
          },
          {
            path: '/inventory/product/modify/',
            name: "modificar",
            component: Modify
          },
        ]
    })



export default router
