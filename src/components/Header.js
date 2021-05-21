import React from 'react'
import {Router,Link} from 'react-router-dom'

export default function Header() {
    return (
  
            
            <nav className="bg-white px-8 pt-2 shadow-md">
     <div className="-mb-px flex justify-center">
  

          <Link to="/" className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8" >
             Home
         </Link>
         <Link to="/products" className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" >
             Products
         </Link> 
       
        
       
     </div>
</nav>
       
    )
}
