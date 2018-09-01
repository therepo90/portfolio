import * as React from "react";
import { Component } from "react";

const images = ['/assets/games/flash1.jpg',
    '/assets/games/flash2.jpg',
    '/assets/games/flash3.jpg',
    '/assets/games/flash4.jpg',
    '/assets/games/flash5.jpg',
    '/assets/games/flash6.jpg',
    '/assets/games/flash7.jpg',
    '/assets/games/flash8.jpg',
    '/assets/games/flash9.jpg',
    '/assets/games/flash10.jpg'
]


export default class CollegeYears extends Component {

    render() {
        return <div className="section college">
            <div className="section-header">
                College 2009-2010
                </div>
            <div className="section-main-description">
                <img src="/assets/agh-2.png" className="image-near-text filled" />
                <p>
                    After passing my mature exam I went to IT studies where I wasn't very happy hence when a college friend of mine
                        offered me a job as a Flash Game developer(Actionscript) I took it. It was a 7-man students company where I was paid ~2$/hour which after
                        2 weeks  increased to 4$ due to good results. We've created about ~30 games, here are some of them:
                        </p>
                <div className="image-screenshots">
                    {images.map((image, i) => <div key={i}>
                        <a href={image}>
                            <img src={image} className="image-screenshot" />
                        </a>
                    </div>)}
                </div>
                <br />
                <img src="/assets/icons/as2.png" className="image-near-text" />
                <p>
                    Due to the fact I was working remotely and I was paid per hour it was no use for me to create games that
                    quickly as there was not much money from it. <br />
                    Year after I quit the job and switched my major to Appliance IT on same department.
                </p>
            </div>
        </div >
    }
};