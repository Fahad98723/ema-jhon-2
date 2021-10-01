import React from 'react';
import { deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useCart from '../Hook/useCart';
import useProduct from '../Hook/useProduct';
import OrderDetails from '../OrderDetails/OrderDetails';

const OrderReview = () => {
    const [product] = useProduct()
    const [cart,setCart] = useCart(product)
    const removeItem = (key) => {
        const newCart =cart.filter(item => item.key !== key)
        setCart(newCart)
        deleteFromDb(key)        
    }
    console.log(cart);
    return (
        <div className = 'shop-container'>
            <div className="product-container">
                {
                    cart.map(item => <OrderDetails
                         removeItem= {removeItem}
                         item={item}></OrderDetails>)
                }
            </div>
            <div>
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;