import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

const Routes = [

    {
        path: '/',
        exact: true,
        component: Home,
        private: false
    },
    {
        path: '/products/:id',
        exact: true,
        component: Product,
        private: false
    },
    {
        path: '/cart',
        exact: true,
        component: Cart,
        private: false
    },
    {
        path: '/login',
        exact: true,
        component: Login,
        private: false,
        auth: true
    },
    {
        path: '/register',
        exact: true,
        component: Register,
        private: false,
        auth: true
    },
    {
        path: '/me',
        exact: true,
        component: Profile,
        private: true,
        auth: false
    },

]

export default Routes
