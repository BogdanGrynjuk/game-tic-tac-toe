import React, { useMemo, useRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { GameSymbol } from './GameSymbol';
import { GAME_SYMBOLS } from 'components/game/constants/game-symbols';

import css from './GameCell.module.css';
import { createCursor } from './utils/create-cursor';

export const GameCell = ({
  isWinner,
  onClick,
  currentStep,
  symbol,
  disabled,
}) => {
  const cellRef = useRef();

  const { crossColor, zeroColor } = useMemo(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    return {
      crossColor: rootStyles.getPropertyValue('--symbol--cross-color').trim(),
      zeroColor: rootStyles.getPropertyValue('--symbol--zero-color').trim(),
    };
  }, []);

  const getHighlightColor = (disabled, currentStep) => {
    if (disabled) return 'transparent';
    if (currentStep === GAME_SYMBOLS.CROSS) return crossColor;
    return zeroColor;
  };

  const cellHighlightColor = getHighlightColor(disabled, currentStep);

  const handleMouseMove = e => {
    const mouseX = e.pageX - cellRef.current.offsetLeft;
    const mouseY = e.pageY - cellRef.current.offsetTop;

    cellRef.current.style.setProperty('--mouse-x', mouseX + 'px');
    cellRef.current.style.setProperty('--mouse-y', mouseY + 'px');
  };

  return (
    <button
      ref={cellRef}
      style={{
        '--cell-highlight-color': cellHighlightColor,
        cursor: !disabled ? createCursor(cellHighlightColor) : 'not-allowed',
      }}
      className={clsx(css.cell, isWinner ? css.cell__win : '')}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      disabled={disabled}
    >
      {symbol ? <GameSymbol symbol={symbol} variant="large" /> : undefined}
    </button>
  );
};

GameCell.propTypes = {
  isWinner: PropTypes.bool,
  symbol: PropTypes.oneOf([GAME_SYMBOLS.ZERO, GAME_SYMBOLS.CROSS]),
  currentStep: PropTypes.oneOf([GAME_SYMBOLS.ZERO, GAME_SYMBOLS.CROSS]),
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
