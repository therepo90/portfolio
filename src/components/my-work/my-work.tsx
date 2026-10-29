import * as React from "react";
import { Component } from "react";
import './my-work.scss';
import { ROUTES } from "../../constants";

interface Project {
    title: string;
    screenshot?: string;
    description: string;
    // some old projects are offline, they stay listed without a link
    link?: string;
    // logos and avatars are square, so they are shown smaller than page screenshots
    logo?: boolean;
    // a card that stands for a bunch of projects (e.g. "Flash games") shows all of their screenshots
    gallery?: string[];
}

interface ProjectGroup {
    title: string;
    projects: Project[];
}

const projectGroups: ProjectGroup[] = [
    {
        title: 'YouTube',
        projects: [
            {
                title: 'RepoGamesStudio',
                screenshot: '/assets/projects/yt-repogamesstudio.jpg',
                description: 'Programming stuff. Made in Poland. Computer graphics, shaders and game experiments.',
                link: 'https://www.youtube.com/@repogamesstudio2366',
                logo: true,
            },
            {
                title: 'Financial Panda',
                screenshot: '/assets/projects/yt-financialpanda.jpg',
                description: 'Stock market videos (in Polish) made for my Financial Panda app.',
                link: 'https://www.youtube.com/@Financial_Panda',
                logo: true,
            },
        ],
    },
    {
        title: 'Chrome extensions',
        projects: [
            {
                title: 'RemoveAnnoyance',
                screenshot: '/assets/projects/removeannoyance.png',
                description: 'A Chrome / Brave extension that removes cookie and GDPR dialogs, newsletter popups and push prompts ' +
                    'before you see them. Its own engine for uBlock Origin / AdGuard filters clicks "Reject" in consent dialogs for you.',
                link: 'https://chromewebstore.google.com/detail/removeannoyance/ilncbckmakgicbccafjhlpmpnaphanap',
            },
            {
                title: 'CookiesBlock',
                screenshot: '/assets/icons/cookiesblock.png',
                description: 'A Chrome extension that blocked cookie banners on websites.',
                logo: true,
            },
            {
                title: 'WhoAmI',
                screenshot: '/assets/projects/whoami.jpg',
                description: 'Your digital mirror - an extension that recommends books, movies, series, games, courses and local events ' +
                    'based on your browsing history.',
                link: 'https://whoami.idontknowhatimdoing.com/',
            },
        ],
    },
    {
        title: 'WebDev',
        projects: [
            {
                title: 'Financial Panda',
                screenshot: '/assets/projects/financialpanda.jpg',
                description: 'A set of stock analysis tools for the Polish (GPW, NewConnect) and US (NASDAQ, NYSE) markets: ' +
                    'an AI reader of financial reports, insider transactions, stock signals and more.',
                link: 'https://financialpanda.org',
            },
            {
                title: 'TeidePermit',
                screenshot: '/assets/projects/teidepermit.jpg',
                description: 'Instant e-mail alerts when a permit frees up for Pico del Teide, Masca Gorge Trail or Caminito del Rey - ' +
                    'no more refreshing the reservation page every minute.',
                link: 'https://teidepermit.eu',
            },
            {
                title: 'Translate subtitles',
                screenshot: '/assets/projects/translatesubtitles.jpg',
                description: 'Translate subtitle files online with AI, for free.',
                link: 'https://translatesubtitles.org',
            },
            {
                title: 'restapitools.com',
                screenshot: '/assets/projects/restapitools.jpg',
                description: 'Free online REST API tools for images and video: concatenating videos, 9x16 conversion, watermarks, ' +
                    'resizing, uploads, base64 and YouTube thumbnails - no account required.',
                link: 'https://restapitools.com',
            },
            {
                title: 'Sell your SaaS',
                screenshot: '/assets/sell.png',
                description: 'An app for promoting boring stuff.',
                logo: true,
            },
            {
                title: 'DeleteSocialMedia',
                screenshot: '/assets/projects/deletesocialmedia.jpg',
                description: 'How many people have deleted Facebook and Instagram.',
                link: 'https://deletesocialmedia.idontknowhatimdoing.com',
            },
            {
                title: 'ZwierzakSzukaDomu.pl',
                screenshot: '/assets/projects/zwierzakszukadomu.jpg',
                description: 'The website of the volunteers of the Wroclaw animal shelter - dogs and cats waiting for a new home.',
                link: 'https://zwierzakszukadomu.pl',
            },
            {
                title: 'Psacery',
                screenshot: '/assets/projects/psacery.jpg',
                description: 'An app for managing dog walks for animal shelter volunteers in Cracow, plus a hybrid Android app.',
                link: 'https://psacery.zwierzakszukadomu.pl/',
            },
            {
                title: 'One Day of Fame',
                description: 'A big sunshine ball that filled up with every visit. The last person to enter got a chunk of the page ' +
                    'for the whole day.',
            },
        ],
    },
    {
        title: 'Programming',
        projects: [
            {
                title: 'Shadertoy',
                screenshot: '/assets/icons/st.jpg',
                description: 'GLSL shaders. I took part in some shader contests and got some good places.',
                link: 'https://www.shadertoy.com/user/therepo90',
                logo: true,
            },
        ],
    },
    {
        title: 'Games',
        projects: [
            {
                title: 'Makrel giełdowy',
                screenshot: '/assets/projects/makrel-feature-graphic.jpg',
                description: 'An Android stock market game (in Polish) where fish rule the market. Trade virtual shares of fictional ' +
                    'underwater companies, react to news that move the prices and climb the ranking of two-week seasons.',
                link: 'https://play.google.com/store/apps/details?id=com.repogamesstudio.makrel',
                gallery: [
                    '/assets/projects/makrel-screen-1-gielda.jpg',
                    '/assets/projects/makrel-screen-2-spolka.jpg',
                    '/assets/projects/makrel-screen-3-portfel.jpg',
                    '/assets/projects/makrel-screen-4-jak-grac.jpg',
                ],
            },
            {
                title: 'Cursed Valley',
                screenshot: '/assets/projects/cursedvalley.jpg',
                description: 'A Unity game made with a team found on gamedev.pl. We showed it at "Let\'s play Częstochowa", ' +
                    'Good Game Expo Warsaw and Digital Dragons Cracow.',
                link: 'https://www.youtube.com/watch?v=JorVn1ZvSmA',
                gallery: [
                    '/assets/games/cv1.jpg',
                    '/assets/games/cv2.jpg',
                    '/assets/games/cv3.jpg',
                    '/assets/games/cv4.jpg',
                    '/assets/games/cv5.jpg',
                ],
            },
            {
                title: 'Unity Asset Store',
                screenshot: '/assets/projects/unityassetstore.jpg',
                description: 'Assets I publish on the Unity Asset Store as RepoGames.',
                link: 'https://assetstore.unity.com/publishers/25578',
            },
            {
                title: 'SpazzyBall',
                screenshot: '/assets/games/wp7.jpg',
                description: 'A Windows Phone 7 game in C# that reached 10 000 downloads in a year.',
            },
            {
                title: 'Flash games',
                screenshot: '/assets/games/flash1.jpg',
                description: 'About 30 ActionScript games made in a 7-person student company during college.',
                gallery: [
                    '/assets/games/flash1.jpg',
                    '/assets/games/flash2.jpg',
                    '/assets/games/flash3.jpg',
                    '/assets/games/flash4.jpg',
                    '/assets/games/flash5.jpg',
                    '/assets/games/flash6.jpg',
                    '/assets/games/flash7.jpg',
                    '/assets/games/flash8.jpg',
                    '/assets/games/flash9.jpg',
                    '/assets/games/flash10.jpg',
                ],
            },
            {
                title: 'C++ / OpenGL games',
                screenshot: '/assets/games/game-ogl.jpg',
                description: 'Games made in high school with C++, SFML, SDL and OpenGL, published on warsztat.gd.',
                link: 'https://warsztat.gd/user/lastseeds/projects',
                gallery: [
                    '/assets/games/game-civic.jpg',
                    '/assets/games/game-izo.jpg',
                    '/assets/games/game-literaki.jpg',
                    '/assets/games/game-ogl.jpg',
                    '/assets/games/game-oneproj.jpg',
                    '/assets/games/game-sudo.jpg',
                ],
            },
            {
                title: 'Visual Basic games',
                screenshot: '/assets/games/game-strzelnica.PNG',
                description: 'My first bunch of games, made in Visual Basic 6 in 2004-2005.',
                gallery: [
                    '/assets/games/game-calc.PNG',
                    '/assets/games/game-delforce.PNG',
                    '/assets/games/game-gra.PNG',
                    '/assets/games/game-klawisz.PNG',
                    '/assets/games/game-komorka.PNG',
                    '/assets/games/game-konkurs.PNG',
                    '/assets/games/game-strzelnica.PNG',
                    '/assets/games/game-wezyk.PNG',
                ],
            },
        ],
    },
    {
        title: 'Electronics',
        projects: [],
    },
    {
        title: 'Career',
        projects: [],
    },
];

export default class MyWork extends Component {
    renderProject(project: Project) {
        return <div key={project.title} className="project bordered-container">
            {project.screenshot && (project.link
                ? <a target="_blank" href={project.link}>{this.renderScreenshot(project)}</a>
                : <span>{this.renderScreenshot(project)}</span>)}
            <div className="project__info">
                <div className="project__title">{project.title}</div>
                <p className="project__description">{project.description}</p>
                {project.gallery && <div className="project__gallery">
                    {project.gallery.map(image => <a key={image} target="_blank" href={image}>
                        <img src={image} className="project__thumbnail"/>
                    </a>)}
                </div>}
                {project.link && <a target="_blank" href={project.link}>{project.link}</a>}
            </div>
        </div>;
    }

    renderScreenshot(project: Project) {
        return <img src={project.screenshot} className={'project__screenshot' + (project.logo ? ' project__screenshot--logo' : '')} />;
    }

    render() {
        return <div className="section my-work">
            <div className="section-header">
                My work
            </div>
            <div>
                <a href={`#${ROUTES.HOME}`} className="my-work__back">&larr; Back to about me</a>
            </div>
            <div className="my-work__list">
                {projectGroups.map(group => <div key={group.title} className="my-work__group">
                    <div className="my-work__group-title">{group.title}</div>
                    {group.projects.length
                        ? <div className="my-work__grid">{group.projects.map(project => this.renderProject(project))}</div>
                        : <p className="my-work__empty">Coming soon.</p>}
                </div>)}
            </div>
        </div>
    }
};
