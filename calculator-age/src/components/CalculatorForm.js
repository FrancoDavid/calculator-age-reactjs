import React from "react";
import CalculatorInput from "./CalculatorInput";

import './../styles/Form.css';

const CalculatorForm = () => {
    return (
        <aside className="form-container">
           <CalculatorInput
                type="day">
            </CalculatorInput>

           <CalculatorInput
                type="month">
           </CalculatorInput>
           
           <CalculatorInput
                type="year">
           </CalculatorInput>
        </aside>
    )
}

export default CalculatorForm;