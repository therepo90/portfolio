import * as React from "react";
import {Component} from "react";
import AboutMe from "./about-me/about-me";
import EarlyYears from "./early-years/early-years";
import EarlyYearsCont from "./early-years-cont/early-years-cont";
import MidYears from "./mid-years/mid-years";
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
import PrivateStuff from "./private-stuff";

const images = [
    '/assets/gate/gate10.jpg',
    '/assets/gate/knocker-left.png',
    '/assets/gate/eye-left-2.png',
    '/assets/backgrounds/bg4.jpg',
    '/assets/me.jpg',
    '/assets/japa.jpg',
    '/assets/backgrounds/bg1.jpg',
];

const IMAGE_PATHS = [
    // backgrounds
    ...[1,10,12,13,14,15,16,17,18,19,2,20,22,23,3,4,5,6,7,8,9].map(n => `/assets/backgrounds/bg${n}.jpg`),
    // games
    '/assets/games/alggen.jpg','/assets/games/competence.jpg','/assets/games/cv1.jpg','/assets/games/cv2.jpg','/assets/games/cv3.jpg','/assets/games/cv4.jpg','/assets/games/cv5.jpg','/assets/games/droidz.png','/assets/games/flash1.jpg','/assets/games/flash10.jpg','/assets/games/flash2.jpg','/assets/games/flash3.jpg','/assets/games/flash4.jpg','/assets/games/flash5.jpg','/assets/games/flash6.jpg','/assets/games/flash7.jpg','/assets/games/flash8.jpg','/assets/games/flash9.jpg','/assets/games/game-calc.PNG','/assets/games/game-civic.jpg','/assets/games/game-delforce.PNG','/assets/games/game-gra.PNG','/assets/games/game-izo.jpg','/assets/games/game-klawisz.PNG','/assets/games/game-komorka.PNG','/assets/games/game-konkurs.PNG','/assets/games/game-literaki.jpg','/assets/games/game-ogl.jpg','/assets/games/game-oneproj.jpg','/assets/games/game-strzelnica (1).PNG','/assets/games/game-strzelnica.PNG','/assets/games/game-sudo.jpg','/assets/games/game-wezyk.PNG','/assets/games/logi.png','/assets/games/tanki.jpg','/assets/games/webgl.png','/assets/games/wp7.jpg',
    // icons
    '/assets/icons/angular2.png','/assets/icons/as.png','/assets/icons/as2.png','/assets/icons/chrome.png','/assets/icons/cookiesblock.png','/assets/icons/cpp.png','/assets/icons/csharp.png','/assets/icons/email.png','/assets/icons/github.png','/assets/icons/heart.png','/assets/icons/heart2.png','/assets/icons/html-css.png','/assets/icons/html-js-css-2.png','/assets/icons/html-js-css.png','/assets/icons/html.png','/assets/icons/java.png','/assets/icons/java2.png','/assets/icons/linkedin.png','/assets/icons/med.png','/assets/icons/node.png','/assets/icons/ogre.png','/assets/icons/panda.png','/assets/icons/react-redux.png','/assets/icons/rolls.png','/assets/icons/st.jpg','/assets/icons/subs.jpg','/assets/icons/teide5.jpeg','/assets/icons/twt.png','/assets/icons/unity.png','/assets/icons/unity2.png','/assets/icons/vb.png','/assets/icons/warsztat-icon.jpg','/assets/icons/yt1.png','/assets/icons/yt2.png',
    // gate
    '/assets/gate/eye-left-2.png','/assets/gate/gate10.jpg','/assets/gate/knocker-left.png','/assets/gate/knocker1.png',
    // single images
    '/assets/agh-2.png','/assets/agh.jpg','/assets/ard.png','/assets/ionic.png','/assets/japa.jpg','/assets/me.jpg','/assets/sell.png','/assets/tree3000.png','/assets/zsd.png',
];

function getRandomImages(count = 6) {
    const arr = [...IMAGE_PATHS];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, count);
}

const GATE_ENABLED = true; // configuration param

interface MainState {
    gateVisible: boolean;
    tab: 'programming' | 'private';
}

export default class Main extends Component<{}, MainState> {
    loadingIndicator = <div></div>;

    state: MainState = {
        gateVisible: false,
        tab: 'programming',
    }

    onImagesLoaded = () => {
        this.setState({
            gateVisible: GATE_ENABLED,
        })
    }

    showProgramming = () => {
        this.setState({ tab: 'programming' });
    }
    showPrivateStuff = () => {
        this.setState({ tab: 'private' });
    }

    render() {
        // Nawigacja na górze
        const nav = (
            <div style={{display:'flex',gap:'1em',padding:'1.5em 0 1em 0',justifyContent:'center'}}>
                <button className="private-btn" onClick={this.showProgramming} style={{fontWeight:this.state.tab==='programming'?'bold':'normal'}}>Programming</button>
                <button className="private-btn" onClick={this.showPrivateStuff} style={{fontWeight:this.state.tab==='private'?'bold':'normal'}}>Private stuff</button>
            </div>
        );
        return <PreloadImages images={images}
                              loadingIndicator={this.loadingIndicator}
                              mount={true}
                              loaded={this.onImagesLoaded}>
            <React.Fragment>
                {nav}
                {this.state.gateVisible && <Gate/>}
                <Navbar/>
                <div className="page-container">
                    {this.state.tab === 'programming' ? (
                        <>
                            <AboutMe/>
                            <JobsCont5/>
                            <JobsCont4/>
                            <JobsCont3/>
                            <JobsCont2/>
                            <JobsCont/>
                            <Jobs/>
                            <CollegeYearsCont/>
                            <CollegeYears/>
                            <MidYears/>
                            <EarlyYearsCont/>
                            <EarlyYears/>
                        </>
                    ) : (
                        <PrivateStuff/>
                    )}
                </div>
            </React.Fragment>
        </PreloadImages>
    }
};
