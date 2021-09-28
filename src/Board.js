
import Square from './Square';
import './Board.css';
import React, { useEffect, useState } from 'react'

function Board() {
    const [playerTurn, setplayerTurn] = useState(false); 
    const [squareVals, setSquareVals] = useState(Array(9).fill(null)); 
    const [mark, setMark] = useState("X"); 
    const [gameOver, setGameOver] = useState(false); 
    const [winner, setWinner] = useState(""); 

    //swaps turn on call
    const updateTurn = () => {
        (playerTurn) ? setplayerTurn(false) : setplayerTurn(true);
        
        
    }

    
    const checkWinner = () => {
      const combos = [ 
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6] ]; 
         
        
        for(let i= 0; i<combos.length; i++){
            if(squareVals[combos[i][1]] != null){
                 if(squareVals[combos[i][0]]===squareVals[combos[i][1]] &&
                    squareVals[combos[i][1]]===squareVals[combos[i][2]]){
                    setGameOver(true); 
                    setWinner(squareVals[combos[i][0]]); 
                    console.log("winner mo fo:", winner);
                }        
            }  
        } 
        
       // console.log(squareVals[0], squareVals[1], squareVals[2]); 
       //console.log(squareVals[0]===squareVals[1]); 
       // console.log("Try this: ", squareVals[combos[0][1]]); 
    }  
  
    //updates turn and sets value of the mark to pass to the square component
    const handleTurn = (i) => {
        //console.log("Before: ", squareVals)
        if(squareVals[i] == null){
        
        (playerTurn) ? setMark("X") : setMark("O");
        var tempSquareVals = Array(9); 
        tempSquareVals = squareVals.slice(); //copy the current board array
        tempSquareVals[i] = mark; //update the array for new mark made
        setSquareVals(tempSquareVals); //replace the current board array
        updateTurn();
        checkWinner(); 
       // console.log("After: ", squareVals); 
        }
        

        
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
