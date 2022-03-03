import React, {useState, useEffect} from 'react';

function LeaderBoard({players}) {
  const [board, setBoard] = useState([]);


  useEffect(() => {
    setBoard(players.map((player) => <p>{player.name + ' wins:' + player.wins + ' losses:' + player.losses + ' ratio:' + (Math.round(player.ratio * 1000)/1000)}</p>))
  }, [players])

  return (
    <div id="comp">
      <ul>{board}</ul>
    </div>
  )
}

export default LeaderBoard;