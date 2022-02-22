


import { createRouter, createWebHashHistory } from 'vue-router'

import docRoutes from './routes';
let routes = [
    {
        path: '/',
        redirect: '/components/introduce',
    }
];
for (let i in docRoutes) {
    routes = [...routes, ...docRoutes[i]];
}
const routerConfig = {
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to: any, from: any) {
        if (to.path !== from.path) {
            return { top: 0 };
        }
    },

};
const router = createRouter(routerConfig);
export default router;
