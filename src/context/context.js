import React, { useState, useContext, useEffect } from "react";
import axios from "../axios/axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalAmt, setTotalAmt] = useState(0);
  const [categories, setCategories] = useState([])
  const [featuredItems, setFeaturedItems] = useState([])

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const getCategories = async () => {
    setIsLoading(true)
    let { data } = await axios.get(`/products/categories`);
    console.log(data);
    setCategories(data)
    setIsLoading(false)
  }


  useEffect(() => {
    getCategories()

  }, [])
  

  const getProducts = async () => {
    setIsLoading(true);
    let { data } = await axios.get(`/products`);
    console.log(data);
    let tenItems =  data.slice(0, 8);
    setProducts(data);
    setFeaturedItems(tenItems)
    setIsLoading(false);
  };

  const addToCart = (id) => {
    let currentProducts = products;
    let addedItem = currentProducts.find((product) => product.id === id);
    console.log(addedItem);
    let newCart;
    if (cart.some((e) => e.id === addedItem.id)) {
      newCart = [...cart];
      console.log(cart);
      /* vendors contains the element we're looking for */
    } else {
      console.log(cart);
      newCart = [...cart, { ...addedItem, amount: 1 }];
      console.log(newCart);
    }
    setCart(newCart);
  };

  const removeItem = (id) => {
    let newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const increaseItem = (id) => {
    let tempCart = cart.map((cartItem) => {
      if (cartItem.id === id) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      } else {
        return cartItem;
      }
    });
    setCart(tempCart);
  };

  const decreaseItem = (id) => {
    let tempCart = cart
      .map((cartItem) => {
        if (cartItem.id === id) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        } else {
          return cartItem;
        }
      })
      .filter((cartItem) => cartItem.amount !== 0);
    setCart(tempCart);
  };

  useEffect(() => {
    getProducts();
  }, []);


  useEffect(() => {
    const getTotals = () => {
      let { total, amount } = cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          console.log(price, amount);
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      total = parseFloat(total.toFixed(2));
      setTotalAmt(total);
      console.log(amount)
    };

    getTotals();
  }, [cart]);

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
        products,
        addToCart,
        cart,
        removeItem,
        closeCart,
        openCart,
        isCartOpen,
        isLoading,
        increaseItem,
        decreaseItem,
        totalAmt,
        categories,
        featuredItems
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
