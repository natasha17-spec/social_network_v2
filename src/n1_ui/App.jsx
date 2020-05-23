import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profile/Profile";
import Users from "./User/Users";
import News from "./News/News";



function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="grid-container">
                    <Header/>
                    <Sidebar/>
                    <div className="content">
                        <Route exact path='/dialogs' render={()=><Dialogs dialogUser = {props.state.dialogs.dialogUser}/>}/>
                        <Route path='/profile' render={()=><Profile myPost={props.state.posts.myPost}/>}/>
                        <Route path='/users' component={Users}/>
                        <Route path='/news' component={News}/>
                    </div>
                    <div className="area2"> </div>
                    <div className="area1"> </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
