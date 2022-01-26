import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem'
import { getGifs } from '../services/getGifs'

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    // componentDidMount
    useEffect(() => { 
        getGifs(category)
            .then(imgs => setImages(imgs));
    },[category]); // reload only when category changes

    return (
        <>
            <h3>{category}</h3> 
            <div className="card-grid">
                {
                    images.map(img => 
                        <GifGridItem 
                            key={img.id} 
                            {...img} //rest of component props
                        />
                    )
                }   
            </div>
        </>
    )
}