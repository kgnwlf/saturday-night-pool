import React, {useEffect, useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Axios from 'axios';

function CurrentMatch({players}) {
  const [match, setMatch] = useState([]);
  const [cm, setCM] = useState([0,0]);
  const [checked, setChecked] = useState({});
  const [form, setForm] = useState([]);

  useEffect(() => {
    console.log(players);
    let check = {};
    for (let i=0; i < players.length; i++) {
      check[players[i].name] = {mark: false, index: i};
    }
    if (Object.keys(check).length > 0){
      setChecked(check);
    }

    console.log(check);
  }, [players, match]);

  useEffect(() => {
    setForm(Object.keys(checked).map((name) => {
      if(name !== "Your Pick") {
        return(
    <FormControlLabel
    value = {name}
    label = {name}
    control={
      <Checkbox
      onChange={handleChange}
      />
    }

    />)}}))
  }, [checked])

  const handleChange = (e) => {
    console.log(checked)
    let check = checked;
    check[e.target.value].mark = !check[e.target.value].mark;
    setChecked(check);
  }

  const onSubmit = () => {
    console.log('*** FIRST IN ONSUBMIT', checked);

    var confirmedPlayers = [];
    var matches = [];

    for (name in checked) {
      if (checked[name].mark) {
        confirmedPlayers.push(name);
      }
    }

    const matchOrder = confirmedPlayers.sort((a,b) => 0.5 - Math.random());

    for (var i = 0; i < matchOrder.length; i+=2) {
      if (!matchOrder[i + 1]) {
        matches.push([matchOrder[i], 'Your Pick']);
      } else {
        matches.push([matchOrder[i], matchOrder[i + 1]]);
      }
    }

    console.log('*** MATCHES', matches);
    setMatch(matches);
    setCM(matches[0]);
  }

  const matchFinish = (e) => {
    console.log(match);
    let games = match;
    const game = games.shift();

    var winnerIndex = e.target.value;
    var nameOfWinner = game[winnerIndex];
    var winner = players[checked[nameOfWinner].index];

    var loserIndex;

    if(e.target.value > 0) {
      loserIndex = 0;
    } else {
      loserIndex = 1;
    }

    var nameOfLoser = game[loserIndex];
    var loser = players[checked[nameOfLoser].index];
    console.log("checked==>", checked)
    console.log(winnerIndex, loserIndex);
    Axios.post('/finish',
    {
      winner: {
          name: winner.name,
          wins: winner.wins + 1,
          losses: winner.losses,
          ratio: (winner.wins + 1)/(winner.wins + winner.losses + 1)
      },
      loser: {
        name: loser.name,
        wins: loser.wins,
        losses: loser.losses + 1,
        ratio: loser.wins/(loser.wins + loser.losses + 1)
      }
    })

    console.log(match);
    setCM(games[0]);
    return games;
  }


  return (
    <div id="comp">
      {match.length < 1 ?
          <div>
            <ul>{form}</ul>
            <Button onClick={onSubmit}>Submit</Button>
          </div>
          :
          <div>
            <Button onClick={(e) => {setMatch(matchFinish(e))}} value={0} >{cm[0]}</Button>
            <p>vs</p>
            <Button onClick={(e) => {setMatch(matchFinish(e))}} value={1} >{cm[1]}</Button>
          </div>
      }
    </div>
  )

}

export default CurrentMatch;