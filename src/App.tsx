import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import {About} from "./pages/About"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Route path="/about">
                <About />
            </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
