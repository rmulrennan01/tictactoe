
import Square from './Square';
import './Board.css';
import React, { useEffect, useState } from 'react'

function Board() {
    const [playerTurn, setplayerTurn] = useState(false);    
    const [squareVals, setSquareVals] = useState(Array(9).fill(null)); 
    const [mark, setMark] = useState("X"); 
    const [gameOver, setGameOver] = useState(false); 
    const [winner, setWinner] = useState(""); 
    const [history, setHistory] = useState(Array(9).fill(null));
    const [turnCount, setTurnCount] = useState(0); 
    const [returnPlays, setReturnPlays] = useState(null); 
    //const []

    //swaps turn on call
    const updateTurn = () => {
        (playerTurn) ? setplayerTurn(false) : setplayerTurn(true); 
    }

    
    const checkWinner = (arrayBoard) => {
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
            if(arrayBoard[combos[i][1]] != null){
                 if(arrayBoard[combos[i][0]]===arrayBoard[combos[i][1]] &&
                    arrayBoard[combos[i][1]]===arrayBoard[combos[i][2]]){
                    setGameOver(true); 
                    setWinner(arrayBoard[combos[i][0]]); 
                    console.log("winner mo fo:", winner);
                }        
            }  
        } 
    }  
  
    //updates turn and sets value of the mark to pass to the square component
    const handleTurn = (i) => {
       // updateTimeTravel(); 
        if(squareVals[i] == null && !gameOver){
            (playerTurn) ? setMark("X") : setMark("O");
            var tempSquareVals = Array(9); 
            var tempHistory = Array(9); 
            tempHistory = history.slice(); 
            tempSquareVals = squareVals.slice(); //copy the current board array
            tempSquareVals[i] = mark; //update the array for new mark made
            setSquareVals(tempSquareVals); //replace the current board array
            tempHistory[turnCount] = tempSquareVals; 
            setHistory(tempHistory); 
            updateTurn();
            checkWinner(tempSquareVals); 
            setTurnCount(turnCount+1);  
            updateTimeTravel(); 
        }  
    }

    const resetGame = () => {
        setSquareVals(Array(9).fill(null)); 
        setHistory(Array(9).fill(null)); 
        setGameOver(false); 
        setTurnCount(0); 
        updateTimeTravel(); 
        setplayerTurn(true);  
    }

    const renderSquare = (i) => {
        return(
            <Square turn={squareVals[i]} handleTurn = {handleTurn} id = {i}/>
        );
    }

    const jumpBack = (i) => { //TODO
        setSquareVals(history[i]); 
    }
   
    const updateTimeTravel = () => {
        const buttonList = history.map((phase,index) => {
            console.log("Current: ", squareVals); 
            if (phase != null) {
                console.log(index, " : ", phase);
                return(
                    <li><button key={index.toString()} onClick={() => jumpBack(index)}> Go back to play #: {index+1}</button>  </li>
              ); 
            }

        }); 
        setReturnPlays(buttonList); 
    } 

    
 
    const renderWinner = () => {
        if(gameOver == false){
            return(
                <div> 
                It is {mark}'s turn to play.
                </div> 
            );
        }
        else{
            return(
                <div> 
                Game Over. {winner} is the winner. 
                </div> 
            ); 
        }
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
           
                <div className="board__result"> 
                    <br/><br/>
                    {renderWinner()}
                </div> 
                
                <div className="board__reset"> 
                    <br/><br/>
                    <button className="board__reset__button" onClick = {resetGame} >Reset</button> 
                    <br/><br/> 
                    <ol> {returnPlays} </ol> 
                </div> 
            </div> 
        )
}

export default Board
