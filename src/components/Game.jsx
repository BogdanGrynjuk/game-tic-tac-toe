import { SYMBOL_O, SYMBOL_X } from 'constants/game-symbols';
import css from './Game.module.css';

export const Game = () => {
  const cells = [
    SYMBOL_O,
    null,
    null,
    SYMBOL_O,
    SYMBOL_X,
    null,
    SYMBOL_X,
    SYMBOL_X,
    null,
  ];
  const currentStep = SYMBOL_X;

  const getSymbolClassName = symbol => {
    if (symbol === SYMBOL_O) return 'symbol__o';
    if (symbol === SYMBOL_X) return 'symbol__x';
    return '';
  };
  const renderSymbol = symbol => (
    <span className={`${css.symbol} ${css[getSymbolClassName(symbol)]}`}>
      {symbol}
    </span>
  );

  return (
    <div className={css.game}>
      <div className={css.game_info}>Хід: {renderSymbol(currentStep)}</div>
      <div className={css.game_field}>
        {cells.map((symbol, index) => {
          return (
            <button
              key={index}
              className={css.cell}
              onClick={() => console.log('click')}
            >
              {symbol ? renderSymbol(symbol) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
};
