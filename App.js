import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Project';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Project/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
