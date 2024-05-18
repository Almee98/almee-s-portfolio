import React, { useState } from 'react';
import './index.scss';
import axios from "axios";

const TestimonialForm = () => {

    // defining a state. This makes our variable, 'image', "reactive", as in, it reacts to state change
    const [image, setImage] = useState();

    // defines what happens when this field receives an input.
    const onInputChange = (e) => {
        console.log(e.target.files[0])
        setImage(e.target.files[0])
    };

    const formSubmit = async (e) => {
        // to prevent page from reloading (default behaviour is to reload the page)
        e.preventDefault()

        // The FormData() constructor creates a new FormData object.
        // the FormData object will be populated with the form's current keys/values using the name property
        // of each element for the keys and their submitted value for the values. It will also encode file
        // input content.
        const formData = new FormData()
        formData.append("image", image)

        // From here, the data goes to API that is defined in the backend.
        try {
            const result = await axios.post(
                "http://localhost:5000/upload-image",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            console.log(result.data); // Log the response data
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
    <div className='container'>
        {/* method passed in onSubmit will be invoked */}
        <form onSubmit={formSubmit}>
            <div className='input-group'>
                <label for='firstName'>First Name</label>
                <input type='text' name='firstName' id='firstName'></input>
            </div>
            <div className='input-group'>
                <label for='lastName'>Last Name</label>
                <input type='text' name='lastName'></input>
            </div>
            <div className='input-group'>
                <label for='feedback'>Feedback</label>
                <input type='text' name='feedback'></input>
            </div>
            {/* method passed in onChange will be invoked and change of state will happend, as defined in the onInputChange method */}
            <input type='file'accept='image/*' onChange={onInputChange}></input>
            <button className='submit-btn' type='submit'>Submit</button>
        </form>
    </div>
);
};

export default TestimonialForm;