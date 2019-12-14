import React from 'react';
import PropTypes from 'prop-types';

import { classie } from 'utils';

import styles from './styles.module.css';

const Divider = ({ className }) => (
  <div className={classie(styles.divider, className)} />
);

Divider.propTypes = {
  className: PropTypes.string,
};

Divider.defaultProps = {
  className: undefined,
};

export default Divider;
