import React from 'react';
import PropTypes from 'prop-types';
import { ButtonElement } from './styles'

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  return (
    <ButtonElement
      type="button"
      size={size}
      {...props}
    >
      {label}
    </ButtonElement>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  backgroundColor2: PropTypes.oneOf(['primary', 'secondary', 'tertiaty']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
