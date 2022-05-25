import React, {useState, useEffect } from "react";
import './App.css';
import Cover from "./components/cover/cover";
import {Nav} from "./components/nav/nav";
import About from "./components/about/about";
import Info from "./components/info/info";
import Footer from "./components/footer/footer";
import Slider from "./components/projects/slider";
import Cv from "./components/cv/cv";

function App() {
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollHeight(position);
    };

    const handleScrollDown = () => {
        const position = window.pageXOffset;
        setScrollHeight(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // window.addEventListener("scroll", handleScrollDown);
    }, [scrollHeight]);

  return (
      <div>
          <Nav isScrolling={scrollHeight} />
          <Cover />
          <About />
          <Slider/>
          <Info />
          <Footer />
          {/*<Cv/>*/}
      </div>
  );
}

export default App;
