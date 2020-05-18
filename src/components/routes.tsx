import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Home from './home';
import User from '../container/user';
import TopUser from '../container/topusers';
import TopNavComponent from './top_nav'

export const Routes = (
    <Router>
        <TopNavComponent /> 
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={User} />
            <Route exact path="/top" component={TopUser} />
        </Switch>
    </Router>
)
