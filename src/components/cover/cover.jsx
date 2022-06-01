import React from "react";
import styles from './cover.module.css';
import Fade from 'react-reveal/Fade';

export const Cover = () => {
    return (
        <div className={styles.coverContainer}>
            <Fade bottom>
                <h1>Anastasia</h1>
                <p>Frontend Developer</p>
            </Fade>
            <div className={styles.snsLinks}>
                <a href="https://www.linkedin.com/in/nast-mikh/" target="_blank" rel="noreferrer" className={styles.icon}>
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/NastassiaMikhalenka" target="_blank" rel="noreferrer" className={styles.icon}>
                    <i className="fa-brands fa-github facebook"></i>
                </a>
            </div>
        </div>
    );
};