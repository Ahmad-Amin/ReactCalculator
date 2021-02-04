import react,{Component} from 'react';
import {Fragment} from 'react';
import './MainCal.css'

class MainCal extends Component{

    state={
        num1:0,
        num2:0,
        result:0,
        operation:''
    }

    buttonClicked = (buttonVal)=>{
        console.log(buttonVal);
    }

    render(){
        return (
            <Fragment>
                <div className="MainCalBody">
                    <input  className = "textField" type="text"/>
                    <div className="CalBlock" onClick={()=>this.buttonClicked(1)}>1</div>
                    <div className="CalBlock" onClick={()=>this.buttonClicked(2)}>2</div>
                    <div className="CalBlock" onClick={()=>this.buttonClicked(3)}>3</div>
                    <div className="CalBlock" onClick={()=>this.buttonClicked(4)}>4</div>
                    <div className="CalBlock" onClick={()=>this.buttonClicked(5)}>5</div>
                    <div className="CalBlock" onClick={()=>this.buttonClicked(6)}>6</div>
                    <div className="CalBlock" onClick={()=>this.buttonClicked(7)}>7</div>
                    <div className="CalBlock" onClick={()=>this.buttonClicked(8)}>8</div>
                    <div className="CalBlock" onClick={()=>this.buttonClicked(9)}>9</div>
                    <div className="CalBlock" onClick={()=>this.buttonClicked(0)}>0</div>
                    <div className="CalBlock CalEqual">=</div>

                </div>
            </Fragment>
        );
    }
}

export default MainCal;