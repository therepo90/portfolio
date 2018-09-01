import * as React from "react";
import { Component } from "react";
import './cut.scss';

export default class Cut extends Component {
    render() {
        return <div className="svg-container">
            <svg viewBox="0 0 100 100" width="100%" height="110" className="svg" preserveAspectRatio="none">
                <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'rgb(255,255,255)', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: 'rgb(0,0,0)', stopOpacity: 1 }} />
                </linearGradient>
                <path d="M0,100 L100,100 L100,0 z" fill="black" />
            </svg>
        </div>
    }
};