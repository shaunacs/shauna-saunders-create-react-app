import React from 'react';
import '../../App.css';
import PageHeader from '../PageHeader';

function Background() {
    return (
        <>
            <PageHeader heading="Background"/>
            <div className="page-text">
                <div className="row">
                    <div className="col-6">
                        <p className="p-content">
                            A child destined for STEM in a country that expected otherwise. <br></br>
                            Growing up, I always excelled in mathematics and loved putting things together/taking things apart.
                            I just loved understanding how things work. <br></br>
                            Growing up, I would take my electronics apart because
                            I was SO intriuged by how everything worked and HAD to know what 
                            was inside.<br></br>
                            My favorite subject was math. 
                            I loved logic and problem-solving. <br></br>
                            I wasn't aware of it then, but a career in STEM was the ideal 
                            career path for me.
                        </p>
                        <p className="p-content">
                            
                        </p>
                    </div>
                    <div className="col-6">
                        <img className="side-photo" src="images/shauna-child.jpg"></img>
                    </div>
                </div>
            </div>
            <p>Note to self: Include link to ColorStack and Black Girls Code</p>
        </>
    );
}

export default Background;
