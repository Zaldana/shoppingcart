import React from "react";
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import HomePage from './components/pages/HomePage';
import CartPage from "./components/pages/CartPage"


function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route
            path="cart"
            element={<CartPage />}
          />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;