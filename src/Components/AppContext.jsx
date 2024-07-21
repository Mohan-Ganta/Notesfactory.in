import { createContext,useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    // const [products,setProducts] = useState([])
    const [cartItems,setCartItems] = useState([
        {
          name: "Item1",
          Description: "Abcdefg",
          cost: 400,
          img: "https://www.andolasoft.com/images/new/famous-app/redbus-app.webp",
          category: "Books",
        },
        {
          name: "Item2",
          Description: "Abcdefg",
          cost: 100,
          img: "https://www.andolasoft.com/images/new/famous-app/redbus-app.webp",
          category: "Arts & Drawings",
        },
        {
          name: "Item3",
          Description: "Abcdefg",
          cost: 100,
          img: "https://www.andolasoft.com/images/new/famous-app/redbus-app.webp",
          category: "Source code",
        },
        {
          name: "Item4",
          Description: "Abcdefg",
          cost: 100,
          img: "https://www.andolasoft.com/images/new/famous-app/redbus-app.webp",
          category: "Books",
        },
      ])
    const addToCart = ()=>{
        const item = {
            name: "Itemaddedextra",
            Description: "Abcdefg",
            cost: 480,
            img: "https://www.andolasoft.com/images/new/famous-app/redbus-app.webp",
            category: "Books",
          }
        setCartItems([...cartItems,item])
    }
    const makePayment = (products)=>{
        console.log("payment for these products\n",products)
    }
  return (
    <AppContext.Provider value={{ cartItems,addToCart,makePayment}}>
      {children}
    </AppContext.Provider>
  );
};