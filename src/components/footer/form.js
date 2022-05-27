import React from 'react'


function Form() {
    return (
        <form action={"/contact"} name={"contact"} method={"post"}>
            <input type="hidden" name="form-name" value="contact" />
            <div>
                <input type={"text"} name={"name"} placeholder={"name"}/>
            </div>
            <div>
                <input type={"text"} name={"email"} placeholder={"email"}/>
            </div>
            <div>
                <textarea placeholder={"message"} name={"message"}/>
            </div>
            <button type={"submit"}>Send</button>

        </form>
    );
}

export default Form;