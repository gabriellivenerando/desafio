import React from 'react';
import './buttonOrder.css';


const ButtonOrder = ({className, onClick, textButton}) =>{
    return(
    <div className="btnGroup_container">
        <button className={className} onClick={onClick}>{textButton}</button>
    </div>
    )
    
}

export default ButtonOrder;