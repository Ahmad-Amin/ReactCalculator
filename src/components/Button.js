import React from "react";
import './Button.css';

const Button = ({content, onButtonClicked})=> {
    return(
        <div 
            className={`CalBlock ${content === "=" ? "CalEqual" : ""}`}
            onClick={()=>onButtonClicked(content)}
        >
            {content}
        </div>
    );
}

export default Button;