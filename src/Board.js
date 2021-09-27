
import Square from './Square';
import './Board.css';
import React, { useEffect, useState } from 'react'

function Board() {
    const [playerTurn, setplayerTurn] = useState(true); 
    const [squareVals, setsquareVals] = useState(Array(9).fill(null)); 
    const [mark, setMark] = useState(""); 

    //swaps turn on call
    const updateTurn = () => {
        (playerTurn) ? setplayerTurn(false) : setplayerTurn(true)
    }
  
    //updates turn and sets value of the mark to pass to the square component
    const handleTurn = () => {
         
        (playerTurn) ? setMark("X") : setMark("O");
        updateTurn();
    }




        return(
            <div className="board"> 
                <div className="board__row"> 
                    <Square 
                        turn={mark} 
                        handleTurn = {handleTurn} 
                    />
                    <Square 
                        turn={mark} 
                        handleTurn = {handleTurn} 
                    />
                                        <Square 
                        turn={mark} 
                        handleTurn = {handleTurn} 
                    />
  
                </div> 
                <div className="board__row"> 
                    <Square 
                        turn={mark} 
                        handleTurn = {handleTurn} 
                    />
                    <Square 
                        turn={mark} 
                        handleTurn = {handleTurn} 
                    />
                                        <Square 
                        turn={mark} 
                        handleTurn = {handleTurn} 
                    />

                </div> 
                <div className="board__row"> 
                    <Square 
                        turn={mark} 
                        handleTurn = {handleTurn} 
                    />
                    <Square 
                        turn={mark} 
                        handleTurn = {handleTurn} 
                    />
                                        <Square 
                        turn={mark} 
                        handleTurn = {handleTurn} 
                    />

                </div> 

                
            </div> 
        )
    
}

export default Board
