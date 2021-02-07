import React,{useState} from 'react';
import {Fragment} from 'react';
import './MainCal.css'
import Button from '../components/Button';

const MainCal = () => {
    const [value,setValue]=useState("0");
    const [memory, setMemory] = useState(null);
    const [operator, setOperator] = useState(null);

    const buttonClickedHandler = content => {

        if(content === "c"){
            setValue("0");
            setMemory(null);
            setOperator(null);
            return;
        }

        if(content === "+"){
            if( operator != null){
                if(operator === "+"){
                    setMemory(memory + parseFloat(value));
                }else if(operator ==="-"){
                    setMemory(memory - parseFloat(value));
                }else if(operator ==="x"){
                    setMemory(memory * parseFloat(value));
                }else if(operator ==="/"){
                    setMemory(memory / parseFloat(value));
                }
            }else{
                setMemory(parseFloat(value));
            } 
            setValue("0");
            setOperator("+");
            return;
        }

        if(content === "-"){
            if( operator != null){
                if(operator === "+"){
                    setValue((memory + parseFloat(value)).toString());
                }else if(operator ==="-"){
                    setValue((memory - parseFloat(value)).toString());
                }else if(operator ==="x"){
                    setValue((memory * parseFloat(value)).toString());
                }else if(operator ==="/"){
                    setValue((memory / parseFloat(value)).toString());
                }
            }
            setMemory(parseFloat(value));
            setValue("0");
            setOperator("-");
            return;
        }

        if(content === "x"){
            if( operator != null){
                if(operator === "+"){
                    setValue((memory + parseFloat(value)).toString());
                }else if(operator ==="-"){
                    setValue((memory - parseFloat(value)).toString());
                }else if(operator ==="x"){
                    setValue((memory * parseFloat(value)).toString());
                }else if(operator ==="/"){
                    setValue((memory / parseFloat(value)).toString());
                }
            }
            setMemory(parseFloat(value));
            setValue("0");
            setOperator("x");
            return;
        }

        if(content === "/"){
            if( operator != null){
                if(operator === "+"){
                    setValue((memory + parseFloat(value)).toString());
                }else if(operator ==="-"){
                    setValue((memory - parseFloat(value)).toString());
                }else if(operator ==="x"){
                    setValue((memory * parseFloat(value)).toString());
                }else if(operator ==="/"){
                    setValue((memory / parseFloat(value)).toString());
                }
            }
            setMemory(parseFloat(value));
            setValue("0");
            setOperator("/");
            return;
        }

        if(content === "="){
            
            if(!operator) return;
            
            if(operator === "+"){
                setValue((memory + parseFloat(value)).toString());
            }else if(operator ==="-"){
                setValue((memory - parseFloat(value)).toString());
            }else if(operator ==="x"){
                setValue((memory * parseFloat(value)).toString());
            }else if(operator ==="/"){
                setValue((memory / parseFloat(value)).toString());
            }

            setOperator(null);
            setMemory(null);
            return;
        }

        setValue( (parseFloat(value) + content).toString() );
    }

    return (
        <Fragment>
            <div className="MainCalBody">
                <input  className = "textField" type="text" readOnly value={value}/>
                <Button onButtonClicked={buttonClickedHandler} content="1"/>
                <Button onButtonClicked={buttonClickedHandler} content="2"/>
                <Button onButtonClicked={buttonClickedHandler} content="3"/>
                <Button onButtonClicked={buttonClickedHandler} content="4"/>
                <Button onButtonClicked={buttonClickedHandler} content="5"/>
                <Button onButtonClicked={buttonClickedHandler} content="6"/>
                <Button onButtonClicked={buttonClickedHandler} content="7"/>
                <Button onButtonClicked={buttonClickedHandler} content="8"/>
                <Button onButtonClicked={buttonClickedHandler} content="9"/>
                <Button onButtonClicked={buttonClickedHandler} content="0"/>
                <Button onButtonClicked={buttonClickedHandler}  content="="/>
            </div>
            <div className="Operations">
                <Button onButtonClicked={buttonClickedHandler} content="c"/>
                <Button onButtonClicked={buttonClickedHandler}  content="+"/>
                <Button onButtonClicked={buttonClickedHandler}  content="-"/>
                <Button onButtonClicked={buttonClickedHandler}  content="x"/>
                <Button onButtonClicked={buttonClickedHandler}  content="/"/>
            </div>
        </Fragment>
    );
}

export default MainCal;