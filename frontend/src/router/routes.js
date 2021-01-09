import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Product from "../pages/Product";

const Routes =  [

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

]

export default Routes
