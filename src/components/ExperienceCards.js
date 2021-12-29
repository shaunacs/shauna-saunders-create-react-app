import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function ExperienceCards() {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="images/shauna-child.jpg"
                        text="Hackbright Academy"
                        path="/hackbright"
                        title="Python Software Engineering Teaching Assistant"
                        />
                        <CardItem
                        src="images/unc-grad.jpeg"
                        text="Caribou Coffee"
                        path="/education"
                        title="Manager on Duty"
                        />
                        <CardItem
                        src="images/Shauna.jpg"
                        text="UNC Refugee Mental Health &amp; Wellness Initiative"
                        path="/experience"
                        title="Undergraduate Intern"
                        />
                    </ul>
                    <ul>
                        <CardItem
                        src="images/Shauna.jpg"
                        text="UNC Refugee Mental Health &amp; Wellness Initiative"
                        path="/experience"
                        title="Undergraduate Intern"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCards;
