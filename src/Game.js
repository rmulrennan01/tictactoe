
import React, {useState } from 'react'
import Board from './Board';

function Game() {
    const [winner, setWinner] = useState(true); 
    const [boardStates, setBoardStates] = useState(Array(9).fill(Board));
    const [boardRender, setBoardRender] = useState(null); 
    


    const renderBoard = () => {
        return(
           <Board/>
           
        );
       }

    return (
        <div>
            {renderBoard()}
        </div>
    )
}

export default Game
