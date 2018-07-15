import * as React from "react";
import { Component } from "react";

const images = ['build/assets/game-civic.jpg',
'build/assets/game-izo.jpg',
'build/assets/game-literaki.jpg',
'build/assets/game-ogl.jpg',
'build/assets/game-oneproj.jpg',
'build/assets/game-sudo.jpg',];


export default class MidYears extends Component {

    render() {
        return <div className="section mid-years">
            <div className="section-header">
                Mid years
                </div>
            <div className="section-main-description">
                So after going to middle-school I switched to creating bots for MMOs like Silkroad/Knight online and I really wanted to learn creating private servers
                and bots. Around 2007 I found excellent Windows API <a href="http://xion.org.pl/">http://xion.org.pl/</a> tutorial, but it needed C++ knowledge.

                 Fortunately there was also full pdf containing C++ tutorial so I've read it and done all exercises including games like tic-tac-toe.
                 <br /> C++ was so awesome I wanted to learn more so
                 I've bought two C++ books 'Thinking in C++', read it and done all exercices. Also it was about time for my mature exam and I
                  was doing a lot of math school tasks and I wanted to boost up my calculation work. I remember one day dad gave me a book 'Śladami Pitagorasa' and I 
                  went in love with math <img src="build/assets/heart.png" className="icon" />. Everything seemed so pretty and I found math appliance in world.
                  <br />
                  I remember creating my first handy C++ app that was helpful for me:  It was "Horner-schema solver".
                  <br />
                  <br />
                  I've returned to game development, joined <img src="build/assets/warsztat-icon.jpg" className="icon" /><a href="https://warsztat.gd/user/lastseeds/projects">www.warsztat.gd</a> and created a couple of games
                  with C++/SFML/SDL/OpenGL(funny thing is I was still writing code in polish). I remember creating programming solutions which later
                  I found to be ubiquitous programming patterns and rules of thumb. That was pretty fun.
                <div className="image-screenshots">
                    {images.map(image => <div>
                        <a href={image}>
                            <img src={image} className="image-screenshot" />
                        </a>
                    </div>)}
                </div>
            </div>
        </div >
    }
};