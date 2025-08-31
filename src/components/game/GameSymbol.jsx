import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { GAME_SYMBOLS } from 'components/game/constants/game-symbols';
import css from './GameSymbol.module.css';
import { CrossIcon } from './icons/CrossIcon';
import { ZeroIcon } from './icons/ZeroIcon';

export function GameSymbol({ symbol, variant = 'medium' }) {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: CrossIcon,
      [GAME_SYMBOLS.ZERO]: ZeroIcon,
    }[symbol] ?? CrossIcon;

  return <Icon className={clsx(css.symbol, css[`symbol--${variant}`])} />;
}

GameSymbol.propTypes = {
  symbol: PropTypes.oneOf([GAME_SYMBOLS.ZERO, GAME_SYMBOLS.CROSS]).isRequired,
  variant: PropTypes.oneOf(['large', 'medium', 'small']),
};
