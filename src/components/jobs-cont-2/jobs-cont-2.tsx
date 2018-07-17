import * as React from "react";
import { Component } from "react";

const images: any[] = [
    'build/assets/games/cv1.jpg',
    'build/assets/games/cv2.jpg',
    'build/assets/games/cv3.jpg',
    'build/assets/games/cv4.jpg',
    'build/assets/games/cv5.jpg',
];


export default class JobsCont2 extends Component {

    render() {
        return <div className="section jobs-cont-2">
            <div className="section-header">
                Career 2017-present
                </div>
            <div className="section-main-description section-with-floating-image">
                <div className="side-images">
                    <img src="build/assets/icons/unity2.png" className="image-near-text filled" />
                    <img src="build/assets/icons/angular2.png" className="image-near-text image-near-text-ang-2" />
                </div>
                <p>
                    I've started doing some hobby side-projects in Unity regarding games and computer graphics.
                     I've even created&nbsp;
                      <a href="https://www.youtube.com/channel/UCGaMIyiWInKQV6CeKPTePyA"><img src="build/assets/icons/yt1.png" className="icon" />Youtube channel</a>&nbsp; 
                      where I publish all computer graphics thing I do. Also I've started
                     developing assets for Unity Asset Store: <a href="https://assetstore.unity.com/publishers/25578"> My&nbsp;publisher&nbsp;account</a>.

                     <br />
                     <br />
                     <br />
                     <br />
                     <br />
                     I've joined another sport booking company where currently I'm using Angular6.
                </p>
            </div>
        </div >
    }
};