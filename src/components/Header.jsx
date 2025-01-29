import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Header({ cart }) {
  const navigate = useNavigate();

    return (
      <>
        <div className="header">
        <div>
            <button className="link" onClick={() => navigate('/shop')}>Shop</button>
            <button className="link" onClick={() => navigate('/clothes')}>Clothes</button>
            <button className="link" onClick={() => navigate('/shoes')}>Shoes</button>
          </div>
          <h1>Stitch</h1>
          <div>
            <button className="link" onClick={() => navigate('/about')}>About</button>
            <button className="link" onClick={() => navigate('/contact')}>Contact</button>
            <button className="svg-link" onClick={() => navigate('/search')}>Search</button>
            <button className="svg-link" onClick={() => navigate('/cart', { state: { cart } })}>Cart</button>
          </div>
        </div>
      </>
    )
  }

  Header.propTypes = {
    cart: PropTypes.array
  };
  
  export default Header