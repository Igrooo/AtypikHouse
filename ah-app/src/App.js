import React, { Component } from 'react';
import {browserHistory, Link, Route, Router} from "react-router";
import logo from './logo.svg';
import './App.css';

const NavBar = () => (
    <div className="navbar">
        <Link to="/">Feed</Link>
        <Link to="/profile">Profile</Link>
    </div>
);

const Template = ({ title }) => (
    <div>
        <NavBar />
        <p className="page-info">
            This is the {title} page.
        </p>
    </div>
);

const Feed = (props) => (
    <Template title="Feed"/>
);

const Profile = (props) => (
    <Template title="Profile"/>
);

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Feed}/>
                <Route path="/profile" component={Profile}/>
            </Router>
        );
    }
}

export default App;
