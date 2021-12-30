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
                        </p>
                        <p className="p-content">
                            As a kid, I constantly got into trouble for taking my toys and electronics apart.
                            I was just SO intrigued by how everything worked and HAD to know what was inside.
                            I would get so excited when my parents brought home a new piece of furniture
                            that needed assembling.<br></br>
                            In school, my favorite subject was math. I loved logic and problem-solving.
                        </p>
                        <p className="p-content">
                            I wasn't aware of it then, but a career in STEM was the ideal career path for me.
                        </p>
                        <p className="p-content">
                                Going into high school, I was the only person of color in my class.
                                I also <i>just so happen</i> to be one of the only people in my class not
                                recommended to take higher-level math courses despite my great academic record.
                                It took weeks of finishing assignments with significant time to spare before I was transferred
                                into a more challenging course.
                        </p>
                        <p className="p-content">
                                Going into college, I wanted to pursue engineering, but I doubted myself and my capabilities.
                                I operated with the belief that it wasn't a field for people that looked like me.
                        </p>
                        <p className="p-content">
                                It may have taken longer than it should have, but I made it to the field I thrive in.
                        </p>
                        <p className="p-content">
                            I continue to thrive and share my stories, so children of color can see what they're capable of...
                            So they can experience the relief of having an interviewer that looks like them... So they can define
                            their own future...
                        </p>
                        <a href="https://www.colorstack.org/"><img id="colorstack" src="https://assets.website-files.com/609889c9bc5031d5ac23b6f7/6098cc79287568ab1292fb62_Horizontal_Logo_3-p-500.png"></img></a>
                        <a href="https://www.blackgirlscode.com/"><img src="https://images.credly.com/images/6be34f78-9b94-4e64-b83f-80ed735a15ef/blob.png"></img></a>
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
