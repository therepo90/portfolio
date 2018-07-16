import * as React from "react";
import Main from './components/main';
import * as ReactDOM from 'react-dom';
const styles: string[] = [
    require('./base.css'),
    require('./components/sections.css'),
    require('./components/about-me/about-me.css'),
    require('./components/gate/gate.css'),
    require('./components/cut/cut.css')
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
