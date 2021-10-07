
import React, {useState } from 'react'
import Board from './Board';

function Game() {



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
