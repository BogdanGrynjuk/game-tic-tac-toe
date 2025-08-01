import { useState } from 'react';
import { SYMBOL_O, SYMBOL_X } from 'components/game/constants/game-symbols';
import { computeWinner } from '../utils/compute-winner';

export const useGameLogic = () => {
  const [cells, setCells] = useState(Array(9).fill(undefined));
  const [currentStep, setCurrentStep] = useState(SYMBOL_X);
  const [winnerSequence, setWinnerSequence] = useState();

  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : undefined;
  const isDraw = !winnerSequence && cells.filter(cell => cell).length === 9;

  const handleCellClick = index => {
    if (cells[index] || winnerSequence) return;

    const cellsCopy = [...cells];
    cellsCopy[index] = currentStep;
    const winner = computeWinner(cellsCopy);

    setCells(cellsCopy);
    setCurrentStep(currentStep === SYMBOL_X ? SYMBOL_O : SYMBOL_X);
    setWinnerSequence(winner);
  };

  const handleResetClick = () => {
    setCells(Array(9).fill(undefined));
    setWinnerSequence(undefined);
    setCurrentStep(SYMBOL_X);
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
