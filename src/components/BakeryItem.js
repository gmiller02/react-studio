// TODO: create a component that displays a single bakery item
function BakeryItem({ item, addToCart }) {

    return (
      <div className="bakery-item">
        <img src ={item.image} alt={item.image}></img>
        <p>{item.name} - ${item.price} </p>
        <p>{item.description}</p>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    );
  }
  
  export default BakeryItem;