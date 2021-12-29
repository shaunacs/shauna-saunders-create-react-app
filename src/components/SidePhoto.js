import React from 'react';
import './SidePhoto.css';

function SidePhoto(props) {
    return (
        <>
            <img className="side-photo" src={props.src}></img>
        </>
    );
}

export default SidePhoto;
