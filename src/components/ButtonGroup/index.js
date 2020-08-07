import React from 'react';
import './buttonGroup.css';


const ButtonGroup = ({className, id, onClick, textButton}) =>{
    return(
    <div className="btnGroup_container">
        <button className={className} id={id} onClick={onClick}>{textButton}</button>
    </div>
    )
    
}

export default ButtonGroup;