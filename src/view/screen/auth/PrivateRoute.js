import React, {Component} from 'react';
import {Route, Navigate} from 'react-router-dom';
import {isAuthenticated} from './index'

const PrivateRoute = ({component: Component, ...rest}) => {
    return(
        <Route 
            {...rest}
            render = {props => isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Navigate to="/login" replace={true} />

            )}
        />
    );
}

export default PrivateRoute;