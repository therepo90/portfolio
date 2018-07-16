import * as React from "react";
import { Component } from "react";

const images: any[] = [
    'build/assets/games/alggen.jpg',
    'build/assets/games/competence.jpg',
    'build/assets/games/droidz.png',
    'build/assets/games/logi.png',
    'build/assets/games/tanki.jpg',
    'build/assets/games/webgl.png',
    'build/assets/games/wp7.jpg',
];


export default class CollegeYearsCont extends Component {

    render() {
        return <div className="section college-cont">
            <div className="section-header">
                College - cont.
                </div>
            <div className="section-main-description section-with-floating-image">
                <img src="build/assets/agh-2.png" className="image-near-text" />
                <span>First 3 years of college were just awesome. A lot of cool people and interesting subjects (calculus & matrixes <img src="build/assets/icons/heart.png" className="icon" />).
                   <br /> I participated in 2 internships, one of them included coding-dojos and  refactor workshops where using mouse was forbidden - only key
                    shortcuts so I improved my IDE experience a lot.
                   <br />
                    <br />
                    In the end I was offered a job at telcom company where I spent a year with incredibly cool people.
                    We've created application for managing employees competencies
                    and room allocations tool.
                    As a hard C++ dev I've always found JS/CSS/HTML to be for kids in kindergarten so I was doing mainly back-end.
                    <br />
                    Here are some projects from college and job I have screenshots of:
                    <div className="image-screenshots">
                        {images.map((image, i) => <div key={i}>
                            <a href={image}>
                                <img src={image} className="image-screenshot" />
                            </a>
                        </div>)}
                    </div>
                    The last one is <strong>'SpazzyBall'</strong> which reached <strong>10 000 downloads</strong> on Windows Mobile 7 in a year.
                </span>
            </div>
        </div >
    }
};