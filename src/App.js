import React from "react";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import HomePage from './components/pages/HomePage';


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
