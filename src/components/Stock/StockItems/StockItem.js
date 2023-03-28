import { useContext } from 'react';

import StockItemForm from './StockItemForm';
import classes from './StockItem.module.css';
import CartContext from '../../../store/cart-context';

const StockItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.cost.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      cost: props.cost,
      amount: amount
    });
  };

  return (
    <li className={classes.stock}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <StockItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default StockItem;