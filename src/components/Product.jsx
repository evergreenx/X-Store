import React, { useEffect, useState } from "react";
import axiosConfig from "../utilities/axiosconfig";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useStateValue } from "./Context/StateProvider";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);
  const [{ basket }, dispatch] = useStateValue();
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    setloading(true);

    try {
      let response = await axiosConfig.get("Products?sort=desc");
      setProducts(response.data);
    } catch (err) {
      setError(err.message);
    }
    setloading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading)
    return (
      <>
        <div className="fixed top-0 w-full bg-orange-100 border-b-2 border-gray-300 z-20">
          <div className="relative">
            <button className="fixed inset-0 h-full w-full bg-gray-900 opacity-75 cursor-default z-20"></button>
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
    );
  return (
    <>
      <Header />

      <div className="container mx-auto px-5">
        {error && (
          <div
            class="bg-red-100 border border-red-400 text-red-700 mt-5 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong class="font-bold">Holy smokes! </strong>
            <span class="block sm:inline">
             {error} try again
            </span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
             
            </span>
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 m-5">
          {products.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center max-w-sm mb-5 mt-3 mx-5 transition duration-500 ease-in-out hover:scale-110 transform cursor-pointer"
            >
              <div
                className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>

              <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <Link to={"/" + item.id}>
                  <h3 className="py-2 px-3 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white truncate">
                    {item.title}
                  </h3>
                </Link>

                <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                  <span className="font-bold text-gray-800 dark:text-gray-200">
                    ${item.price}
                  </span>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_BASKET",
                        item: {
                          id: item.id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                        },
                      });
                    }}
                    className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-green-800 rounded hover:bg-green-700 dark:hover:bg-green-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
