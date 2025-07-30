import { SYMBOL_O, SYMBOL_X } from 'constants/game-symbols';
import css from './Game.module.css';
import { useState } from 'react';
import { GameSymbol } from './GameSymbol';

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
  const [cells, setCells] = useState(Array.from({ length: 9 }, () => null));
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
    setCells(Array.from({ length: 9 }, () => null));
    setWinnerSequence(undefined);
    setCurrentStep(SYMBOL_X);
  };

  return (
    <div className={css.game}>
      <div className={css.game_info}>
        {isDraw ? 'Нічия' : winnerSequence ? 'Переможець:' : 'Хід: '}{' '}
        {!isDraw && <GameSymbol symbol={winnerSymbol ?? currentStep} />}
      </div>
      <div className={css.game_field}>
        {cells.map((symbol, index) => {
          const isWinner = winnerSequence?.includes(index);
          return (
            <button
              key={index}
              className={`${css.cell} ${isWinner ? css.cell__win : ''}`}
              onClick={() => handleCellClick(index)}
              disabled={!!winnerSequence}
            >
              {symbol ? <GameSymbol symbol={symbol} /> : null}
            </button>
          );
        })}
      </div>
      {(winnerSequence || !cells.includes(null)) && (
        <button className={css.reset} type="button" onClick={handleResetClick}>
          Очистити
        </button>
      )}
    </div>
  );
};
