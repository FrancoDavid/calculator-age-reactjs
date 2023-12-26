
import React, { useState } from 'react';

import CalculatorForm from '../components/CalculatorForm';
import CalculatorDisplay from '../components/CalculatorDisplay';

import '../styles/Main.css';

const MainPage = () => {
    const [dayAge, setDayAge] = useState("--");
    const [monthAge, setMonthAge] = useState("--");
    const [yearAge, setYearAge] = useState("----");

    const handleCalculateAge = (event) => {
        if ((event.day && event.day > 0) && 
            (event.month && event.month > 0) && 
            (event.year && event.year > 0)) {
                
            calculateAge(event);

        } else {

            setDayAge("--");
            setMonthAge("--");
            setYearAge("----");
        }
    }

    const calculateAge = (event) => {
        const dateBirthStr = `${event.year}/${event.month}/${event.day}`;
        const dateCurrent = new Date();
        const dateBirth = new Date(dateBirthStr);

        if (!isNaN(dateBirth)) {
            const diffMs = dateCurrent - dateBirth;
            const dateAge = new Date(diffMs);
        
            setDayAge(dateAge.getUTCDate() - 1);
            setMonthAge(dateAge.getUTCMonth());
            setYearAge(Math.abs(dateAge.getUTCFullYear() - 1970));


        } else {

            setDayAge("--");
            setMonthAge("--");
            setYearAge("----");
        }
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