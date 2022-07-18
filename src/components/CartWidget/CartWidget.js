import './CartWidget.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import CartContext from '../Context/CartContext';


function CartWidget() {
    const { cart } = useContext(CartContext);

    let suma = 0;
    cart.map(i => suma = (suma + parseInt(i.qty)))

    return (
        <div>
            <NavLink className='icons' to='/cart'>
                {suma != 0 && <span className='cantItem'>{suma}</span>}
                {cart.length !== 0 &&
                    <img
                        alt=""
                        src={require('../Assets/Img/cartImg.png')}
                        width="30"
                        height="auto"
                        className="d-inline-block align-text-bottom me-2 rounded"
                    />
                }
            </NavLink>
        </div>
    );
}

export default CartWidget;