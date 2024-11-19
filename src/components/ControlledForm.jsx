import React, { useState } from "react";

const ControlledForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subscribe: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                ИМЯ:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                ПОШТА:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Подтвердить:
                <input
                    type="checkbox"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">ОТПРАВИТЬ</button>
        </form>
    );
};

export default ControlledForm;
