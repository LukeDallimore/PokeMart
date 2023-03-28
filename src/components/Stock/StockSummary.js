import classes from './StockSummary.module.css';

const StockSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Welcome to the Pokemart</h2>
      <p>
        We sell all you require to be the best Pokemon master ever!!
      </p>
    </section>
  );
};

export default StockSummary;