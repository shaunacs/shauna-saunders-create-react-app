import React from 'react';

function CardLink(props) {
    return (
        <>
            <li className="cards__item">
                <a href={props.url}><div className="cards__item__link">
                    <figure className="cards__item__pic-wrap">
                        <img src={props.src} className="cards__item__img"></img>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.school}</h5>
                        <p>{props.studies}</p>
                    </div>
                </div></a>
            </li>
        </>
    )
}

export default CardLink;
