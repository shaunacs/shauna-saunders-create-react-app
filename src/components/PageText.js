import React from 'react';
import '../App.css';
import './PageText.css';
import './base.css';

function PageText(props) {
    return (
        <div className="page-text">
            <div className="row">
                <div className="col-6">
                    <h2 className="p-heading">
                            {props.title}
                    </h2> 
                    <p className="p-content">
                        {props.text}
                    </p>
                </div>
                <div className="col-6">
                    <img className="side-photo" src={props.src}></img>
                </div>
            </div>
        </div>
    )
}

export default PageText;
