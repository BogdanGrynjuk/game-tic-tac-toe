import React from 'react';
import PropTypes from 'prop-types';

import { GameSymbol } from './GameSymbol';

import css from './GameInfo.module.css';
import { SYMBOL_O, SYMBOL_X } from 'constants/game-symbols';

export const GameInfo = ({ isDraw, winnerSymbol, currentStep }) => {
  if (isDraw) {
    return <p className={css.game_info}>Нічия</p>;
  }

  if (winnerSymbol) {
    return (
      <p className={css.game_info}>
        Переможець: <GameSymbol symbol={winnerSymbol} />
      </p>
    );
  }

  return (
    <p className={css.game_info}>
      Хід: <GameSymbol symbol={currentStep} />
    </p>
  );
};

GameInfo.propTypes = {
  isDraw: PropTypes.bool.isRequired,
  winnerSymbol: PropTypes.oneOf([SYMBOL_O, SYMBOL_X]),
  currentStep: PropTypes.oneOf([SYMBOL_O, SYMBOL_X]).isRequired,
};
