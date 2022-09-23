import React from "react";
// import Header from "../components/Header";
import headphone from "../images/product-38.png";
import whiteHeadpone from "../images/poster-03.png";
import { FaFire, FaTags, FaMobileAlt, FaRing, FaTshirt, FaUserTie, FaShippingFast, FaBriefcase, FaPiedPiperAlt, FaRegLifeRing } from "react-icons/fa";
import { FiShoppingCart, FiXCircle } from "react-icons/fi";
import PageWrapper from "../layouts/PageWrapper";
import { useGlobalContext } from "../context/context";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const Index = () => {
  const {categories, isLoading, addToCart, removeItem, featuredItems, cart} = useGlobalContext();
  return (
    <PageWrapper>
      <section>
        <div className="bg-[#f9f3f0] min-h-screen">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col md:flex-row pt-24">
              <div className="md:w-1/2 w-full flex items-center order-2 md:order-1">
                <div>
                  <p className="text-sm text-pink-700 flex items-center">
                    <FaFire className="mr-1" /> Hot deals for the week
                  </p>
                  <h4 className="lg:text-7xl md:text-5xl text-4xl font-bold md:my-11 my-5">
                    Roco wireless <br></br> Headphones
                  </h4>
                  <button className="px-10 py-3 bg-white rounded-md flex items-center">
                    <span className="mr-2">
                      <FiShoppingCart />
                    </span>
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 w-full order-1 md:order-2">
                <img src={headphone} className="w-fit" alt="" />
              </div>
            </div>
          </div>
        </div>
        <section className="pt-24">
          <div className="w-11/12 mx-auto">
            <p className="text-sm text-pink-700 flex items-center">
              <FaTags className="mr-1" /> Categories
            </p>
            <h2 className="text-4xl mb-5 font-semibold">
              Browse by Categories
            </h2>
            <div className="my-5">
              { isLoading ? <Loading/> :  <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                {categories.map((category, index) => {
                   return (
                    <div className="border rounded-md drop-shadow-lg p-4 text-center gap-3" key={index}>
                   { category === 'electronics' ? <FaMobileAlt className="text-5xl mx-auto text-[#4f125af0]"/>: category === 'jewelery' ?
                   <FaRing className="text-5xl mx-auto text-[#aea156]"/> : category === "men's clothing" ?
                   <FaUserTie className="text-5xl mx-auto text-[#10053e]"/> : <FaTshirt className="text-5xl mx-auto text-[#ce4e81]"/>}
                   <p className="mt-5 text-base text-center capitalize font-semibold">{category}</p>
                 </div>
                   )
                }) }
              </div>}
             
            </div>
          </div>
        </section>
        <section className="pt-24">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col-reverse md:flex-row bg-fuchsia-200 md:p-20 p-5 mt-16">
              <div className="md:w-1/2 w-full flex items-center">
                <div>
                  <p className="text-sm text-pink-700 flex items-center">
                    <FaTags className="mr-1" /> Our Products
                  </p>
                  <h2 className="md:text-4xl text-2xl mb-5 font-semibold">
                    Enhance your<br></br> experience
                  </h2>
                  <button className="md:px-10 px-5 py-3 bg-fuchsia-900 text-white rounded-md flex items-center">
                    Check it out!
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <div className="-mt-[130px]">
                  <img src={whiteHeadpone} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-24">
          <div className="w-11/12 mx-auto">
            <p className="text-sm text-pink-700 flex items-center">
              <FaTags className="mr-1" /> Our Products
            </p>
            <h2 className="md:text-4xl text-2xl mb-5 font-semibold">
              Explore Our Products
            </h2>
            <div className="my-5">
            {isLoading ? (
              <Loading/>
            ) : (
              <div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                {featuredItems.map((product) => {
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
                      className="border rounded-md drop-shadow-lg px-4 pt-4 pb-8 gap-3 bg-white relative"
                      key={id}
                    >
                      <img
                        src={image}
                        alt={description}
                        className="h-40  w-full object-scale-down"
                      />
                      <p className="mt-5 text-base text-left font-semibold">{title.substring(0,36)}</p>
                      <p className="text-base font-bold">${price}</p>
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
              <div className="flex justify-end mt-8">
                <Link to="/shop" className="md:px-10 px-5 py-3 bg-fuchsia-900 text-white rounded-md flex items-center">
                    View All
                  </Link>
              </div>
              </div>
            )}
          </div>
          </div>
        </section>
        <section className="pt-24">
          <div className="w-11/12 mx-auto">
            <p className="text-sm text-pink-700 flex items-center justify-center font-semibold mb-5">
              <FaTags className="mr-1" /> Our Products
            </p>
            <h4 className="md:text-4xl text-2xl text-center mb-5">
              Why People Choose Us
            </h4>
            <div className="flex flex-col md:flex-row">
              <div className="lg:w-1/4 md:w-1/2 w-full mb-8">
                <div className="flex items-center">
                  <div className="mr-3">
                    <FaShippingFast className="text-3xl font-bold text-fuchsia-700" />
                  </div>
                  <div className="">
                    <p className="text-xl font-bold">Fast & Secure Delivery</p>
                    <p>Tell about your service.</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full mb-8">
                <div className="flex items-center">
                  <div className="mr-3">
                    <FaBriefcase className="text-3xl font-bold text-fuchsia-700" />
                  </div>
                  <div className="">
                    <p className="text-xl font-bold">Money Back Guarantee</p>
                    <p>Within 10 days.</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full mb-8">
                <div className="flex items-center">
                  <div className="mr-3">
                    <FaPiedPiperAlt className="text-3xl font-bold text-fuchsia-700" />
                  </div>
                  <div className="">
                    <p className="text-xl font-bold">24 Hour Return Policy</p>
                    <p>No question ask.</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full mb-8">
                <div className="flex items-center">
                  <div className="mr-3">
                    <FaRegLifeRing className="text-3xl font-bold text-fuchsia-700" />
                  </div>
                  <div className="">
                    <p className="text-xl font-bold">Pro Quality Support</p>
                    <p>24/7 Live support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-24">
          <div className="w-11/12 mx-auto">
            <div className="flex min-h-[400px] lg:py-20 p-5 bg-news-pattern bg-cover bg-center bg-no-repeat rounded-md">
              <div className="md:w-1/2 w-full flex items-center">
                <div className="w-full">
                  <p className="text-sm text-pink-700 flex items-center">
                    <FaTags className="mr-1" /> Our Products
                  </p>
                  <h2 className="md:text-4xl text-2xl mb-5 font-semibold">
                    Get weekly update
                  </h2>
                  <form action="">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/3 w-full ">
                        <input
                          type="text"
                          name="price"
                          id="price"
                          className="block w-full rounded-md border-gray-300 py-3 md:text-[19.5px] px-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm md:mb-0 mb-5"
                          placeholder="0.00"
                        />
                      </div>
                      <div className="md:w-1/3 w-1/2">
                        <button className="lg:px-10 px-2 py-3 bg-fuchsia-900 text-white rounded-md flex items-center">
                          Check it out!
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="w-1/2 hidden md:block"></div>
            </div>
          </div>
        </section>
      </section>
    </PageWrapper>
  );
};

export default Index;
