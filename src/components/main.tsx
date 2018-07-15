import * as React from "react";
import { Component } from "react";

export default class Main extends Component {
    render() {
        return <div className="page-container">
            <div className="section">
                <div className="about">
                    <div className="section-header">
                        About me
                </div>
                </div>
            </div>
            <div className="section">
                <div className="experience">
                    <div className="section-header">
                        My experience
                </div>
                </div>
            </div>
        </div>
    }
};