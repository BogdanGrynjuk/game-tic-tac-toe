import { GameLayout } from './GameLayout';
// import { GameInfo } from './GameInfo';
import { GameField } from './GameField';
import { GameCell } from './GameCell';
import { UIButton } from '../uikit/UIButton';

import { useGameLogic } from './hooks/use-game-logic';
import { GAME_SYMBOLS } from './constants/game-symbols';
import { PlayerInfo } from './PlayerInfo';

export const Game = () => {
  const {
    cells,
    currentStep,
    winnerSequence,
    winnerSymbol,
    isDraw,
    handleCellClick,
    handleResetClick,
  } = useGameLogic();

  return (
    <GameLayout>
      {/* <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      /> */}
      <PlayerInfo
        playerName={'Гравець 1'}
        symbol={GAME_SYMBOLS.CROSS}
        currentStep={currentStep}
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
      />
      <GameField>
        {cells.map((symbol, index) => {
          return (
            <GameCell
              key={index}
              isWinner={winnerSequence?.includes(index)}
              currentStep={currentStep}
              symbol={symbol}
              disabled={!!winnerSequence || !!symbol}
              onClick={() => handleCellClick(index)}
            />
          );
        })}
      </GameField>
      <PlayerInfo
        playerName={'Гравець 2'}
        symbol={GAME_SYMBOLS.ZERO}
        currentStep={currentStep}
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
      />
      {(winnerSequence || !cells.includes(undefined)) && (
        <UIButton onClick={handleResetClick}>Очистити</UIButton>
      )}
    </GameLayout>
  );
};
