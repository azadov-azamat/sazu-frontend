import {
    IndexController, LoginController, RegisterController
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
        name: 'login page',
        path: '/login',
        component: LoginController
    },
    {
        id: 3,
        name: 'register page',
        path: '/register',
        component: RegisterController
    }
]