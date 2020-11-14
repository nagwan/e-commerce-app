import Home from "../components/pages/Home";
import Product from "../components/pages/Product";

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

]

export default Routes