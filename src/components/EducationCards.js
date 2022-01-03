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
                        <CardLink 
                        url="https://ed.unc.edu/"
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/University_of_North_Carolina_at_Chapel_Hill_seal.svg/1200px-University_of_North_Carolina_at_Chapel_Hill_seal.svg.png"
                        school="The University of North Carolina at Chapel Hill"
                        studies="Human Development &amp; Family Studies"/>
                        <CardLink 
                        url="https://nwhs.wilkescountyschools.org/"
                        src="https://3.files.edl.io/b436/20/06/08/180017-8b545457-b2eb-44e5-bd89-47ab5baa5680.jpg"
                        school="North Wilkes High School"
                        studies="HS Diploma"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default EducationCards;