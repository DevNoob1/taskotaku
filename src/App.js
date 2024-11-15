import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Middle from './components/Middle.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App bg-white">
      <Header />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
