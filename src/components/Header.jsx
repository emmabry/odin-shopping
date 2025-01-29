import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import search from '../assets/search.png';
import cartimg from '../assets/cart.png';

function Header({ cart }) {
  const navigate = useNavigate();

    return (
      <>
        <div className="header">
        <div>
            <button className="link" onClick={() => navigate('/shop')}>Shop</button>
            <button className="link" onClick={() => navigate('/shop/', { itemId: 1 })}>Clothes</button>
            <button className="link" onClick={() => navigate('/shop', { itemId: 2 })}>Shoes</button>
          </div>
          <h1>Stitch</h1>
          <div>
            <button className="link" onClick={() => navigate('/about')}>About</button>
            <button className="link" onClick={() => navigate('/contact')}>Contact</button>
            <button className="link" onClick={() => navigate('/search')}><img src={search} /></button>
            <button className="link" onClick={() => navigate('/cart', { state: { cart } })}><img src={cartimg} /></button>
          </div>
        </div>
      </>
    )
  }

  Header.propTypes = {
    cart: PropTypes.array
  };
  
  export default Header