import React from 'react';
import { Route,Redirect,Switch } from 'react-router-dom';
import Home from 'src/components/home';
import Daike from 'src/components/daike';
import World from 'src/components/world';

const routes = (
    <div>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/daike" component={Daike}></Route>
            <Route path="/world" component={World}></Route>
        </Switch>
    </div>
);
export default routes;
