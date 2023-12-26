import React, { useState } from 'react';
import './../styles/Input.css';

const CalculatorInput = ({type, onChange}) => {

    const [inputValue, setInputValue] = useState(""); 
    const [isValid, setValid] = useState(true);
    
    
    const handleInputChange = (event) => {
        console.log("change input", event.target.value);
        const value = event.target.value;
        let isValidInput = true;

        setInputValue(value);

        if (type === "day") {
            isValidInput = /^\d+$/.test(value) && parseInt(value, 10) >= 1 && parseInt(value, 10) <= 31;
        
        } else if (type === "month") {
            isValidInput = /^\d+$/.test(value) && parseInt(value, 10) >= 1 && parseInt(value, 10) <= 12;
        
        } else {
            isValidInput = /^\d+$/.test(value) && parseInt(value, 10) >= 1;
        }

        setValid(isValidInput);
        onChange(value);
    }

    return (
        <div className="input-col">
            <label>
                {type}
            </label>
            <input
                type="number"
                className={`input ${isValid ? "" : "invalid"}`}
                defaultValue={inputValue}
                onKeyDown={handleInputChange}>
            </input>
            <div className="content-error">
                {
                    !isValid && (
                        <small>
                            Must be a valid {type}
                        </small>
                    )
                }
            </div>
        </div>
    ) 
}

export default CalculatorInput;