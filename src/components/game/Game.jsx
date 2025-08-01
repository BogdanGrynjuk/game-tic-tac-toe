import { useState } from 'react';

import { GameLayout } from './GameLayout';
import { GameInfo } from './GameInfo';
import { GameField } from './GameField';
import { GameCell } from './GameCell';
import { UIButton } from '../uikit/UIButton/UIButton';

import { SYMBOL_O, SYMBOL_X } from 'components/game/constants/game-symbols';

const computeWinner = cells => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return [a, b, c];
    }
  }
};

export const Game = () => {
  const [cells, setCells] = useState(
    Array.from({ length: 9 }, () => undefined)
  );
  const [currentStep, setCurrentStep] = useState(SYMBOL_X);
  const [winnerSequence, setWinnerSequence] = useState();

  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;
  const isDraw = !winnerSequence && cells.filter(cell => cell).length === 9;

  const handleCellClick = index => {
    if (cells[index] || winnerSequence) {
      return;
    }

    const cellsCopy = [...cells];
    cellsCopy[index] = currentStep;
    const winner = computeWinner(cellsCopy);

    setCells(cellsCopy);
    setCurrentStep(currentStep === SYMBOL_X ? SYMBOL_O : SYMBOL_X);
    setWinnerSequence(winner);
  };

  const handleResetClick = () => {
    setCells(Array.from({ length: 9 }, () => undefined));
    setWinnerSequence(undefined);
    setCurrentStep(SYMBOL_X);
  };

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
