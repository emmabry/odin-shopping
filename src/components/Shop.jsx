import getItems from './getItems';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

function Shop() {
    const location = useLocation();
    const itemId = location.state?.itemId || '';
    console.log(itemId);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            const data = await getItems({ num: itemId });
            setItems(data);
            setIsLoading(false);

        };

        fetchItems();
    }, [itemId]);

    if (isLoading) {
        return <p>Loading items...</p>;
    } else {
    return (
        <>
        <Header />
        <div className="shop-container">
            <h2>Shop</h2>
            <div className="card-container">
                {items.map((item) => (
                <div key={item.id} className="card">
                    <p>{item.name}</p>
                    <img src={item.image} alt={item.name} />
                    <p>${item.price}</p>
                    <button>Add to cart</button>
                </div>
            ))}
        </div>
        </div>
        </>
    )
}
}
Shop.propTypes = {
    category: PropTypes.string
};
export default Shop