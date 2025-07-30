import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { SYMBOL_O, SYMBOL_X } from 'constants/game-symbols';
import css from './GameSymbol.module.css';

export const GameSymbol = ({ symbol }) => {
  const getSymbolClassName = symbol => {
    if (symbol === SYMBOL_O) return 'symbol__o';
    if (symbol === SYMBOL_X) return 'symbol__x';
    return '';
  };

  return (
    <span className={clsx(css.symbol, css[getSymbolClassName(symbol)])}>
      {symbol}
    </span>
  );
};

GameSymbol.propTypes = {
  symbol: PropTypes.oneOf([SYMBOL_O, SYMBOL_X]).isRequired,
};
