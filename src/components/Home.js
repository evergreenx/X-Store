import React, { useEffect, useState } from "react";
import axiosConfig from "../utilities/axiosconfig";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false)
  useEffect(() => {

    setloading(true)
    axiosConfig.get("Products").then((res) => {
      setProducts(res.data);
      setloading(false)
    });
  }, []);


  if(loading) return (
    <span>Loading</span>
  );
  return (
    <div class="container mx-auto px-5">
    
    <div class="flex flex-wrap -mx-2 mb-8">
      <div class="w-full md:w-1/3 lg:w-1/2 px-2 mb-4">
         <div class="text-sm text-grey-dark flex items-center justify-center">
         <div class="flex flex-col items-center justify-center max-w-sm mx-auto mt-3">
          <div
            class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)",
            }}
          ></div>

          <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 class="py-2 px-3 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white truncate">
           lagos
            </h3>

            <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
              <span class="font-bold text-gray-800 dark:text-gray-200">
               Nigeria
              </span>
              <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                Add to cart
              </button>
            </div>
          </div>
        </div>
         </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
         <div class="border h-12 text-sm text-grey-dark flex items-center justify-center">
            <p>full / half / quarter</p>
         </div>
      </div>
      <div class="w-full lg:w-1/2 px-2">
         <div class="border h-12 text-sm text-grey-dark flex items-center justify-center">
            <p>full / half</p>
         </div>
      </div>
   </div>

















   <div class="flex flex-wrap -mx-2 mb-8">
      <div class="w-full md:w-1/3 lg:w-1/2 px-2 mb-4">

        

      {products.map((item) => (
        <div class="flex flex-col items-center max-w-sm mt-3">
          <div
            class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)",
            }}
          ></div>

          <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 class="py-2 px-3 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white truncate">
              {item.title}
            </h3>

            <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
              <span class="font-bold text-gray-800 dark:text-gray-200">
                ${item.price}
              </span>
              <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}


      </div>
      </div>
    </div>
  );
}
