
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
    const handleTurn = (i) => {
        (playerTurn) ? setMark("X") : setMark("O");
        updateTurn();
        var tempSquareVals = Array(9); 
        tempSquareVals = squareVals.slice(); //copy the current board array
        tempSquareVals[i] = mark; //update the array for new mark made
        setsquareVals(tempSquareVals); //replace the current board array
        console.log(tempSquareVals); 
    }

        return(
            <div className="board"> 
                <div className="board__row"> 
                <Square turn={mark} handleTurn = {handleTurn} id = {0}/>
                <Square turn={mark} handleTurn = {handleTurn} id = {1}/>
                <Square turn={mark} handleTurn = {handleTurn} id = {2}/>
                </div> 
                <div className="board__row"> 
                    <Square turn={mark} handleTurn = {handleTurn} id = {3}/>
                    <Square turn={mark} handleTurn = {handleTurn} id = {4}/>
                    <Square turn={mark} handleTurn = {handleTurn} id = {5}/> 
                </div> 
                <div className="board__row"> 
                    <Square turn={mark} handleTurn = {handleTurn} id = {6}/>
                    <Square turn={mark} handleTurn = {handleTurn} id = {7}/>
                    <Square turn={mark} handleTurn = {handleTurn} id = {8}/>
                </div> 

                
            </div> 
        )
    
}

export default Board
