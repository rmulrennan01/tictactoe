import React, { useEffect, useState } from 'react'
import "./Square.css"; 


function Square(props) {

    const [mark, setMark] = useState("");

    const handleMark = () => {
        props.handleTurn(); 
        (props.turn) ? setMark("X") : setMark("O");
        console.log(props.turn)

    }
    
    

   
    return (
        <botton className="square__button" 
        //onClick={props.handleTurn}
        //onChange = {handleMark}
        onClick = {handleMark} 
        
      //  onClick = {setMark(props.turn)}//{props.handleTurn}
        >{mark}
        
        </botton>
    )
  
 




}

export default Square
