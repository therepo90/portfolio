import * as React from "react";
import { Component } from "react";

const images = ['build/assets/games/flash1.jpg',
    'build/assets/games/flash2.jpg',
    'build/assets/games/flash3.jpg',
    'build/assets/games/flash4.jpg',
    'build/assets/games/flash5.jpg',
    'build/assets/games/flash6.jpg',
    'build/assets/games/flash7.jpg',
    'build/assets/games/flash8.jpg',
    'build/assets/games/flash9.jpg',
    'build/assets/games/flash10.jpg'
]


export default class CollegeYears extends Component {

    render() {
        return <div className="section college">
            <div className="section-header">
                College
                </div>
            <div className="section-main-description section-with-floating-image">
                <img src="build/assets/agh-2.png" className="image-near-text" />
                <span>After passing my mature exam I went to IT studies where I wasn't very happy hence when a college friend of mine
                    offered me a job as a Flash Game developer(Actionscript) I took it. It was a 7-man students company where I was paid ~2$/hour which after
                    2 weeks  increased to 4$ due to good results. We've created about ~30 games, here are some of them:
                    <div className="image-screenshots">
                    {images.map( (image, i) => <div key={i}>
                        <a href={image}>
                            <img src={image} className="image-screenshot" />
                        </a>
                    </div>)}
                    <br />
                    Due to the fact I was working remotely and I was paid per hour it was no use for me to create games that 
                    quickly as there was not much money from it. <br />
                    Year after I quit the job and switched my major to Appliance IT on same department.
                </div>
                </span>
            </div>
        </div >
    }
};