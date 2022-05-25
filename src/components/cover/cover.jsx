import React from "react";
import styles from './cover.module.css'
import me from '../../assets/smallBW.jpg'
import Fade from 'react-reveal/Fade';

const Cover = () => {
    return (
        <div className={styles.coverContainer}>
            <Fade bottom>
            <h1>Anastasia</h1>
            <p>Developer | Designer | Content Creator | Entrepeneur </p>
            </Fade>
        </div>
    );
};

export default Cover;