import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Routes from './routes';
import MainLayout from "../components/layouts/Main"
import NotFound from "../components/pages/404"

function PrivateRoutes({ route }) {
    return (
        <Route path={route.path} exact={route.exact} component={route.component} />
        ||
        <Redirect push to='/login' />

        /**
         * check if this route requires auth, 
         * if so check if the  user if authenticated and authorized to access this route 
         * or redirect to login and end their session if any
         */
    )
}

function AuthRoutes({route}) {

    return (
        /**
         * be sure that authenticated users do not pass these routes,
         * and if they tried to access them redirect to their profile page
         */

        <Route path={route.path} exact={route.exact} component={route.component} />
    )

}


function ManiRouter() {

    return (

        <MainLayout>
            <BrowserRouter>
                <div className='container p-30 min-h-100vh'>
                    <Switch>
                        {
                            Routes.map((route, index) => (
                                route.private ? <PrivateRoutes key={index} {...route} /> :
                                    (route.auth ? <AuthRoutes key={index} {...route} /> :
                                        <Route key={index} path={route.path} exact={route.exact} component={route.component} />)
                            ))
                        }
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        </MainLayout>
    )
}
export default ManiRouter
