import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/home/home'

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Switch>
               <Route path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}