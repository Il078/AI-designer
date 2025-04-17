import React from 'react';
import Navbar from './components/Navbar';
import Features from './components/features/Features';
import HowItWorks from './components/how-it-works/HowItWorks';
import Waitlist from './components/waitlist/Waitlist';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="pt-16">
        <Features />
        <HowItWorks />
        <Waitlist />
      </main>
    </div>
  );
}

export default App;
