import React from "react";
import styles from './about.module.css'
import testing from '../../assets/testing.png'
import development from '../../assets/dev.png'
import design from '../../assets/design.png'
import Slide from 'react-reveal/Slide';

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.info}>
                <h1>Skills</h1>
                <div className={styles.containerSkills}>
                    <div className={styles.icon} style={{backgroundImage: `url(${development})`}}>
                    </div>
                    <div className={styles.icon} style={{backgroundImage: `url(${development})`}}>
                    </div>
                    <div className={styles.icon} style={{backgroundImage: `url(${development})`}}>
                    </div>
                </div>
            </div>


            {/*<Slide bottom>*/}
            {/*    <div className={styles.skillWrapper}>*/}
            {/*        <div className={styles.skill}>*/}
            {/*            <div className={styles.icon} style={{backgroundImage: `url(${development})`}}>*/}
            {/*            </div>*/}
            {/*            <p className={styles.text}>DEVELOPMENT</p>*/}
            {/*            <span className={styles.description}>JavaScript, TypeScript, React, Redux, HTML, CSS</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</Slide>*/}
            {/*<Slide bottom>*/}
            {/*    <div className={styles.skillWrapper}>*/}
            {/*        <div className={styles.skill}>*/}
            {/*            <div className={styles.icon} style={{backgroundImage: `url(${testing})`}}>*/}
            {/*            </div>*/}
            {/*            <p className={styles.text}>testing</p>*/}
            {/*            <span className={styles.description}>Jest, StoryBook</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</Slide>*/}
            {/*<Slide bottom>*/}
            {/*    <div className={styles.skillWrapper}>*/}
            {/*        <div className={styles.skill}>*/}
            {/*            <div className={styles.icon} style={{backgroundImage: `url(${design})`}}>*/}
            {/*            </div>*/}
            {/*            <p className={styles.text}>design</p>*/}
            {/*            <span className={styles.description}>Figma, Adobe Photoshop</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</Slide>*/}
        </div>
    );
};

export default About;