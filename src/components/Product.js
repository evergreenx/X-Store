import React, { useEffect, useState } from "react";
import axiosConfig from "../utilities/axiosconfig";
import {Link , Redirect , useHistory} from 'react-router-dom'
import Header from "./Header";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setloading(true);
    axiosConfig.get("Products").then((res) => {
      setProducts(res.data);
      console.log(res.data)
      setloading(false);
    }).catch(err =>{
      // alert('there seem to be a error' ,err[0] ,  )

      // <Redirect to={'/'}/>

      history.push('/')


    });
  }, []);

  if (loading) return(

    <>
  <div
      className="fixed top-0 w-full bg-orange-100 border-b-2 border-gray-300 z-20"
    >
      <div className="relative">
        <button
          className="fixed inset-0 h-full w-full bg-gray-900 opacity-75 cursor-default z-20"
        ></button>

<h1>
        Loading .....
      </h1>
      </div>
    </div>
{/* 
    <div className="flex my-4 content-center xl:mx-auto mx-1">
      <div className="hidden xl:block w-1/6 bg-red-400 h-12"></div>
      <div className="w-full xl:w-3/6 bg-gray-500 h-12"></div>
      <div className="hidden xl:block w-2/6 bg-blue-400 h-12">
        <div
          className="fixed max-w-sm rounded overflow-hidden border-2 border-gray-300 mt-20 z-10"
        >
          
        </div>
      </div>
    </div> */}
    </>
  ) 
  return (
    <>
    <Header/>

    <div className="container mx-auto px-5">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 m-5">
        {products.map((item) => (
<Link to={'/' + item.id}>

          <div key={item.id} className="flex flex-col items-center max-w-sm mb-5 mt-3 mx-5 transition duration-500 ease-in-out hover:scale-110 transform cursor-pointer">
            <div
              className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            ></div>
            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">

              <h3 className="py-2 px-3 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white truncate">
                {item.title}
              </h3>

              <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span className="font-bold text-gray-800 dark:text-gray-200">
                  ${item.price}
                </span>
                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
</Link>

        ))}
      </div>
    </div>
    </>
  );
}
