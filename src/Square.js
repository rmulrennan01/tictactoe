import React, { useEffect, useState } from 'react'
import "./Square.css"; 


function Square(props) {

    const [mark, setMark] = useState("");

    const updateMark = () => {
        props.handleTurn();
        setMark(props.turn); 
    }
   
    return (
        <botton className="square__button" 
        //onClick={props.handleTurn}
        //onChange = {handleMark}
        onClick = {updateMark} 
        
      //  onClick = {setMark(props.turn)}//{props.handleTurn}
        >{mark}
        
        </botton>
    )
  
 




}

export default Square
