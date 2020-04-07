import React from 'react';
import  './App.css';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Profile from "./Content/Profile";

function App() {
  return (
      <div className="App">
          <div className="grid-container">
              <Header/>
              <Sidebar/>
              <Profile/>
              <div className="area2"></div>
              <div className="area1"></div>
          </div>
      </div>
  );
}

export default App;
