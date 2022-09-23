import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import CartContainer from "../components/CartContainer";
// import Alert from "../components/Alert";

const PageWrapper = ({children}) => {
  return (
    <section className="relative">
      <Header />
      <section>
        {children}
      </section>
      <Sidebar/>
      <Footer />
      <CartContainer/>
      {/* <Alert/> */}
    </section>
  );
};

export default PageWrapper;
