import * as React from "react";
import { Component } from "react";

const images: any[] = [
    'build/assets/games/alggen.jpg',
    'build/assets/games/competence.jpg',
    'build/assets/games/droidz.png',
    'build/assets/games/logi.png',
    'build/assets/games/tanki.jpg',
    'build/assets/games/webgl.png',
    'build/assets/games/wp7.jpg',
];


export default class Jobs extends Component {

    render() {
        return <div className="section jobs">
            <div className="section-header">
                Jobs
                </div>
            <div className="section-main-description section-with-floating-image">
            <img src="build/assets/icons/angular2.png" className="image-near-text" />
            <p>
                I started working in italian company which was creating huge(200+ pages) financial reports. I was hired as back-end Java guy 
                and I started creating SQL query wrappers for Oracle database. We were lacking
                front-ends so I was asked if I'm interested in doing some GUI. They told me to give it a try and it will be only
                 time to time work... so I gave it a chance. That day I was introduced to AngularJS and was transformed to 70%/30% front-end/back-end guy.
                 <br />
                 <br />
                 At the beggining I wasn't even aware about the words people used around: "bower, npm, yeoman, SPA, grunt, less, karma" but 
                 I remembered to create symlink for my `node_modules` directory not to spend whole day waiting for `npm install` to finish.
                 <br />
                 <br />
                 I was the main front-end creator of <a href="https://application.skyminder.com">https://application.skyminder.com</a> - web application 
                 that serves financial reports for all over the world companies(even on small islands you've never heard of). It was web/pdf/txt.
                 AngularJS had super app-features, declarative UI, but was incredibly slow for this task due to "ng-for" and digest system - generating complex table was taking 60seconds, so I 
                 ended up in creating my own performant engine for generating reports that did it in 200ms. Also I've created txt 
                 terminal-like generator for 2D tables. App functionalities contained multiple languages(e.g. chinese, german), SSO 
                 authentication system, RWD, IE9+ support.
                 <br />
                 
            </p>
            </div>
        </div >
    }
};