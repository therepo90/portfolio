import * as React from "react";
import {Component} from "react";
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
import './main.scss';

const images = [
    '/assets/gate/gate10.jpg',
    '/assets/gate/knocker-left.png',
    '/assets/gate/eye-left-2.png',
    '/assets/backgrounds/bg4.jpg',
    '/assets/me.jpg',
    '/assets/backgrounds/bg1.jpg',
];

const GATE_ENABLED = true; // configuration param

export default class Main extends Component {
    loadingIndicator = <div className="loading">Loading ...</div>;

    state = {
        gateVisible: false,
    }

    onImagesLoaded = () => {
        this.setState({
            gateVisible: GATE_ENABLED,
        })
    }

    render() {
        return <PreloadImages images={images}
                              loadingIndicator={this.loadingIndicator}
                              mount={true}
                              loaded={this.onImagesLoaded}>
            <React.Fragment>
                {this.state.gateVisible && <Gate/>}
                {<React.Fragment>
                    <Navbar/>
                    <div className="page-container">
                        {<AboutMe/>}
                        <JobsCont2/>
                        <JobsCont/>
                        <Jobs/>
                        <CollegeYearsCont/>
                        <CollegeYears/>
                        <MidYears/>
                        {<EarlyYearsCont/>}
                        {<EarlyYears/>}
                    </div>
                </React.Fragment>
                }
            </React.Fragment>
        </PreloadImages>
    }
};