import * as React from "react";
import { Component } from "react";

export default class Main extends Component {
    render() {
        return <div className="page-container">
            <div className="section about">
                <div className="section-header">
                    About me
                </div>
                <div className="section-content">
                    <div className="section-description">
                        Some desc
                    </div>
                </div>
            </div>
        </div>
    }
};