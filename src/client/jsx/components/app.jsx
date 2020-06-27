import React, { Component } from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import Nav from './layout/navbar.jsx'
import Main from './page/main.jsx'


class App extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Switch>
                    <Route path="/" component={Main} />
                </Switch>
            </div>
        );
    }
}
export default App;