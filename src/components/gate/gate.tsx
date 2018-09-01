import * as React from "react";
import { Component } from "react";
import './gate.scss';

export default class Gate extends Component {

    render() {
        return <div className="gate-container">
            <div className="gate left">
                <img src="/assets/gate/knocker-left.png" className="knocker" />
                <img src="/assets/gate/eye-left-2.png" className="knocker eye" />
                <div className="shadow" />
            </div>
            <div className="gate right">
                <img src="/assets/gate/knocker-left.png" className="knocker" />
                <img src="/assets/gate/eye-left-2.png" className="knocker eye" />
                <div className="shadow" />
            </div>
        </div>
    }
}