import React, { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Routes from './routes';
import MainLayout from "../components/layouts/Main"
import NotFound from "../pages/404"
import { useDispatch, useSelector } from 'react-redux';
import getCookie from '../utils/getCookie';
import { userProfile } from '../store/user/actions';


function CheckAuth({ route }) {    
    const user = useSelector(state => state.user.user)
    const [isAuthorized, setIsAuthorized] = useState(user.id ? true : false)
    const dispatch = useDispatch()

    useEffect(() => {
        const token = getCookie("TOKEN")
        if (token && !user.id) {
            dispatch(userProfile())
        } else if (user.id) {
            setIsAuthorized(true)
        } else if (!token && !user.id) {
            setIsAuthorized(false)
        }
    }, [user.id])

    return (

        route.private ? <PrivateRoutes route={route} isAuthorized={isAuthorized}/> :

            route.auth ? <AuthRoutes route={route} isAuthorized={isAuthorized}/> : ''
    )
}

function PrivateRoutes({ route, isAuthorized}) {
    return (
        isAuthorized ? <Route path={route.path} exact={route.exact} component={route.component} />
            :
            <Redirect push to='/login' />

        /**
         * check if this route requires auth,
         * if so check if the  user if authenticated and authorized to access this route
         * or redirect to login and end their session if any
         */
    )
}

function AuthRoutes({ route, isAuthorized }) {
    return (
        /**
         * be sure that authenticated users do not pass these routes,
         * and if they tried to access them redirect to their profile page
         */

        !isAuthorized ? <Route path={route.path} exact={route.exact} component={route.component} />
            :
            <Redirect push to='/me' />
    )
}


function ManiRouter() {

    return (
        <BrowserRouter>

            <MainLayout>
                <div className='w-100 p-30 min-h-100vh'>
                    <Switch>
                        {
                            Routes.map((route, index) => (
                                (route.private || route.auth) ? <CheckAuth key={index} route={route} /> : 
                                <Route key={index} path={route.path} exact={route.exact} component={route.component} />
                            ))
                        }
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </MainLayout>
        </BrowserRouter>

    )
}


function isAuthorized(user, token) {

}
export default ManiRouter
