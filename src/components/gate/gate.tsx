import * as React from "react";
import { Component } from "react";
import './gate.scss';

export default class Gate extends Component {

    render() {
        return <div className="gate-container">
            <div className="gate gate--left">
                <img src="/assets/gate/knocker-left.png" className="gate__knocker" />
                <img src="/assets/gate/eye-left-2.png" className="gate__knocker gate__knocker--eye" />
                <div className="gate__shadow" />
            </div>
            <div className="gate gate--right">
                <img src="/assets/gate/knocker-left.png" className="gate__knocker" />
                <img src="/assets/gate/eye-left-2.png" className="gate__knocker gate__knocker--eye" />
                <div className="gate__shadow" />
            </div>
        </div>
    }
}