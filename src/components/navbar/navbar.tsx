import * as React from "react";
import { Component } from "react";
import './navbar.scss';

export default class Navbar extends Component {

    render() {
        return <div className="navbar">
            <div className="navbar__links">
                <a target="_blank" href="https://www.youtube.com/channel/UCGaMIyiWInKQV6CeKPTePyA"><img src="/assets/icons/yt2.png" className="navbar__img navbar__img--filled" /></a>
                <a target="_blank" href="https://github.com/therepo90"><img src="/assets/icons/github.png" className="navbar__img navbar__img--filled" /></a>
                <a target="_blank" href="mailto: tomasz.szepczynski@gmail.com"><img src="/assets/icons/email.png" className="navbar__img navbar__img--filled"/></a>
                <a target="_blank" href="https://www.linkedin.com/in/tomasz-sz1000000/"><img src="/assets/icons/linkedin.png" className="navbar__img navbar__img--filled" style={{padding: '0.25rem'}} /></a>
            </div>
        </div>
    }
}