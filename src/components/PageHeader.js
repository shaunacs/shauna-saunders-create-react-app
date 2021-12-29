import React from 'react';
import '../App.css';
import { Button } from './Button';
import './PageHeader.css';

function PageHeader(props) {
    return (
        <div className="background-heading">
            <h1>{props.heading}</h1>
        </div>
    )
}
export default PageHeader;
