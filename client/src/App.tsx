import React from 'react';
import './App.css';
import Single from './pages/Single'
import Multi from './pages/Multi'
import Header from './partials/Header'
import SingleSide from './partials/SingleSide'
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [choices, setChoices] = useState([]);
  const [result, setResult] = useState({});

  useEffect(() => {
    (
      async () => {
        const response = await fetch('http://localhost:8080/choices')
        const content = await response.json();
        setChoices(content)
      }
    )();
  })

  const playGame = async (id: any) =>  {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ player: id })
    };
    fetch('http://localhost:8080/play', requestOptions)
        .then(response => response.json())
        .then(data => {
          setResult(data)
          console.log(data)
        });
  } 


  return (
    <Router>
      <div className="w-screen text-txt-high">
        <div className="flex">
          <Switch>
            <Route path="/multi">
              <div className="flex-auto px-10">
                <Header />
                <Multi/>
              </div>
              <SingleSide />
            </Route>

            <Route path="/">
              <div className="flex-auto px-10">
                <Header />
                <Single choices={choices} result={result} playGame={playGame}/>
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
