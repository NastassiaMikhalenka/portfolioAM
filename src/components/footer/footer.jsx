import React from "react";
import styles from "./footer.module.css";
import telegram from '../../assets/telegram.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import axios from "axios";
import Form from "./form";

const Footer = () => {

    return (
        <footer id="contacts" className={styles.footer}>
            <div className={styles.footerInfo}>
                <h1>Anastasia</h1>
                <p>Minsk, Belarus</p>
            </div>
            <div className={styles.footerContact}>
                <h3>Contact me</h3>
                {/*<p>And let's get down to work</p>*/}
            </div>
            <div>
                <Form/>
            </div>

            <div className={styles.footerSns}>
                <div className={styles.designBy}>And let's get down to work</div>
                <div className={styles.snsLinks}>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.facebook}>
                        <i className="fa-brands fa-telegram"></i>
                        {/*<img className={styles.facebook} src={telegram}/>*/}
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className={styles.facebook}>
                        <i className="fa-brands fa-linkedin"></i>
                        {/*<img className={styles.facebook} src={github}/>*/}
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.facebook}>
                        <i className="fa-brands fa-github facebook"></i>
                        {/*<img className={styles.facebook} src={linkedin}/>*/}
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.facebook}>
                        <i className="fa-solid fa-envelope"></i>
                        {/*<img className={styles.facebook} src={linkedin}/>*/}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;