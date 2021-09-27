
import Square from './Square';
import './Board.css';
import React, { useEffect, useState } from 'react'

function Board() {
    const [turn, setTurn] = useState(true); 

    const handleTurn = () => {
        (turn) ? setTurn(false) : setTurn(true)
       //setTurn(false)
  //      console.log(turn);

    }

    

    

   
        return(
            <div className="board"> 
                <div className="board__row"> 

                    <Square 
                        turn={turn} 
                        //onChange={() => (xTurn) ? setxTurn(false) : setxTurn(true)} 
                        handleTurn = {handleTurn} 
                    />
                    <Square 
                        turn={turn} 
                        //onChange={() => (xTurn) ? setxTurn(false) : setxTurn(true)} 
                        handleTurn = {handleTurn} 
                    />
                                        <Square 
                        turn={turn} 
                        //onChange={() => (xTurn) ? setxTurn(false) : setxTurn(true)} 
                        handleTurn = {handleTurn} 
                    />
  
                </div> 

                
            </div> 
        )
    
}

export default Board
