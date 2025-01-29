import { useState, useEffect } from 'react'
import getBestsellers from './getBestsellers.jsx'
import Header from './Header.jsx'
import Hero from './Hero.jsx'

function App() {
    const [bestsellers, setBestsellers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [cart, setCart] = useState([]);

    function addToCart(item) {
        setCart([...cart, item]);
    }

    useEffect(() => {
        const fetchItems = async () => {
            const data = await getBestsellers();
            setBestsellers(data);
            setIsLoading(false);
        };

        fetchItems();
    }, []);

    if (isLoading) {
      return <p>Loading items...</p>;
  } else {
      return (
          <>
          <Header cart={cart}/>
          <Hero />
          <div className="bestsellers">
          <h1>Bestsellers</h1>
          <div className="card-container">
          {bestsellers.map((item) => (
            <div key={item.id} className="card">
          <p>{item.name}</p>
          <img src={item.image} alt={item.name} />
          <p>${item.price}</p>
          <button onClick={() => addToCart(item)}>Add to cart</button>
            </div>
          ))}
          </div>
          </div>
          </>
          )
  }
}

export default App
