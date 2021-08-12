import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="videos/coding-sequences.mp4" autoPlay loop muted />
            <h1>SHAUNA SAUNDERS</h1>
            <p>Software Engineer</p>
            <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                    to="/about-me"
                >
                    ABOUT ME
                </Button>
                <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                    to="/portfolio"
                >
                    PORTFOLIO
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
