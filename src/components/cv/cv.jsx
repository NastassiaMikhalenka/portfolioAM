import React from "react";
import styles from './cv.module.css'
import me from '../../assets/smallBW.jpg'

const Cv = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerWrapper}>
                <div>
                    <img src={me}/>
                    <h4>Skills</h4>
                    <p>React & Redux</p>
                    <p>TypeScript, JS</p>
                    <p>Redux-Thunk, Redux-Toolkit</p>
                    <p>Axios, REST API, Postman</p>
                    <p>MUI, Fluent UI</p>
                    <p>HTML5, CSS3</p>
                    <p>Unit tests, StoryBook</p>
                    <p>Git</p>
                    <p>ссылки</p>
                </div>
                <div>
                    <h2>Anastasia</h2>
                    <h3>Frontend developer</h3>
                    <h4>Objective</h4>
                    <p>I'm a self-motivated frontend developer with experience in developing, testing a single-page app. Currently, I'm using technologies such as React/js, JavaScript, TypeScript, HTML5, CSS3, Redux, Redux-Thunk, etc. Basic knowledge of Angular, NodeJS, MongoDB, Express.
                        I'm focused on developing my engineering skills and speaking english. Interested to be part of the project for full-time work.</p>

                    <h4>Work Experience</h4>
                    <p>
                        Learning cards [code] [link]
                        Developing a single-page app using React, Redux, Redux-Thunk, Axios, TS for best coding control, etc. Implementing UI-components, building business logic, integrating with the API server and creating an HTTP requests, creating a responsive, flexible layout, testing with unit tests, debugging on components.

                        Todolist [code] [link]
                        Developing a SPA by React using component library Material UI.  Building business logic. Working in using ReactJS code for creating requests retrieving, updating, and deleting an item using REST API. Integrating Formik for it handles state, validation, and submissions forms. Bug fixing and refactoring code to optimize the application. Covering code with unit tests. Creating a responsive, flexible layout.

                        Front office manager, Willing Hotel, Minsk 2019-2022
                        Responsibility for accuracy of data input into the company booking system and charging accounts as required.
                        Training of employees and their adaptation in the team.
                    </p>
                    <h4>Education</h4>
                    <p>
                        •	Frontend developer (React, Redux, JS, TS)
                        IT-INCUBATOR, 2021
                        •	Frontend developer (HTML, CSS, JS)
                        MyItSchool, 2020-2021
                        •	Bachelor of Hospitality and Tourism Management
                        Belarusian State University of Physical Culture, 2016
                    </p>
                    <h4>Languages</h4>
                    <p>English - B1 (in progress)</p>
                </div>
            </div>
        </div>
    );
};

export default Cv;