import * as React from "react";
import { Component } from "react";

const images: any[] = [
    '/assets/games/cv1.jpg',
    '/assets/games/cv2.jpg',
    '/assets/games/cv3.jpg',
    '/assets/games/cv4.jpg',
    '/assets/games/cv5.jpg',
];


export default class JobsCont5 extends Component {

    render() {
        return <div className="section jobs-cont-5">
            <div className="section-header">
                Years 2024-2025
                </div>
            <div className="section-main-description">
                <p>
                    I was living in Wroclaw for a year, checking what's like to live in this beautiful city. I enjoyed it but
                    turns out my heart beats for Cracow.
                    Been roaming around Europe for some months falling in love with Spain and
                    planning to spare time between Poland and Spain in the future.
                    <br/><br/>
                    <img src="/assets/zsd.png" className="image-near-text filled"/>
                    Been working for some AdTech Company on some high-throughput data processing systems.
                    I'll get back to it later.
                    <br/>

                <br/>
                    <img src="/assets/sell.png" className="image-near-text filled"/>
                    I've been spending much more time working on financialpanda and some times working on fixes and features for my other apps.
                    As a side-effect my private cloud services has been created. Small, efficient, right small tools to do the job.
                    <br/>
                        If you dig deeper into the tools you want to use most of the time you end up not needing 95% of the features and the
                        configuration/resources overhead is just not worth it.
                        Currently im running just 2 small 4-8GB VPS running ~30 services each.
                        Sometimes I can't believe how basic stuff are missing,not working or are overpriced - still plenty of room for devs.
                     <br/>
                    I must say lots of the software currently just sucks. Both as a user and as a developer.
                    Where are all the devs that care? Bootcampers aren't going to fill up the gap. Or maybe people don't need working software right now.
                </p>

                <br/><br/>
                <img src="/assets/ard.png" className="image-near-text filled"/>
                I've been through 20 hours of electronics workshops in Warsaw and got fascinated with it.
                I've created a couple of mini projects with Arduino, ESP32 and Raspberry Pi.
                One of them was an end-to-end real product - a secret box gift which opens if you pass the riddle. <br/>
                Will post vids/pics later.

                <br/>Ah.. almost forgot - created lots of youtube financial videos for my financialpanda app <br/>
                <p style={{minHeight:'unset'}}>Some notable projects I remember creating this year:</p>



                <ul style={{overflowX: 'hidden'}}>
                    <li>
                        <a href="https://zwierzakszukadomu.pl/#about">https://zwierzakszukadomu.pl</a>  - been volunteering in Wroclaw animal shelter.
                    </li>
                    <li>
                        <a href="https://psacery.zwierzakszukadomu.pl/tabs/tab1">https://psacery.zwierzakszukadomu.pl/ </a> - app for managing dog walks for animal shelter volunteers in Cracow (+hybrid android app)
                    </li>
                    <li>
                        <a href="https://sellyoursaas.idontknowhatimdoing.com/app">https://sellyoursaas.idontknowhatimdoing.com/app </a> - app for promoting boring stuff
                    </li>
                    <li>
                        <a href="http://deletesocialmedia.idontknowhatimdoing.com/">http://deletesocialmedia.idontknowhatimdoing.com/ </a> - ...and this
                    </li>
                </ul>
            </div>
        </div>
    }
};
