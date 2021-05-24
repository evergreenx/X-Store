import React from 'react'
import {useParams} from 'react-router-dom'

export default function ProductDetails() {

    const {account} = useParams();
    // console.log('id is ',id);

    // const thisProduct = productsData.find(prod => prod.id === id)
    
    return (
        <div className="text-white h-96">
            

            <h1>

                {account}
            </h1>
        </div>
    )
}
