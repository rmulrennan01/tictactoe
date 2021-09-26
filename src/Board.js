import React from 'react';
import Square from './Square';
import './Board.css';

function Board() {
        return(
            <div className="board"> 
                <div className="board__row"> 
                    <Square val={1}/>
                    <Square val={2}/>
                    <Square val={3}/>
                </div> 
                <div className="board__row"> 
                    <Square val={4}/>
                    <Square val={5}/>
                    <Square val={6}/>
                </div> 
                <div className="board__row"> 
                    <Square val={7}/>
                    <Square val={8}/>
                    <Square val={9}/>
                </div>
            </div> 
        )
    
}

export default Board
