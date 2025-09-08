import React from 'react';
import PropTypes from 'prop-types';

import { GameSymbol } from './GameSymbol';

import css from './GameInfo.module.css';
import { GAME_SYMBOLS } from 'components/game/constants/game-symbols';
import { PlayerInfo } from './PlayerInfo';

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
    // <p className={css.game_info}>
    //   Хід: <GameSymbol symbol={currentStep} />
    // </p>
    <div className={css.game_info}>
      <PlayerInfo playerName={'Гравець 1'} symbol={GAME_SYMBOLS.CROSS} />
      <PlayerInfo playerName={'Гравець 2'} symbol={GAME_SYMBOLS.ZERO} />
      {/* <div>
        <p>Player 1</p>
        <GameSymbol symbol={GAME_SYMBOLS.CROSS} />
      </div>
      <div>
        <p>Player 2</p>
        <GameSymbol symbol={GAME_SYMBOLS.ZERO} />
      </div> */}
    </div>
  );
};

GameInfo.propTypes = {
  isDraw: PropTypes.bool.isRequired,
  winnerSymbol: PropTypes.oneOf([GAME_SYMBOLS.ZERO, GAME_SYMBOLS.CROSS]),
  currentStep: PropTypes.oneOf([GAME_SYMBOLS.ZERO, GAME_SYMBOLS.CROSS])
    .isRequired,
};
