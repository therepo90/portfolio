import * as React from "react";
import { Component } from "react";

const images: any[] = [
    '/assets/games/cv1.jpg',
    '/assets/games/cv2.jpg',
    '/assets/games/cv3.jpg',
    '/assets/games/cv4.jpg',
    '/assets/games/cv5.jpg',
];


export default class JobsCont2 extends Component {

    render() {
        return <div className="section jobs-cont-2">
            <div className="section-header">
                Career 2017-present
                </div>
            <div className="section-main-description">
                <img src="/assets/icons/unity2.png" className="image-near-text filled" />

                <p>
                    I've started doing some hobby side-projects in Unity regarding games and computer graphics.
                     I've even created<a target="_blank" href="https://www.youtube.com/channel/UCGaMIyiWInKQV6CeKPTePyA"><img src="/assets/icons/yt1.png" className="icon" />Youtube channel</a>&nbsp;
              where I publish all computer graphics thing I do. Also I've started
                     developing assets for Unity Asset Store: <a target="_blank" href="https://assetstore.unity.com/publishers/25578"> My&nbsp;publisher&nbsp;account</a>.
                    </p>
                <img src="/assets/icons/angular2.png" className="image-near-text no-margin-top" />
                <p>
                    <br />
                    I've joined another sport booking company where currently I'm using Angular6.
                </p>
            </div>
        </div >
    }
};