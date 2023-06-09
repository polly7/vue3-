import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from "@element-plus/icons-vue";
const routes = [
    {
        path: '/',
        name: 'personality',
        component: () => import('@/views/personality/index.vue'),
        // redirect: '/personality /nav1',
        // children: [
        //     {
        //         path: 'personality ',
        //         name: 'personality ',
        //         component: () => import('@/views/personality/index'),
        //         // children: [
        //         //     {
        //         //         path: 'nav1',
        //         //         name: 'nav1',
        //         //         component: () => import('../views/nav1/index.vue'),
        //         //         meta: { title: '导航名称1', icon: Location, index: '1' },

        //         //     }
        //         // ]

        //     }
        // ]
    },
    {
        path: '/searchInput',
        name: 'searchInput',
        component: () => import('@/components/searchInput.vue'),
        meta: { title: '搜索' }
    },
    {
        path: '/filter',
        name: 'filter',
        component: () => import('@/views/personality/filter.vue'),
        meta: { title: '筛选' }
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../views/404.vue')
    }
]
export default routes