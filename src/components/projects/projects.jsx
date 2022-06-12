import React from 'react';
import styles from './projects.module.css';
import {Project} from "./project/project";
import {project1, project2, project3, project4, project5, project6, project7, project8, project9, project10} from "./prodDescription";

export const Projects = () => {

    return (
        <>
            <div className={styles.projectsBlockDop} id={'projects'}></div>
            <section className={styles.projectsBlock}>
                <div className={styles.containerProjects}>
                    <h2 className={styles.titleProjects}>Projects</h2>
                    <div className={styles.projects}>
                        <Project project={project4}/>
                        <Project project={project9}/>
                        <Project project={project5}/>
                        <Project project={project10}/>
                        <Project project={project7}/>
                        <Project project={project1}/>
                        {/*<Project project={project2}/>*/}
                        <Project project={project3}/>

                        {/*<Project project={project8}/>*/}
                    </div>
                </div>
            </section>
        </>
    )
}