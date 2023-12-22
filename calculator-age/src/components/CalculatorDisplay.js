import React from 'react';

import ArrowDownSvg from "./../icons/down.png";

import './../styles/Display.css';

const CalculatorDisplay = ({day, month, year}) => {
    return (
        <aside className="display--container">
            <div className="display--icon">
                <img src={ArrowDownSvg} alt="ArrowDown"></img>
            </div>
            <hr></hr>
            <div className="display--paragraph">
                <p><b className="display--paragraph__number">{year}</b> <b className="display--paragraph__text">years</b></p>
                <p><b className="display--paragraph__number">{month}</b> <b className="display--paragraph__text">months</b></p>
                <p><b className="display--paragraph__number">{day}</b> <b className="display--paragraph__text">days</b></p>
            </div>
        </aside>
    );
}

export default CalculatorDisplay;