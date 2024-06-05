import * as React from "react";
import { Component } from "react";

const images: any[] = [
    '/assets/games/cv1.jpg',
    '/assets/games/cv2.jpg',
    '/assets/games/cv3.jpg',
    '/assets/games/cv4.jpg',
    '/assets/games/cv5.jpg',
];


export default class JobsCont3 extends Component {

    render() {
        return <div className="section jobs-cont-3">
            <div className="section-header">
                Career 2019-2020
                </div>
            <div className="section-main-description">
                <img src="/assets/icons/chrome.png" className="image-near-text filled" />

                <p>
                     I've started creating chrome extensions making your life easier like<a target="_blank" href="https://cookiesblock.com/"><img src="/assets/icons/cookiesblock.png" className="icon" />CookiesBlock</a>&nbsp;
                    There were also extensions for filtering content removing negative news, youtube better recommendations wall, a tool for creating chapters in youtube videos(before yt introduced that).
                     also, created even more games/shader experiments published on my yt channel.

                    I got involved into created shaders in GLSL(ShaderToy) and Unity: <a href="https://www.shadertoy.com/results?query=therepo90">Shadertoy </a>
                    I took part in some shader contest and even got some good places despite being fresh in the hood.
                </p>

                <img src="/assets/icons/node.png" className="image-near-text no-margin-top" />
                <p>
                    <br />
                    Professionally I've switched to full backend as it seemed more interesting, also I didn't like the crappy modern frontend world and where it's heading.
                    Since now I'll be  working for medium-size/small companies in brands like: bookies, cryptocurrency, insurance, fleet planning, advertisement, financials.
                </p>
            </div>
        </div >
    }
};