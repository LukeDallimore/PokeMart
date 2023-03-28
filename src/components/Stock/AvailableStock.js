import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import StockItem from './StockItems/StockItem';
import classes from './AvailableStock.module.css';

const AvailableStock = () => {
  const [stock, setStock] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchStock = async () => {
      const response = await fetch(
        'https://pokeapi.co/api/v2/item/1/'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedStock = [];

      for (const key in responseData) {
        loadedStock.push({
          id: key,
          name: responseData[key].name,
          cost: responseData[key].cost,
        });
      }

      setStock(loadedStock);
      setIsLoading(false);
    };

    fetchStock().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.StockLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.StockError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const stockList = stock.map((stock) => (
    <StockItem
      key={stock.id}
      id={stock.id}
      name={stock.name}
      cost={stock.cost}
    />
  ));

  return (
    <section className={classes.stock}>
      <Card>
        <ul>{stockList}</ul>
      </Card>
    </section>
  );
};

export default AvailableStock;