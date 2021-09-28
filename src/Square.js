import React, {useState } from 'react'
import "./Square.css"; 


function Square(props) {

    //const [mark, setMark] = useState("");

    const updateMark = () => {
        props.handleTurn(props.id);
    }
   
    return (
        <botton className="square__button" onClick = {updateMark}> {props.turn} </botton>
    )
}

export default Square
