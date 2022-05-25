import React, {useState, useEffect} from "react";
import Carousel, {slidesToShowPlugin, slidesToScrollPlugin} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./slides";
import "./Slider.css";
import QuizCards from "../../assets/QuizCards2.png";
import ToDoList from "../../assets/todolist.png";
import Gallery from "../../assets/gallery.png";
import AviaSales from "../../assets/Aviasales.png"

const Slider = () => {
    const prod = [
        {
            id: 1,
            title: 'Quiz Cards',
            description: `Teamwork. We've created Login, Registration, Profile, Packs Pages, etc. There is action to get and to learn cards. App includes allowing u to edit items, and sorting items.`,
            image: QuizCards,
            readMore: ' Read more info...',
            readMoreLink: `https://github.com/NastassiaMikhalenka/projectcards/blob/master/README.md`,
            stack: 'React, TypeScript, Redux, Redux-Thunk, react-router-dom, Axios.',
            link: 'https://nastassiamikhalenka.github.io/projectcards/',
            linkGitHub: 'https://github.com/NastassiaMikhalenka/projectcards',
        },
        {
            id: 2,
            title: 'ToDoList',
            description: `I've created app which includes allowing u to fetch the list of tasks, also u can edit tasks, and filtering the list of tasks between all, completed, and incomplete tasks.`,
            stack: 'React JS, TypeScript, Redux, Redux-Thunk, Axios, Material UI.',
            image: ToDoList,
            link: 'https://NastassiaMikhalenka.github.io/todolist/',
            linkGitHub: 'https://github.com/NastassiaMikhalenka/todolist',
        },
        {
            id: 4,
            title: 'The card game memory',
            description: `I've created App with the feature of changing level. The object of the game is to turn over pairs of matching cards.`,
            stack: 'React JS, TypeScript, Module CSS.',
            image: 'https://github.com/NastassiaMikhalenka/new-year-game/raw/master/src/assets/NewYear2.jpeg',
            link: 'https://nastassiamikhalenka.github.io/new-year-game/',
            linkGitHub: 'https://github.com/NastassiaMikhalenka/new-year-game',
        },
        { id: 4,
            title: 'AviaSales',
            description: 'Application lets you create custom process of searching tickets to flights.',
            image: AviaSales,
            stack: 'React JS, Redux, Redux-Thunk, Axios, Module CSS.',
            link: 'https://nastassiamikhalenka.github.io/aviasales/',
            linkGitHub: 'https://github.com/NastassiaMikhalenka/aviasales',
        },
        {
            id: 5,
            title: 'Gallery',
            description: 'Gallery lets you search pictures.',
            stack: 'React JS, React Hooks, Axios.',
            image: Gallery,
            link: 'https://nastassiamikhalenka.github.io/gallery/',
            linkGitHub: 'https://github.com/NastassiaMikhalenka/gallery',
        },
    ];

    const [imageData] = useState(prod);
    const [current, setCurrent] = useState(0);
    const [quote, getQuote] = useState(prod[current])

    useEffect(
        () => getQuote(imageData[current]),
        [current, quote]
    )

    const nextQuote = () => {
        if (current === imageData.length - 1) {
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    }

    const prevQuote = () => {
        if (current === 0) {
            setCurrent(imageData.length - 1)
        } else {
            setCurrent(current - 1)
        }
    }

    return (
        <div id="projects" className="carousel-container">
            <div className="carousel-title">
                <h2>My Projects</h2>
            </div>
            <div className="slide-container">
                <div className="slide-container_img">
                    <img src={prod[current].image} alt={''}/>
                </div>
                <div className={"btnPrevAndNext"}>
                    <a onClick={prevQuote} className={"prev"} id="prev">&#10094;</a>
                    <a onClick={nextQuote} className={"next"} id="next">&#10095;</a>
                </div>
                <div className="slide-desc">
                    <h2 className="slide-desc_title">{prod[current].title}</h2>
                    <p className="slide-desc_desc">{prod[current].description}</p>
                    <p className="slide-desc_desc"><b>Stack:</b> {prod[current].stack}</p>
                    <a href={prod[current].link} target="_blank"><i className="fa-solid fa-globe"></i></a>
                    <a href={prod[current].linkGitHub} target="_blank"><i className="fa-brands fa-github"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Slider;