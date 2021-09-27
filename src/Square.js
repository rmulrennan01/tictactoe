import React, { useEffect, useState } from 'react'
import "./Square.css"; 


function Square(props) {

    const [mark, setMark] = useState("");

    const updateMark = () => {
        props.handleTurn(props.id);
        setMark(props.turn); 
    }
   
    return (
        <botton className="square__button" onClick = {updateMark}> {mark} </botton>
    )
}

export default Square
