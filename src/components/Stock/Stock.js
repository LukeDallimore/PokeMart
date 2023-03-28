import { Fragment } from 'react';

import StockSummary from './StockSummary';
import AvailableStock from './AvailableStock';

const Stock = () => {
  return (
    <Fragment>
      <StockSummary />
      <AvailableStock />
    </Fragment>
  );
};

export default Stock;