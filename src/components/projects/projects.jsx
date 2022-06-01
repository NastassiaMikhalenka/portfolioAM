import React from 'react';
import classes from './projects.module.css';
import {Project} from "./project/project";
import {project1, project2, project3, project4, project5, project6, project7, project8, project9} from "./prodDescription";

export const Projects = () => {

    return (
        <>
            <div className={classes.projectsBlockDop} id={'projects'}></div>
            <section className={classes.projectsBlock}>
                <div className={classes.containerProjects}>
                    <h2 className={classes.titleProjects}>Projects</h2>
                    <div className={classes.projects}>
                        <Project project={project4}/>
                        <Project project={project9}/>
                        <Project project={project5}/>
                        <Project project={project7}/>
                        <Project project={project1}/>
                        {/*<Project project={project2}/>*/}
                        {/*<Project project={project3}/>*/}
                        {/*<Project project={project8}/>*/}
                    </div>
                </div>
            </section>
        </>
    )
}