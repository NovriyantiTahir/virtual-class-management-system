import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import ClassPage from './pages/ClassPage';
import AttendancePage from './pages/AttendancePage';
import NotFoundPage from './pages/NotFoundPage';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/users" component={UserPage} />
            <Route path="/classes" component={ClassPage} />
            <Route path="/attendance" component={AttendancePage} />
            <Route component={NotFoundPage} />
        </Switch>
    );
}

export default Routes;

