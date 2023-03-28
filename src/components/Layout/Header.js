import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton.js';
import pokemartImage from '../../assets/pokemart.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>PokeMart!!!</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={pokemartImage} alt='Pokemart Logo!' />
      </div>
    </Fragment>
  );
};

export default Header;