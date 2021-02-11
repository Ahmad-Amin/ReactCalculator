import React from "react";
import './Button.css';
//import AuthContext from '../AuthContext/AuthContext';

const Button = ({content, onButtonClicked})=> {

//    const context = useContext(AuthContext);

//    console.log(context.text);
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