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
import PreloadImages from "./preload-images/preload-images";

const images = [
    'build/assets/gate/gate10.jpg',
    'build/assets/gate/knocker-left.png',
    'build/assets/gate/eye-left-2.png',
    'build/assets/backgrounds/bg4.jpg',
    'build/assets/me.jpg',
    'build/assets/backgrounds/bg1.jpg',
];

export default class Main extends Component {
    loadingIndicator = <div>Loading ...</div>;

    state = {
        gateVisible: true,  // enable me please...
    }

    render() {
        return <PreloadImages images={images} loadingIndicator={this.loadingIndicator} >
            <React.Fragment>
                {this.state.gateVisible && <Gate />}
                {<React.Fragment>
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
        </PreloadImages>
    }
};