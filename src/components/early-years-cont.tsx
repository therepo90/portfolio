import * as React from "react";
import { Component } from "react";

const images = ['build/assets/game-calc.PNG', 'build/assets/game-delforce.PNG', 'build/assets/game-gra.PNG', 'build/assets/game-klawisz.PNG',
    'build/assets/game-komorka.PNG',
    'build/assets/game-konkurs.PNG',
    'build/assets/game-strzelnica.PNG',
    'build/assets/game-wezyk.PNG'];

export default class EarlyYearsCont extends Component {

    render() {
        return <div className="section early-years-cont">
            <div className="section-header">
                Early years cont.
                </div>
            <div className="section-main-description">
                So I needed to know more about creating games and had neither source of knowledge nor money to
                get one. So I asked my dad to buy me a book Visual Basic 6 and I wen't full cave-programming. During 2004/2005 I've created a bunch of games:
                <div className="image-screenshots">
                    {images.map(image => <div>
                        <a href={image}>
                            <img src={image} className="image-screenshot" />
                        </a>
                    </div>)}
                </div>
                And also I've created my first full webpage for my school class. It had all the html/css/js available features: fancy cursors, sounds, surveys, even falling snow.
                I remember doing hosting optimizations creating like 8 accounts to hold class images on free hosting to workaround bandwith limitations...
                <br />
                Also Around 2005 webpage full of images/gifs was made for my Warcraft 3 clan. It was my first page that looked pretty decent and had some color schemas.
            </div>
        </div >
    }
};