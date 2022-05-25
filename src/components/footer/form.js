import React from 'react'
import {useFormik} from "formik";
import axios from "axios";


function Form() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        onSubmit: value => {
            console.log({
                name: value.name,
                email: value.email,
                message: value.message,
            })
            formik.resetForm()
            axios.post("https://frozen-garden-08252.herokuapp.com/sendMessage", {
                // axios.post("http://localhost:3300/sendMessage", {
                name: value.name,
                email: value.email,
                message: value.message,
            })
                .then((res, req) => {
                    alert(res.data)
                })
        }
    })


    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input
                    type={"text"}
                    placeholder={"Name"}
                    {...formik.getFieldProps('name')}
                />
                <input
                    type={"text"}
                    placeholder={"Email"}
                    {...formik.getFieldProps('email')}
                />
            </div>
            <textarea
                placeholder={"Your message"}
                {...formik.getFieldProps('message')}/>

            <button type={'submit'}>
                Send Message
            </button>
        </form>
    );
}

export default Form;