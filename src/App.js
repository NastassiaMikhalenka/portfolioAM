import React, {useState, useEffect} from "react";
import './App.css';
import {Cover} from "./components/cover/cover";
import {Nav} from "./components/nav/nav";
import Info from "./components/info/info";
import Footer from "./components/footer/footer";
import {Projects} from "./components/projects/projects";
import {Skills} from "./components/skills/skills";

function App() {
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollHeight(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [scrollHeight]);

    return (
        <>
            <Nav isScrolling={scrollHeight}/>
            <Cover/>
            <Skills/>
            <Projects/>
            <Info/>
            <Footer/>
        </>
    );
}

export default App;
