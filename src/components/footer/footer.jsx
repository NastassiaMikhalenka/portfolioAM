import React from "react";
import styles from "./footer.module.css";
import {Form} from "./form";

const Footer = () => {
    return (
        <footer id="contacts" className={styles.footer}>
            <div className={styles.footerContainer}>
                <h3 className={styles.footerContact}>Contact me</h3>
                <div className={styles.footerWrapper}>
                    <div className={styles.infoContainer}>
                        <div className={styles.contactInfo}>
                            <div className={styles.listItem}><i className="fa fa-map-marker"><span
                                className={`${styles.contactText} ${styles.place}`}>Minsk, Belarus</span></i></div>
                            <div className={styles.listItem}><i className="fa fa-phone"><span
                                className={`${styles.contactText} ${styles.place}`}><a
                                href="tel:375-44-536-9943">+375(44)5369943</a></span></i></div>
                        </div>
                        <Form/>
                    </div>
                    <div className={styles.snsLinks}>
                        <a href="https://t.me/iamnast" target="_blank" rel="noreferrer" className={styles.icon}>
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/nast-mikh/" target="_blank" rel="noreferrer" className={styles.icon}>
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/NastassiaMikhalenka" target="_blank" rel="noreferrer" className={styles.icon}>
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="mailto:anastasiyamihalenko@gmail.com" target="_blank" rel="noreferrer" className={styles.icon}>
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;