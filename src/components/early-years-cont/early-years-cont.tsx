import * as React from "react";
import { Component } from "react";

const images = ['/assets/games/game-calc.PNG', '/assets/games/game-delforce.PNG', '/assets/games/game-gra.PNG', '/assets/games/game-klawisz.PNG',
    '/assets/games/game-komorka.PNG',
    '/assets/games/game-konkurs.PNG',
    '/assets/games/game-strzelnica.PNG',
    '/assets/games/game-wezyk.PNG'];

export default class EarlyYearsCont extends Component {

    render() {
        return <div className="section early-years-cont">
            <div className="section-header">
                Early years 2003-2006
                </div>
            <div className="section-main-description">
                <img src="/assets/icons/vb.png" className="image-near-text filled" />
                <p>
                    So I needed to know more about creating hence when I got Visual Basic 6 book I went full cave-programming. During 2004/2005 I've created a bunch of games:
                    </p>
                <div className="image-screenshots">
                    {images.map((image, i) => <div key={i}>
                        <a href={image}>
                            <img src={image} className="image-screenshot" />
                        </a>
                    </div>)}
                </div>
                <p>
                    And also I've created my first full webpage for my school class. It had all the html/css/js available features: fancy cursors, sounds, surveys, even falling snow.
                    I remember doing hosting optimizations creating like 8 accounts to hold class images on free hosting to workaround bandwith limitations...
                <br />
                    Also Around 2005 webpage full of images/gifs was made for my Warcraft 3 clan. It was my first page that looked pretty decent and had some cohesive colors.
                    </p>
            </div>
        </div >
    }
};