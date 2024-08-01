import {
    IndexController, NewsPreviewController
} from '../app/index';


export const routes = [
    {
        id: 1,
        name: 'home page',
        path: '/',
        component: IndexController
    },
    {
        id: 2,
        name: 'news preview page',
        path: '/news/:id',
        component: NewsPreviewController
    }
]