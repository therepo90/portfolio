import * as React from "react";
import { Component } from "react";

const images: any[] = [
    '/assets/games/cv1.jpg',
    '/assets/games/cv2.jpg',
    '/assets/games/cv3.jpg',
    '/assets/games/cv4.jpg',
    '/assets/games/cv5.jpg',
];


export default class JobsCont4 extends Component {

    render() {
        return <div className="section jobs-cont-4">
            <div className="section-header">
                Side hustling 2020-2024
                </div>
            <div className="section-main-description">
                <img src="/assets/icons/panda.png" className="image-near-text filled"/>

                <p>
                    I've started creating scrappers. First I've created one scrapping popular flat rental pages to
                    gather information
                    for private offers so you could look them up later if they vanish.

                    I got interested in financial world(or rather forced as I've never been into money thing). Started reading looots of books on the topic and
                    eventually practicing
                    stocks picking. I've started working on <a target="_blank" href="https://financialpanda.pl/"><img
                    src="/assets/icons/panda.png" className="icon"/>FinancialPanda</a>&nbsp; which got eventually
                    released.
                    Also I've created a private tool for stock picking.
                </p>
                <img src="/assets/icons/teide5.jpeg" className="image-near-text filled"/>
                <p>
                    During my 2 month digital nomading trip in Tenerife I've created a scrapper that finds the seat for
                    local attractions as these were always occupied. The very same day I found my seat.
                    Eventually released it for free so other people could use it as well: <a target="_blank"
                                                                                             href="https://teidepermit.eu/"><img
                    src="/assets/icons/teide5.jpeg" className="icon"/>TeidePermit</a>
                </p>

                <img src="/assets/icons/subs.jpg" className="image-near-text filled"/>
                <p>
                    I've created a DeepL translate tool for subtitles. As most of the time subtitles are crappy(aren't
                    they?)
                    <a target="_blank"
                       href="https://translatesubtitles.org/"><img
                        src="/assets/icons/subs.jpg" className="icon"/>https://translatesubtitles.org/</a>
                </p>
                <p>
                    I've started working on my unique online game as well. Still in progress.
                    Also I've created the instagram thing just to satisfy my photography/shader needs but let it
                    remain private for now. Its about creating unique photography and adding some life to it - I do some posters and print it or just stare at it.
                    I've started learning Photoshop and Adobe Effects. The IG contains of things like this(Yeah that's me on the photo):
                </p>
                <div className="image-screenshots">
                    <a target="_blank" href="/assets/icons/rolls.png">
                        <img src="/assets/icons/rolls.png" className="image-screenshot"/>
                    </a>
                    <a target="_blank" href="/assets/icons/ogre.png">
                        <img src="/assets/icons/ogre.png" className="image-screenshot"/>
                    </a>
                </div>


            </div>
        </div>
    }
};