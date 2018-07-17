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

const images = ['build/assets/gate/gate10.jpg', 'build/assets/gate/knocker-left.png', 'build/assets/gate/eye-left-2.png'];

export default class Main extends Component {
    imgLoaded = 0;
    passedWillMountPhase = false;
    allLoaded = false;
    onLoadImage = (src: string) => () => {
        if(!this.passedWillMountPhase) {
            return ;
        }
        this.imgLoaded++;
        if(this.imgLoaded >= images.length) {
            console.log('All loaded');
            this.allLoaded = true;
            setTimeout(() => this.onLoadedImages(),0);
        }
    }

    state = {
        gateVisible: false,  // enable me please...
        showPage: false,
    }

    componentWillMount() {
        this.passedWillMountPhase = true;
    }

    componentDidMount() {
        
    }

    onLoadedImages = () => {
        this.setState({
            gateVisible: true,
            showPage: true,
        })
    }

    render() {
        return <React.Fragment>   
                {!this.allLoaded && <div>Loading ...</div>}         
                {!this.allLoaded && images.map((src, i) => <img key={i} src={src} onLoad={this.onLoadImage(src)} onError={this.onLoadImage(src)} style={{display: 'none'}} /> ) }
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