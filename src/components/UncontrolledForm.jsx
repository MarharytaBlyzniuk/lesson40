import React, { useRef } from "react";

const UncontrolledForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name:", nameRef.current.value);
        console.log("Email:", emailRef.current.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" ref={nameRef}/>
            </label>
            <label>
                Email:
                <input type="email" ref={emailRef}/>
            </label>

            <button type="submit">Submit</button>
        </form>
    );
};

export default UncontrolledForm;
