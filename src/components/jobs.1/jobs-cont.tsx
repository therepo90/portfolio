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


export default class JobsCont extends Component {

    render() {
        return <div className="section jobs">
            <div className="section-header">
                Career 2016-2018
                </div>
            <div className="section-main-description section-with-floating-image">
            <img src="build/assets/icons/unity2.png" className="image-near-text filled" />
            <p>
                
            </p>
            </div>
        </div >
    }
};