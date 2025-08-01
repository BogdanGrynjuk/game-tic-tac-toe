import React from 'react';
import PropTypes from 'prop-types';

import css from './GameField.module.css';

export const GameField = ({ children }) => {
  return <div className={css.game_field}>{children}</div>;
};

GameField.propTypes = {
  children: PropTypes.node.isRequired,
};
