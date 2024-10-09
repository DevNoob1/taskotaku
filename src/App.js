import React from 'react';
import './App.css';
// import Sidebar from './components/Sidebar.js';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import Last from './components/Last.js';
import Profile from './components/Profile.js';
// import MainBody from './components/MainBody.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Last />
      {/* 
        <Sidebar />
        <MainBody />
      */}
    </div>
  );
}

export default App;
