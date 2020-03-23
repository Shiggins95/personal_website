import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const MobileOptimised = props => {
  const { display } = props;
  return display ? (
    <div className="mobile_optimised">
      <FontAwesomeIcon icon={faMobileAlt} className={`fa_mobile_alt`} />
    </div>
  ) : null;
};

MobileOptimised.propTypes = {};

export default MobileOptimised;
