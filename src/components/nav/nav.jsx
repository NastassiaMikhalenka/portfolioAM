import React, {useState} from "react";
import styles from './nav.module.css'
import {Link} from "react-scroll";


export const Nav = ({isScrolling}) => {
    const toTheTop = () => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
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
                            <li><Link
                                to={'contacts'}
                                smooth={true}
                                duration={500}
                            >Contacts</Link></li>
                        </ul>
                        <div>
                            <a target="_blank"
                               href={"https://drive.google.com/file/d/11an072D4aW2E81wvOQYu-_9qk-WI9Y0A/view?usp=sharing"}>
                                <button>View CV</button>
                            </a>
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
