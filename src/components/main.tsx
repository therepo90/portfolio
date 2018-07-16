import * as React from "react";
import { Component } from "react";
import AboutMe from "./about-me/about-me";
import EarlyYears from "./early-years/early-years";
import EarlyYearsCont from "./early-years-cont/early-years-cont";
import MidYears from "./mid-years/mid-years";
import Cut from "./cut/cut";
import Gate from "./gate/gate";
import CollegeYears from "./college-years/college-years";

export default class Main extends Component {
    render() {
        return <React.Fragment>
            { /* <Gate />*/ } 
            <div className="page-container">
                {<AboutMe />}
                {<EarlyYears />}
                {<EarlyYearsCont />}
                <MidYears />
                <CollegeYears />
            </div>
        </React.Fragment>
    }
};