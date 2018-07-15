import * as React from "react";
import { Component } from "react";
import AboutMe from "./about-me";
import Experience from "./experience";

export default class Main extends Component {
    render() {
        return <div className="page-container">
            <Experience />
        </div>
    }
};