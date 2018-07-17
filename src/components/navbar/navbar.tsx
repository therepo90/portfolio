import * as React from "react";
import { Component } from "react";

export default class Navbar extends Component {

    render() {
        return <div className="navbar">
            <div className="navbar-links">
                <a href="https://www.youtube.com/channel/UCGaMIyiWInKQV6CeKPTePyA"><img src="build/assets/icons/yt2.png" className="navbar-img filled" /></a>
                <a href="https://github.com/therepo90"><img src="build/assets/icons/github.png" className="navbar-img filled" /></a>
                <a href="mailto: tomasz.szepczynski@gmail.com"><img src="build/assets/icons/email.png" className="navbar-img filled"/></a>
            </div>
        </div>
    }
}