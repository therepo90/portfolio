import * as React from "react";

const IMAGE_PATHS = [
    // backgrounds
    ...[1,10,12,13,14,15,16,17,18,19,2,20,22,23,3,4,5,6,7,8,9].map(n => `/assets/backgrounds/bg${n}.jpg`),
    // games
    '/assets/games/alggen.jpg','/assets/games/competence.jpg','/assets/games/cv1.jpg','/assets/games/cv2.jpg','/assets/games/cv3.jpg','/assets/games/cv4.jpg','/assets/games/cv5.jpg','/assets/games/droidz.png','/assets/games/flash1.jpg','/assets/games/flash10.jpg','/assets/games/flash2.jpg','/assets/games/flash3.jpg','/assets/games/flash4.jpg','/assets/games/flash5.jpg','/assets/games/flash6.jpg','/assets/games/flash7.jpg','/assets/games/flash8.jpg','/assets/games/flash9.jpg','/assets/games/game-calc.PNG','/assets/games/game-civic.jpg','/assets/games/game-delforce.PNG','/assets/games/game-gra.PNG','/assets/games/game-izo.jpg','/assets/games/game-klawisz.PNG','/assets/games/game-komorka.PNG','/assets/games/game-konkurs.PNG','/assets/games/game-literaki.jpg','/assets/games/game-ogl.jpg','/assets/games/game-oneproj.jpg','/assets/games/game-strzelnica (1).PNG','/assets/games/game-strzelnica.PNG','/assets/games/game-sudo.jpg','/assets/games/game-wezyk.PNG','/assets/games/logi.png','/assets/games/tanki.jpg','/assets/games/webgl.png','/assets/games/wp7.jpg',
    // icons
    '/assets/icons/angular2.png','/assets/icons/as.png','/assets/icons/as2.png','/assets/icons/chrome.png','/assets/icons/cookiesblock.png','/assets/icons/cpp.png','/assets/icons/csharp.png','/assets/icons/email.png','/assets/icons/github.png','/assets/icons/heart.png','/assets/icons/heart2.png','/assets/icons/html-css.png','/assets/icons/html-js-css-2.png','/assets/icons/html-js-css.png','/assets/icons/html.png','/assets/icons/java.png','/assets/icons/java2.png','/assets/icons/linkedin.png','/assets/icons/med.png','/assets/icons/node.png','/assets/icons/ogre.png','/assets/icons/panda.png','/assets/icons/react-redux.png','/assets/icons/rolls.png','/assets/icons/st.jpg','/assets/icons/subs.jpg','/assets/icons/teide5.jpeg','/assets/icons/twt.png','/assets/icons/unity.png','/assets/icons/unity2.png','/assets/icons/vb.png','/assets/icons/warsztat-icon.jpg','/assets/icons/yt1.png','/assets/icons/yt2.png',
    // gate
    '/assets/gate/eye-left-2.png','/assets/gate/gate10.jpg','/assets/gate/knocker-left.png','/assets/gate/knocker1.png',
    // single images
    '/assets/agh-2.png','/assets/agh.jpg','/assets/ard.png','/assets/ionic.png','/assets/japa.jpg','/assets/me.jpg','/assets/sell.png','/assets/tree3000.png','/assets/zsd.png',
];

function getRandomImages(count: number): string[] {
    var arr = IMAGE_PATHS.slice();
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr.slice(0, count);
}

interface PrivateStuffState {
    images: string[];
}

class PrivateStuff extends React.Component<{}, PrivateStuffState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            images: getRandomImages(12)
        };
    }

    reload = () => {
        this.setState({ images: getRandomImages(12) });
    };

    render() {
        var images = this.state.images;
        return (
            <div className="private-stuff-wrapper" style={{padding:'3em 0',textAlign:'center'}}>
                <button className="private-btn" style={{marginBottom:'2em'}} onClick={this.reload}>Losuj inne</button>
                <div style={{display:'flex',flexWrap:'wrap',gap:'1.5em',justifyContent:'center'}}>
                    {images.map(function(src: string) {
                        return <img key={src} src={src} alt="private" style={{maxWidth:'220px',maxHeight:'220px',objectFit:'cover',borderRadius:'10px',boxShadow:'0 2px 12px #0002'}} />;
                    })}
                </div>
            </div>
        );
    }
}

export default PrivateStuff;
