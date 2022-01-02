import React from 'react';
import CardLink from './CardLink';
import './Cards.css';

function EducationCards() {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardLink
                        url="https://hackbrightacademy.com/"
                        src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/9/original/new-logo-monochromatic-gradient.png"
                        school="Hackbright Academy"
                        studies="Software Engineering Fellowship"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default EducationCards;