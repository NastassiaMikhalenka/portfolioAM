import React, {useEffect, useState} from 'react';
import classes from './project.module.css'
import Fade from 'react-reveal/Fade';
import github from '../../../assets/github.png'
import link from '../../../assets/link.png'


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
            <div className={classes.projectWrapper}>
                <div className={classes.card}>
                    <div className={classes.box}>
                        <img src={quote.image} alt={"#"}/>
                        <a onClick={prevQuote} className={classes.prev} id="prev">&#10094;</a>
                        <a onClick={nextQuote} className={classes.next} id="next">&#10095;</a>
                        <div className={classes.text_block}>
                            <h3 className={classes.title}>{project.title}</h3>
                            <p className={classes.description}>{project.description}<a href={project.readMoreLink}
                                                                                       target={'_blank'}>{project.readMore}</a>
                            </p>
                            <p className={classes.descriptionTechnology}>Technology: {project.stack}</p>
                        </div>
                    </div>
                    <div className={classes.buttons}>
                        <a href={project.link} target="_blank"><img
                            src={link} alt={'link'}/></a>
                        <a href={project.linkGitHub} target="_blank"><img
                            src={github} alt={'github'}/></a>
                    </div>
                </div>
            </div>
        </Fade>
    )
}