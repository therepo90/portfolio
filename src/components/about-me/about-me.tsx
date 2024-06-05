import * as React from "react";
import { Component } from "react";
import './about-me.scss';

export default class AboutMe extends Component {
    render() {
        return <div className="section about">
            <div className="section-header">
                About me
                </div>
            <div className="section-content about-content">
                <div className="section-highlights bordered-container">
                    <div><img src="/assets/japa.jpg" className="about-me-img" /></div>
                    <span className="about-me-name">Tomasz Szepczyński<br />-Software Engineer<br /> <span className="about-me-bio">Born in Cracow, Poland</span>
                        <br />
                        <span className="about-me-bio"><a href="mailto: tomasz.szepczynski@gmail.com">tomasz.szepczynski@gmail.com</a></span></span>
                </div>
                <div className="section-description bordered-container about-description">
                    <p>
                        Hello there, <br />
                        I'm a software engineer. I'd use the word 'passionate' but its too linkedin-ish now, so until I find a new one no adjective for now. I like to mess around with various technologies:
                        </p>
                    <ul>
                        <li>
                            Web development
                            </li>
                        <li>
                            Game development
                            </li>
                        <li>
                            Augmented Reality
                            </li>
                        <li>
                            Hacking
                            </li>
                    </ul>
                    <p>
                        I like bringing fancy ideas to life.<br /> <br />
                        Currently living in Cracow/Wroclaw, employeed as a web developer.<br />
                    </p>
                </div>
            </div>
        </div>
    }
};