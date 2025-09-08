import React, { useMemo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import css from './PlayerInfo.module.css';
import { GameSymbol } from './GameSymbol';
import { GAME_SYMBOLS } from './constants/game-symbols';

export const PlayerInfo = ({
  playerName,
  symbol,
  currentStep,
  isDraw,
  winnerSymbol,
}) => {
  const { crossColor, zeroColor } = useMemo(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    return {
      crossColor: rootStyles.getPropertyValue('--symbol--cross-color').trim(),
      zeroColor: rootStyles.getPropertyValue('--symbol--zero-color').trim(),
    };
  }, []);

  const getHighlightColor = currentStep => {
    if (currentStep === GAME_SYMBOLS.CROSS) return crossColor;
    return zeroColor;
  };

  const isActive = currentStep === symbol;

  const highlightStyle =
    !isDraw && !winnerSymbol && isActive
      ? { '--highlight-color': getHighlightColor(currentStep) }
      : {};

  return (
    <div className={css.grid_container} style={highlightStyle}>
      <div className={clsx(css.grid_item, css.grid_item1)}>
        <span>{playerName}</span>
      </div>
      <div className={clsx(css.grid_item, css.grid_item2)}>
        <GameSymbol symbol={symbol} />
      </div>
      <div className={clsx(css.grid_item, css.grid_item3)}>
        <span>0:30</span>
      </div>
    </div>
  );
};

PlayerInfo.propTypes = {
  playerName: PropTypes.string,
  symbol: PropTypes.oneOf([GAME_SYMBOLS.ZERO, GAME_SYMBOLS.CROSS]).isRequired,
  currentStep: PropTypes.oneOf([GAME_SYMBOLS.ZERO, GAME_SYMBOLS.CROSS])
    .isRequired,
  winnerSymbol: PropTypes.oneOf([GAME_SYMBOLS.ZERO, GAME_SYMBOLS.CROSS]),
  isDraw: PropTypes.bool.isRequired,
};
