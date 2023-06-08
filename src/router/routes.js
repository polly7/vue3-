import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from "@element-plus/icons-vue";
const routes = [
    {
        path: '/',
        redirect: '/home/nav1',
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

                    }
                ]

            }
        ]
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../views/404.vue')
    }
]
export default routes