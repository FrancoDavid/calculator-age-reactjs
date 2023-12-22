import React, { useState } from "react";
import CalculatorInput from "./CalculatorInput";

import './../styles/Form.css';

const CalculatorForm = ({onChange}) => {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    const handleInputDayChange = (event) => {
        setDay(event);
        handleOnChange();
    }
    const handleInputMonthChange = (event) => {
        setMonth(event);
        handleOnChange();
    }
    const handleInputYearChange = (event) => {
        setYear(event);
        handleOnChange();
    }

    const handleOnChange = () => {
        console.log('calculate form return values to main');
        onChange({
            day,
            month,
            year
        });
    }


    return (
        <aside className="form-container">
           <CalculatorInput
                type="day"
                onChange={handleInputDayChange}>
            </CalculatorInput>
           <CalculatorInput
                type="month"
                onChange={handleInputMonthChange}>
           </CalculatorInput>  
           <CalculatorInput
                type="year"
                onChange={handleInputYearChange}>
           </CalculatorInput>
        </aside>
    );
}

export default CalculatorForm;