import * as React from "react";
import { Component } from "react";

const images: any[] = [
    '/assets/games/alggen.jpg',
    '/assets/tree3000.png',
    '/assets/games/competence.jpg',
    '/assets/games/droidz.png',
    '/assets/games/logi.png',
    '/assets/games/tanki.jpg',
    '/assets/games/webgl.png',
    '/assets/games/wp7.jpg',
];


export default class CollegeYearsCont extends Component {

    render() {
        return <div className="section college-cont">
            <div className="section-header">
                College - 2010-2013
                </div>
            <div className="section-main-description">
                <img src="/assets/agh-2.png" className="image-near-text filled" />
                <p>
                    First 3 years of college were just awesome. A lot of cool people and interesting subjects (calculus & matrixes <img src="/assets/icons/heart.png" className="icon" />).
                   <br /> I participated in 2 internships, one of them included coding-dojos and  refactor workshops where using mouse was forbidden - only key
                            shortcuts so I improved my IDE experience a lot.
                   <br />
                    <br />
                </p>
                <img src="/assets/icons/java2.png" className="image-near-text filled" />
                <p>
                    In the end I was offered a job at telcom company where I spent a year with incredibly cool people.
                    We've created application for managing employees competencies
                    and room allocations tool.
                    As a hard C++ dev I've always found JS/CSS/HTML to be for kids in kindergarten so I was doing mainly Java back-end. From time to time I was
                    jumping into jquery / js libs functionalities to add some behaviours but I didn't want to touch html/css .
                    <br />
                    <br />
                    Also I've reached my Engineer degree. It was about creating efficient TRIE trees - dictionary structures that purpose was to
                    help finding possible words between starting string and ending strings for words correction. <br />
                    <br />
                    Here are some projects from college and job I have screenshots of:
                        </p>
                <div className="image-screenshots">
                    {images.map((image, i) => <div key={i}>
                        <a href={image} target="_blank">
                            <img src={image} className="image-screenshot" />
                        </a>
                    </div>)}
                </div>
                <img src="/assets/icons/csharp.png" className="image-near-text filled" />
                <p>
                    The last one is <strong>'SpazzyBall'</strong> which reached <strong>10 000 downloads</strong> on Windows Mobile 7 in a year.
                    <br />
                    <br />
                    Worth to mention in terms of hacking is the fact I've manage to create poker card reader using OpenCV and Windows API to one of poker platforms. I also tried to
                    write some kind of a bot but the risk was too big so I dropped it.
                </p>
            </div>
        </div >
    }
};