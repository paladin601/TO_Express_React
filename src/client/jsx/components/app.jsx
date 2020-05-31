import React, { Component } from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import Nav from './layout/navbar.jsx'


class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Switch>
                    <Route path="/" component={Nav} />
                </Switch>
            </div>
        );
    }
}
export default App;