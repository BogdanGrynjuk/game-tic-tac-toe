import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { GameSymbol } from './GameSymbol';
import { SYMBOL_O, SYMBOL_X } from 'components/game/constants/game-symbols';

import css from './GameCell.module.css';
export const GameCell = ({ isWinner, onClick, symbol, disabled }) => {
  return (
    <button
      className={clsx(css.cell, isWinner ? css.cell__win : '')}
      onClick={onClick}
      disabled={disabled}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : undefined}
    </button>
  );
};

GameCell.propTypes = {
  isWinner: PropTypes.bool,
  symbol: PropTypes.oneOf([SYMBOL_O, SYMBOL_X]),
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
