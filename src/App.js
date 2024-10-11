import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

