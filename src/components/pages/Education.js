import React from 'react';
import '../../App.css';
import PageHeader from '../PageHeader';
import PageText from '../PageText';
import EducationCards from '../EducationCards';
import '../Cards.css';

function Education() {
    return (
        <>
            <EducationCards />

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
