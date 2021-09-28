
import Square from './Square';
import './Board.css';
import React, { useEffect, useState } from 'react'

function Board() {
    const [playerTurn, setplayerTurn] = useState(false); 
    const [squareVals, setsquareVals] = useState(Array(9).fill(null)); 
    const [mark, setMark] = useState("X"); 

    //swaps turn on call
    const updateTurn = () => {
        (playerTurn) ? setplayerTurn(false) : setplayerTurn(true);
        console.log("swaping turn bool from within board"); 
    }

    /*
    const checkWinner = () => {
        for(let i = 0; i<9; i++){
            if(i==1) {

            }
            
        }


    } */ 
  
    //updates turn and sets value of the mark to pass to the square component
    const handleTurn = (i) => {
        
        (playerTurn) ? setMark("X") : setMark("O");
        console.log("swaping mark based on turn from within board");
        var tempSquareVals = Array(9); 
        tempSquareVals = squareVals.slice(); //copy the current board array
        tempSquareVals[i] = mark; //update the array for new mark made
        setsquareVals(tempSquareVals); //replace the current board array
        updateTurn();
        
    }

    const renderSquare = (i) => {
     return(
        <Square turn={squareVals[i]} handleTurn = {handleTurn} id = {i}/>
        
     );
    }


        return(
            <div className="board"> 
                <div className="board__row"> 
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div> 
                <div className="board__row"> 
                     {renderSquare(3)}                    
                     {renderSquare(4)}
                    {renderSquare(5)}
                </div> 
                <div className="board__row"> 
                  {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div> 

                
            </div> 
        )
    
}

export default Board
