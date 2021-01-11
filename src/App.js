import React, { Component } from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MainPage from './components/pages/MainPage';
import SearchPage from './components/pages/SearchPage';

class BooksApp extends Component {

    render() {

        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={MainPage} />
                        <Route exact path='/search' component={SearchPage} />
                    </Switch>

                </Router>
            </div>
        );
    }
}

export default BooksApp;
