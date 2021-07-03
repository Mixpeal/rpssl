import React from 'react';
import './App.css';
import Single from './pages/Single'
import Multi from './pages/Multi'
import Header from './partials/Header'
import SingleSide from './partials/SingleSide'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="w-screen text-txt-high">
        <div className="flex">
          <Switch>
            <Route path="/multi">
              <div className="flex-auto px-10">
                <Header />
                <Multi />
              </div>
              <SingleSide />
            </Route>

            <Route path="/">
              <div className="flex-auto px-10">
                <Header />
                <Single />
              </div>
              <SingleSide />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
