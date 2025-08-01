import { GameLayout } from './GameLayout';
import { GameInfo } from './GameInfo';
import { GameField } from './GameField';
import { GameCell } from './GameCell';
import { UIButton } from '../uikit/UIButton';

import { useGameLogic } from './hooks/use-game-logic';

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
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <GameField>
        {cells.map((symbol, index) => {
          return (
            <GameCell
              key={index}
              isWinner={winnerSequence?.includes(index)}
              symbol={symbol}
              disabled={!!winnerSequence || !!symbol}
              onClick={() => handleCellClick(index)}
            />
          );
        })}
      </GameField>
      {(winnerSequence || !cells.includes(undefined)) && (
        <UIButton onClick={handleResetClick}>Очистити</UIButton>
      )}
    </GameLayout>
  );
};
