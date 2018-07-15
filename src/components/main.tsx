import * as React from "react";
import { Component } from "react";
import AboutMe from "./about-me";
import EarlyYears from "./early-years";
import EarlyYearsCont from "./early-years-cont";

export default class Main extends Component {
    render() {
        return <div className="page-container">
            { /* <AboutMe /> */ }
            { /* <EarlyYears /> */ }
            <EarlyYearsCont />
        </div>
    }
};