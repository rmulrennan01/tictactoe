import React, { useEffect, useState } from 'react'
import "./Square.css"; 


function Square(props) {

    const [count, setCount] = useState(props.val);
    
    /*
    return (
        <botton className="square__button" onClick={() => setCount(count+1)}>{count}</botton>
    )
    */
    return (
        <botton className="square__button" onClick={() => setCount('X')}>{count}</botton>


    )
}

export default Square
