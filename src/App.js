import React, {useState, useEffect} from 'react';
import './app.css';
import CurrentMatch from './components/CurrentMatch.jsx';
import LeaderBoard from './components/LeaderBoard.jsx';
import MatchHistory from './components/MatchHistory.jsx';
import Axios from 'axios';



function App() {
  const [players, setPlayers] = useState([]);
  const [games, setGames] = useState([]);


  useEffect(() => {
    Axios.get('/all')
    .then((response) => {
      setGames(response.data.games);
      setPlayers(response.data.players);
    })
  }, []);

  const getAll = () => {
    Axios.get('/all')
    .then((response) => {
      setGames(response.data.games);
      setPlayers(response.data.players);
    })
  }
  return (
    <div className="App">
      <CurrentMatch players={players} getAll={getAll}/>
      <LeaderBoard players={players}/>
      <MatchHistory games={games}/>
    </div>
  );
}

export default App;