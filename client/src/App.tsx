import React from 'react';
import './App.css';
import Single from './pages/Single'
import Multi from './pages/Multi'
import Header from './partials/Header'
import SingleSide from './partials/SingleSide'
import MultiSide from './partials/MultiSide'
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [choices, setChoices] = useState([]);
  const [result, setResult] = useState({});
  const [results, setResults] = useState([] as any);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0);


  const [mpresult, mpSetResult] = useState({});
  const [mpresults, mpSetResults] = useState([] as any);
  const [mploading, mpSetLoading] = useState(false);
  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);

  const uriBase = process.env.NODE_ENV === 'development' 
   ? 'http://localhost:8080'
   : 'https://rpssl.mixpeal.com'

  useEffect(() => {
    (
      async () => {
        const response = await fetch(`${uriBase}/choices`)
        const content = await response.json();
        setChoices(content)
      }
    )();
  })

  const playGame = async (id: any) =>  {
    setLoading(true)
    setActive(id)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ player: id })
    };
    fetch(`${uriBase}/play`, requestOptions)
        .then(response => response.json())
        .then(data => {
          setResult(data)
          setResults([data, ...results])
          setLoading(false)
        })
        .catch(error => setLoading(false));
  } 

  const clearScores = () => {
    setResults([])
  }

  const setSelection = (id: any, type: string) => {
    if(type === "one"){
      setPlayerOne(id)
    }
    else{
      setPlayerTwo(id)
      mpPlayGame(playerOne, id)
    }

  }

  const mpPlayGame = async (one :any, two :any) =>  {
    mpSetLoading(true)
    console.log({ player_one: one, player_two:  two})
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ player_one: one, player_two:  two})
    };
    fetch(`${uriBase}/play-multi`, requestOptions)
        .then(response => response.json())
        .then(data => {
          mpSetResult(data)
          mpSetResults([data, ...mpresults])
          mpSetLoading(false)
        })
        .catch(error => { 
          mpSetLoading(false)
          setPlayerTwo(0)
        });
  } 

  const mpClearScores = () => {
    mpSetResults([])
  }

  const replayGame = () => {
      setPlayerOne(0)
      setPlayerTwo(0)
      mpSetResult({})
  }

  return (
    <Router>
      <div className="text-txt-high">
        <div className="lg:flex">
          <Switch>
            <Route path="/multi">
              <div className="flex-auto px-10">
                <Header />
                <Multi choices={choices} playerOne={playerOne} playerTwo={playerTwo}  mpresult={mpresult} mploading={mploading} replayGame={replayGame} setSelection={setSelection}/>
              </div>
              <MultiSide results={mpresults} clearScores={mpClearScores}/>
            </Route>

            <Route path="/">
              <div className="flex-auto px-5 lg:px-10">
                <Header />
                <Single choices={choices} active={active} result={result} loading={loading} playGame={playGame}/>
              </div>
              <SingleSide results={results} clearScores={clearScores}/>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
