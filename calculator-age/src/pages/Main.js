
import React, { useState } from 'react';

import CalculatorForm from '../components/CalculatorForm';
import CalculatorDisplay from '../components/CalculatorDisplay';

import '../styles/Main.css';

const MainPage = () => {
    const [dayAge, setDayAge] = useState("--");
    const [monthAge, setMonthAge] = useState("--");
    const [yearAge, setYearAge] = useState("--");

    const handleCalculateAge = (event) => {
        console.log("calculateAge", event);
        setDayAge(event.day);
        setMonthAge(event.month);
        setYearAge(event.year);
    }

    return (
        <main>
            <section>
                <CalculatorForm
                    onChange={handleCalculateAge}>
                </CalculatorForm>
                <CalculatorDisplay
                    day={dayAge}
                    month={monthAge}
                    year={yearAge}>    
                </CalculatorDisplay>
            </section>
        </main>
    );
}

export default MainPage;