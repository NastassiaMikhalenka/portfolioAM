import React, {useEffect, useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import styles from './form.module.css'

export const Form = () => {
    const form = useRef();
    const [result, setResult] = useState(false)
    const [error, setError] = useState(false)


    let timer = setTimeout(() => {
        if (result) {
            setResult(false)
        }
    }, 3000)

    useEffect(() => {
        return () => {
            clearTimeout(timer)
        }
    }, [result])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2sg94qs', 'template_b3t176w', form.current, 'DO9iD8AYiDpbx8USn')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        setResult(true)
    };

    const finalAreaClassNameAria = `${styles.superTextArea} ${error && styles.errorTextArea}`
    const finalInputClassNameInput = `${styles.superInput} ${error && styles.errorInput}`

    return (
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <label>Name</label>
            <input type="text" name="from_name" className={finalInputClassNameInput} required={true}/>
            <label>Email</label>
            <input type="email" name="email" className={finalInputClassNameInput} required={true}/>
            <label>Message</label>
            <textarea name="message" maxLength={500} className={finalAreaClassNameAria} required={true}/>
            <input type="submit" value="Send" className={styles.bnt}/>
            <div className={styles.done}>
                {result ? <span>Отправлено</span> : null}
            </div>
        </form>
    );
};