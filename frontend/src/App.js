import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import ClassPage from './pages/ClassPage';
import AttendancePage from './pages/AttendancePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/users" component={UserPage} />
                        <Route path="/classes" component={ClassPage} />
                        <Route path="/attendance" component={AttendancePage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;

