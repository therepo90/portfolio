import * as React from "react";
import { Component } from "react";

export default class AboutMe extends Component {
    render() {
        return <div className="section about">
            <div className="section-header">
                About me
                </div>
            <div className="section-content">
                <div className="section-highlights dotted-container">
                    <div><img src="build/assets/me.jpg" className="about-me-img" /></div>
                    <span className="about-me-name">Tomasz Szepczyński<br />-Software Developer<br /> <span className="about-me-bio">Born on 1990 in Cracow, Poland</span>
                    <br />
                    <span className="about-me-bio"><a href="mailto: tomasz.szepczynski@gmail.com">tomasz.szepczynski@gmail.com</a></span></span>
                </div>
                <div className="section-description dotted-container">
                    <p>
                        Hello there, <br />
                        I'm a passionate software developer, who likes to mess around with various technologies:
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
                        I like bringing fancy ideas to life.<br /> <br />
                        Currently living in Cracow, employeed as a web developer.<br />
                    </p>
                </div>
            </div>
        </div>
    }
};