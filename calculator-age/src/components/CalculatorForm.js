import React from "react";
import CalculatorInput from "./CalculatorInput";

import './../styles/Form.css';

const CalculatorForm = () => {
    return (
        <aside>
           <CalculatorInput></CalculatorInput>
           <CalculatorInput></CalculatorInput>
           <CalculatorInput></CalculatorInput>
        </aside>
    )
}

export default CalculatorForm;