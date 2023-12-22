import React from "react";
import CalculatorInput from "./CalculatorInput";

import './../styles/Form.css';

const CalculatorForm = () => {
    return (
        <aside className="form-container">
           <CalculatorInput
                label="DAY">
            </CalculatorInput>

           <CalculatorInput
                label="MONTH">
           </CalculatorInput>
           
           <CalculatorInput
                label="YEAR">
           </CalculatorInput>
        </aside>
    )
}

export default CalculatorForm;