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
        </div>
    );
};