import React from 'react';

import ArrowDownSvg from "./../icons/down.png";

import './../styles/Display.css';

const CalculatorDisplay = () => {
    return (
        <aside className="display--container">
            <div className="display--icon">
                <img src={ArrowDownSvg} alt="ArrowDown"></img>
            </div>
            <hr></hr>
            <div className="display--paragraph">
                <p><b className="display--paragraph__number">--</b> <b className="display--paragraph__text">years</b></p>
                <p><b className="display--paragraph__number">--</b> <b className="display--paragraph__text">months</b></p>
                <p><b className="display--paragraph__number">--</b> <b className="display--paragraph__text">days</b></p>
            </div>
        </aside>
    );
}

export default CalculatorDisplay;