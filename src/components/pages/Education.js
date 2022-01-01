import React from 'react';
import '../../App.css';
import PageHeader from '../PageHeader';
import PageText from '../PageText';
import CardItem from '../CardItem';
import '../Cards.css';

function Education() {
    return (
        <>
            <div className="cards">
                <h1>Education</h1>
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

            {/* <PageHeader heading="Education"/>
            <PageText
            title="Hackbright Academy"
            text="Software Engineering Fellowship"
            />
            <PageText
            title="The University of North Carolina at Chapel Hill"
            text="B.A.Ed. Human Development &amp; Family Studies"
            src="images/unc-grad.jpeg"/>
            <PageText
            title="North Wilkes High School"
            text="Hays, NC"/> */}
        </>
    );
}

export default Education;
