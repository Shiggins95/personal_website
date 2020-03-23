import React, { createRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const WelcomeComponent = props => {
  const [currentName, setCurrentName] = useState('Stephen');
  const [currentIndex, setCurrentIndex] = useState(0);
  const names = ['Stephen', 'Shig', 'Shiggy', 'all of the above'];
  const updateState = (callBack, val) => {
    if (window.location.pathname === '/') {
      callBack(val);
    }
  };
  setTimeout(() => {
    if (currentIndex === names.length - 1) {
      updateState(setCurrentIndex, 0);
    } else {
      updateState(setCurrentIndex, currentIndex + 1);
    }
    updateState(setCurrentName, names[currentIndex]);
  }, 1500);
  return (
    <div className="welcome">
      <h1>Hi, I'm {currentName}.</h1>
      <h2>
        A <span id="one">software developer</span>, <span id="two">web designer</span> and{' '}
        <span id="three">code enthusiast</span>!
      </h2>
      <div className="down_arrow">
        <FontAwesomeIcon icon={faChevronDown} className="fa_chevron_down_1" onClick={props.click} />
        <FontAwesomeIcon icon={faChevronDown} className="fa_chevron_down_2" onClick={props.click} />
      </div>
    </div>
  );
};

WelcomeComponent.propTypes = {
  click: PropTypes.func
};

export default WelcomeComponent;
