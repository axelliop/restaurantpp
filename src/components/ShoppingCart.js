import MenuCard from './MenuCard';
import { useState } from 'react';

const ShoppingCart = ({addToCart, item}) => {
  



  return (
    <div>
        <MenuCard item={item} addToCart={addToCart}/>
    </div>
  );


}

export default ShoppingCart;