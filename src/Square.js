import React, {useState } from 'react'
import "./Square.css"; 


function Square(props) {

    //const [mark, setMark] = useState("");

    const updateMark = () => {
        console.log("Calling handleturn from inside the square"); 
        props.handleTurn(props.id);
        console.log("setting the mark inside the square"); 

        
    }
   
    return (
        <botton className="square__button" onClick = {updateMark}> {props.turn} </botton>
    )
}

export default Square
