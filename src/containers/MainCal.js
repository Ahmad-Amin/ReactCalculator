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


    render(){
        return (
            <Fragment>
                <div className="MainCalBody">
                    <input  className = "textField" type="text"/>
                    <div className="CalBlock">1</div>
                    <div className="CalBlock">2</div>
                    <div className="CalBlock">3</div>
                    <div className="CalBlock">4</div>
                    <div className="CalBlock">5</div>
                    <div className="CalBlock">6</div>
                    <div className="CalBlock">7</div>
                    <div className="CalBlock">8</div>
                    <div className="CalBlock">9</div>
                    <div className="CalBlock">0</div>
                    <div className="CalBlock CalEqual">=</div>

                </div>
            </Fragment>
        );
    }
}

export default MainCal;