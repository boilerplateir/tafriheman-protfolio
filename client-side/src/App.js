import React, {
    Component
} from 'react';
import {
    Route,
    Switch,
    Link
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Login from './views/Login'; 
import Register from './views/Register'; 
import Products from './views/Products'; 

class App extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                    <Link className="navbar-brand" to="/">Tafriheman</Link>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>                    
                    </ul>
                </nav>   
                <Switch>
                    <Route path="/" exact={true} component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/products" component={Products}/>
                </Switch>             
            </div>
        );
    }
}

export default App;