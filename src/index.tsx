import * as React from "react";
import Main from './components/main';
import * as ReactDOM from 'react-dom';
const styles: string[] = [
    require('./base.scss'),
    require('./components/sections.scss'),
    require('./components/navbar/navbar.scss'),
    require('./components/about-me/about-me.scss'),
    require('./components/gate/gate.scss'),
    require('./components/cut/cut.scss')
];

const stylesEl = document.createElement('style');
stylesEl.innerHTML = styles.reduce((acc, prev) => {
    return `${acc} \n ${prev}`;
}, '');
document.head.appendChild(stylesEl);

ReactDOM.render(
    <Main />,
    document.getElementById("app-root")
);
