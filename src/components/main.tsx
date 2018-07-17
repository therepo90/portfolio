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
import JobsCont from "./jobs-cont/jobs-cont";
import JobsCont2 from "./jobs-cont-2/jobs-cont-2";
import Navbar from "./navbar/navbar";

export default class Main extends Component {
    state = {
        gateVisible: false,  // enable me please...
        showPage: false,
    }

    componentDidMount() {
        setTimeout(() => {
            console.log('Gate must fall.');
            this.setState({
                gateVisible: false,
            })
        }, 5000);
        setTimeout(() => {
            this.setState({
                showPage: true,
            })
        }, 700);
    }
    render() {
        return <React.Fragment>
            {this.state.gateVisible && <Gate />}
            {this.state.showPage && <React.Fragment>
                <Navbar />
                <div className="page-container">
                    {<AboutMe />}
                    {<EarlyYears />}
                    {<EarlyYearsCont />}
                    <MidYears />
                    <CollegeYears />
                    <CollegeYearsCont />
                    <Jobs />
                    <JobsCont />
                    <JobsCont2 />
                </div>
            </React.Fragment>
            }
        </React.Fragment>
    }
};