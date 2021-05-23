import React from 'react'
import {useParams} from 'react-router-dom'

export default function ProductDetails() {


    const {id} = useParams();
    console.log('id is ',id);

    // const thisProduct = productsData.find(prod => prod.id === id)
    
    return (
        <div>
            
<h1>

    Hello world 
</h1>
            <h1>

                {id}
            </h1>
        </div>
    )
}
