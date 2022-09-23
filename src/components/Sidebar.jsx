import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/context";

const Sidebar = () => {
  const {closeSidebar, isSidebarOpen} = useGlobalContext()
  return (
    <aside className={`${isSidebarOpen ? 'fixed top-0 h-full bg-white z-50 md:w-1/4 w-1/2 transition-all ease-out delay-50 duration-100' : '-translate-x-1/2 transition-all ease-out delay-50 duration-100 hidden'}`}>
        <div className="flex items-center justify-between p-3 mt-5">
            <h5 className="text-xl font-bold">Shopsy</h5>
            <button onClick={closeSidebar}><FaTimes className="text-red-500" /></button>
        </div>
      <ul className="pl-3 space-y-2">
        <li className="mb-2">
          <Link to="/" className="">Home</Link>
        </li>
        <li className="">
          <Link to="#">About</Link>
        </li>
        <li className="">
          <Link to="#">Shop</Link>
        </li>
        <li className="">
          <Link to="#">Accounts</Link>
        </li>
        <li className="">
          <Link to="#">Login/Signup</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
