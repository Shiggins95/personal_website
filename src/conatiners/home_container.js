import React, { Component, createRef, useEffect, useState } from 'react';
import '../styles/home.css';
import JourneyComponent from '../components/display/journey';
import WelcomeComponent from '../components/display/welcome';
import ExperienceComponent from '../components/display/experience';

const HomeContainer = () => {
  const [loaded, setLoaded] = useState(false);
  const ref = createRef();
  const anchorRef = createRef();
  const handleClick = () => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  useEffect(() => {
    if (loaded === false) {
      anchorRef.current.scrollIntoView({
        behavior: 'auto',
        block: 'start'
      });
      document.title = 'Stephen Higgins | Home';
      setLoaded(true);
    }
  }, [loaded, anchorRef]);
  return (
    <div id="home_container">
      <div id="scroll_anchor" ref={anchorRef} />
      <WelcomeComponent click={handleClick} />
      <JourneyComponent reference={ref} />
      <ExperienceComponent />
    </div>
  );
};

export default HomeContainer;
