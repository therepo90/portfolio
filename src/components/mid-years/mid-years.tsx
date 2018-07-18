import * as React from "react";
import { Component } from "react";

const images = ['build/assets/games/game-civic.jpg',
    'build/assets/games/game-izo.jpg',
    'build/assets/games/game-literaki.jpg',
    'build/assets/games/game-ogl.jpg',
    'build/assets/games/game-oneproj.jpg',
    'build/assets/games/game-sudo.jpg',];


export default class MidYears extends Component {

    render() {
        return <div className="section mid-years">
            <div className="section-header">
                High school 2006-2009
                </div>
            <div className="section-main-description section-with-floating-image">
            <img src="build/assets/icons/cpp.png" className="image-near-text" />
            <p>
                So after going to middle-school I switched to creating bots for MMOs like Silkroad/Knight online and I really wanted to learn creating private servers
                and bots. Around 2007 I found excellent Windows API <a href="http://xion.org.pl/">http://xion.org.pl/</a> tutorial, but it needed C++ knowledge.

                 Fortunately there was also full pdf containing C++ tutorial so I've read it and done all exercises including games like tic-tac-toe.
                 <br /> C++ was so awesome I wanted to learn more so
                I've bought two C++ books 'Thinking in C++', read it and done all exercices. Also it was about time for my mature exam and I
                 was doing a lot of math school tasks and I wanted to boost up my calculation work. I remember creating
                  my first handy C++ app that was helpful for me:  it was "Horner-schema solver".
                  <br />
                <br />
                I've returned to game development,  join warsztat&nbsp;
                <a href="https://warsztat.gd/user/lastseeds/projects"><img src="build/assets/icons/warsztat-icon.jpg" className="icon" />
                https://warsztat.gd/user/lastseeds/projects</a> and created a couple of games
                with C++/SFML/SDL/OpenGL(funny thing is I was still writing code in polish). I remember creating programming solutions which later
                I found to be ubiquitous programming patterns and rules of thumb. That was pretty fun.
                </p>
                <div className="image-screenshots">
                    {images.map((image, i) => <div key={i}>
                        <a href={image}>
                            <img src={image} className="image-screenshot" />
                        </a>
                    </div>)}
                </div>
            </div>
        </div >
    }
};