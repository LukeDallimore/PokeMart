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
      try {
        const response = await fetch('https://pokeapi.co/api/v2/item');
        
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }

        const data = await response.json();

        const promises = data.results
          .slice(0, 10)
          .map((item) => fetch(item.url).then((response) => response.json()));

        const itemDetails = await Promise.all(promises);

        const loadedStock = itemDetails.map((item, index) => ({
          id: index,
          name: item.name,
          cost: item.cost,
        }));

        setStock(loadedStock);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    };

    fetchStock();
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
