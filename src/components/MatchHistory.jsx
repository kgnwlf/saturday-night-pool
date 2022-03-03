import React, {useState, useEffect} from 'react';

function MatchHistory({games}) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(games.map((game) =>
      <p>{game.winner + ' beat ' + game.loser}</p>
    ))
  }, [games]);

  return <div id="comp">
    <ul>{history}</ul>
  </div>
}

export default MatchHistory;