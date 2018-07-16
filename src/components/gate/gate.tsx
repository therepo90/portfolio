import * as React from "react";
import { Component } from "react";

export default class Gate extends Component {

    render() {
        return <div className="gate-container">
            <div className="gate left">
                <img src="build/assets/gate/knocker-left.png" className="knocker" />
                <img src="build/assets/gate/eye-left-2.png" className="knocker eye" />
                <div className="shadow" />
            </div>
            <div className="gate right">
                <img src="build/assets/gate/knocker-left.png" className="knocker" />
                <img src="build/assets/gate/eye-left-2.png" className="knocker eye" />
                <div className="shadow" />
            </div>
        </div>
    }
}