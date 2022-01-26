import React, { useState } from 'react'
import AddCategoy from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = () => {

    // const categories = ['One Punch Man', 'Samuray X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch'])

    const handlerAddCategory = () => {
        setCategories([...categories, 'HunterXHunter']);
    }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategoy setCategories={setCategories}/>
            <hr></hr>

            <button onClick={handlerAddCategory}>Agregar</button>

            <ol>
                {
                    categories.map((category, index) => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GiftExpertApp;