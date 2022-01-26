import React, { useState } from 'react';

const AddCategoy = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Hello World');

    const handleInputChange = (e) => {
        const {value} = e.target;
        setInputValue(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.length > 0) {
            // calling high order componen function
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('');
            console.log('it works');
        }
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