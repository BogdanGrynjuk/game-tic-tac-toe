import React from 'react';
import PropTypes from 'prop-types';

import css from './UIButton.module.css';
import clsx from 'clsx';

export const UIButton = ({ type = 'button', className, onClick, children }) => {
  return (
    <button
      type={type}
      className={clsx(css.ui_button, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

UIButton.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
