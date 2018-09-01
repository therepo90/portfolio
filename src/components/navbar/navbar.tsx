import * as React from "react";
import { Component } from "react";
import './navbar.scss';

export default class Navbar extends Component {

    render() {
        return <div className="navbar">
            <div className="navbar-links">
                <a href="https://www.youtube.com/channel/UCGaMIyiWInKQV6CeKPTePyA"><img src="/assets/icons/yt2.png" className="navbar-img filled" /></a>
                <a href="https://github.com/therepo90"><img src="/assets/icons/github.png" className="navbar-img filled" /></a>
                <a href="mailto: tomasz.szepczynski@gmail.com"><img src="/assets/icons/email.png" className="navbar-img filled"/></a>
                <a href="https://www.linkedin.com/in/tomasz-sz1000000/"><img src="/assets/icons/linkedin.png" className="navbar-img filled" style={{padding: '0.25rem'}} /></a>
            </div>
        </div>
    }
}