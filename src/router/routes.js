import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from "@element-plus/icons-vue";
const routes = [
    {
        path: '/',
        redirect: '/home/nav1/nav1-1',
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('../views/layout/index'),
                children: [
                    {
                        path: 'nav1',
                        name: 'nav1',
                        component: () => import('../views/nav1/index.vue'),
                        meta: { title: '导航名称1', icon: Location, index: '1' },
                        children: [
                            {
                                path: 'nav1-1',
                                name: 'nav1-1',
                                component: () => import('../views/nav1/children/nav1-1.vue'),
                                meta: { title: 'nav1-1', index: '2' }
                            }, {
                                path: 'nav1-2',
                                name: 'nav1-2',
                                component: () => import('../views/nav1/children/nav1-2.vue'),
                                meta: { title: 'nav1-2', index: '3' }
                            }
                        ]
                    }, {
                        path: 'nav2',
                        name: 'nav2',
                        component: () => import('../views/nav2/index.vue'),
                        meta: { title: '导航名称2', icon: IconMenu, index: '4' }
                    }
                ]

            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../views/404.vue')
    }
]
export default routes