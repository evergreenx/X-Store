import React from "react";
import Header from "./Header";
import { useStateValue } from "./Context/StateProvider";

export default function Cart() {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);

  return (
    <>
      <Header />
      <div className="mx-auto z-30 w-full mt-20 container flex flex-col items-center">


        {basket.length > 0 ? (
          basket.map((product) => (
            <div className="bg-white p-2 w-80 max-w-3xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 mb-10">
              <div
                //   style={background: url("https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)}

                style={{
                  backgroundImage: `url(${product.image})`,
                }}
                className="h-48 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover "
              ></div>
              <div className="flex sm:flex-1 flex-col gap-2 p-1">
                <h1 className="text-lg sm:text-xl font-semibold  text-gray-600">
                  {product.title}
                </h1>

                <span className="text-gray-600">
                    ${product.price}
                </span>
                <p className="text-gray-500 text-sm sm:text-base line-clamp-3">
               
                </p>

                <button
                  className="text-green-300 border-2 border-green-200 hover:border-blue-200 hover:text-white hover:bg-red-500 p-2 rounded-lg focus:outline-none transition duration-500 ease-in-out "
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_BASKET",
                      id: product.id,
                    })
                  }
                >
                  Remove Product
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1 className="font-bold text-2xl mt-10 animate-pulse">Product added to cart will show here </h1>
        )}
      </div>
    </>
  );
}
