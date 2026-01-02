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
                        I'm a software engineer. I like to mess around with various technologies:
                        </p>
                    <ul>
                        <li>
                            Web development
                        </li>
                        <li>
                            Computer graphics
                        </li>
                        <li>
                            Electronics
                        </li>
                        <li>
                            ...just...software
                        </li>
                    </ul>
                    <p>
                        I like bringing fancy ideas to life.<br /> <br />
                        Currently living in Cracow, employeed as a web developer.<br />
                    </p>
                </div>
            </div>
        </div>
    }
};
