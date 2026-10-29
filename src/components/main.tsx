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
import JobsCont3 from "./jobs-cont-3/jobs-cont-3";
import JobsCont4 from "./jobs-cont-4/jobs-cont-4";
import JobsCont5 from "./jobs-cont-5/jobs-cont-5";
import MyWork from "./my-work/my-work";
import { ROUTES } from "../constants";

const images = [
    '/assets/gate/gate10.jpg',
    '/assets/gate/knocker-left.png',
    '/assets/gate/eye-left-2.png',
    '/assets/backgrounds/bg4.jpg',
    '/assets/me.jpg',
    '/assets/japa.jpg',
    '/assets/backgrounds/bg1.jpg',
];

const GATE_ENABLED = true; // configuration param

export default class Main extends Component {
    loadingIndicator = <div></div>;

    state = {
        gateVisible: false,
        route: Main.currentRoute(),
    }

    static currentRoute() {
        return window.location.hash.replace(/^#/, '') || ROUTES.HOME;
    }

    componentDidMount() {
        window.addEventListener('hashchange', this.onHashChange);
    }

    componentWillUnmount() {
        window.removeEventListener('hashchange', this.onHashChange);
    }

    onHashChange = () => {
        this.setState({
            route: Main.currentRoute(),
        });
        window.scrollTo(0, 0);
    }

    onImagesLoaded = () => {
        this.setState({
            // the gate is the intro of the home page only
            gateVisible: GATE_ENABLED && this.state.route !== ROUTES.MY_WORK,
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
                    {this.state.route === ROUTES.MY_WORK ? <div className="page-container">
                        <MyWork/>
                    </div> : <div className="page-container">
                        {<AboutMe/>}
                        <JobsCont5/>
                        <JobsCont4/>
                        <JobsCont3/>
                        <JobsCont2/>
                        <JobsCont/>
                        <Jobs/>
                        <CollegeYearsCont/>
                        <CollegeYears/>
                        <MidYears/>
                        {<EarlyYearsCont/>}
                        {<EarlyYears/>}
                    </div>}
                </React.Fragment>
                }
            </React.Fragment>
        </PreloadImages>
    }
};
