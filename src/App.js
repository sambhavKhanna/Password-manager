import React from 'react';
import { Login } from './Login';
import { HomePage } from './HomePage';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { SearchConnections } from './SearchConnections';
import { SearchLogins } from './SearchLogins';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>

          <Routes>

            <Route path='/' element={<Login />} />
            <Route path='/homepage' element={<HomePage />} />
            <Route path='/logins' element={<SearchLogins />} />
            <Route path='/connections' element={<SearchConnections />} />

          </Routes>
        </Router>
        
      </header>
    </div>
  );
}

export default App;
