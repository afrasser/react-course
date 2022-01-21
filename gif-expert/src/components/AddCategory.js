import React, { useState } from 'react';

const AddCategoy = () => {

    const [inputValue, setInputValue] = useState('Hello World');

    const handleInputChange = (e) => {
        const {value} = e.target;
        setInputValue(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('it works')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            >
            </input>
        </form>
    )
}

export default AddCategoy;