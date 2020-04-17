import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Profile from "./Content/Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Users from "./User/Users";
import News from "./News/News";
// eslint-disable-next-line no-unused-vars


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="grid-container">
                    <Header/>
                    <Sidebar/>
                    <div className="content">
                        <Route exact path='/dialogs' component={Dialogs}/>
                        <Route path='/profile' component={Profile}/>
                        <Route path='/users' component={Users}/>
                        <Route path='/news' component={News}/>
                    </div>
                    <div className="area2"></div>
                    <div className="area1"></div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
