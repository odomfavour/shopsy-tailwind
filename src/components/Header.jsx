import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { FaUserAlt, FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context/context";

const Header = () => {
    const {openSidebar, cart, openCart} = useGlobalContext()
  return (
    <section className="fixed top-1 z-40 pt-3 w-full">
      <div className="w-11/12 mx-auto">
        <div className="">
          <div className="relative">
            <nav className="flex justify-between items-center py-5 md:px-10 px-3 bg-[#fff] rounded-md shadow-lg shadow-[0 2px 10px 0 rgb(0 0 0 / 10%)] z-40">
              <h3 className="md:text-3xl text-2xl flex items-center font-semibold">
                {" "}
                Shopsy{" "}
                <span className="ml-1 hidden md:block">
                  <FiShoppingCart />
                </span>
              </h3>
              <div className="lg:block hidden">
                <ul className="flex justify-between items-center">
                  <li className="mr-8">
                    <Link to="/" className="font-medium text-base">
                      Home
                    </Link>
                  </li>
                  <li className="mr-8">
                    <Link to="/about" className="font-medium text-base">
                      About
                    </Link>
                  </li>
                  <li className="mr-8">
                    <Link to="/shop" className="font-medium text-base">
                      Shop
                    </Link>
                  </li>
                  <li className="">
                    <Link to="/contact" className="font-medium text-base">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex items-center">
                <div className="mr-5">
                  <FiSearch className="md:text-2xl text-xl" role="button" />
                </div>
                <div className="mr-5 relative">
                  <FiShoppingCart
                    className="md:text-2xl text-xl"
                    role="button"
                    onClick={openCart}
                  />
                  {/* <div className="animate-ping absolute bg-red-400 text-xs text-white -top-[15px] -right-[15px] rounded-full py-[3px] px-[6px]"></div> */}
                  {cart.length > 0 && <div className="flex items-center justify-center absolute bg-red-400 text-xs text-white -top-[13px] -right-[13px] rounded-full py-[3px] px-[6px]">{cart.length}</div>}
                </div>
                <div className="mr-5">
                  <FaUserAlt className="md:text-2xl text-xl" role="button" />
                </div>
                <div className="block lg:hidden">
                  <FaBars className="md:text-2xl text-xl" role="button" onClick={openSidebar} />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
