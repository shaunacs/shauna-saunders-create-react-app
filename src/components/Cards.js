import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>About Me</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/shauna-child.jpg"
                        text="Background"
                        path="/background"
                        />
                        <CardItem
                        src="images/unc-grad.jpeg"
                        text="Education"
                        path="/education"
                        />
                        <CardItem
                        src="images/Shauna.jpg"
                        text="Experience"
                        path="/experience"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
