import React, {useState} from "react";
import styles from './nav.module.css'
import hamburgerOpen from '../../assets/hamburgerOpen.png'
import hamburgerClose from '../../assets/hamburgerClose.png'
import {Link, animateScroll as scroll} from "react-scroll";


const arrTitles = ['home', 'skills', 'projects', 'contacts']

export const Nav = ({isScrolling}) => {
    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    };


    const toTheBottom = () => {
        window.scrollTo({top: 10000, left: 0, behavior: "smooth"});
    };

    const inputClass = isScrolling > 20 ? styles.navbar + ' ' + styles.scrolling : styles.navbar

    const [open, setOpen] = useState(false)

    const handlerClick = (e) => {
        e.preventDefault()
        setOpen(!open)
    }

    return (
        <>
            <div className={inputClass}>
                <div className={styles.navbarLogo} onClick={toTheTop}>
                    Anastasia
                </div>
                <div className={styles.containerNav}>
                    <nav className={open ? styles.navigation + ' ' + styles.active : styles.navigation}>
                        <ul>
                            <li><Link
                                to={'projects'}
                                smooth={true}
                                duration={500}
                            >Projects</Link></li>
                            <li><Link onClick={toTheBottom}>Contacts</Link></li>
                        </ul>
                        <div>
                            <button>View CV</button>
                        </div>
                    </nav>
                </div>
                <div className={styles.hamburger}>
                    {
                        open
                            ?
                            <i className="fa-solid fa-xmark" onClick={handlerClick}></i>

                            :
                            <i className="fa-solid fa-bars" onClick={handlerClick}></i>

                    }
                </div>
            </div>
        </>
    );
};
