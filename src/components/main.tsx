import * as React from "react";
import { Component } from "react";
import AboutMe from "./about-me/about-me";
import EarlyYears from "./early-years/early-years";
import EarlyYearsCont from "./early-years-cont/early-years-cont";
import MidYears from "./mid-years/mid-years";
import Cut from "./cut/cut";
import Gate from "./gate/gate";
import CollegeYears from "./college-years/college-years";
import CollegeYearsCont from "./college-years-cont/college-years-cont";
import Jobs from "./jobs/jobs";
import JobsCont from "./jobs.1/jobs-cont";

export default class Main extends Component {
    state = {
        gateVisible: false // enable me please...
    }

    componentDidMount() {
        setTimeout(() => {
            console.log('Gate must fall.');
            this.setState({
                gateVisible: false,
            })
        },7000);
    }
    render() {
        return <React.Fragment>
            {this.state.gateVisible && <Gate /> } 
            <div className="page-container">
                {<AboutMe />}
                {<EarlyYears />}
                {<EarlyYearsCont />}
                <MidYears />
                <CollegeYears />
                <CollegeYearsCont />
                <Jobs />
                <JobsCont />
            </div>
        </React.Fragment>
    }
};