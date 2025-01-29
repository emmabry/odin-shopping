import { useLocation } from 'react-router-dom';
import Header from './Header';

function Cart() {
  const location = useLocation();
  const cart = location.state?.cart || [];

  return (
    <>
    <div>
      <Header cart={cart} />
      <h1>Your Cart</h1>
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <img src={item.image} alt={item.name} />
              <p>${item.price}</p>
            </div>
          ))}
        </div>
    </div>
    { cart.length === 0 && 
    <div>
    <p>Your cart is currently empty.</p>
    <button>Continue shopping</button>
    </div>
    }
    </>
  );
}

export default Cart;