
import React from 'react';

import CalculatorForm from '../components/CalculatorForm';
import CalculatorDisplay from '../components/CalculatorDisplay';

import '../styles/Main.css';

const MainPage = () => {
    return (
        <main>
            <section>
                <CalculatorForm></CalculatorForm>
                <CalculatorDisplay></CalculatorDisplay>
            </section>
        </main>
    );
}

export default MainPage;