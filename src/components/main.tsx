import * as React from "react";
import { Component } from "react";
import AboutMe from "./about-me";
import EarlyYears from "./early-years";
import EarlyYearsCont from "./early-years-cont";
import MidYears from "./mid-years";
import Cut from "./cut";

export default class Main extends Component {
    render() {
        return <React.Fragment>
            <div className="gate-container">
                <div className="gate left">
                    <img src="build/assets/knocker-left.png" className="knocker" />
                    <img src="build/assets/eye-left-2.png" className="knocker eye" />
                    <div className="shadow" />
                </div>
                <div className="gate right">
                    <img src="build/assets/knocker-left.png" className="knocker" />
                    <img src="build/assets/eye-left-2.png" className="knocker eye" />
                    <div className="shadow" />
                </div>
            </div>
            <div className="page-container">
                {<AboutMe />}
                {<EarlyYears />}
                {<EarlyYearsCont />}
                <MidYears />
            </div>
        </React.Fragment>
    }
};