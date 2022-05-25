import React from "react";
import "./Slider.css";
import AviaSales from '../../assets/Aviasales.png'
import Gallery from '../../assets/gallery.png'
import ToDoList from '../../assets/todolist.png'
import QuizCards from '../../assets/QuizCards2.png'
import Trevland from '../../assets/Trevland1.jpeg'

const slidesInfo = [
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
        id: 1,
        title: 'ToDoList',
        description: `I've created app which includes allowing u to fetch the list of tasks, also u can edit tasks, and filtering the list of tasks between all, completed, and incomplete tasks.`,
        stack: 'React JS, TypeScript, Redux, Redux-Thunk, Axios, Material UI.',
        image: ToDoList,
        link: 'https://NastassiaMikhalenka.github.io/todolist/',
        linkGitHub: 'https://github.com/NastassiaMikhalenka/todolist',
    },
    {
        id: 1,
        title: 'AviaSales',
        description: 'Application lets you create custom process of searching tickets to flights.',
        image: AviaSales,
        stack: 'React JS, Redux, Redux-Thunk, Axios, Module CSS.',
        link: 'https://nastassiamikhalenka.github.io/aviasales/',
        linkGitHub: 'https://github.com/NastassiaMikhalenka/aviasales',
    },
    {
        id: 1,
        title: 'The card game memory',
        description: `I've created App with the feature of changing level. The object of the game is to turn over pairs of matching cards.`,
        stack: 'React JS, TypeScript, Module CSS.',
        image: 'https://github.com/NastassiaMikhalenka/new-year-game/raw/master/src/assets/NewYear2.jpeg',
        link: 'https://nastassiamikhalenka.github.io/new-year-game/',
        linkGitHub: 'https://github.com/NastassiaMikhalenka/new-year-game',
    },
    {
        id: 1,
        title: 'Gallery',
        description: 'Gallery lets you search pictures.',
        stack: 'React JS, React Hooks, Axios.',
        image: Gallery,
        link: 'https://nastassiamikhalenka.github.io/gallery/',
        linkGitHub: 'https://github.com/NastassiaMikhalenka/gallery',
    },
];

const slides = slidesInfo.map((slide) => (
    <div className="slide-container">
        <img src={slide.image} alt={''}/>
        <div className="slide-desc">
            <p>{slide.title}</p>
            <p>{slide.description}</p>
            <p>{slide.stack}</p>
            <a href={slide.link} target="_blank">Link</a>
            <a href={slide.linkGitHub} target="_blank">GithubLink</a>
        </div>
    </div>
));

export default slides;