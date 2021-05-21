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
  

















        
   <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 m-5">
      {products.map((item) => (
        <div class="flex flex-col items-center max-w-sm mb-5 mt-3 transition duration-500 ease-in-out hover:scale-110 transform cursor-pointer">
          <div
            class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            style={{
              backgroundImage:
              `url(${item.image})`,
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
  );
}
