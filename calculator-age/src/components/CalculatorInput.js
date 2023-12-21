import React from 'react';
import './../styles/Input.css';

const CalculatorInput = () => {
    return (
        <div className="input-col">
            <label>DAY</label>
            <input type="number" className="input"></input>
            <small>Must be a valid day</small>
        </div>
    ) 
}

export default CalculatorInput;