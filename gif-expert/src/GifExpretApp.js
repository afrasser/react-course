import { useState } from 'react'

const GiftExpertApp = () => {

    // const categories = ['One Punch Man', 'Samuray X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch Man', 'Samuray X', 'Dragon Ball'])

    const handlerAddCategory = () => {
        setCategories([...categories, 'HunterXHunter']);
    }

    return (
        <>
            <h2>GiftExpertApp</h2>
            <hr></hr>

            <button onClick={handlerAddCategory}>Agregar</button>

            <ol>
                {
                    categories.map((category, index) => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}

export default GiftExpertApp;