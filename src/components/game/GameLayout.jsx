import React from 'react';
import PropTypes from 'prop-types';

import css from './GameLayout.module.css';

export const GameLayout = ({ children }) => {
  return <div className={css.game_layout}>{children}</div>;
};

GameLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
