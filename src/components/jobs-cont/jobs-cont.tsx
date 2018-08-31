import * as React from "react";
import { Component } from "react";

const images: any[] = [
    'assets/games/cv1.jpg',
    'assets/games/cv2.jpg',
    'assets/games/cv3.jpg',
    'assets/games/cv4.jpg',
    'assets/games/cv5.jpg',
];


export default class JobsCont extends Component {

    render() {
        return <div className="section jobs-cont">
            <div className="section-header">
                Career 2016-2017
                </div>
            <div className="section-main-description">
                <img src="assets/icons/unity2.png" className="image-near-text filled" />
                <p>
                    We've traveled with our game to a game conference: "Let's play Częstochowa" after which we got invited to "Good Game Expo Warsaw".
                After the GGE we created our fanpage: <a href="https://www.facebook.com/CursedValley/">Cursed Valley</a> and
                        after some investors talks we decided to transform our game to 2D: <br /><br />
                </p>
                <div className="center video-container">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/o0Wxu2FK06A" allowFullScreen></iframe>
                </div>
                <p>
                    <br />
                    <br />
                    After that we got invited to "Digital Dragons Cracow", but for now the development has been suspended as everyone took his own path. <br />Here is a couple of photos from this journey:<br />
                </p>
                <div className="image-screenshots">
                    {images.map((image, i) => <div key={i}>
                        <a href={image}>
                            <img src={image} className="image-screenshot" />
                        </a>
                    </div>)}
                </div>
                <br />

                <img src="assets/icons/react-redux.png" className="image-near-text filled" />
                <p>
                    I joined sport booking company and switched to React & Redux stack. After 2 years of ng I wanted to see what's the fuss about and who Abramov is.
                    I immediately loved JSX, yarn, <span className="stroke">webpack</span>, ES7, Express, Jest, unidirectional app flow, single store,
                     functional programming. The only thing I hated was
                    huge boilerplate and weak performance. <br />
                    Everytime someone wrote `reduce()` with spread operator inside I cried. <br /> <br />One day when I saw clicking a checkbox
                    in big component tree takes 200ms to select itself I felt like this is wrong direction of web development. Selecting checkbox was like this:
                    <br /><br />
                    Create & dispatch action, go through redux middleware, run proper saga, propagate event to ALL reducers, reacreating ImmutableJS store,
                    running memoized reselects then re-rendering big component tree with nested tables even optimized by PureComponent to finally show me I selected
                    a checkbox.
                    <br /><br /> And it was 200ms on my PC with 4 cores, 16gb ram! I could run Witcher 30FPS on it and I can't select a checkbox. I decided thats not the good direction so I started looking for some freedom
                     and maybe give a chance to Angular again.
                </p>
            </div>
        </div >
    }
};