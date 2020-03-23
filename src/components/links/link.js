import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/links.css';

const LinkComponent = props => {
  const { url, text } = props;
  return (
    <div className="link" id="regular_link">
      <Link to={url}>{text}</Link>
    </div>
  );
};

LinkComponent.propTypes = {};

export default LinkComponent;
