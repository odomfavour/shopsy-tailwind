import React from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import emptyCart from "../images/empty.png";

const CartContainer = () => {
  const { closeCart, isCartOpen, cart, increaseItem, decreaseItem, totalAmt } =
    useGlobalContext();
  return (
    <section
      className={`${
        isCartOpen
          ? "fixed top-0 right-0 h-full bg-white z-50 md:w-2/5 w-full transition-all ease-out delay-50 duration-100 px-6 overflow-y-auto"
          : "-translate-x-1/2 transition-all ease-out delay-50 duration-100 hidden"
      }`}
    >
      <div className="flex items-center justify-between mt-8 mb-3">
        <h4 className="text-3xl font-bold">Cart review</h4>
        <div
          className="rounded-full p-3 bg-[#f6f7fb]"
          role="button"
          onClick={closeCart}
        >
          <FaTimes />
        </div>
      </div>
      <hr />
      {cart.length > 0 ? <div className="cart-parent">
        <section>
          {cart.map((product) => {
            const {
              id,
              description,
              image,
              price,
              title,
              amount,
              rating: { rate },
            } = product;
            return (
              <div className="cart-holder" key={id}>
                <div className="flex justify-between items-center gap-3 mb-3">
                  <div className="w-[25%]">
                    <div className="flex mt-2 gap-3 items-center">
                      <div className="image-box w-full p-4 border rounded-md shadow bg-white">
                        <img
                          src={image}
                          alt={description}
                          className="w-full object-scale-down"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[73%]">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/3 w-full">
                        <p className="text-sm">{rate}</p>
                        <h4 className="md:text-xl text-base font-semibold">{title}</h4>
                        <p className="text-base">${price}</p>
                      </div>
                      <div className="flex items-center justify-between md:w-1/3 w-2/3 pr-3">
                        <div
                          className="rounded-full p-1 bg-[#f6f7fb]"
                          role="button"
                          onClick={() => decreaseItem(id)}
                        >
                          <FaMinus />
                        </div>
                        <p>{amount}</p>
                        <div
                          className="rounded-full p-1 bg-[#f6f7fb]"
                          role="button"
                          onClick={() => increaseItem(id)}
                        >
                          <FaPlus />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </section>
        <section className="mt-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-3xl">Subtotal:</h3>
            <h3 className="text-2xl font-semibold">${totalAmt}</h3>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <Link
                to="#"
                className="md:px-10 px-5 py-3 bg-blue-900 text-white rounded-md flex items-center justify-center font-semibold"
              >
                View Cart
              </Link>
            </div>
            <div>
              <Link
                to="#"
                className="md:px-10 px-5 py-3 bg-red-900 text-white rounded-md flex items-center justify-center font-semibold"
              >
                Checkout
              </Link>
            </div>
          </div>
        </section>
      </div> : <div className="h-[60vh] px-4">
        <img src={emptyCart} alt="" className="object-scale-down" />
        <p className="text-xl my-3 text-red-500 text-center">Your cart is empty</p>
        </div>}
    </section>
  );
};

export default CartContainer;
