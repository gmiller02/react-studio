import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js"; 

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="App">
      <h1>Grace's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div classname="pageContent">

      <div className="BakeryItems">
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem 
          item={item}
          addToCart={addToCart}/> 
      ))}
      </div>
     
        <div className="Cart">
        <h2>Cart</h2>
        <ul>
        {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        {/* TODO: render a list of items in the cart */}
        <p>Total: ${totalPrice.toFixed(2)}</p> 
        </div>
    </div>
    </div>
  );
}

export default App;
