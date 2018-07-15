import * as React from "react";
import { Component } from "react";
import AboutMe from "./about-me";
import EarlyYears from "./early-years";

export default class Main extends Component {
    render() {
        return <div className="page-container">
            <EarlyYears />
        </div>
    }
};