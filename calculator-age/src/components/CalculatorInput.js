import React, { useState } from 'react';
import './../styles/Input.css';

const CalculatorInput = ({label}) => {

    const [inputValue, setInputValue] = useState(""); 

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className="input-col">
            <label>
                {label}
            </label>
            <input
                type="number"
                className="input"
                value={inputValue}
                onChange={handleInputChange}>
            </input>
            <small>
                Must be a valid day
            </small>
        </div>
    ) 
}

export default CalculatorInput;