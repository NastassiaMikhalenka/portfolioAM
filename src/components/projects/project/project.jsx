import React, {useEffect, useState} from 'react';
import styles from './project.module.css'
import Fade from 'react-reveal/Fade';
import github from '../../../assets/github.svg'
import link from '../../../assets/link2.svg'


export const Project = ({project}) => {
    const [imageData] = useState(project.image);
    const [current, setCurrent] = useState(0);
    const [quote, getQuote] = useState(imageData[current])

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
        <Fade bottom>
            <div className={styles.projectWrapper}>
                <div className={styles.card}>
                    <div className={styles.box}>
                        <img src={quote.image} alt={"#"}/>
                        <a onClick={prevQuote} className={styles.prev} id="prev">&#10094;</a>
                        <a onClick={nextQuote} className={styles.next} id="next">&#10095;</a>
                        <div className={styles.text_block}>
                            <h3 className={styles.title}>{project.title}</h3>
                            <p className={styles.description}>{project.description}<a href={project.readMoreLink}
                                                                                       target={'_blank'}>{project.readMore}</a>
                            </p>
                            <p className={styles.descriptionTechnology}>Technology: {project.stack}</p>
                        </div>
                    </div>
                    <div className={styles.buttons}>
                        <a href={project.link} target="_blank">
                            {/*<div className={styles.btnLink}></div>*/}
                            <img src={link} alt={'link'}/>
                        </a>
                        <a href={project.linkGitHub} target="_blank"><img
                            src={github} alt={'github'}/></a>
                    </div>
                </div>
            </div>
        </Fade>
    )
}