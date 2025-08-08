import React, { useMemo, useRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { GameSymbol } from './GameSymbol';
import { SYMBOL_O, SYMBOL_X } from 'components/game/constants/game-symbols';

import css from './GameCell.module.css';

export const GameCell = ({
  isWinner,
  onClick,
  currentStep,
  symbol,
  disabled,
}) => {
  const cellRef = useRef();

  const { xColor, oColor } = useMemo(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    return {
      xColor: rootStyles.getPropertyValue('--symbol--x-color').trim(),
      oColor: rootStyles.getPropertyValue('--symbol--o-color').trim(),
    };
  }, []);

  const getHighlightColor = (disabled, currentStep) => {
    if (disabled) return 'transparent';
    if (currentStep === SYMBOL_X) return xColor;
    return oColor;
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
      style={{ '--cell-highlight-color': cellHighlightColor }}
      className={clsx(css.cell, isWinner ? css.cell__win : '')}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      disabled={disabled}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : undefined}
    </button>
  );
};

GameCell.propTypes = {
  isWinner: PropTypes.bool,
  symbol: PropTypes.oneOf([SYMBOL_O, SYMBOL_X]),
  currentStep: PropTypes.oneOf([SYMBOL_O, SYMBOL_X]),
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
