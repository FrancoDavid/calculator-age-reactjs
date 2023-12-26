import React, { useState } from "react";
import CalculatorInput from "./CalculatorInput";

import './../styles/Form.css';

const CalculatorForm = ({onChange}) => {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    const handleInputDayChange = (event) => {
        setDay(event);
        handleOnChange({day: event, month, year});
    }
    const handleInputMonthChange = (event) => {
        setMonth(event);
        handleOnChange({day, month: event, year});
    }
    const handleInputYearChange = (event) => {
        setYear(event);
        handleOnChange({day, month, year: event});
    }

    const handleOnChange = (values) => {
        onChange(values);
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