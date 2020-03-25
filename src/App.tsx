import React from 'react';
import { Route,Link, BrowserRouter } from 'react-router-dom'
import {About} from "./pages/About"
import {Functions} from "./pages/Functions"
import {Generics} from "./pages/Generics"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/functions">Functions</Link>
                        </li>
                        <li>
                            <Link to="/generics">Generics</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <Route path="/about">
                <About />
            </Route>
            <Route path="/functions">
                <Functions />
            </Route>
            <Route path="/generics">
                <Generics />
            </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
