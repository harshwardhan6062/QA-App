import { useState } from "react";

export const Question = ({ id, title, info }) => {
    console.log(id, title, info);

    const [displayInfo, setDisplayInfo] = useState('');
    const [buttonSymbol, setButtonSymbol] = useState('+');

    const InfoButtonClicked = () => {
        if(buttonSymbol === '+') {
            setButtonSymbol('-');
            setDisplayInfo(info);
        } else {
            setButtonSymbol('+');
            setDisplayInfo('');
        }
    }

    return (
        <article className="question">
            <header>
                <h5>{title}</h5>
                <button className="question-btn" onClick={() => {InfoButtonClicked()}}>
                    {buttonSymbol}
                </button>
            </header>
            {displayInfo && <p>{displayInfo}</p>}
        </article>
    );
};

