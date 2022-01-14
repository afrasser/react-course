import PropTypes from 'prop-types';
import { useState } from 'react'

//destructuring inside the parameters
const FirstComponent = ({number = 0}) => {
    
    // Hook
    const [counter, setCounter] = useState(0);

    const handleAdd = () => {
        setCounter(counter + 1);
        //setCounter((c) => c + 1);
    }

    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(number);
    }

    return (
        <>
            <h1>{counter}</h1>
            <p>Hello there!</p>
            {/* <button onClick={(e)=>{handleAdd(e)} }>Add</button> */}
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubstract}>Substrac</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}

FirstComponent.propTypes = {
    number: PropTypes.number
}

export default FirstComponent;