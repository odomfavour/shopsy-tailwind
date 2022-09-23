import React from "react";
// import axios from "../axios/axios";
import PageWrapper from "../layouts/PageWrapper";
// import headphone from "../images/product-38.png";
import { FiShoppingCart, FiXCircle } from "react-icons/fi";
import { useGlobalContext } from "../context/context";
import Loading from "../components/Loading";

const Shop = () => {
  const { products, addToCart, cart, removeItem, isLoading } =
    useGlobalContext();

  return (
    <PageWrapper>
      <section className="bg-[#f9f3f0] py-10">
        <div className="w-11/12 mx-auto">
          <div className="page-heading pt-32">
            <div className="flex items-between">
              <h2 className="text-[40px] font-bold">Explore All Products</h2>
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-11/12 mx-auto">
          <div className="flex items-center justify-between mt-10">
            <div className="w-1/6">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Select your country
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
            <div className="w-1/6">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Select your country
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div>
          </div>
          <div className="my-5">
            {isLoading ? (
              <Loading/>
            ) : (
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                {products.map((product) => {
                  const {
                    id,
                    description,
                    image,
                    price,
                    title,
                    rating: { rate },
                  } = product;
                  return (
                    <div
                      className="border rounded-md drop-shadow-lg px-4 pt-4 pb-20 text-center gap-3 bg-white relative"
                      key={id}
                    >
                      <img
                        src={image}
                        alt={description}
                        className="h-40  w-full object-scale-down"
                      />
                      <p className="mt-5 text-base text-center">{title.substring(0,36)}</p>
                      <p>{price}</p>
                      <p>{rate}</p>
                      <div className="flex justify-end mt-3 absolute bottom-3 right-3">
                        {cart.some((e) => e.id === product.id) ? (
                          <button
                            className="p-3 border-2 border-solid rounded-lg bg-gray-50 border-red-900 text-red-800"
                            onClick={() => removeItem(id)}
                          >
                            <FiXCircle />
                          </button>
                        ) : (
                          <button
                            className="p-3 border-2 border-solid rounded-lg bg-gray-50 border-gray-300"
                            onClick={() => addToCart(id)}
                          >
                            <FiShoppingCart />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Shop;
