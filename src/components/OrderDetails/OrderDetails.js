import React from 'react';

const OrderDetails = (props) => {
    console.log(props);
    const {name, price,quantity,key} = props.item
    const {removeItem} = props
    return (
        <div className = 'product'>
           <div>
                <h3 className = 'product-name'>{name}</h3>
                <p>Price :{price}</p>
                <p>Quantity :{quantity}</p> 
                <button className= 'btn-regular' onClick = {() => removeItem(key)}>Remove</button>
           </div>
        </div>
    );
};

export default OrderDetails;