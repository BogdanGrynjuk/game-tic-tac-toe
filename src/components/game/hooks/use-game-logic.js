import { useState } from 'react';
import { GAME_SYMBOLS } from 'components/game/constants/game-symbols';
import { computeWinner } from '../utils/compute-winner';

export const useGameLogic = () => {
  const [cells, setCells] = useState(Array(9).fill(undefined));
  const [currentStep, setCurrentStep] = useState(GAME_SYMBOLS.CROSS);
  const [winnerSequence, setWinnerSequence] = useState();

  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;
  const isDraw = !winnerSequence && cells.filter(cell => cell).length === 9;

  const handleCellClick = index => {
    if (cells[index] || winnerSequence) return;

    const cellsCopy = [...cells];
    cellsCopy[index] = currentStep;
    const winner = computeWinner(cellsCopy);

    setCells(cellsCopy);
    setCurrentStep(
      currentStep === GAME_SYMBOLS.CROSS
        ? GAME_SYMBOLS.ZERO
        : GAME_SYMBOLS.CROSS
    );
    setWinnerSequence(winner);
  };

  const handleResetClick = () => {
    setCells(Array(9).fill(undefined));
    setWinnerSequence(undefined);
    setCurrentStep(GAME_SYMBOLS.CROSS);
  };

  return {
    cells,
    currentStep,
    winnerSequence,
    winnerSymbol,
    isDraw,
    handleCellClick,
    handleResetClick,
  };
};
