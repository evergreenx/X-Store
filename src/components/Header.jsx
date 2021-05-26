import React from 'react'
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useStateValue } from "./Context/StateProvider";


export default function Header() {
  const [{ basket }, ] = useStateValue();

    return (
  
            
            <nav className="bg-white px-8 pt-2 shadow-md sticky top-0 z-50">
     <div className="-mb-px flex justify-center">
  

          <Link to="/" className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8" >
             Home
         </Link>
         <Link to="/products" className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" >
             Products
         </Link> 
       
         <Link to="/login" className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" >
             Log in
         </Link> 

         <Link to="/signup" className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" >
             Sign up
         </Link> 

      

         <Link to="/cart" className="justify-self-end no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8" >
         <FontAwesomeIcon icon={faCartArrowDown} />
         <span className="text-xs ">

         {basket?.length}

         </span>
         </Link>
       
        
       
     </div>
</nav>
       
    )
}
