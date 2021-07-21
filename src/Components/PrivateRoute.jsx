import React from 'react';
import { Component } from 'react';
import { Router, Redirect, Route } from 'react-router-dom';
import { isLogin } from '../utils';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (

        <Route {...rest} render={props => (isLogin ? <Component {...props} /> : <Redirect to="/login" />)} />


    );
};
